/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable-next-line import/no-unresolved */
import ClientRepository from './ClientRepository';

export default class DeleteClient {
  private ClientRepository: ClientRepository;

  constructor(ClientRepositorya: ClientRepository) {
    this.ClientRepository = ClientRepositorya;
  }

  async deleteClient(id: number): Promise<boolean> {
    const client = await this.ClientRepository.deleteClient(id);
    return client;
  }
}
