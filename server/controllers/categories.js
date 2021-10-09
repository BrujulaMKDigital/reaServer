import db from "../../config/database";

const getAllCategories = async (req, res) => {
  try {
    const { limit } = req.query;

    

    const findCategories = await db.getConnection(function (err, connection) {
      if (err) throw err; // not connected!

      // Use the connection
      connection.query(
        `SELECT * FROM cat_articulos LIMIT ${limit};`,
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

export { getAllCategories };
