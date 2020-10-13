import {config} from "../config/config";
import {promisic} from "./util";

class Http {
    static async request({url, data, method='GET', callback}) {
        const res  = await promisic(wx.request)({
            // 模板字符串 ES6
            url: `${config.appBaseUrl}${url}`,
            method,
            data,
            header: {
                appkey: config.appkey
            }
        })

        return res.data;
    }
}

export {
    Http
}