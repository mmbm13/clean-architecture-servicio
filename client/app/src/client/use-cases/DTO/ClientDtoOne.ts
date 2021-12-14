/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import IdentificationType from '../../entities/IdentificationType';

interface ClientDtoOne {
  id: number,
  name: string,
  lastName: string,
  identification: string,
  date: Date,
  city: string,
  image?: string,
  identificationType?: IdentificationType
}

export default ClientDtoOne;
