import cloudinary from '../../scripts/cloudinary';

export const searchImages = async (searchTerm: string) => {
  try {
    const result = await cloudinary.search
      .expression(`public_id:${searchTerm}*`)
      .max_results(10)
      .execute();
    console.log(result)
    return result.resources.map((file: any) => ({
      id: file.public_id,
      url: file.secure_url,
      caption: file.context?.custom?.caption || '',
      alt: file.context?.custom?.alt || '',
    }));
  } catch (error) {
    console.error('Error searching images:', error);
    throw new Error('Failed to search images');
  }
};