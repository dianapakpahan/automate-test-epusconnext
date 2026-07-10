import { Given,When,Then } from "@wdio/cucumber-framework";
import LoginPage from "../pages/login.page.js";
import ProfilePage from "../pages/profile.page.js";
import { loginValidUser } from "../helper/auth.js";

console.log('PROFILE STEPS LOADED');

Given(/^User berada di halaman utama ePus Connext$/, async () => {
    await LoginPage.halamanLogin.waitForDisplayed();
    await expect(LoginPage.halamanLogin).toBeDisplayed();
    await loginValidUser();
});

Given(/^User masuk ke halaman profile$/, async () => {
    await ProfilePage.clickProfile();
    await ProfilePage.halamanProfile.waitForDisplayed();
});

When(/^User berada di Halaman profile$/, async () => {
    await expect(ProfilePage.halamanProfile).toBeDisplayed();
});

When(/^User masuk ke ubah PIN$/, async () => {
    await ProfilePage.clickUbahPin();
    await ProfilePage.popUbahPIN.waitForDisplayed();
});

When(/^User input PIN Lama yang valid$/, async () => {
    await ProfilePage.pinLama.click();
    await ProfilePage.pinLama.setValue('112233');
});

When(/^User input PIN Baru yang valid$/, async () => {
    await ProfilePage.pinBaru.click();
    await ProfilePage.pinBaru.setValue('332211');
});

When (/^User ulang PIN Baru yang valid$/, async () => {
    await ProfilePage.ulangPinBaru.click();
    await ProfilePage.ulangPinBaru.setValue('332211');
});

When(/^User klik tombol simpan$/, async () => {
    await ProfilePage.clickSimpan();
});

Then(/^PIN berhasil diubah$/, async () => {
    await LoginPage.halamanLogin.waitForDisplayed();
    await expect(LoginPage.halamanLogin).toBeDisplayed();
});