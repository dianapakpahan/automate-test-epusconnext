import { hideKeyboardIfVisible } from '../support/utils.js';
import { scrollDown, scrollUntilVisible } from "../helper/scrolldown";

class PencatatanPage{

    get btnLangkah3(){
        return $('//android.view.View[@content-desc="Langkah 3\nPencatatan (Buku KIA)"]')
    }

    get btnLanjutkan1(){
        return $('android=new UiSelector().description("Lanjutkan")');
    }

    get checklistBukuKia(){
        return $('//android.widget.Button[@content-desc="Lanjutkan"]');
    }

    get tensiSesuaiKia() {
    return $('//android.view.View[@content-desc="Ya"]/android.widget.RadioButton');
    }

    get tensiTidakSesuaiKia(){
        return $('//android.view.View[@content-desc="Tidak"]/android.widget.RadioButton');
    }

    get btnLanjutkan2() {
    return $('//android.widget.Button[@content-desc="Lanjutkan"]');
    }

    get btnKembali2(){
        return $('//android.widget.Button[@content-desc="Kembali"]');
    }

    get checklistPerkembangan(){
    return $('//android.view.View[@content-desc="Checklist Perkembangan"]');
    }

    get peningkatanBBSesuaiKia(){
        // Mencari tombol 'Ya' yang berada di bawah section Checklist Perkembangan
        return $('//android.view.View[@content-desc="Checklist Perkembangan"]/following::android.view.View[@content-desc="Ya"]/android.widget.RadioButton[1]');
    }

    get peningkatanBBTidakSesuaiKia(){
        return $('//android.view.View[@content-desc="Checklist Perkembangan"]/following::android.view.View[@content-desc="Tidak"]/android.widget.RadioButton[1]');
    }

    get btnSelesaikan(){
        return $('android=new UiSelector().descriptionContains("Selesaikan")');
    }

    //=================
    //ACTION
    //================

     async clickLangkah3(){
        await this.btnLangkah3.waitForDisplayed();
        await this.btnLangkah3.click();
    }

    async clickLanjutkan1(){
        await this.btnLanjutkan1.waitForDisplayed({
            timeout: 10000
        });
        await this.btnLanjutkan1.click();
    }

    async clickLanjutkan2(){
        await this.btnLanjutkan2.waitForDisplayed({
            timeout: 20000
        });
        await this.btnLanjutkan2.click();
    }

    async clickKembali2(){
        await this.btnKembali2.waitForDisplayed({
            timeout: 10000
        });
        await this.btnKembali2.click();
    }

    async clickSelesaikan(){
        await this.btnSelesaikan.waitForDisplayed({
            timeout: 10000
        });
        await this.btnSelesaikan.click();
    }

    async radioBtnTensiSesuaiKia() {
        const target = this.tensiSesuaiKia;

        await target.waitForExist({ timeout: 10000 });
        await target.waitForDisplayed({ timeout: 10000 });

        await target.click();

        await browser.pause(2000);

        const btn = this.btnLanjutkan2;

        await btn.waitForDisplayed({ timeout: 10000 });
        await btn.waitForClickable({ timeout: 10000 }).catch(() => {});
        await btn.click();

        await browser.pause(3000);
    }
    
    async radioBtnTensiTidakSesuaiKia(){
        const target = this.tensiTidakSesuaiKia;
        console.log('Tensi tidak sesuai kurva Buku KIA')
        await target.waitForDisplayed({ timeout: 10000 });
        // Pastikan elemen juga dalam keadaan enabled (bisa diklik)
        await target.waitForEnabled({ timeout: 5000, timeoutMsg: 'Radio button "Tidak" untuk Tensi tidak enabled' });
        await target.click();
        await browser.pause(1000);
        await this.clickLanjutkan2();
        await browser.pause(1000);
    }

    async radioBtnPerkembanganBBSesuaiKia(){
        const target = this.peningkatanBBSesuaiKia;
        console.log('Peningkatan Berat Badan sesuai kurva Buku KIA')
        await target.waitForDisplayed({
            timeout: 10000
        });
        // Pastikan elemen juga dalam keadaan enabled (bisa diklik)
        await target.waitForEnabled({ timeout: 5000, timeoutMsg: 'Radio button "Tidak" untuk Peningkatan BB tidak enabled' });
        await target.click();
        await browser.pause(10000);
        await this.clickSelesaikan();
        await browser.pause(1000);
    }

    async radioBtnPerkembanganBBTidakSesuaiKia(){
        const target = this.peningkatanBBTidakSesuaiKia;
        console.log('Peningkatan Berat Badan tidak sesuai kurva Buku KIA')
        await target.waitForDisplayed({
            timeout: 10000
        });
        // Pastikan elemen juga dalam keadaan enabled (bisa diklik)
        await target.waitForEnabled({ timeout: 5000, timeoutMsg: 'Radio button "Ya" untuk Peningkatan BB tidak enabled' });
        await target.click();
        await browser.pause(1000);
        await this.clickSelesaikan();
        await browser.pause(1000);

    }
       
    
}
export default new PencatatanPage();