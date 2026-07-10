import { hideKeyboardIfVisible } from '../support/utils.js';

class PengukuranPage {

    // ======================
    // SELECTOR
    // ======================

    get iconBackButton() {
        return $('android=new UiSelector().descriptionContains("Kembali")');
    }

    get langkah2PengukuranButton() {
    return $('android=new UiSelector().descriptionContains("Langkah 2")');
    }

    get firstSasaranItem() {
    return $('(//android.view.View[contains(@content-desc,"Perempuan")])[1]');
    }

    get memilikiBukuKIARadioButton() {
        return $('//android.view.View[@content-desc="Ya"]/android.widget.RadioButton');
    }

    get tanggalHphtField() {
    return $('//android.widget.ScrollView/android.view.View[8]');
    }

    get usiaKehamilanField() {
        return $('//*[@content-desc[contains(., "Usia")]]/following::android.widget.EditText[1]');
    }

    get jarakKehamilanTahunField() {
        return $('android=new UiSelector().className("android.widget.EditText").instance(1)');
    }

    get jarakKehamilanBulanField() {
        return $('android=new UiSelector().className("android.widget.EditText").instance(2)');
    }

    get hamilKeField() {
        return $('//*[@content-desc[contains(., "Hamil ke")]]/following::android.widget.EditText[1]');
    }

    get jenisKehamilanKembarRadioButton() {
        return $('android=new UiSelector().descriptionContains("Kembar")');
    }

    get jenisKehamilanTunggalRadioButton() {
        return $('android=new UiSelector().descriptionContains("Tunggal")');
    }

    get beratBadanSebelumKehamilanField() {
        return $('//*[@content-desc[contains(., "Berat badan sebelum")]]/following::android.widget.EditText[1]');
    }

    get beratBadanSaatKunjunganPertamaField() {
        return $('android=new UiSelector().className("android.widget.EditText").instance(4)');
    }

    get tanggalTrimester1Field() {
        return $('//*[@content-desc="DD/MM/YYYY"] | //android.view.View[@content-desc="DD/MM/YYYY"]');
    }

    get trimesterK1(){
        return $('//android.view.View[@content-desc="K1"]/android.widget.RadioButton');
    }

    get trimesterK2(){
        return $('//android.view.View[@content-desc="K2"]/android.widget.RadioButton');
    }

    get trimesterK3(){
        return $('//android.view.View[@content-desc="K3"]/android.widget.RadioButton');
    }

    get trimesterK4(){
        return $('//android.view.View[@content-desc="K4"]/android.widget.RadioButton');
    }

    get trimesterK5(){
        return $('//android.view.View[@content-desc="K5"]/android.widget.RadioButton');
    }

    get trimesterK6(){
        return $('//android.view.View[@content-desc="K6"]/android.widget.RadioButton');
    }

    get tanggalTrimester(){
        return $('//android.view.View[@content-desc="DD/MM/YYYY"]/android.widget.ImageView')
    }

    get editTanggalTrimester(){
        return $('//android.widget.Button[@content-desc="Switch to input"]');
    }

    get fieldTanggalTrimester(){
        return $('//*[@hint="Enter Date"]');
    }

    get editTglTrimester1() { return $('//android.widget.Button[@tooltip-text="Switch to input"]'); }
    get fieldTglTrimester1() { return $('//*[@hint="Enter Date"]'); }
    get btnOK() { return $('//*[@content-desc="OK"] | //*[@text="OK"]'); }

    get tempatPemeriksaan(){
        return $('//android.view.View[@content-desc="Tanggal*\nTempat*\nPetugas*"]/android.view.View[3]/android.view.View');
    }

    getTempatPemeriksaanOption(tempatPemeriksaan) {
        return $(`//android.widget.Button[@content-desc="${tempatPemeriksaan}"]`);
    }

    getPetugasOption(petugasPemeriksaan) {
        return $(`//android.widget.Button[@content-desc="${petugasPemeriksaan}"]`);
    }

