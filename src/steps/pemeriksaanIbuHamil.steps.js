import { Given, When, Then } from '@wdio/cucumber-framework';
import LoginPage from '../pages/login.page.js';
import PosyanduPage from '../pages/tambahsasaranposyandu.page.js';
import PemeriksaanIbuHamilPage from '../pages/pengukuran.page.js';
import PencatatanPage from '../pages/pencatatan.page.js';
import PelayananKesehatanPage from '../pages/pelayanankesehatan.page.js';
import fs from 'fs';
import * as dataSasaran from '../data/dataSasaran.json';
import { dataKehamilanIbuHamil, successMessagePemeriksaan,dataPelayanan } from '../data/pemeriksaan.data.js';
import { loginValidUser } from '../helper/auth.js';
import { generateUniqueSasaranData } from '../support/utils.js';

let dynamicSasaran = {};

// Step untuk memulai langsung dari pencarian sasaran yang sudah ada
Given('User sudah memilih sasaran Ibu Hamil bernama {string} untuk pengukuran', async (namaSasaran) => {
    dynamicSasaran.namaLengkap = namaSasaran;

    await PosyanduPage.goToPelayananPosyandu();
    await PemeriksaanIbuHamilPage.goToLangkah2();
    
    const nameElement = PemeriksaanIbuHamilPage.elementSasaranByName(namaSasaran);
    await PemeriksaanIbuHamilPage._scrollDownUntilVisible(nameElement, 10);
    await nameElement.click();
});

Then('Sasaran yang baru ditambahkan terlihat di daftar pemeriksaan Ibu Hamil', async () => {
    const nama = dynamicSasaran.namaLengkap;
    console.log(`Memverifikasi sasaran baru: ${nama} di daftar pemeriksaan Ibu Hamil...`);
    const nameElement = PemeriksaanIbuHamilPage.elementSasaranByName(nama);
    
    const found = await PemeriksaanIbuHamilPage._scrollDownUntilVisible(nameElement, 10);
    if (!found) {
        throw new Error(`Sasaran ${dynamicSasaran.namaLengkap} tidak ditemukan setelah scroll.`);
    }
    await expect(nameElement).toBeDisplayed();
});

When('User memilih sasaran yang baru ditambahkan untuk pemeriksaan Ibu Hamil', async () => {
    await PemeriksaanIbuHamilPage.pilihSasaranByNama(dynamicSasaran.namaLengkap);
});

When('User mengisi data pengukuran ibu hamil', async () => {
    await PemeriksaanIbuHamilPage.isiDataKehamilan(dataKehamilanIbuHamil);
    await PemeriksaanIbuHamilPage.isiHasilPemeriksaan(dataKehamilanIbuHamil);
});

When('User simpan pengukuran Ibu Hamil', async () => {
    await PemeriksaanIbuHamilPage.simpanPemeriksaan();
});

