import LoginPage from '../pages/login.page.js';
import { validUser } from '../data/login.data.js';

export async function loginValidUser() {
    await LoginPage.halamanLogin.waitForDisplayed();

    await LoginPage.login(
        validUser.phone,
        validUser.pin
    );

    await LoginPage.waitUntilSyncFinished();

    // Tambahkan tunggu eksplisit agar halaman utama benar-benar muncul sebelum di-check
    await LoginPage.homeEpusConnext.waitForDisplayed({ 
        timeout: 60000,
        timeoutMsg: 'Halaman utama tidak muncul setelah proses sinkronisasi selesai'
    });

    await expect(LoginPage.homeEpusConnext).toBeDisplayed();
}