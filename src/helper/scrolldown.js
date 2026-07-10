export async function scrollUntilVisible(element, maxScroll = 5) {
    for (let i = 0; i < maxScroll; i++) {
        if (await element.isDisplayed({
            timeout: 10000
        })) {
            return;
        }

        await driver.execute('mobile: scrollGesture', {
            left: 100,
            top: 100,
            width: 800,
            height: 1200,
            direction: 'down',
            percent: 0.8
        });
    }

    throw new Error('Element tidak ditemukan setelah scroll');
}

export async function scrollDown() {
    await driver.execute('mobile: scrollGesture', {
        left: 100,
        top: 100,
        width: 800,
        height: 1200,
        direction: 'down',
        percent: 0.8
    });
}