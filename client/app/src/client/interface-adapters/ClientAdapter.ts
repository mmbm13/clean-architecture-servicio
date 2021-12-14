/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable-next-line import/no-unresolved */

import Client from '../entities/Client';
import ClientDtoMany from '../use-cases/DTO/ClientDtoMany';

const ClientAdapter = {

  async findAll(data: Client[]): Promise<ClientDtoMany> {
    const response = {
      total: data.length,
      data,
    };

    return response;
  },
};

export default ClientAdapter;
