/* eslint-disable class-methods-use-this */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import ImageRepository from '../../use-cases/ImageRepository';
import Image from './models/Image';
import ImageEntity, { AddImageParams } from '../../entities/Image';

class DbImageRepository implements ImageRepository {
  async findAll(): Promise<ImageEntity[]> {
    const all = await Image.find({});
    return all;
  }

  async createImage(payload: AddImageParams): Promise<ImageEntity> {
    const imagen = new Image(payload);
    await imagen.save();
    return imagen;
  }

  public async editImage(id: string, payload: AddImageParams): Promise<ImageEntity | null> {
    const imagen = await Image.findByIdAndUpdate({ _id: id }, payload);
    return imagen;
  }

  public async detailImage(id: string): Promise<ImageEntity | null> {
    const imageFinded = await Image.findById(id);
    return imageFinded;
  }

  public async deleteImage(id: string): Promise<boolean> {
    const operation = await Image.findByIdAndDelete(id);
    return !operation;
  }
}

export default DbImageRepository;
