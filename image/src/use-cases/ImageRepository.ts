/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
// eslint-disable-next-line import/no-unresolved
import Image, { AddImageParams } from '../entities/image';

interface ImageRepository {
  findAll(): Promise<Image[]>;
  createImage(payload: AddImageParams): Promise<Image>;
  editImage(id: string, payload: AddImageParams): Promise<Image | null>;
  detailImage(id: string): Promise<Image | null>;
  deleteImage(id: string): Promise<boolean>;
}

export default ImageRepository;
