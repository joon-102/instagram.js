import { BrowserContext, Page } from 'playwright';

export const create = async (context: BrowserContext, mainUrl: string): Promise<void> => {
    const page: Page = await context.newPage();

    await page.goto(mainUrl);

    const notificationSettingsWindowSelector = "body > div.x1n2onr6.xzkaem6 > div.x9f619.x1n2onr6.x1ja2u2z > div > div.x1uvtmcs.x4k7w5x.x1h91t0o.x1beo9mf.xaigb6o.x12ejxvf.x3igimt.xarpa2k.xedcshv.x1lytzrv.x1t2pt76.x7ja8zs.x1n2onr6.x1qrby5j.x1jfb8zj > div > div > div > div > div.x7r02ix.xf1ldfh.x131esax.xdajt7p.xxfnqb6.xb88tzc.xw2csxc.x1odjw0f.x5fp0pe > div > div > div._a9-z > button._a9--._ap36._a9_0"
    const selectionMenuWindowSelector = "#mount_0_0_z1 > div > div > div.x9f619.x1n2onr6.x1ja2u2z > div > div > div.x78zum5.xdt5ytf.x1t2pt76.x1n2onr6.x1ja2u2z.x10cihs4 > div.x9f619.xvbhtw8.x78zum5.x168nmei.x13lgxp2.x5pf9jr.xo71vjh.x1uhb9sk.x1plvlek.xryxfnj.x1c4vz4f.x2lah0s.x1q0g3np.xqjyukv.x1qjc9v5.x1oa3qoh.x1qughib > div.x9f619.xjbqb8w.x78zum5.x168nmei.x13lgxp2.x5pf9jr.xo71vjh.x1plvlek.xryxfnj.x1c4vz4f.x2lah0s.xdt5ytf.xqjyukv.x1qjc9v5.x1oa3qoh.x1nhvcw1.x1dr59a3.xixxii4.x13vifvy.xeq5yr9.x1n327nk > div > div > div > div > div.x1iyjqo2.xh8yej3 > div:nth-child(7) > div > span > div > div > div > div.x1qjc9v5.xgf5ljw.xhk9q7s.x1otrzb0.x1i1ezom.x1o6z2jb.x972fbf.xcfux6l.x1qhh985.xm0m39n.x9f619.x78zum5.xdt5ytf.x2lah0s.xk390pu.x5yr21d.xdj266r.x11i5rnm.xat24cr.x1mh8g0r.x6ikm8r.x1odjw0f.xexx8yu.x4uap5.x18d9i69.xkhd6sd.x1n2onr6.x11njtxf.xh8yej3 > a:nth-child(1) > div.x9f619.xjbqb8w.x78zum5.x168nmei.x13lgxp2.x5pf9jr.xo71vjh.x1pi30zi.x1swvt13.xwib8y2.x1y1aw1k.x1uhb9sk.x1plvlek.xryxfnj.x1c4vz4f.x2lah0s.xdt5ytf.xqjyukv.x1qjc9v5.x1oa3qoh.x1nhvcw1.xn3w4p2"

    const notificationSettingsWindow = await page.$(notificationSettingsWindowSelector);

    if (notificationSettingsWindow) {
        await page.keyboard.press("Tab");
        await page.keyboard.press("Enter");
    } 

    for (let _ = 0; _ < 8; _++) {
        await page.keyboard.press('Tab')
    }
    await page.keyboard.press("Enter");

    const selectionMenuWindow = await page.$(selectionMenuWindowSelector);

    if(selectionMenuWindow) {
        await page.keyboard.press("Tab");
        await page.keyboard.press("Enter");
    }



};

