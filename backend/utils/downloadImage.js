import axios from "axios";
import fs from "fs"
import path from "path";


export async function downloadImage(imageUrl, savePath) {
    const response = await axios.get(imageUrl, {
        responseType: "arraybuffer",
        headers: {
            "User-Agent": "Mozilla/5.0"
        }
    });


    fs.mkdirSync(path.dirname(savePath), { recursive: true });
    fs.writeFileSync(savePath, response.data);
}