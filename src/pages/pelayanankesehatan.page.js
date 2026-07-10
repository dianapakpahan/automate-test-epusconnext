import { hideKeyboardIfVisible } from '../support/utils.js';
import { scrollDown, scrollUntilVisible } from "../helper/scrolldown";

class PelayananKesehatanPage{
    get btnLangkah4(){
        return $('//android.view.View[@content-desc="Langkah 4\nPelayanan Kesehatan (Nakes)"]')
    }

    get btnLangkah5(){
        return $('//android.view.View[@content-desc="Langkah 5\nPenyuluhan/PMT"]')
    }
    
    get radioYaPemeriksaanHemoglobin(){
        return $('//android.widget.ScrollView/android.view.View[11]/android.view.View[@content-desc="Ya"]/android.widget.RadioButton');
    }

    get radioTidakPemeriksaanHemoglobin(){
        return $('//android.widget.ScrollView/android.view.View[10]/android.view.View[@content-desc="Tidak"]/android.widget.RadioButton')
    }
    
    get radioYaKelasIbuHamil(){
        return $('//android.widget.ScrollView/android.view.View[10]/android.view.View[@content-desc="Ya"]/android.widget.RadioButton');
    }

    get radioTidakKelasIbuHamil(){
        return $('//android.widget.ScrollView/android.view.View[10]/android.view.View[@content-desc="Tidak"]/android.widget.RadioButton');
    }

    get radioYaRujukPuskesRS(){
        return $('//android.widget.ScrollView/android.view.View[12]/android.view.View[@content-desc="Ya"]/android.widget.RadioButton');
    }

    get radioTidakRujukPuskesRS(){
        return $('//android.widget.ScrollView/android.view.View[12]/android.view.View[@content-desc="Tidak"]/android.widget.RadioButton');
    }

    get skriningTBC(){
        return $('//android.widget.ScrollView/android.widget.Switch[1]');
    }

    get yaBatukTerus(){
        return $('//android.view.View[@content-desc="Batuk terus menerus*"]/following::android.view.View[@content-desc="Ya"][1]/android.widget.RadioButton');
    }

    get tidakBatukTerus(){
        return $('//android.widget.ScrollView/android.view.View[5]/android.view.View[@content-desc="Tidak"]/android.widget.RadioButton');
    }

    get yaDemam(){
        return $('//android.view.View[contains(@content-desc,"Demam")]/following::android.view.View[@content-desc="Ya"][1]/android.widget.RadioButton');
    }

    get tidakDemam(){
        return $('//android.widget.ScrollView/android.view.View[7]/android.view.View[@content-desc="Tidak"]/android.widget.RadioButton');
    }

    get yaBBGaNaikGaTurun(){
        return $('//android.view.View[contains(@content-desc,"BB tidak naik")]/following::android.view.View[@content-desc="Ya"][1]/android.widget.RadioButton');
    }
    
    get tidakBBGaNaikGaTurun(){
        return $('//android.widget.ScrollView/android.view.View[9]/android.view.View[@content-desc="Tidak"]/android.widget.RadioButton');
    }

    get yaKontakTBC(){
        return $('//android.widget.ScrollView/android.view.View[10]/android.view.View[@content-desc="Ya"]/android.widget.RadioButton');
    }

    get tidakKontakTBC(){
        return $('//android.widget.ScrollView/android.view.View[11]/android.view.View[@content-desc="Tidak"]/android.widget.RadioButton');
    }

    get pemberianMMS(){
        return $('//android.widget.ScrollView/android.widget.Switch[1]');
    }

    get jumlahTablet(){
        return $('android=new UiSelector().className("android.widget.EditText")');
    }

    get konsumsiSetiapHari(){
        return $('//android.view.View[@content-desc="Setiap Hari"]/android.widget.RadioButton');
    }

    get konsumsiTidakSetiapHari(){
        return $('//android.view.View[@content-desc="Tidak Setiap Hari"]/android.widget.RadioButton');
    }

    get pemberianMTBumilKEK(){
        return $('//android.widget.ScrollView/android.widget.Switch[2]');
    }

    get fieldKomposisi(){
        return $('//android.widget.ScrollView/android.view.View[10]/android.widget.EditText');
    }

    get jumlahPorsi(){
        return $('//android.widget.ScrollView/android.view.View[8]/android.widget.EditText');
    }

