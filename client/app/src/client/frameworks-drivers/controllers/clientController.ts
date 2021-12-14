/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { Request, Response } from 'express';
import DbClientRepository from '../ormSequelize/DbClientRepository';
import GetAllClients from '../../use-cases/GetAllClients';
import CreateClient from '../../use-cases/CreateClient';
import EditClient from '../../use-cases/EditClient';
import DetailClient from '../../use-cases/DetailClient';
import QueryIdentification from '../../use-cases/QueryIdentification';
import QueryAge from '../../use-cases/QueryAge';
import DeleteClient from '../../use-cases/DeleteClient';
import ImageService from '../services/ImageService';

import ClientAdapter from '../../interface-adapters/ClientAdapter';

const db = new DbClientRepository();
const useGetAll = new GetAllClients(db);
const useCreate = new CreateClient(db);
const useEdit = new EditClient(db);
const useDetail = new DetailClient(db);
const useQueryIdent = new QueryIdentification(db);
const useQueryAge = new QueryAge(db);
const useDelete = new DeleteClient(db);
const serviceImage = new ImageService('http://localhost:3002/api/V1/imagen');

const clientController = {
  index: async (req: Request, res: Response) => {
    try {
      const all = await useGetAll.getAll();
      const response = await ClientAdapter.findAll(all);
      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).json(error);
    }
  },

  create: async (req: Request, res: Response) => {
    try {
      const photo = await serviceImage.crear(req.body.image);
      req.body.image = photo;
      const newClient = await useCreate.createClient(req.body);
      return res.status(200).json(newClient);
    } catch (error) {
      await serviceImage.eliminar(req.body.image);
      return res.status(500).json(error);
    }
  },

  update: async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);

      const response = await useEdit.editClient(id, req.body);
      if (!response) {
        return res.status(200).json({ message: 'Cliente editado exitosamente' });
      }
      return res.status(404).json({ message: 'No se ha encontrado ningun cliente o no hay ningun dato diferente' });
    } catch (error) {
      return res.status(500).json(error);
    }
  },

  show: async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);
      const client = await useDetail.detailClient(id);
      if (client) {
        return res.status(200).json(client);
      }
      return res.status(404).json({ message: 'No se ha encontrado ningun cliente' });
    } catch (error) {
      return res.status(500).json(error);
    }
  },

  consulta: async (req: Request, res: Response) => {
    try {
      const idType = Number(req.params.tipo);
      const cliente = await useQueryIdent.queryIdentification(idType, req.params.ident);
      if (cliente) {
        return res.status(200).json(cliente);
      }
      return res.status(404).json({ message: 'No se ha encontrado ningun cliente' });
    } catch (error) {
      return res.status(500).json(error);
    }
  },

  consultaEdad: async (req: Request, res: Response) => {
    try {
      const age = Number(req.params.edad);
      const clientes = await useQueryAge.queryAge(age);
      const response = await ClientAdapter.findAll(clientes);
      if (clientes.length > 0) {
        return res.status(200).json(response);
      }
      return res.status(404).json({ message: 'No se ha encontrado ningun cliente' });
    } catch (error) {
      return res.status(500).json(error);
    }
  },

  destroy: async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);
      const detailCliente = await useDetail.detailClient(id);
      const cliente = await useDelete.deleteClient(id);
      if (!cliente) {
        await serviceImage.eliminar(detailCliente?.image || '');
        return res.status(200).json({ message: 'Cliente eliminado' });
      }
      return res.status(404).json({ message: 'No se ha encontrado ningun cliente' });
    } catch (error) {
      return res.status(500).json(error);
    }
  },
};

export default clientController;
