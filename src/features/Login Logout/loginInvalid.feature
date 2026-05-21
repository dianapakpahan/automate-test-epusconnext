@login
@negativeLogin
@regression
Feature: Login ePus Connext

@invalid-login
  Scenario Outline: Login menggunakan credential invalid

    Given User sudah dihalaman login di ePus Connext

    When User memasukkan Nomor HP "<phone>"
    And User memasukkan PIN "<pin>"
    And User klik tombol masuk

    Then Menampilkan error login "<errorMessage>"

    Examples:
      | phone        | pin    | errorMessage                        |
      | 081311223311 | 000000 | Nomor handphone atau PIN salah      |
      | 081000000000 | 112233 | Nomor handphone atau PIN salah      |
      | 081          | 123456 | Please enter valid phone number     |