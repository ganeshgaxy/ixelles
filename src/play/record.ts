import { BrowserContext, chromium, ChromiumBrowser } from 'playwright';

let browser: BrowserContext;

export async function recordNow() {
    const pathToExtension = require('path').join(require('path').resolve('./'), 'src/resources/chrome/extn');
    console.log(pathToExtension);
    const userDataDir = '/tmp/test-user-data-dir';
    browser = await chromium.launchPersistentContext(userDataDir,{
        viewport: null,
        headless: false,
        args: [
        `--disable-extensions-except=${pathToExtension}`,
        `--load-extension=${pathToExtension}`
        ]
    });
}

export async function stopNow() {
    await browser.close();
}