import express from "express"
import cors from "cors"
import dotenv from "dotenv"

dotenv.config()


const app = express();

app.use(cors())
app.use(express.json())


app.post("/api/try-on", (req, res) => {
    try {
        const { imageUrl } = req.body

        if (!imageUrl) {
            return res.status(400).json({
                success: false,
                message: "No image URL found."
            })
        }

        console.log("Image URL: ", imageUrl)



        res.json({
            success: true,
            message: "Image received by server!",
            receivedUrl: imageUrl
        });
    } 
    catch (error) {
        return res.status(400).json({
            success: false,
            message: `${error.message}`
        })
    }

})



app.listen(process.env.PORT, () => {
    console.log(`Server running on port: ${process.env.PORT}`)
})