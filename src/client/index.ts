import Base, { ClientOptions } from "./base"

import { login , islogin } from "../api/accounts";
import { create } from "../api/post";

const defaultOptions: ClientOptions = {
    browser: {},
    context: {
        locale: "ko-KR",
        extraHTTPHeaders: {
            ["accept-lanauge"]: "ko,en-US;q=0.9,en;q=0.8,ko-KR;q=0.7,ro;q=0.6,vi;q=0.5",
        },
    },
}

class instagram extends Base {
    private LOGIN_URL = "https://www.instagram.com/accounts/login"
    private ISLOGIN_URL = "https://www.instagram.com/direct/inbox"
    private MAIN_URL = "https://www.instagram.com/"

    constructor(options?: ClientOptions) {
        super({ ...defaultOptions, ...options })
    }

    public readonly accounts = {
        login: async (id: string, password: string): Promise<void> => {
            if (!this.context) {
                throw new Error("브라우저가 실행되고 있지 않습니다.")
            }

            return await login(this.context, this.LOGIN_URL, id, password);
        },
        islogin: async (): Promise<boolean> => {
            if (!this.context) {
                throw new Error("브라우저가 실행되고 있지 않습니다.")
            }

            return await islogin(this.context, this.ISLOGIN_URL);
        },

    }

    public readonly post = {
        create: async (img: File): Promise<any> => {
            if (!this.context) {
                throw new Error("브라우저가 실행되고 있지 않습니다.")
            }

            return await create(this.context, this.MAIN_URL);
        }
    }


}

export default instagram