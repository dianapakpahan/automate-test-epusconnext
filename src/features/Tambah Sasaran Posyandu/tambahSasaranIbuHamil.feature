@tambahSasaran @ibuHamil @regression
Feature: Tambah Sasaran Posyandu

  Scenario: Menambahkan sasaran baru kategori Ibu Hamil

Given User berada di halaman utama ePus Connext
And User masuk ke Pelayanan Posyandu
And User pilih langkah 1
When User menambahkan sasaran baru
And User memilih "Ibu Hamil"
And User mengisi NIK valid
And User mengisi Field yang tersedia dengan data yang valid
And User memilih wilayah domisili
And User simpan Sasaran
Then Sasaran berhasil tersimpan