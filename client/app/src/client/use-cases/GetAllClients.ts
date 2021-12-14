/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import Client from '../entities/Client';
import ClientRepository from './ClientRepository';

export default class GetAllClients {
  private clientRepository: ClientRepository;

  constructor(clientRepository: ClientRepository) {
    this.clientRepository = clientRepository;
  }

  async getAll(): Promise<Client[]> {
    const allClients = await this.clientRepository.findAll();
    return allClients;
  }
}
