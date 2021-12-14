/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import axios from 'axios';
import ImageServiceInt from './ImageServiceInt';

class ImageService implements ImageServiceInt {
  private Route: string;

  constructor(targetRoute: string) {
    this.Route = targetRoute;
  }

  async crear(photo: string): Promise<string | null> {
    try {
      const image = await axios.post(`${this.Route}/crear`, { photo });
      const { _id } = image.data;
      return _id;
    } catch (error) {
      return null;
    }
  }

  async eliminar(id: string): Promise<string | null> {
    try {
      const image = await axios.delete(`${this.Route}/eliminar/${id}`);
      const { message } = image.data;
      return message;
    } catch (error) {
      return null;
    }
  }
}

export default ImageService;
