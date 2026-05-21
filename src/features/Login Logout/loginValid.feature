@login
@smoke
@positive
Feature: Login ePus Connext

  @valid-login
  Scenario: Login menggunakan credential valid

    Given User sudah dihalaman login di ePus Connext

    When User login menggunakan credentials valid

    Then Sync data ePus Connext
    And Menampilkan halaman utama ePus Connext