    get petugasPemeriksaan(){
        return $('//android.view.View[@content-desc="Tanggal*\nTempat*\nPetugas*"]/android.view.View[4]/android.view.View');
    }

    get tinggiBadanField() {
        return $('(//*[contains(@content-desc, "Tinggi") and contains(@content-desc, "adan")]/following::android.widget.EditText)[1]');
    }

    get beratBadanField() {
        return $('(//*[contains(@content-desc, "Berat") and contains(@content-desc, "adan")]/following::android.widget.EditText)[1]');
    }

    get lingkarLenganAtasField() {
        return $('(//*[contains(@content-desc, "Lingkar") and contains(@content-desc, "engan")]/following::android.widget.EditText)[1]');
    }

    get sistoleField() {
        return $('//android.widget.ScrollView/android.widget.EditText[1]');
    }

    get diastoleField() {
        return $('//android.widget.ScrollView/android.widget.EditText[2]');
    }

    elementSasaranByName(name) {
        return $(`//*[contains(@content-desc, "${name}")] | //*[contains(@text, "${name}")]`);
    }

    get simpanButton() {
        return $('//android.widget.Button[@content-desc="Simpan"]');
    }

    get btnYakinSimpan(){
        return $('//android.widget.Button[@content-desc="Simpan"]');
    }

    get successMessagePengukuran() {
        return $('//*[contains(@content-desc, "Berhasil")] | //*[contains(@text, "Berhasil")]');
    }
    // ======================
    // ACTION
    // ======================

    async goToLangkah2() {
        await this.langkah2PengukuranButton.waitForDisplayed({ timeout: 10000 });
        await this.langkah2PengukuranButton.click();
    }

    async pilihSasaranByNama(name) {
        const el = this.elementSasaranByName(name);
        await el.waitForDisplayed({ timeout: 15000 });
        await el.click();
    }

    async pilihSasaranPertama() {
        await this.firstSasaranItem.waitForDisplayed({ timeout: 20000 });
        await this.firstSasaranItem.click();
    }

