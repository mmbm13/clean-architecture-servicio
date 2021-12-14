/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import ClientDtoOne from './ClientDtoOne';

interface ClientDtoMany {
  total: number,
  data: Array<ClientDtoOne>
}

export default ClientDtoMany;
