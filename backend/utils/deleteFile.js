import fs from "fs/promises"

export async function deleteFile(fileUrl) {
    try {
        await fs.unlink(fileUrl);
        console.log("File has been removed.")
    }
    catch (err) {
        if (err.code !== "ENOENT") {
            throw err;
        }
    }
}