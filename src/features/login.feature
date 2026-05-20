Feature: Login

Scenario: Login Berhasil
Given User sudah dihalaman login di ePus Connext
And User sudah memiliki akun ePus Connext
When User memasukkan Nomor HP
And User memasukkan PIN
Then Menampilkan halaman utama ePus Connext