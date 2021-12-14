/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
// eslint-disable-next-line import/no-unresolved
import Client, { AddClientParams } from '../entities/Client';

interface ClientRepository {
  findAll(): Promise<Client[]>;
  createClient(payload: AddClientParams): Promise<Client>;
  editClient(id: number, payload?: AddClientParams): Promise<boolean>;
  detailClient(id: number): Promise<Client | null>;
  queryIdentification(idIdentification: number, identification: string): Promise<Client | null>;
  queryAge(age: Date): Promise<Client[]>;
  deleteClient(id: number): Promise<boolean>;
}

export default ClientRepository;
