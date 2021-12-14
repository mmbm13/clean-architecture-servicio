/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable-next-line import/no-unresolved */
import Client from '../entities/Client';
import ClientRepository from './ClientRepository';

export default class DetailClient {
  private ClientRepository: ClientRepository;

  constructor(ClientRepositorya: ClientRepository) {
    this.ClientRepository = ClientRepositorya;
  }

  async detailClient(id: number): Promise<Client | null> {
    const clientFinded = await this.ClientRepository.detailClient(id);
    return clientFinded;
  }
}
