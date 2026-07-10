# EPUS Connext Mobile Automation

Automation Testing Mobile menggunakan **WebdriverIO**, **Appium**, dan **Cucumber (BDD)** untuk aplikasi **EPUS Connext**.

---

# Tech Stack

- WebdriverIO
- Appium
- Cucumber (BDD)
- JavaScript
- Node.js

---

# Folder Structure

```
automate-test-epusconnext/
├── src/
│   ├── data/                  # Test Data
│   ├── features/              # Gherkin Feature Files
│   ├── helper/                # Helper Functions
│   ├── pages/                 # Page Object Model
│   ├── steps/                 # Step Definitions
│   ├── support/               # Hooks & Utilities
│   └── temp/
│
├── screenshots/               # Failed Screenshot
├── allure-results/            # Allure Result
├── wdio.conf.js               # WebdriverIO Configuration
├── package.json
└── README.md
```

---

# Prerequisites

Pastikan sudah menginstall:

- Node.js
- Java JDK
- Android Studio
- Android SDK
- Appium
- Appium Inspector
- Git

---

# Clone Repository

```bash
git clone https://github.com/dianapakpahan/automate-test-epusconnext.git
```

Masuk ke project

```bash
cd automate-test-epusconnext
```

---

# Install Dependency

```bash
npm install
```

---

# Menjalankan Automation

Pastikan:

- Appium Server sudah berjalan
- Emulator atau Android Device sudah terkoneksi

Cek device

```bash
adb devices
```

### Login

```bash
npm run login
```

### Tambah Sasaran Posyandu

```bash
npm run tambahSasaranPosyandu
```

### Pemeriksaan Ibu Hamil

```bash
npm run pemeriksaanPosyandu
```

### Ubah PIN

```bash
npm run ubahPin
```

---

# Git Workflow

Melihat perubahan

```bash
git status
```

Menambahkan perubahan

```bash
git add .
```

Commit

```bash
git commit -m "feat: update pemeriksaan ibu hamil"
```

Push ke GitHub

```bash
git push
```

Mengambil update terbaru

```bash
git pull
```

---

# Report

Generate Allure Report

```bash
allure generate allure-results --clean -o allure-report
```

Membuka report

```bash
allure open allure-report
```

---

# Best Practices

- Gunakan Page Object Model (POM)
- Gunakan Step Definition yang reusable
- Gunakan data test dari folder `src/data`
- Jangan commit file `.apk`, `node_modules`, ataupun file log
- Gunakan format commit yang konsisten (`feat`, `fix`, `refactor`, `test`, `docs`)

---

# Author

**Diana Pakpahan**