    async isiDataKehamilan(data) {
        console.log('Mengisi data kehamilan...');
        
        const isHamilKeSatu = parseInt(data.hamilKe) === 1;
        
        await this.memilikiBukuKIARadioButton.waitForDisplayed();
        await this.memilikiBukuKIARadioButton.click();

        // Input HPHT
        await this._scrollDownUntilVisible(this.tanggalHphtField);

        await this.tanggalHphtField.waitForDisplayed({
            timeout: 30000
        });

        await this.tanggalHphtField.click();

        await this.btnOK.waitForDisplayed({
            timeout: 10000
        });

        await this.btnOK.click();
        await browser.pause(2000); // Jeda lebih lama agar layout stabil setelah modal tutup
        
        // Tunggu hingga modal tanggal benar-benar tertutup sebelum mencari field berikutnya
        await this.btnOK.waitForDisplayed({ reverse: true, timeout: 5000 });
        await browser.pause(1000); 

        // Input Usia Kehamilan
        await this._scrollDownUntilVisible(this.usiaKehamilanField);
        await this.usiaKehamilanField.waitForExist({ timeout: 10000 });
        await this.usiaKehamilanField.click();
        await this.usiaKehamilanField.setValue(String(data.usiaKehamilan || "1"));
        await hideKeyboardIfVisible();
        await browser.pause(2000); 
        
        
       // Jalankan fungsi scroll bawaan ke field target terlebih dahulu
        await this._scrollDownUntilVisible(this.jarakKehamilanTahunField);
        await browser.pause(1000);

        // Input Jarak Kehamilan (Tahun)
        await this.jarakKehamilanTahunField.waitForExist({ timeout: 10000 });
        await this.jarakKehamilanTahunField.click();
        await this.jarakKehamilanTahunField.setValue(String(data.jarakTahun || "0"));
        await hideKeyboardIfVisible();
        await browser.pause(1000);
            
        // Input Jarak Kehamilan (Bulan)
        await this.jarakKehamilanBulanField.waitForExist({ timeout: 10000 });
        await this.jarakKehamilanBulanField.click();
        await this.jarakKehamilanBulanField.setValue(String(data.jarakBulan || "0"));
        await hideKeyboardIfVisible();
        await browser.pause(1000);
        

        // Input Hamil Ke (Selalu di instance 3)
        await this._scrollDownUntilVisible(this.hamilKeField);
        await this.hamilKeField.waitForExist({ timeout: 10000 });
        await this.hamilKeField.click();
        await this.hamilKeField.setValue(String(data.hamilKe || "1"));
        await hideKeyboardIfVisible(); 

        // Input jenis kehamilan (Biasanya Radio Button terlihat setelah keyboard tutup)
        if (data.isKembar) {
            await this.jenisKehamilanKembarRadioButton.click();
        } else {
            await this.jenisKehamilanTunggalRadioButton.click();
        }
        
        // Input Berat Badan Sebelum Kehamilan (Selalu di instance 4)
        await this._scrollDownUntilVisible(this.beratBadanSebelumKehamilanField);
        await this.beratBadanSebelumKehamilanField.waitForExist({ timeout: 10000 });
        await this.beratBadanSebelumKehamilanField.click();
        await browser.pause(500);
        await this.beratBadanSebelumKehamilanField.setValue(String(data.bbSebelum || "50"));
        await hideKeyboardIfVisible();

        // Input Berat Badan Saat Kunjungan Pertama
        await this.beratBadanSaatKunjunganPertamaField.waitForExist({ timeout: 10000 });
        await this.beratBadanSaatKunjunganPertamaField.click();
        await browser.pause(500);
        await driver.pressKeyCode(12);
        await driver.pressKeyCode(10);
        await hideKeyboardIfVisible();
        
        // Input Tanggal Trimester 1 (Diisi sebelum pindah ke Tempat Pemeriksaan)
        await this._scrollDownUntilVisible(this.tanggalTrimester1Field);
        await this.inputTanggalTrimester(data.tglTrimester1 || "01/06/2026");
    }
     async pilihTempatPemeriksaan(tempatPemeriksaan){
        await this._scrollDownUntilVisible(this.tempatPemeriksaan);
        await this.tempatPemeriksaan.waitForDisplayed({
            timeout: 10000
        });
        await this.tempatPemeriksaan.click();
        const tempat = await this.getTempatPemeriksaanOption(tempatPemeriksaan);
        await tempat.waitForDisplayed({
            timeout: 10000
        });
        await tempat.click();
    }

    async pilihPetugas(petugasPemeriksaan){
        await this._scrollDownUntilVisible(this.petugasPemeriksaan);
        await this.petugasPemeriksaan.waitForDisplayed({
            timeout: 10000
        });
        await this.petugasPemeriksaan.click();
        const petugas = await this.getPetugasOption(petugasPemeriksaan);
        await petugas.waitForDisplayed({
            timeout: 10000
        });
        await petugas.click();
    } 

