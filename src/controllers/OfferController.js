module.exports = {
  find: async (req, res) => {
    const customer = req.query.customer;

    if (!customer) return res.ok([]);

    const offers = await models.Offer.findAll({ where: { customer } });

    return res.ok(offers);
  }
};
