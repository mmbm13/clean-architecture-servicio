/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable @typescript-eslint/no-empty-interface */
import { Model, Optional, DataTypes as dataTypes } from 'sequelize';
// eslint-disable-next-line import/no-unresolved
import { sequelize } from '.';
import ClientAttributes from '../../../entities/Client';
import IdentificationType from './IdentificationType';

interface ClientCreationAttributes extends Optional<ClientAttributes, 'id'> {}

class Client
  extends Model<ClientAttributes, ClientCreationAttributes>
  implements ClientAttributes {
  public id!: number;

  public name!: string;

  public lastName!: string;

  public identificationTypeId!: number;

  public identification!: string;

  public date!: Date;

  public city!: string;

  public image!: string;
}
Client.init(
  {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: {
      type: dataTypes.STRING(45),
      allowNull: false,
    },
    lastName: {
      type: dataTypes.STRING(45),
      allowNull: true,
    },
    identificationTypeId: {
      type: dataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'IdentificationType',
      },
    },
    identification: {
      type: dataTypes.STRING(45),
      allowNull: false,
    },
    date: {
      type: dataTypes.DATE,
      allowNull: false,
    },
    city: {
      type: dataTypes.STRING(45),
      allowNull: true,
    },
    image: {
      type: dataTypes.STRING(45),
      allowNull: true,
    },
  },
  {
    tableName: 'client',
    timestamps: false,
    sequelize,
  },
);

Client.belongsTo(IdentificationType, {
  as: 'identificationType',
  foreignKey: 'identificationTypeId',
});

IdentificationType.hasMany(Client, {
  sourceKey: 'id',
  as: 'clients',
  foreignKey: 'identificationTypeId',
});

export default Client;
