import { Utils } from "../utils"


export async function getMemesBysubreddit(subreddit: string = "memes", n: number = 2) {

    let data = await Utils.request(`https://meme-api.herokuapp.com/gimme/${subreddit}/${n}`);
    return data
}


export async function getMemesBySearch(q: string) {
    let data
    try {
        data = await Utils.request(`https://meme-api.herokuapp.com/gimme/memes/${q}`);

    } catch (error) {
        data = await Utils.request(`https://meme-api.herokuapp.com/gimme/memes/0`);

    }
    return data
}

