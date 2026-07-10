@pemeriksaanIbuHamil @ibuHamil @regression
Feature: Pengukuran Sasaran Posyandu

  Scenario: Pengukuran sasaran baru kategori Ibu Hamil

    Given User berada di halaman utama ePus Connext
    And User sudah memilih sasaran Ibu Hamil bernama "Siti Aminah" untuk pengukuran
    And User mengisi data pengukuran ibu hamil
    And User simpan pengukuran Ibu Hamil
    And Data pengukuran muncul di halaman pencatatan
    And User mengisi form pencatatan
    And Data muncul di halaman pelayanan kesehatan
    And User mengisi form pelayanan kesehatan
    Then Data muncul di halaman penyuluhan