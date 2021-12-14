/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable-next-line import/no-unresolved */
import Client, { AddClientParams } from '../entities/Client';
import ClientRepository from './ClientRepository';

export default class CreateClient {
  private ClientRepository: ClientRepository;

  constructor(ClientRepositorya: ClientRepository) {
    this.ClientRepository = ClientRepositorya;
  }

  async createClient(payload: AddClientParams): Promise<Client> {
    const newClient = await this.ClientRepository.createClient(payload);
    return newClient;
  }
}
