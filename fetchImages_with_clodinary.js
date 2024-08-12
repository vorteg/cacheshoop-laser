import axios from 'axios';
import fs from 'fs';
import dotenv from 'dotenv';
import cloudinary from 'cloudinary';

dotenv.config();

const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
const apiKey = process.env.CLOUDINARY_API_KEY;
const apiSecret = process.env.CLOUDINARY_API_SECRET;
const apiUrl = `https://api.cloudinary.com/v1_1/${cloudName}/resources/image`;

cloudinary.v2.config({
  cloud_name: cloudName,
  api_key: apiKey,
  api_secret: apiSecret,
});

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
        url: cloudinary.v2.url(image.public_id, { format: 'webp', quality: 'auto' }),
        public_id: image.public_id,
        created_at: image.created_at,
        width: image.width,
        height: image.height,
        format: 'webp', // Cambiamos el formato a 'webp'
      })));

      nextCursor = response.data.next_cursor;
    } while (nextCursor);

    fs.writeFileSync('images_webp.json', JSON.stringify(images, null, 2));
    console.log('Images metadata with WebP URLs saved to images_webp.json');
  } catch (error) {
    console.error('Error fetching images from Cloudinary', error);
  }
};

fetchImages();
