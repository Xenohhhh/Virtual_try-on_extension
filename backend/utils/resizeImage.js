import sharp from "sharp";
import fs from "fs/promises"

export async function resizeImg(imgPath) {
    const target_width = 192;
    const target_height = 256;

    try {
        const inputBuffer = await fs.readFile(imgPath);
        const outputBuffer = await sharp(inputBuffer).resize(target_width, target_height).toBuffer()
        await fs.writeFile(imgPath, outputBuffer)

        console.log("File has been resized and saved.")

    } catch (err) {
        throw err;
    }
}