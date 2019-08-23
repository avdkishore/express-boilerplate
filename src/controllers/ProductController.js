module.exports = {
  find: async (req, res) => {
    const products = await models.Product.findAll();

    return res.ok(products);
  }
};
