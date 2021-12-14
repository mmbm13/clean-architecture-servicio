/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { Router } from 'express';
import clientController from '../controllers/imageController';

const ImageRouter = Router();

ImageRouter.route('/')
  .get(clientController.index);

ImageRouter.route('/crear')
  .post(clientController.create);

ImageRouter.route('/editar/:id')
  .put(clientController.update);

ImageRouter.route('/detalle/:id')
  .get(clientController.show);

ImageRouter.route('/eliminar/:id')
  .delete(clientController.destroy);

export default ImageRouter;
