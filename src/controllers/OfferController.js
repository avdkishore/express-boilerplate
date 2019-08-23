module.exports = {
  /**
   *  Find all the offers available
   * @param {*} req
   * @param {*} res
   * @returns
   */
  find: async (req, res) => {
    const customer = req.query.customer;

    if (!customer) return res.ok([]);

    const offers = await models.Offer.findAll({ where: { customer } });

    return res.ok(offers);
  }
};
