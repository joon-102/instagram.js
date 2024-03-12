import { Browser, Page } from 'playwright';

export const login = async (browser: Browser, loginUrl: string, id: string, password: string): Promise<void> => {
    const page: Page = await browser.newPage();

    await page.goto(loginUrl);

    const Selector = (child: number): string => `#loginForm > div > div:nth-child(${child}) > div > label > input`;

    const idInputSelector = Selector(1), passwordInputSelector = Selector(2);

    await page.waitForSelector(idInputSelector);
    await page.waitForSelector(passwordInputSelector);

    await page.fill(idInputSelector, id);
    await page.fill(passwordInputSelector, password);

    await page.keyboard.press("Enter");

    await page.close()
};
