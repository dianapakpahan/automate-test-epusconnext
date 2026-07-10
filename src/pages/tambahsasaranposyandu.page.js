import { hideKeyboardIfVisible, tapBackButton } from '../support/utils.js';

class PosyanduPage {

    // ======================
    // SELECTOR
    // ======================

    get pelayananPosyanduButton() {
        return $('~Posyandu');
    }

    get iconBackButton() {
        /** 
         * Jika tombol ini memiliki Content Description "Kembali", gunakan: return $('~Kembali');
         * Jika tidak ada ID, XPath di bawah ini biasanya lebih stabil daripada XPath absolut:
         */
        return $('//android.view.View[1]/android.view.View[1]/android.view.View[1]/android.widget.ImageView');
    }

    get langkah2PemeriksaanButton() {
        return $('android=new UiSelector().descriptionContains("Langkah 2")');
    }

    get langkah1Button() {
        return $('android=new UiSelector().descriptionContains("Langkah 1")');
    }

    get tambahSasaranBaruButton() {
        return $('~Sasaran Baru');
    }

    sasaranTypeSelection(sasaran) {
        return $(`~${sasaran}`);
    }

    get nikInputField() {
        return $('//android.widget.EditText[@hint="NIK"]');
    }

    get periksaNikButton() {
        return $('~Periksa NIK');
    }

    get namaLengkapInputField() {
        return $('//android.widget.EditText[@hint="Masukkan Nama Lengkap"]');
    }

    get noKartuKeluargaInputField() {
        return $('//android.widget.EditText[@hint="Nomor Kartu Keluarga"]');
    }

    get tempatLahirInputField() {
        return $('//android.widget.EditText[@hint="Masukkan Tempat Lahir"]');
    }

    get tanggalLahirField() {
        return $('//*[@content-desc="DD/MM/YYYY"] | //android.view.View[@content-desc="DD/MM/YYYY"]');
    }

    get editTglLahir() { return $('//android.widget.Button[@tooltip-text="Switch to input"]'); }
    get fieldTglLahir() { return $('//*[@hint="Enter Date"]'); }
    get btnOK() { return $('//*[@content-desc="OK"] | //*[@text="OK"]'); }

    get noHandphoneInputField() {
    return $('//android.widget.EditText[@hint="Nomor Handphone"]');
    }

    get cariPosyanduField() {
        // Menggunakan selector yang lebih luas agar area klik lebih pasti
        return $('//*[@content-desc="Cari Posyandu"]');
    }
    itemPosyandu(posyanduName) { return $(`~${posyanduName}`); }

    get dropdownProvinsi() {
        return $('~Pilih Provinsi');
    }

    get dropdownKabupaten() {
        return $('~Pilih Kota/Kabupaten');
    }

    get dropdownKecamatan() {
        return $('~Pilih Kecamatan');
    }

    get dropdownDesa() {
        return $('~Pilih Desa/Kelurahan');
    }

    get itemAceh() {
        return $('~ACEH');
    }

    get itemKabAcehBarat() {
        return $('~KABUPATEN ACEH BARAT');
    }

    get itemBubon() {
        return $('~BUBON');
    }

    get itemBeurawang() {
        return $('~BEURAWANG');
    }

    get dusunField() {
        return $('//android.widget.EditText[@hint="Dusun"]');
    }

    get inputAlamatLengkap() {
        return $('//android.widget.EditText[@hint="Alamat Lengkap"]');
    }

    get rtField() {
        return $('//android.widget.EditText[@hint="RT"]');
    }

    get rwField() {
        return $('//android.widget.EditText[@hint="RW"]');
    }

    get radioYa() {
        return $('//android.view.View[@content-desc="Ya"]/android.widget.RadioButton');
    }

    get radioTidak() {
        return $('~Tidak');
    }

    get simpanSasaranButton() {
        return $('//*[@content-desc="Simpan Sasaran"] | //*[@text="Simpan Sasaran"]');
    }

    get successMessage() {
        // Menggunakan partial match agar lebih robust terhadap karakter khusus seperti '&'
        return $('//*[contains(@content-desc, "Pemeriksaan Berhasil")] | //*[contains(@text, "Pemeriksaan Berhasil")]');
    }

    get pendaftaranLainButton() {
        // Menggunakan XPath Union agar lebih kuat menargetkan class Button
        return $('//android.widget.Button[@content-desc="Pendaftaran Pemeriksaan Lain"] | //*[@content-desc="Pendaftaran Pemeriksaan Lain"]');
    }

    elementSasaranByName(name) {
        return $(`//*[contains(@content-desc, "${name}")] | //*[contains(@text, "${name}")]`);
    }

    // ======================
    // ACTION
    // ======================

    async goToPelayananPosyandu() {
        await this.pelayananPosyanduButton.waitForDisplayed({ timeout: 10000 });
        await this.pelayananPosyanduButton.click();
    }

    async selectLangkah1() {
        await hideKeyboardIfVisible();

        await this.langkah1Button.waitForDisplayed({
            timeout: 30000
        });

        await this.langkah1Button.click();
    }

