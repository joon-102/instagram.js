import { Page, BrowserContext } from 'playwright';
import { setTimeout } from 'node:timers/promises';

export const login = async (context: BrowserContext, loginUrl: string, id: string, password: string): Promise<void> => {
    const page: Page = await context.newPage();

    await page.goto(loginUrl);

    const Selector = (child: number): string => `#loginForm > div > div:nth-child(${child}) > div > label > input`;

    const idInputSelector = Selector(1), passwordInputSelector = Selector(2);

    await page.waitForSelector(idInputSelector);
    await page.waitForSelector(passwordInputSelector);

    await page.fill(idInputSelector, id);
    await page.fill(passwordInputSelector, password);

    await page.keyboard.press("Enter");
};


export const islogin = async (context: BrowserContext, isloginUrl: string): Promise<boolean> => {
    const page: Page = await context.newPage();
    await page.goto(isloginUrl);

    await setTimeout(1000);

    const url: String = page.url()
    await page.close()

    if (url.includes("login")) {
        return false
    }
    return true
};