    async isiHasilPemeriksaan(data) {
        console.log("Mengisi hasil pemeriksaan fisik...");
        await hideKeyboardIfVisible();

        // Dropdowns
        await this.pilihTempatPemeriksaan(data.tempatPemeriksaan);
        await this.pilihPetugas(data.petugasPemeriksaan);
        await browser.pause(2000); // Beri jeda lebih lama agar dropdown tertutup sempurna
        await hideKeyboardIfVisible(); // Memastikan keyboard tertutup setelah memilih petugas

        // Tinggi Badan
        console.log("Mencari field Tinggi Badan...");
        await this._scrollDownUntilVisible(this.tinggiBadanField, 15); // Tingkatkan jumlah scroll
        await this.tinggiBadanField.waitForDisplayed({ timeout: 10000 });
        await this.tinggiBadanField.click();
        await this.tinggiBadanField.setValue(String(data.tinggiBadan || "160"));
        await hideKeyboardIfVisible(); 
        await browser.pause(500);

        // Berat Badan
        await this._scrollDownUntilVisible(this.beratBadanField, 15);
        await this.beratBadanField.waitForDisplayed({ timeout: 10000 });
        await this.beratBadanField.click();
        await this.beratBadanField.setValue(String(data.beratBadan || "55"));
        await hideKeyboardIfVisible();
        await browser.pause(1000);

        // Lingkar Lengan Atas
        await this._scrollDownUntilVisible(this.lingkarLenganAtasField, 15);
        await this.lingkarLenganAtasField.waitForDisplayed({ timeout: 10000 });
        await this.lingkarLenganAtasField.click();
        await this.lingkarLenganAtasField.setValue(String(data.liLa || "20"));
        await hideKeyboardIfVisible();
        await browser.pause(1000);

        // Tensi (Sistole)
        await this._scrollDownUntilVisible(this.sistoleField, 15);
        await this.sistoleField.waitForDisplayed({ timeout: 10000 });
        await this.sistoleField.click();
        await this.sistoleField.setValue(String(data.sistole || "120"));
        
        // Diastole (Biasanya terlihat bersamaan dengan Sistole)
        await this.diastoleField.waitForDisplayed({ timeout: 5000 });
        await this.diastoleField.click();
        await this.diastoleField.setValue(String(data.diastole || "80"));
        await hideKeyboardIfVisible();
        await browser.pause(1000);
    }

    async simpanPemeriksaan() {
        await hideKeyboardIfVisible();
        await this._scrollDownUntilVisible(this.simpanButton, 15);
        await this.simpanButton.click();
        console.log('Tombol simpan diklik');

        try {
            // Menangani popup konfirmasi "Simpan" (jika muncul)
            await this.btnYakinSimpan.waitForDisplayed({ timeout: 5000 });
            await this.btnYakinSimpan.click();
            console.log('Konfirmasi simpan diklik');
        } catch (e) {
            console.log('Tidak ada popup konfirmasi tambahan, lanjut...');
        }
        await browser.pause(2000);
    }

    async clickYakinSimpan(){
        await this.btnYakinSimpan.waitForDisplayed({
            timeout: 10000
        });
        await this.btnYakinSimpan.click();
    }

    /**
     * Helper untuk input tanggal via modal edit (reuse logic dari posyandu page)
     */
    async inputTanggalTrimester(tanggal) {
        await this.tanggalTrimester1Field.waitForDisplayed({ timeout: 15000 });
        await this.tanggalTrimester1Field.click();
        try {
            await this.editTglTrimester1.waitForDisplayed({ timeout: 5000 });
            await this.editTglTrimester1.click();
            await this.fieldTglTrimester1.waitForDisplayed({ timeout: 5000 });
            await this.fieldTglTrimester1.setValue(tanggal);
        } catch (e) {
            console.log('Menggunakan pilihan tanggal default');
        }
        await this.btnOK.click();
    }

    /**
     * Helper untuk scroll gesture
     */
    async _scrollDownUntilVisible(element, maxRetries = 5) {
        await browser.pause(1000); // Tunggu UI stabil sebelum mulai scroll
        const { width, height } = await driver.getWindowSize();
        for (let i = 0; i < maxRetries; i++) {
            if (await element.isExisting() && await element.isDisplayed()) return true;

            await driver.execute('mobile: scrollGesture', {
                left: width / 4, top: height / 4, width: width / 2, height: height / 2,
                direction: 'down', percent: 1.0 // Swipe layar ke atas untuk melihat bagian bawah
            });
            await browser.pause(500);
        }
        return await element.isDisplayed();
    }
}

export default new PengukuranPage();