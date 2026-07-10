class AppHelper {

    async allowNotificationIfDisplayed() {

        await driver.pause(3000);

        try {

            const allowBtn = await $('id=com.android.permissioncontroller:id/permission_allow_button');

            if (await allowBtn.isDisplayed()) {

                console.log('Notification popup detected');

                await allowBtn.click();

            }

        } catch (error) {

            console.log('No notification popup');

        }

    }

    async skipOnboarding() {

        await driver.pause(5000);

        for (let i = 0; i < 4; i++) {

            try {

                const nextBtn = await $('~Selanjutnya');

                if (await nextBtn.isDisplayed()) {

                    console.log(`Klik onboarding ke-${i + 1}`);

                    await nextBtn.click();

                    await driver.pause(1500);

                }

            } catch (error) {

                console.log(`Gagal klik onboarding ke-${i + 1}`);

            }

        }

        try {

            const mulaiBtn = await $('~Mulai');

            if (await mulaiBtn.isDisplayed()) {

                console.log('Klik tombol Mulai');

                await mulaiBtn.click();

            }

        } catch (error) {

            console.log('Button Mulai tidak ditemukan');

        }

    }

}

export default new AppHelper();