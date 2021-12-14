/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import Client from '../entities/Client';
import ClientRepository from './ClientRepository';

export default class QueryIdentification {
  private clientRepository: ClientRepository;

  constructor(clientRepository: ClientRepository) {
    this.clientRepository = clientRepository;
  }

  async queryIdentification(idIdentification: number, identification: string):
   Promise<Client | null> {
    const client = await this.clientRepository
      .queryIdentification(idIdentification, identification);
    return client;
  }
}
