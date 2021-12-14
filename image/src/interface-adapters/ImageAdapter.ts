/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable-next-line import/no-unresolved */

import Image from '../entities/Image';
import ImageDtoMany from './DTO/ImageDtoMany';

const ImageAdapter = {

  async dtoMany(data: Image[]): Promise<ImageDtoMany> {
    const response = {
      total: data.length,
      data,
    };

    return response;
  },
};

export default ImageAdapter;
