/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { AddClientParams } from '../entities/Client';
import ClientRepository from './ClientRepository';

export default class EditClient {
  private ClientRepository: ClientRepository;

  constructor(ClientRepositorya: ClientRepository) {
    this.ClientRepository = ClientRepositorya;
  }

  async editClient(id: number, payload?: AddClientParams): Promise<boolean> {
    const response = await this.ClientRepository.editClient(id, payload);
    return response;
  }
}
