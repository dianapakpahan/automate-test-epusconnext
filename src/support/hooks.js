import { Before, After } from '@wdio/cucumber-framework';
import AppHelper from '../helper/app.firstInstall.js';
import fs from 'fs';

console.log('HOOKS LOADED');

Before(async () => {
    console.log('BEFORE START');

    // Buat folder screenshot dan allure-results jika belum ada
    const dirs = ['./allure-results/screenshots', './screenshots']; // Pastikan './screenshots' ada di sini
    dirs.forEach(dir => {
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }
    });

    await driver.activateApp('com.infokes.eposyandu');

    await driver.pause(3000);

    try {
        await AppHelper.allowNotificationIfDisplayed();
        await AppHelper.skipOnboarding();
    } catch (e) {
        console.log('Setup onboarding/notification dilewati atau tidak ditemukan');
    }
});

After(async (scenario) => {
    if (scenario.result.status === 'FAILED') {
        const screenshotPath = `./allure-results/screenshots/${scenario.pickle.name.replace(/\s/g, '_')}_${Date.now()}.png`;
        await browser.saveScreenshot(screenshotPath);
        console.log(`Screenshot saved for failed scenario: ${screenshotPath}`);
    }
    console.log('Test selesai');
});

After(async () => {

    console.log('Test selesai');

});