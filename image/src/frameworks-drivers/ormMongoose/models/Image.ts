/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-import-module-exports */
import mongoose from 'mongoose';
import Image from '../../../entities/Image';

const ImageSchema = new mongoose.Schema<Image>({
  photo: { type: String, required: true },
});

export default mongoose.model<Image>('Image', ImageSchema);
