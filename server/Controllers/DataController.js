// controllers/userController.js

const Products = require('../models/schema');

async function getAllProducts(req, res) {
    try {
      let query = {};
  
      // Check if there's a search query
      if (req.query.search) {
        const searchRegex = new RegExp(req.query.search, 'i');
        query.$or = [
          { title: searchRegex },
          { description: searchRegex },
          { price: searchRegex }
        ];
      }
  
      // Pagination options
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 10;
      const skip = (page - 1) * limit;
  
      // Fetch users based on query and pagination options
      const users = await Products.find(query)
        .skip(skip)
        .limit(limit);
  
      res.json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  }
  


module.exports = {
    getAllProducts
};
