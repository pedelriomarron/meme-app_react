export class Utils {

    static async  request(url: string, headers: any = {}) {
        let response = await fetch(url, headers);
        let data = await response.json()
        return data;
    }


}