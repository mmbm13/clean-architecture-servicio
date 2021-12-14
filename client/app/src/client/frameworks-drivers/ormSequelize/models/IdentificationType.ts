/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable @typescript-eslint/no-empty-interface */
import { Model, Optional, DataTypes as dataTypes } from 'sequelize';
// eslint-disable-next-line import/no-unresolved
import { sequelize } from '.';
import IdentificationAttributes from '../../../entities/IdentificationType';

interface IdentificationCreationAttributes extends Optional<IdentificationAttributes, 'id'> { }

interface IdentificationInstance
  extends Model<IdentificationAttributes, IdentificationCreationAttributes> { }

const IdentificationType = sequelize.define<IdentificationInstance>(
  'IdentificationType',
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
  },
  {
    tableName: 'identificationType',
    timestamps: false,
  },
);

export default IdentificationType;
