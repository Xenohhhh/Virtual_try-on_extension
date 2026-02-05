import sharp from "sharp";
import path from "path";
import fs from "fs/promises"

export async function resizeImg(imgPath) {
    const max_size = 5*1024*1024;
    const allowedFormat = ['.png', '.jpg', '.jpeg'];
    const target_width = 192;
    const target_height = 256;

    try {

        const stats = await fs.stat(imgPath)
        if(stats.size>max_size){
            throw new Error("Image size exceeds 5MB limit.")
        }

        const ext = path.extname(imgPath).toLowerCase();
        if(!allowedFormat.includes(ext)){
            throw new Error("Invalid format.")
        }

        const inputBuffer = await fs.readFile(imgPath);
        const outputBuffer = await sharp(inputBuffer).resize(target_width, target_height).toBuffer()
        await fs.writeFile(imgPath, outputBuffer)

        console.log("File has been resized and saved.")

    } catch (err) {
        throw err;
    }
}