    async clickTambahSasaranBaru() {
        await this.tambahSasaranBaruButton.waitForDisplayed({
            timeout: 10000
        });

        await this.tambahSasaranBaruButton.click();
    }

    async selectSasaranType(sasaran) {

        const el = this.sasaranTypeSelection(sasaran);

        await el.waitForDisplayed({
            timeout: 10000
        });

        await el.click();
    }

    async inputNIK(nik) {

        await this.nikInputField.waitForDisplayed({
            timeout: 30000
        });

        await this.nikInputField.click();

        await this.nikInputField.clearValue();

        // Memastikan input adalah string untuk mencegah error WebdriverIO
        await this.nikInputField.setValue(String(nik || ''));

        console.log('NIK berhasil diinput');

        await hideKeyboardIfVisible();
    }

    async clickPeriksaNIK() {

        await this.periksaNikButton.waitForDisplayed({
            timeout: 10000
        });

        await this.periksaNikButton.click();

        await browser.pause(5000);
    }
    
    async pilihTanggalLahir(tanggal) {

    await this.tanggalLahirField.waitForDisplayed({
        timeout: 10000
    });

    await this.tanggalLahirField.click();
    console.log('Popup tanggal lahir muncul');

    // Mencoba input tanggal secara manual menggunakan icon edit (jika tersedia)
    try {
        await this.editTglLahir.waitForDisplayed({ timeout: 5000 });
        await this.editTglLahir.click();
        await this.fieldTglLahir.waitForDisplayed({ timeout: 5000 });
        await this.fieldTglLahir.setValue(tanggal);
    } catch (e) {
        console.log('Gagal input teks manual, menggunakan pilihan tanggal default');
    }

    await this.btnOK.waitForDisplayed({
        timeout: 10000
    });
    await this.btnOK.click();

    await browser.pause(1000);

    await driver.execute('mobile: scrollGesture', {
        left: 200,
        top: 400,
        width: 600,
        height: 600,
        direction: 'up', // Swipe up (layar bergerak ke bawah) untuk mencari elemen di bawah
        percent: 1.0
    });

    console.log('Tanggal lahir dipilih');
}
    
    async inputFields(data) {

    console.log('Isi data sasaran');

    // Nama Lengkap
    await this.namaLengkapInputField.waitForDisplayed({ timeout: 30000 });
    await this.namaLengkapInputField.click();
    await browser.pause(500);
    await this.namaLengkapInputField.clearValue();
    await this.namaLengkapInputField.setValue(String(data.namaLengkap));
    console.log('Nama lengkap terisi');
    await browser.pause(1000); 

    // No KK
    await this.noKartuKeluargaInputField.click();
    await browser.pause(500);
    await this.noKartuKeluargaInputField.clearValue();
    await this.noKartuKeluargaInputField.setValue(String(data.noKartuKeluarga));
    console.log('No KK terisi');
    await browser.pause(1000); 

    // Isi Tempat Lahir
    await this.tempatLahirInputField.click();
    await browser.pause(500);
    await this.tempatLahirInputField.clearValue();
    await this.tempatLahirInputField.setValue(String(data.tempatLahir || 'BANDA ACEH'));
    console.log('Tempat lahir terisi');
    await browser.pause(1000); 

    // Sembunyikan keyboard sebelum buka popup tanggal agar tidak menghalangi view
    await hideKeyboardIfVisible();

    // Pilih tanggal lahir
    await this.pilihTanggalLahir(data.tanggalLahir);
    await browser.pause(1000); 

    // Isi No HP
    await this.noHandphoneInputField.waitForDisplayed({ timeout: 15000 }); // Tingkatkan timeout
    await this.noHandphoneInputField.click(); // Pastikan field mendapat fokus
    await browser.pause(500);
    await this.noHandphoneInputField.clearValue(); // Bersihkan nilai sebelumnya
    await this.noHandphoneInputField.setValue(String(data.noHandphone || ''));
    console.log('No HP terisi');
    await browser.pause(1000); // Tambahkan jeda yang lebih konsisten

    await hideKeyboardIfVisible();

    // Menggunakan timestamp agar file screenshot unik dan tidak tertimpa saat pengetesan ulang
    await browser.saveScreenshot(`./screenshots/form-terisi-${Date.now()}.png`);

    }

    async pilihPosyanduPertama() {
        await hideKeyboardIfVisible();
        
        await this.cariPosyanduField.waitForDisplayed({ timeout: 10000 });
        
        // Memastikan field terlihat sebelum diklik menggunakan native scroll
        await this._scrollDownUntilVisible(this.cariPosyanduField);
        await this.cariPosyanduField.click();
        await browser.pause(2000);
        
        // Menunggu hingga daftar muncul. Kita mencari Button yang mengandung kata "Posyandu" 
        // agar tidak salah klik tombol navigasi atau tombol sistem lainnya.
        const firstItem = $('//android.widget.Button[contains(@content-desc, "Posyandu")]');
        
        await firstItem.waitForDisplayed({ timeout: 15000 });
        await firstItem.click();
        await browser.pause(1000); // Jeda agar UI terupdate setelah memilih
    }

