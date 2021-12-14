/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import moment from 'moment';
import Client from '../entities/Client';
import ClientRepository from './ClientRepository';

export default class QueryAge {
  private clientRepository: ClientRepository;

  constructor(clientRepository: ClientRepository) {
    this.clientRepository = clientRepository;
  }

  async queryAge(age: number): Promise<Client[]> {
    const ageDate = moment().subtract(age, 'years').toDate();
    const allClients = await this.clientRepository.queryAge(ageDate);
    return allClients;
  }
}
