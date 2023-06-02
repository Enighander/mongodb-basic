const Product = require('./model');

const productController = {
  getAllProductWithQuery: (req, res) => {
    const name = req.query.name || '';

    Product.find({ name: { $regex: name, $options: 'i' } })

      .then((result) => res.send(result))
      .catch((error) => res.send(error));
  },

  getDetailProduct: (req, res) => {
    const { id } = req.params;
    Product.find({ _id: id })
      .then((result) => res.send(result))
      .catch((error) => res.send(error));
  },

  CreateProduct: (req, res) => {
    const { name, stock, price, status } = req.body;

    Product.create({ name, stock, price, status })
      .then((result) =>
        res.send({
          message: 'berhasil menambah data',
          result,
        })
      )
      .catch((error) => res.send(error));
  },

  UpdateProduct: (req, res) => {
    const { id } = req.params;
    const { name, stock, price, status } = req.body;

    Product.updateOne({ _id: id }, { $set: { name, stock, price, status } })
      .then((result) =>
        res.send({
          message: 'berhasil update data',
          result,
        })
      )
      .catch((error) => res.send(error));
  },

  DeleteProduct: (req, res) => {
    const { id } = req.params;

    Product.deleteOne({ _id: id })
      .then((result) =>
        res.send({
          message: 'berhasil menghapus data',
          result,
        })
      )
      .catch((error) => res.send(error));
  },
};

module.exports = productController;
