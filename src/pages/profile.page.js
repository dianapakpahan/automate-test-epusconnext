class ProfilePage{

    get btnProfile(){
        return $('//android.widget.ImageView[@content-desc="Profile Tab 3 of 3"]');
    }

    get halamanProfile(){
        return $('~Profile');
    }

    get btnUbahPin(){
        return $('~Ubah Pin');
    }
    
    get popUbahPIN(){
        return $('//android.view.View[@content-desc="Ubah PIN"]');
    }

    get pinLama(){
        return $('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View[1]/android.view.View/android.view.View/android.view.View[3]/android.view.View[@content-desc="PIN Lama"]/android.widget.EditText');
    }

    get pinBaru(){
        return $('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View[1]/android.view.View/android.view.View/android.view.View[5]/android.view.View[@content-desc="PIN Baru"]/android.widget.EditText');
    }

    get ulangPinBaru(){
        return $('//android.view.View[@content-desc="ulangi PIN Baru"]/android.widget.EditText');
    }    

    get btnSimpan(){
        return $('~Simpan');
    }

    get viewPinLama(){
        return $('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View[1]/android.view.View/android.view.View/android.view.View[3]/android.view.View[@content-desc="PIN Lama"]/android.widget.ImageView');
    }

    get viewPinBaru(){
        return $('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View[1]/android.view.View/android.view.View/android.view.View[5]/android.view.View[@content-desc="PIN Baru"]/android.widget.ImageView');
    }

    get viewPinUlangiPin(){
        return $('//android.view.View[@content-desc="ulangi PIN Baru"]/android.widget.ImageView');
    }

    get closeUbahPin(){
        return $('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View[1]/android.view.View/android.view.View/android.widget.ImageView');
    }

    get btnPusatBantuan(){
        return $('~Pusat Bantuan')
    }

    get btnLogout(){
        return $('~Log out');
    }

    get btnHapusAkun(){
        return $('~Hapus Akun');
    }

    async clickProfile(){
        await this.btnProfile.waitForDisplayed();
        await this.btnProfile.click();
    }

    async clickUbahPin(){
        await this.btnUbahPin.waitForDisplayed();
        await this.btnUbahPin.click();
    }

    async clickSimpan(){
        await this.btnSimpan.waitForDisplayed();
        await this.btnSimpan.click();
    }

}
export default new ProfilePage();