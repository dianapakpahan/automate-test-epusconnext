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
        return $('//android.widget.EditText[@hint="Nomor handphone"]');
    }

    get inputPinField() {
        return $('//android.widget.EditText[@hint="PIN"]');
    }

    get btnMasuk() {
        return $('~Masuk');
    }

    get syncData() {
        return $('android=new UiSelector().descriptionContains("Sedang proses sinkron data")');
    }

    get homeEpusConnext() {
        return $('~Halo Ebenezer,');
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
        return $('~Nomor handpone atau PIN salah');
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
        await browser.pause(500);
        await this.inputPhoneNumberField.clearValue();
        await browser.pause(500);
        await this.inputPhoneNumberField.setValue(phone);
        await browser.pause(2000);
        await hideKeyboardIfVisible();

    }

    async inputPin(pin) {

        await this.inputPinField.waitForDisplayed({
            timeout: 10000
        });
        await this.inputPinField.click();
        await browser.pause(500);
        await this.inputPinField.clearValue();
        await browser.pause(500);
        await this.inputPinField.addValue(pin);
        await browser.pause(1500);
        await hideKeyboardIfVisible();
    
    }

    async clickMasuk() {

        await this.btnMasuk.waitForDisplayed();
        await this.btnMasuk.click();
    }
        
    async login(phone,pin){
        await this.inputNoHp(phone);
        await this.inputPin(pin);
        await this.clickMasuk();
    }

    async waitUntilSyncFinished() {

        await this.syncData.waitForDisplayed({
            reverse: true,
            timeout: 300000
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