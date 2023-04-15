const client = require("../../../../config/pg");

module.exports = {
  //fetching all the posts
  async find(ctx) {
    try {
      const query = `
      SELECT * from organization_users;
    `;

      const data = await client.query(query);

      ctx.send({
        data: data.rows,
      });
    } catch (error) {
      console.log(error);
    }
  },
}