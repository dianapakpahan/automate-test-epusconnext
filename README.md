## Folder Structure
# EPUS Connext Mobile Automation

automate-test-epusconnext/
├── src/
│   ├── features/          # File .feature (Gherkin)
│   ├── pages/             # Page Object Model (POM)
│   ├── steps/             # Step Definitions
│   ├── support/           # Hooks, Utils, dan Custom Commands
│   └── data/              # Test Data (JSON/CSV)
├── config/                # Environment configurations
├── reports/               # Test reports (Generated)
├── .github/               # CI/CD Workflows
├── wdio.conf.js           # Konfigurasi Utama WDIO
├── package.json
└── README.md

Project menggunakan struktur **Simplified Source Layout**:

- `src/features/`: Skenario bisnis dalam format Gherkin (`.feature`).
- `src/pages/`: Implementasi Page Object Model (POM).
- `src/steps/`: Implementasi Step Definitions.
- `src/support/`: Hooks (@Before/@After) dan Utility functions.
- `src/data/`: Test data set (JSON).
- `config/`: Konfigurasi environment.
- `reports/`: Hasil eksekusi test


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