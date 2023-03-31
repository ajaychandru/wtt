import axios from 'axios';
import sharp from 'sharp';

async function resizeImg(url) {
    try {
        const response = await axios.get(url, {
            responseType: 'arraybuffer'
        });
        const imageBuffer = Buffer.from(response.data, 'binary');
        const resizedImage = await sharp(imageBuffer)
            .resize(900, 600)
            .webp({ quality: 80, alphaQuality: 0 })
            .toBuffer();

        const dataUrl = `data:image/webp;base64,${resizedImage.toString('base64')}`;
        return dataUrl;
    } catch (error) {
        return Promise.reject(error);
    }
}

async function handler(req, res) {
    if (req.method === "GET") {
        try {
            const imgUrl = await resizeImg("https://images.news18.com/ibnlive/uploads/2022/11/narendra-modi-in-nusa-dua-for-g20-meeting-1-166847892216x9.png");
            res.status(200).json(imgUrl);
        } catch (e) {
            console.error(e);
            res.status(500).json(e);
        }
    }
}


export default handler;