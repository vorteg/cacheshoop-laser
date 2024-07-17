import axios from 'axios';
import fs from 'fs';
import dotenv from 'dotenv';

dotenv.config();

const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
const apiKey = process.env.CLOUDINARY_API_KEY;
const apiSecret = process.env.CLOUDINARY_API_SECRET;
const apiUrl = `https://api.cloudinary.com/v1_1/${cloudName}/resources/image`;

const fetchImages = async () => {
  try {
    const auth = Buffer.from(`${apiKey}:${apiSecret}`).toString('base64');
    let images = [];
    let nextCursor = null;

    do {
      const response = await axios.get(apiUrl, {
        headers: {
          Authorization: `Basic ${auth}`,
        },
        params: {
          max_results: 500, // Puedes ajustar este valor según tus necesidades (máximo permitido por la API es 500)
          next_cursor: nextCursor,
        },
      });

      images = images.concat(response.data.resources.map((image) => ({
        url: image.secure_url,
        public_id: image.public_id,
        created_at: image.created_at,
        width: image.width,
        height: image.height,
        format: image.format,
      })));

      nextCursor = response.data.next_cursor;
    } while (nextCursor);

    fs.writeFileSync('images.json', JSON.stringify(images, null, 2));
    console.log('Images metadata saved to images.json');
  } catch (error) {
    console.error('Error fetching images from Cloudinary', error);
  }
};

fetchImages();