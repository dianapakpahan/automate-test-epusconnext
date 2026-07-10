import { Given, When, Then } from '@wdio/cucumber-framework';
import LoginPage from '../pages/login.page.js';
import PosyanduPage from '../pages/tambahsasaranposyandu.page.js';
import { invalidUsers, validUser } from '../data/login.data.js';
import { loginValidUser } from '../helper/auth.js';

console.log('LOGIN STEPS LOADED');

Given(/^User sudah dihalaman login di ePus Connext$/, async () => {
    await LoginPage.halamanLogin.waitForDisplayed();
    await expect(LoginPage.halamanLogin).toBeDisplayed();

});

Given('User berada di halaman utama ePus Connext', async () => {
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
});

When('User masuk ke Pelayanan Posyandu', async () => {
    await PosyanduPage.goToPelayananPosyandu();
});

When(/^User login menggunakan credentials valid$/, async () => {
    await LoginPage.login(validUser.phone, validUser.pin);
});

When(/^User memasukkan Nomor HP "([^"]*)" dan PIN "([^"]*)"$/, async (phone, pin) => {
    await LoginPage.login(phone, pin);
});

When(/^User klik tombol masuk$/, async () => {
    await LoginPage.clickMasuk();
});

Then(/^Sync data ePus Connext$/, async () => {
    
    console.log('Wait for Sync data');
    await driver.pause(2000);
    await LoginPage.waitUntilSyncFinished();

});

Then(/^Menampilkan halaman utama ePus Connext$/, async () => {
    console.log('Menampilkan halaman utama ePus Connext')
    await expect(LoginPage.homeEpusConnext).toBeDisplayed();

});

Then(/^Menampilkan error login "([^"]*)"$/, async (errorMessage) => {
    await expect(LoginPage.errorLoginMessage).toHaveText(errorMessage);
});