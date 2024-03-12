import Base, { ClientOptions } from "./base"

import { login } from "../api/accounts";

const defaultOptions: ClientOptions = {
    browser: {},
    context: {
        locale: "ko-KR",
        extraHTTPHeaders: {
            ["accept-lanauge"]: "ko,en-US;q=0.9,en;q=0.8,ko-KR;q=0.7,ro;q=0.6,vi;q=0.5",
        },
    },
}

class afreecatv extends Base {
    private LOGIN_URL = "https://www.instagram.com/accounts/login"

    constructor(options?: ClientOptions) {
        super({ ...defaultOptions, ...options })
    }

    public readonly accounts = {
        login: async (id: string, password: string): Promise<void> => {
            if (!this.browser) {
                throw new Error("브라우저가 실행되고 있지 않습니다.")
            }

            await login(this.browser, this.LOGIN_URL, id, password);
        },

    }

 
}

export default afreecatv