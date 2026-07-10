import { hideKeyboardIfVisible } from '../support/utils.js';
class LoginPage {

    // ======================
    // SELECTOR
    // ======================

    // LOGIN

    get halamanLogin(){
        return $('//android.widget.ImageView');
    }

    get inputPhoneNumberField() {
        // Menggunakan instance(0) jauh lebih stabil daripada mencari @hint yang sering tidak terdeteksi
        return $('android=new UiSelector().className("android.widget.EditText").instance(0)');
    }

    get inputPinField() {
        // Menggunakan instance(1) untuk field PIN
        return $('android=new UiSelector().className("android.widget.EditText").instance(1)');
    }

    get btnMasuk() {
        return $('~Masuk');
    }

    get syncData() {
        return $('android=new UiSelector().descriptionContains("Sedang proses sinkron data")');
    }

    get homeEpusConnext() {
        // Menggunakan UiSelector descriptionContains biasanya lebih stabil untuk Android
        return $('android=new UiSelector().descriptionContains("Halo Kader Demo")');
    }

    // LUPA PIN

    get lupaPinButton() {
        return $('android=new UiSelector().descriptionContains("Lupa PIN")');
    }

    get inputPhoneNumberLupaPinField() {
        return $('android=new UiSelector().descriptionContains("Nomor Handphone")');
    }

    get btnKirim() {
        return $('~Kirim');
    }

    get errorLoginMessage() {
        return $('~Nomor handphone atau PIN salah');
    }
    // ======================
    // ACTION
    // ======================

    async login(phone,pin){
        await this.halamanLogin.waitForDisplayed({
            timeout: 10000
        });
        await this.inputNoHp(phone);
        await this.inputPin(pin);
        await this.clickMasuk();
    }

    async inputNoHp(phone) {

        await this.inputPhoneNumberField.waitForDisplayed({
            timeout: 10000
        });
        await this.inputPhoneNumberField.click();
        await browser.pause(300);
        await this.inputPhoneNumberField.clearValue();
        await browser.pause(300);
        await this.inputPhoneNumberField.setValue(phone);
        await browser.pause(1000);
        await hideKeyboardIfVisible();

    }

    async inputPin(pin) {

        await this.inputPinField.waitForDisplayed({
            timeout: 10000
        });
        await this.inputPinField.click();
        await browser.pause(300);
        await this.inputPinField.clearValue();
        await browser.pause(300);
        await this.inputPinField.addValue(pin);
        await browser.pause(1000);
        await hideKeyboardIfVisible();
    
    }

    async clickMasuk() {

        await this.btnMasuk.waitForDisplayed();
        await this.btnMasuk.click();
    }

    async waitUntilSyncFinished() {
        // Tunggu sebentar sampai overlay sinkron muncul (max 10 detik)
        try {
            await this.syncData.waitForDisplayed({ timeout: 10000 });
            console.log('Sinkronisasi terdeteksi...');
        } catch (error) {
            console.log('Overlay sinkron tidak muncul, lanjut cek halaman utama.');
        }

        // Tunggu sampai overlay sinkron hilang (max 10 menit)
        await this.syncData.waitForDisplayed({
            reverse: true,
            timeout: 600000
        });
    }

    async clickLupaPin() {

        await this.lupaPinButton.waitForDisplayed();
        await this.lupaPinButton.click();
    }

    async inputNoHpLupaPin(phone) {

        await this.inputPhoneNumberLupaPinField.waitForDisplayed();
        await this.inputPhoneNumberLupaPinField.setValue(phone);
    }

    async clickKirim() {

        await this.btnKirim.waitForDisplayed();
        await this.btnKirim.click();
    }

    async isAtHomePage() {
        
        return await this.homeEpusConnext.isDisplayed();
    }
}

export default new LoginPage();