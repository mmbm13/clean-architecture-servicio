/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable-next-line import/no-unresolved */
import Image, { AddImageParams } from '../entities/Image';
import ImageRepository from './ImageRepository';

export default class CrudImage {
  private ImageRepository: ImageRepository;

  constructor(ImageRepositorya: ImageRepository) {
    this.ImageRepository = ImageRepositorya;
  }

  async getAll(): Promise<Image[]> {
    const images = await this.ImageRepository.findAll();
    return images;
  }

  async create(payload: AddImageParams): Promise<Image> {
    const newImage = await this.ImageRepository.createImage(payload);
    return newImage;
  }

  async edit(id: string, payload: AddImageParams): Promise<Image | null> {
    const image = await this.ImageRepository.editImage(id, payload);
    return image;
  }

  async detail(id: string): Promise<Image | null> {
    const image = await this.ImageRepository.detailImage(id);
    return image;
  }

  async delete(id: string): Promise<boolean> {
    const operation = await this.ImageRepository.deleteImage(id);
    return operation;
  }
}
