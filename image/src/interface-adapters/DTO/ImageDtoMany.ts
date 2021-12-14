/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import Image from '../../entities/Image';

interface ImageDtoMany {
  total: number,
  data: Array<Image>
}

export default ImageDtoMany;
