import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import path from "path"
import { downloadImage } from "./utils/downloadImage.js"
import { resizeImg } from "./utils/resizeImage.js"
import { deleteFile } from "./utils/deleteFile.js"

dotenv.config()

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors())
app.use(express.json())

const ROOT_DIR = process.cwd()


app.post("/api/try-on", async (req, res) => {
    try {
        const { imageUrl, personUrl } = req.body

        if (!imageUrl || !personUrl) return res.status(400).json({ success: false, message: "Both images are required." })

        const imgPath = path.join(ROOT_DIR, "public", "cloth.jpg")
        const personPath = path.join(ROOT_DIR, "public", "person.jpg")
 
        try {
            await downloadImage(imageUrl, imgPath)
            await downloadImage(personUrl, personPath)
            await resizeImg(imgPath);
            await resizeImg(personPath);
        } catch (err) {
            await deleteFile(imgPath);
            await deleteFile(personPath);
            throw err;
        }


        res.json({
            success: true,
            message: "Image has been downloaded",
            file: {
                clothUrl: imgPath,
                PersonUrl: personPath
            }
        });

    }
    catch (error) {
        console.log("Process Failed:", error.message);
        res.status(500).json({ success: false, message: "Server Error" })
    }
})

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
})