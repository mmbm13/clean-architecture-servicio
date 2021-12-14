/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { Request, Response } from 'express';
import DbImageRepository from '../ormMongoose/DbImageRepository';
import CrudImage from '../../use-cases/CrudImage';
import ImageAdapter from '../../interface-adapters/ImageAdapter';

const db = new DbImageRepository();
const useCrud = new CrudImage(db);

const imageController = {
  index: async (req: Request, res: Response) => {
    try {
      const all = await useCrud.getAll();
      const response = await ImageAdapter.dtoMany(all);
      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).json(error);
    }
  },

  create: async (req: Request, res: Response) => {
    try {
      const newImage = await useCrud.create(req.body);
      return res.status(200).json(newImage);
    } catch (error) {
      return res.status(500).json(error);
    }
  },

  update: async (req: Request, res: Response) => {
    try {
      const image = await useCrud.edit(req.params.id, req.body);
      if (image) {
        return res.status(200).json(image);
      }
      return res.status(404).json({ message: 'No se ha encontrado ninguna imagen' });
    } catch (error) {
      return res.status(500).json(error);
    }
  },

  show: async (req: Request, res: Response) => {
    try {
      const image = await useCrud.detail(req.params.id);
      if (image) {
        return res.status(200).json(image);
      }
      return res.status(404).json({ message: 'No se ha encontrado ninguna imagen' });
    } catch (error) {
      return res.status(500).json(error);
    }
  },

  destroy: async (req: Request, res: Response) => {
    try {
      const image = await useCrud.delete(req.params.id);

      if (!image) {
        return res.status(200).json({ message: 'Imagen eliminado' });
      }
      return res.status(404).json({ message: 'No se ha encontrado ninguna imagen' });
    } catch (error) {
      return res.status(500).json(error);
    }
  },
};

export default imageController;
