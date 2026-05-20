# EPUS Connext Mobile Automation

Project ini menggunakan Appium dengan **WebdriverIO (JavaScript)** dan Cucumber (BDD).

## Struktur Project

Project menggunakan struktur **Simplified Source Layout**:

- `src/features/`: Skenario bisnis (Gherkin).
- `src/pages/`: Page Object Model.
- `src/steps/`: Step Definitions.
- `src/support/`: Hooks dan Utilities.
- `src/data/`: Test data.

## Cara Menjalankan Test

1. Pastikan Appium Server sudah berjalan.
2. Pastikan Emulator/Device sudah terhubung.
3. Install dependencies: `npm install`
4. Jalankan test:

```bash
npm run wdio
```

## Reporting
Setelah eksekusi selesai, laporan dapat dilihat di folder `/reports`.

## Kontribusi
1. Gunakan format Page Object Model.
2. Pastikan file `.feature` menggunakan bahasa yang mudah dimengerti (Gherkin).
3. Jangan commit file `.apk` atau `log` ke repository.