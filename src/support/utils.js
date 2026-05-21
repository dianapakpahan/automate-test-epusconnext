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