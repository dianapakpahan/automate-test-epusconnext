import { Given, When, Then } from '@wdio/cucumber-framework';
import LoginPage from '../pages/login.page.js';
import PosyanduPage from '../pages/tambahsasaranposyandu.page.js';
import * as dataSasaran from '../data/dataSasaran.json';
import { loginValidUser } from '../helper/auth.js';
import { generateUniqueSasaranData } from '../support/utils.js';

let dynamicSasaran = {};

// NEW STEP: User memastikan sudah login dan berada di halaman Posyandu
Given('User sudah siap untuk menambahkan sasaran', async () => {
    let isLoggedIn = false;
    try {
        // Cek apakah sudah di home, jika tidak maka login
        isLoggedIn = await LoginPage.homeEpusConnext.isDisplayed();
    } catch {
        isLoggedIn = false;
    }

    if (!isLoggedIn) {
        await loginValidUser();
    }
    await expect(LoginPage.homeEpusConnext).toBeDisplayed();
    // Setelah login/memastikan di home, navigasi ke Pelayanan Posyandu
    await PosyanduPage.goToPelayananPosyandu();
});

When('User pilih langkah 1', async () => {

    await PosyanduPage.selectLangkah1();
});

When('User menambahkan sasaran baru', async () => {

    // Otomatis generate data jika objek dynamicSasaran masih kosong
    if (!dynamicSasaran.validNIK) {
        dynamicSasaran = generateUniqueSasaranData(dataSasaran.ibuHamil);
    }

    await PosyanduPage.clickTambahSasaranBaru();
});

When('User memilih {string}', async (sasaran) => {

    await PosyanduPage.selectSasaranType(
        sasaran
    );
});

When('User mengisi NIK valid', async () => {

    await PosyanduPage.inputNIK(
        dynamicSasaran.validNIK
    );

    await PosyanduPage.clickPeriksaNIK();
});

When(
    'User mengisi Field yang tersedia dengan data yang valid',
    async () => {

        await PosyanduPage.inputFields({

            namaLengkap:
                dynamicSasaran.namaLengkap,

            noKartuKeluarga:
                dynamicSasaran.noKartuKeluarga,

            tempatLahir:
                dynamicSasaran.tempatLahir,

            tanggalLahir:
            dynamicSasaran.tanggalLahir,

            noHandphone:
                dynamicSasaran.noHandphone
        });

        await PosyanduPage.pilihPosyanduPertama();
    }
);

When('User memilih wilayah domisili', async () => {

    await PosyanduPage.pilihWilayah();

    await PosyanduPage.isiAlamat({

        dusun: 'Dusun Test',
        alamatLengkap: dynamicSasaran.alamatLengkap

    });
    await PosyanduPage.pilihAlamatSamaKTP();
});

When('User simpan Sasaran', async () => {

    await PosyanduPage.saveSasaran();
});

Then('Sasaran berhasil tersimpan', async () => {
    try {
        await PosyanduPage.successMessage.waitForDisplayed({ 
            timeout: 30000,
            timeoutMsg: 'Pesan sukses tidak muncul setelah 30 detik'
        });
        
        await expect(PosyanduPage.successMessage).toBeDisplayed();
    } catch (error) {
        console.error('Terjadi kesalahan saat menunggu pesan sukses:', error.message);
        throw error;
    }

    await PosyanduPage.clickPendaftaranLain();

    // Verifikasi Nama Sasaran di Langkah 2
    console.log(`Memverifikasi sasaran baru: ${dynamicSasaran.namaLengkap} di Langkah 2`);
    const targetName = PosyanduPage.elementSasaranByName(dynamicSasaran.namaLengkap);
    
    await targetName.waitForDisplayed({ 
        timeout: 20000,
        timeoutMsg: `Sasaran ${dynamicSasaran.namaLengkap} tidak ditemukan di daftar Langkah 2`
    });
    await expect(targetName).toBeDisplayed();
});

