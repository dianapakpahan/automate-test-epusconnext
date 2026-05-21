import { Given, When, Then } from '@wdio/cucumber-framework';
import LoginPage from '../pages/login.page.js';
import loginPage from '../pages/login.page.js';
import { invalidUsers, validUser } from '../data/login.data.js';

console.log('LOGIN STEPS LOADED');

Given(/^User sudah dihalaman login di ePus Connext$/, async () => {
    await LoginPage.halamanLogin.waitForDisplayed();
    await expect(LoginPage.halamanLogin).toBeDisplayed();

});

When(/^User login menggunakan credentials valid$/, async () => {
    await LoginPage.login(validUser.phone, validUser.pin);
});


When(/^User klik tombol masuk$/, async () => {

    await LoginPage.clickMasuk();

});

Then(/^Sync data ePus Connext$/, async () => {

    await LoginPage.waitUntilSyncFinished();

});

Then(/^Menampilkan halaman utama ePus Connext$/, async () => {

    await expect(LoginPage.homeEpusConnext).toBeDisplayed();

});

Then(/^Menampilkan error login "([^"]*)"$/, async (errorMessage) => {

    await expect(LoginPage.errorLoginMessage)
        .toBeDisplayed();

});