    async pilihWilayah() {

        await this.dropdownProvinsi.click();
        await this.itemAceh.click();

        await this.dropdownKabupaten.click();
        await this.itemKabAcehBarat.click();

        await this.dropdownKecamatan.click();
        await this.itemBubon.click();

        await this.dropdownDesa.click();
        await this.itemBeurawang.click();
    }

    /**
     * Helper untuk scroll ke bawah secara manual menggunakan gesture 
     * jika scrollIntoView standar gagal mendeteksi container
     */
    async _scrollDownUntilVisible(element, maxRetries = 5) {
        for (let i = 0; i < maxRetries; i++) {
            // Cek apakah elemen sudah ada di DOM dan terlihat di layar
            if (await element.isExisting() && await element.isDisplayed()) return true;
            
            await driver.execute('mobile: scrollGesture', {
                left: 200, top: 400, width: 600, height: 600,
                direction: 'down', percent: 1.0 // Diubah menjadi down agar layar bergerak ke bawah
            });
            await browser.pause(500);
        }
        return await element.isDisplayed();
    }

    async isiAlamat(data) {
        await hideKeyboardIfVisible();
        await browser.pause(1000);

        console.log('Mencari dan mengisi field Dusun...');
        await this._scrollDownUntilVisible(this.dusunField);
        await this.dusunField.waitForExist({ timeout: 15000 });
        await this.dusunField.click();
        await browser.pause(300);
        await this.dusunField.clearValue();
        await this.dusunField.setValue(data.dusun || 'Dusun Test');
        console.log('Dusun terisi');
        
        // Sembunyikan keyboard setelah mengisi Dusun agar tidak menghalangi scroll selanjutnya
        await hideKeyboardIfVisible();
        await browser.pause(500);

        // Isi Alamat Lengkap
        await this._scrollDownUntilVisible(this.inputAlamatLengkap);
        await this.inputAlamatLengkap.waitForExist({ timeout: 15000 });
        await this.inputAlamatLengkap.click();
        await browser.pause(500);
        await this.inputAlamatLengkap.clearValue();
        await this.inputAlamatLengkap.setValue(data.alamatLengkap);
        console.log('Alamat lengkap terisi');

        // Sembunyikan keyboard agar elemen radio button dan tombol simpan terlihat
        await hideKeyboardIfVisible();
        await browser.pause(500);
    }

    async pilihAlamatSamaKTP() {
        console.log('Pilih alamat sama dengan KTP: Ya');
        await hideKeyboardIfVisible();
        await browser.pause(1000);

        // Melakukan scroll sampai radio button terlihat
        const found = await this._scrollDownUntilVisible(this.radioYa);
        if (!found) console.log('Peringatan: Radio button Ya mungkin tidak terlihat, mencoba klik...');

        await this.radioYa.waitForDisplayed({ timeout: 10000 });
        await browser.pause(1000); // Jeda tambahan agar UI stabil setelah scroll
        await this.radioYa.click();
    }

    async saveSasaran() {
        console.log('Klik Simpan Sasaran');
        await hideKeyboardIfVisible();
        await browser.pause(1000); // Jeda agar layout stabil setelah keyboard tertutup
        
        await this._scrollDownUntilVisible(this.simpanSasaranButton);
        await this.simpanSasaranButton.waitForDisplayed({ timeout: 15000 });
        await this.simpanSasaranButton.waitForEnabled({ timeout: 10000 });
        
        await this.simpanSasaranButton.click();
        
        console.log('Tombol Simpan diklik, menunggu respon server...');
        await browser.pause(3000); // Memberikan waktu lebih bagi aplikasi untuk memproses data
    }

    async clickPendaftaranLain() {
        console.log('Mencari tombol Pendaftaran Pemeriksaan Lain...');
        
        const el = await this.pendaftaranLainButton;
        // Gunakan waitForDisplayed agar lebih akurat dibanding waitForExist
        await el.waitForDisplayed({ timeout: 20000 });
        await browser.pause(3000); // Tambah jeda sedikit lebih lama untuk stabilitas pop-up
        
        await el.click();
        console.log('Perintah klik tombol Pendaftaran Pemeriksaan Lain telah dikirim');

        // Berikan waktu sejenak untuk transisi UI
        await browser.pause(2000);

        // Jika Langkah 2 belum terlihat, berarti kita masih di sub-halaman (Langkah 1), perlu klik Back.
        // Jika sudah terlihat, kita bisa langsung klik Langkah 2.
        const isLangkah2Visible = await this.langkah2PemeriksaanButton.isDisplayed();
        if (!isLangkah2Visible) {
            console.log('Kembali ke menu utama Posyandu...');
            await this.iconBackButton.waitForDisplayed({ timeout: 15000 });
            await this.iconBackButton.click();
            await browser.pause(1000);
        }

        console.log('Membuka Langkah 2 untuk verifikasi nama sasaran...');
        await this.langkah2PemeriksaanButton.waitForDisplayed({ timeout: 15000 });
        await this.langkah2PemeriksaanButton.click();
    }
}

export default new PosyanduPage();