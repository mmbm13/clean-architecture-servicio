/* eslint-disable class-methods-use-this */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable-next-line import/no-unresolved */

import { Op } from 'sequelize';
import ClientRepository from '../../use-cases/ClientRepository';
import Client from './models/Client';
import ClientEntity, { AddClientParams } from '../../entities/Client';

class DbClientRepository implements ClientRepository {
  public async findAll(): Promise<ClientEntity[]> {
    const all = await Client.findAll({
      include: 'identificationType',
      attributes: { exclude: ['identificationTypeId'] },
    });
    return all;
  }

  public async createClient(payload: AddClientParams): Promise<ClientEntity> {
    const newClient = await Client.create(payload);
    return newClient;
  }

  public async editClient(id: number, payload: AddClientParams): Promise<boolean> {
    const operation = await Client.update(payload, {
      where: {
        id,
      },
      limit: 1,
    });
    return !operation[0];
  }

  public async detailClient(id: number): Promise<Client | null> {
    const clientFinded = await Client.findByPk(
      id,
      {
        include: 'identificationType',
        attributes: { exclude: ['identificationTypeId'] },
      },
    );
    return clientFinded;
  }

  public async queryIdentification(idIdentification: number, identification: string):
  Promise<Client | null> {
    const clientFinded = await Client.findOne({
      where: {
        identificationTypeId: idIdentification,
        identification,
      },
      include: 'identificationType',
      attributes: { exclude: ['identificationTypeId'] },
    });
    return clientFinded;
  }

  public async queryAge(age: Date): Promise<Client[]> {
    const clientes = await Client.findAll({
      include: 'identificationType',
      attributes: { exclude: ['identificationTypeId'] },
      where: {
        date: {
          [Op.lte]: age,
        },
      },
    });
    return clientes;
  }

  public async deleteClient(id: number): Promise<boolean> {
    const operation = await Client.destroy({
      where: {
        id,
      },
    });
    return !operation;
  }
}

export default DbClientRepository;
