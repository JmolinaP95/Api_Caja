import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";


export const Caja = sequelize.define(
  "cajas",
  {
    id_caja: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    fecha: {
      type: DataTypes.DATE,
    },
    descripcion: {
      type: DataTypes.STRING(100),
    },
    estado_registro: {
      type: DataTypes.INTEGER,
    },
    usuario_ingreso: {
      type: DataTypes.STRING(20),
    },
    fecha_ingreso: {
      type: DataTypes.DATE,
    },
    ip_ingreso: {
      type: DataTypes.STRING(50),
    },
    fecha_modificacion: {
      type: DataTypes.DATE,
    },
    usuario_modificacion: {
      type: DataTypes.STRING(20),
    },
    ip_modificacion: {
      type: DataTypes.STRING(50),
    },
  },
  {
    timestamps: false,
  }
);