// Halaman Pencatatan
When('Data pengukuran muncul di halaman pencatatan', async () => {
        console.log('User masuk ke halaman pencatatan')
        await PencatatanPage.clickLangkah3();
        console.log('User masuk ke Langkah 3');
        const dataPengukuran = await PemeriksaanIbuHamilPage.elementSasaranByName(dynamicSasaran.namaLengkap);
        await PemeriksaanIbuHamilPage._scrollDownUntilVisible(dataPengukuran);
        await dataPengukuran.waitForDisplayed({
            timeout: 10000
        });
        await expect(dataPengukuran).toBeDisplayed();
        console.log(`Data Pengukuran ${dynamicSasaran.namaLengkap} berhasil ditemukan di Halaman Pencatatan`);
        const filePath = './src/temp/sasaran.json';
        if (fs.existsSync(filePath)) {
            const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
            const sasaran = data.sasaran.find(item => item.nama === dynamicSasaran.namaLengkap);
            if (sasaran) {
                sasaran.status = 'Pencatatan';
                fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
                console.log(`${dynamicSasaran.namaLengkap} dipindahkan ke status Pencatatan`);
            }
        }
    })

    When ('User mengisi form pencatatan', async () => {
        console.log('User mengisi form pencatatan');
        const dataPencatatan = await PemeriksaanIbuHamilPage.elementSasaranByName(dynamicSasaran.namaLengkap);
        await PemeriksaanIbuHamilPage._scrollDownUntilVisible(dataPencatatan);
        await dataPencatatan.waitForDisplayed({
            timeout: 10000
        });
        await dataPencatatan.click();
        console.log(`Melanjutkan pencatatan untuk ${dynamicSasaran.namaLengkap}`);
        await PencatatanPage.clickLanjutkan1();
        await browser.pause(2000); // Tambahkan jeda untuk stabilisasi UI setelah klik Lanjutkan 1
        await PencatatanPage.radioBtnTensiSesuaiKia();
         await browser.pause(2000); 
        await PencatatanPage.clickLanjutkan2();
         await browser.pause(2000); 
        await PencatatanPage.radioBtnPerkembanganBBSesuaiKia(); 

    })

    When ('Data muncul di halaman pelayanan kesehatan', async () => {
        console.log('Memeriksa Data muncul di halaman pelayanan kesehatan');
        await PelayananKesehatanPage.clickLangkah4();
        console.log('User masuk ke Langkah 4');
        const dataPelayananKesehatan = await PemeriksaanIbuHamilPage.elementSasaranByName(dynamicSasaran.namaLengkap);
        await PemeriksaanIbuHamilPage._scrollDownUntilVisible(dataPelayananKesehatan);
        await dataPelayananKesehatan.waitForDisplayed({
            timeout: 30000
        });
        await expect(dataPelayananKesehatan).toBeDisplayed();
        console.log(`Data Pencatatan ${dynamicSasaran.namaLengkap} berhasil ditemukan di Halaman Pelayanan Kesehatan`);
        const filePath = './src/temp/sasaran.json';
        if (fs.existsSync(filePath)) {
            const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
            const sasaran = data.sasaran.find(item => item.nama === dynamicSasaran.namaLengkap);
            if (sasaran) {
                sasaran.status = 'Pelayanan Kesehatan';
                fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
                console.log(`${dynamicSasaran.namaLengkap} dipindahkan ke status Pelayanan Kesehatan`);
            }
        }
    })
        
    When('User mengisi form pelayanan kesehatan', async () => {

        console.log('User mengisi form pelayanan kesehatan');

        const dataPelayananKesehatan =
            await PemeriksaanIbuHamilPage.elementSasaranByName(dynamicSasaran.namaLengkap);

        await PemeriksaanIbuHamilPage._scrollDownUntilVisible(dataPelayananKesehatan);

        await dataPelayananKesehatan.waitForDisplayed({
            timeout: 10000
        });

        await dataPelayananKesehatan.click();

        console.log(`Melanjutkan pelayanan kesehatan untuk ${dynamicSasaran.namaLengkap}`);

        await browser.pause(2000);

        await PelayananKesehatanPage.fillFormPelayananKesehatan(dataPelayanan);

        await PelayananKesehatanPage.clickSimpanSelesaikan();

        await PelayananKesehatanPage.munculNotifBerhasilSimpan();
    });

    Then('Data muncul di halaman penyuluhan', async () => {
        console.log('Memeriksa Data muncul di halaman penyuluhan');
        await PelayananKesehatanPage.clickLangkah5();
        console.log('User masuk ke Langkah 5');
        const dataPenyuluhan = await PemeriksaanIbuHamilPage.elementSasaranByName(dynamicSasaran.namaLengkap);
        await PemeriksaanIbuHamilPage._scrollDownUntilVisible(dataPenyuluhan);
        await dataPenyuluhan.waitForDisplayed({
            timeout: 10000
        });
        await expect(dataPenyuluhan).toBeDisplayed();
        console.log(`Data ${dynamicSasaran.namaLengkap} Muncul di Halaman Penyuluhan`);
        const filePath = './src/temp/sasaran.json';
        if (fs.existsSync(filePath)) {
            const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
            const sasaran = data.sasaran.find(item => item.nama === dynamicSasaran.namaLengkap);
            if (sasaran) {
                sasaran.status = 'Penyuluhan';
                fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
                console.log(`${dynamicSasaran.namaLengkap} dipindahkan ke status Penyuluhan`);
            }
        }
    })
