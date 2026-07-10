export async function hideKeyboardIfVisible() {

    try {

        await driver.hideKeyboard();

    } catch (error) {

        console.log('Keyboard tidak muncul');

    }

}

export async function tapBackButton() {

    await driver.back();

}

/**
 * Fungsi untuk generate data sasaran unik agar tidak terkena validasi NIK duplikat
 */
export function generateUniqueSasaranData(baseData) {

    const timestamp = Date.now().toString();

    return {

        ...baseData,

        validNIK: '3201' + timestamp.slice(-12),

        noKartuKeluarga:
            '3201' + (parseInt(timestamp.slice(-12)) + 5).toString(),

        namaLengkap:
            `${baseData.namaLengkap} ${timestamp.slice(-4)}`,

        noHandphone:
            '0812' + timestamp.slice(-8),

        tempatLahir:
            baseData.tempatLahir || 'BANDA ACEH',

        tanggalLahir:
            baseData.tanggalLahir || '01/01/1990'
    };
}