    get btnSimpanSelesaikan(){
        return $('//android.widget.Button[@content-desc="Simpan & Selesaikan"]');
    }

    get notifSimpan(){
        return $('//android.widget.Button[@content-desc="Simpan"]');
    }

    get notifBerhasilSimpan(){
        return $('//android.view.View[@content-desc="Simpan Skrining & Imunisasi Berhasil"]');
    }

    //====================
    //ACTION
    //====================
    async clickLangkah4(){
        await this.btnLangkah4.waitForDisplayed();
        await this.btnLangkah4.click();
    }

    async clickLangkah5(){
        await this.btnLangkah5.waitForDisplayed();
        await this.btnLangkah5.click();
    }

    async clickSkriningTBC(){
        await this.skriningTBC.waitForDisplayed({
            timeout: 10000
        });
        console.log("Klik Skrining TBC");
        await this.skriningTBC.click();
    }

    async clickYaBatukTerus(){
        await this.yaBatukTerus.waitForDisplayed({
            timeout: 10000
        });
        console.log("Klik Ya Batuk Terus");
        await this.yaBatukTerus.click();
    }

    async clickTidakBatukTerus(){
        await this.tidakBatukTerus.waitForDisplayed({
            timeout: 10000
        });
        console.log("Klik Tidak Batuk Terus");
        await this.tidakBatukTerus.click();
    }

    async clickYaDemam(){
        await this.yaDemam.waitForDisplayed({
            timeout: 10000
        });
        console.log("Klik Ya Demam");
        await this.yaDemam.click();
    }

    async clickTidakDemam(){
        await this.tidakDemam.waitForDisplayed({
            timeout: 10000
        });
        console.log("Klik Tidak Demam");
        await this.tidakDemam.click();
    }

    async clickYaBBGaNaikGaTurun(){
        await this.yaBBGaNaikGaTurun.waitForDisplayed({
            timeout: 10000
        });
        console.log("Klik Ya Berat Badan Tidak Naik Tidak Turun");
        await this.yaBBGaNaikGaTurun.click();
    }

    async clickTidakBBGaNaikGaTurun(){
        await this.tidakBBGaNaikGaTurun.waitForDisplayed({
            timeout: 10000
        });
        console.log("Klik Tidak Berat Badan Tidak Naik Tidak Turun");
        await this.tidakBBGaNaikGaTurun.click();
    }

    async clickYaKontakTBC(){
        await this.yaKontakTBC.waitForDisplayed({
            timeout: 10000
        });
        console.log("Klik Ya Kontak TBC");
        await this.yaKontakTBC.click();
    }

    async clickTidakKontakTBC(){
        await this.tidakKontakTBC.waitForDisplayed({
            timeout: 10000
        });
        console.log("Klik Tidak Kontak TBC");
        await this.tidakKontakTBC.click();
    }
    
    async clickPemberianMMS(){
        await this.pemberianMMS.waitForDisplayed({
            timeout: 10000
        });
        console.log("Klik Pemberian MMS");
        await this.pemberianMMS.click();
    }

    async inputJumlahTablet(jumlahTablet){
        console.log("Isi Jumlah Tablet");
        await this.jumlahTablet.waitForDisplayed({
            timeout: 10000
        });
        await this.jumlahTablet.click();
        await this.jumlahTablet.setValue(jumlahTablet);
        await hideKeyboardIfVisible();
    }

    async clickKonsumsiSetiapHari(){
        await this.konsumsiSetiapHari.waitForDisplayed({
            timeout: 10000
        });
        console.log("Klik Konsumsi Setiap Hari");
        await this.konsumsiSetiapHari.click();
    }

    async clickKonsumsiTidakSetiapHari(){
        await this.konsumsiTidakSetiapHari.waitForDisplayed({
            timeout: 10000
        });
        console.log("Klik Konsumsi Tidak Setiap Hari");
        await this.konsumsiTidakSetiapHari.click();
    }

    async clickYaPemeriksaanHemoglobin(){
        await scrollUntilVisible(this.radioYaPemeriksaanHemoglobin, 15); // Tingkatkan jumlah scroll
        await this.radioYaPemeriksaanHemoglobin.waitForDisplayed({
            timeout: 10000
        });
        console.log("Klik Ya Pemeriksaan Hemoglobin");
        await this.radioYaPemeriksaanHemoglobin.click();
    }

