import db from "../../config/database";
import { isEmpty } from "../utils/nativeMethods";
import { articuloNotFound } from "../utils/constans";

const getAllArtLines = async (req, res) => {
  try {
    const { limit } = req.query;

    const findCategories = await db.getConnection(function (err, connection) {
      if (err) throw err; // not connected!

      // Use the connection
      connection.query(
        `SELECT IdLinea, Descripcion FROM articulos_lineas LIMIT ${limit};`,
        function (error, results, fields) {
          // When done with the connection, release it.

          let count = results.length;

          let response = {
            count,
            results,
          };

          res.status(200).send(response);
          connection.release();

          // Handle error after the release.
          if (error) throw error;

          // Don't use the connection here, it has been returned to the pool.
        }
      );
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send(error.message);
  }
};

const getArtLineasParents = async (req, res) => {
  try {
    const { limit } = req.query;

    const field = null;

    const findCategories = await db.getConnection(function (err, connection) {
      if (err) throw err; // not connected!

      // Use the connection
      connection.query(
        `SELECT * FROM articulos_lineas WHERE IdPadre IS NULL;`,
        function (error, results, fields) {
          // When done with the connection, release it.

          let count = results.length;

          let response = {
            count,
            results,
          };

          res.status(200).send(response);
          connection.release();

          // Handle error after the release.
          if (error) throw error;
          // Don't use the connection here, it has been returned to the pool.
        }
      );
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send(error.message);
  }
};

const getArtLineasByIdPadre = async (req, res) => {
  try {
    const { IdPadre } = req.params;

    const field = null;

    const findCategories = await db.getConnection(function (err, connection) {
      if (err) throw err; // not connected!

      // Use the connection
      connection.query(
        `SELECT * FROM articulos_lineas WHERE IdPadre = '${IdPadre}';`,
        function (error, results, fields) {
          // When done with the connection, release it.

          let count = results.length;

          let response = {
            count,
            results,
          };

          res.status(200).send(response);
          connection.release();

          // Handle error after the release.
          if (error) throw error;
          // Don't use the connection here, it has been returned to the pool.
        }
      );
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send(error.message);
  }
};

const getCatArticulosByIdLinea = async (req, res) => {
  try {
    const { IdLinea } = req.params;

    const field = null;

    const findCategories = await db.getConnection(function (err, connection) {
      if (err) throw err; // not connected!

      // Use the connection
      connection.query(
        `SELECT  listArt.IdArticulo,
        listArt.NombreArticulo,
        listArt.DescripcionEnLinea,
        listArt.IdLinea,
        listPrice.IdPrecio, 
        listPrice.IdArticulo,
        listPrice.PrecioContado
        FROM cat_articulos listArt 
        INNER JOIN listadeprecios listPrice ON listArt.IdArticulo = listPrice.IdArticulo
        INNER JOIN imagenes_cloud_articulos img_art 
        WHERE listArt.IdLinea = '${IdLinea}';`,
        function (error, results, fields) {
          // When done with the connection, release it.

          let count = results.length;

          let response = {
            count,
            results,
          };

          res.status(200).send(response);
          connection.release();

          // Handle error after the release.
          if (error) throw error;
          // Don't use the connection here, it has been returned to the pool.
        }
      );
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send(error.message);
  }
};

const getCatArticulosByIdArticulo = async (req, res) => {
  try {
    const { IdArticulo } = req.params;

    const field = null;

    const findCategories = await db.getConnection(function (err, connection) {
      if (err) throw err; // not connected!

      // Use the connection
      connection.query(
        `SELECT * FROM cat_articulos WHERE IdArticulo = '${IdArticulo}';`,
        function (error, results, fields) {
          // When done with the connection, release it.

          if (isEmpty(results)) return res.status(404).send({});

          res.status(200).send(results[0]);
          connection.release();

          // Handle error after the release.
          if (error) throw error;
          // Don't use the connection here, it has been returned to the pool.
        }
      );
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send(error.message);
  }
};

const getImagesByIdArticulo = async (req, res) => {
  try {
    const { IdArticulo } = req.params;

    const field = null;

    const findCategories = await db.getConnection(function (err, connection) {
      if (err) throw err; // not connected!

      // Use the connection
      connection.query(
        `SELECT * FROM imagenes_cloud_articulos WHERE IdArticulo = '${IdArticulo}';`,
        function (error, results, fields) {
          // When done with the connection, release it.

          let count = results.length;

          let response = {
            count,
            results,
          };

          res.status(200).send(response);
          connection.release();

          // Handle error after the release.
          if (error) throw error;
          // Don't use the connection here, it has been returned to the pool.
        }
      );
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send(error.message);
  }
};

const getPriceByIdArticulo = async (req, res) => {
  try {
    const { IdArticulo } = req.params;

    const field = null;

    const findCategories = await db.getConnection(function (err, connection) {
      if (err) throw err; // not connected!

      // Use the connection
      connection.query(
        `SELECT * FROM listadeprecios WHERE IdArticulo = '${IdArticulo}';`,
        function (error, results, fields) {
          // When done with the connection, release it.

          let count = results.length;

          let response = {
            count,
            results,
          };

          res.status(200).send(response);
          connection.release();

          // Handle error after the release.
          if (error) throw error;
          // Don't use the connection here, it has been returned to the pool.
        }
      );
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send(error.message);
  }
};

export {
  getAllArtLines,
  getArtLineasParents,
  getArtLineasByIdPadre,
  getCatArticulosByIdLinea,
  getCatArticulosByIdArticulo,
  getImagesByIdArticulo,
  getPriceByIdArticulo,
};
