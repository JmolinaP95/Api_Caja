import { Caja } from "../models/Caja.js";

export async function getCajas(req, res) {
  try {
    const cajas = await Caja.findAll({
      attributes: ["id_caja", "fecha", "descripcion", "estado_registro", "usuario_ingreso", "fecha_ingreso", "ip_ingreso", "fecha_modificacion", "usuario_modificacion", "ip_modificacion"],
    });
    res.json(cajas);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

export async function createCaja(req, res) {
  const { fecha, descripcion, estado_registro, usuario_ingreso, fecha_ingreso, ip_ingreso, fecha_modificacion, usuario_modificacion, ip_modificacion } = req.body;
  try {
    let newCaja = await Caja.create(
      {
        fecha,
        descripcion,
        estado_registro,
        usuario_ingreso,
        fecha_ingreso,
        ip_ingreso,
        fecha_modificacion,
        usuario_modificacion,
        ip_modificacion,
      },
      {
        fields: ["fecha", "descripcion", "estado_registro", "usuario_ingreso", "fecha_ingreso", "ip_ingreso", "fecha_modificacion", "usuario_modificacion", "ip_modificacion"],
      }
    );
    return res.json(newCaja);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

export async function getCaja(req, res) {
  const { id } = req.params;
  try {
    const caja = await Caja.findOne({
      where: {
        id_caja: id,
      },
    });
    res.json(caja);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

export const updateCaja = async (req, res) => {
  try {
    const { id } = req.params;
    const { fecha, descripcion, estado_registro, usuario_ingreso, fecha_ingreso, ip_ingreso, fecha_modificacion, usuario_modificacion, ip_modificacion } = req.body;

    const caja = await Caja.findByPk(id);
    caja.fecha = fecha;
    caja.descripcion = descripcion;
    caja.estado_registro = estado_registro;
    caja.usuario_ingreso = usuario_ingreso;
    caja.fecha_ingreso = fecha_ingreso;
    caja.ip_ingreso = ip_ingreso;
    caja.fecha_modificacion = fecha_modificacion;
    caja.usuario_modificacion = usuario_modificacion;
    caja.ip_modificacion = ip_modificacion;
    
    await caja.save();

    res.json(caja);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export async function deleteCaja(req, res) {
  const { id } = req.params;
  try {
    await Caja.destroy({
      where: {
        id_caja: id,
      },
    });
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}