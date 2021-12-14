/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { Router } from 'express';
import clientController from '../controllers/clientController';

const ClientRouter = Router();

ClientRouter.route('/')
  .get(clientController.index);

ClientRouter.route('/crear')
  .post(clientController.create);

ClientRouter.route('/editar/:id')
  .put(clientController.update);

ClientRouter.route('/detalle/:id')
  .get(clientController.show);

ClientRouter.route('/consulta/:tipo/:ident')
  .get(clientController.consulta);

ClientRouter.route('/consultaEdad/:edad/')
  .get(clientController.consultaEdad);

ClientRouter.route('/eliminar/:id')
  .delete(clientController.destroy);

export default ClientRouter;