    async clickTidakPemeriksaanHemoglobin(){
        await this.radioTidakPemeriksaanHemoglobin.waitForDisplayed({
            timeout: 10000
        });
        console.log("Klik Tidak Pemeriksaan Hemoglobin");
        await this.radioTidakPemeriksaanHemoglobin.click();
    }

    async clickPemberianMTBumilKEK(){
        await this.pemberianMTBumilKEK.waitForDisplayed({
            timeout: 10000
        });
        console.log("Klik Pemberian MT Bumil KEK");
        await this.pemberianMTBumilKEK.click();
    }

    async inputKomposisi(komposisi){
        console.log("Isi Komposisi");
        await this.fieldKomposisi.waitForDisplayed({
            timeout: 10000
        });
        await this.fieldKomposisi.click();
        // await this.fieldKomposisi.setValue(komposisi);
        await browser.pause(500);
        await driver.pressKeyCode(12);
        await driver.pressKeyCode(10);
        await driver.pressKeyCode(29);
        await hideKeyboardIfVisible();
    }

    async inputJumlahPorsi(jumlahPorsi){
        console.log("Isi Jumlah Porsi");
        await this.jumlahPorsi.waitForDisplayed({
            timeout: 10000
        });
        await this.jumlahPorsi.click();
        // await this.jumlahPorsi.setValue(jumlahPorsi);
        await browser.pause(500);
        await driver.pressKeyCode(12);
        await hideKeyboardIfVisible();
    }

    async clickYaKelasIbuHamil(){
        await this.radioYaKelasIbuHamil.waitForDisplayed({
            timeout: 10000
        });
        console.log("Klik Ya Kelas Ibu Hamil");
        await this.radioYaKelasIbuHamil.click();
    }

    async clickTidakKelasIbuHamil(){
        await this.radioTidakKelasIbuHamil.waitForDisplayed({
            timeout: 10000
        });
        console.log("Klik Tidak Kelas Ibu Hamil");
        await this.radioTidakKelasIbuHamil.click();
    }

    async clickYaRujukPuskesRS(){
        await this.radioYaRujukPuskesRS.waitForDisplayed({
            timeout: 10000
        });
        console.log("Klik Ya Rujuk Puskes RS");
        await this.radioYaRujukPuskesRS.click();
    }

    async clickTidakRujukPuskesRS(){
        await this.radioTidakRujukPuskesRS.waitForDisplayed({
            timeout: 10000
        });
        console.log("Klik Tidak Rujuk Puskes RS");
        await this.radioTidakRujukPuskesRS.click();
    }

    async btnSimpanSelesaikanExists(){
        return await $('//android.widget.Button[@content-desc="Simpan & Selesaikan"]');
    }


    async clickSimpanSelesaikan(){
        await this.btnSimpanSelesaikan.waitForDisplayed({
            timeout: 10000
        });
        console.log("Klik Simpan & Selesaikan");
        await this.btnSimpanSelesaikan.click();
        await this.notifSimpan.waitForDisplayed({
            timeout: 10000
        });
        await this.notifSimpan.click();
    }

    async munculNotifBerhasilSimpan(){
        await this.notifBerhasilSimpan.waitForDisplayed({
            timeout: 10000
        });
        console.log("Notif Berhasil Simpan Muncul");
        await this.notifBerhasilSimpan.click();
    }

        async fillFormPelayananKesehatan(data){
        const simpan = await this.btnSimpanSelesaikanExists();
        await scrollUntilVisible(simpan);
        await this.clickSkriningTBC();
        await this.clickYaBatukTerus();
        await this.clickYaDemam();
        await this.clickYaBBGaNaikGaTurun();
        await this.clickYaKontakTBC();
        await scrollUntilVisible(simpan);
        await this.clickPemberianMMS();
        await this.inputJumlahTablet(data.jumlahTablet);
        await this.clickKonsumsiSetiapHari();
        await this.clickTidakPemeriksaanHemoglobin();
        await scrollUntilVisible(simpan);
        await this.clickPemberianMTBumilKEK();
        await this.inputKomposisi(data.komposisi);
        await this.inputJumlahPorsi(data.jumlahPorsi);
        // await scrollUntilVisible(simpan);
        await this.clickYaKelasIbuHamil();
        await this.clickTidakRujukPuskesRS();
    }
}
export default new PelayananKesehatanPage();