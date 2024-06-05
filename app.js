const { createCategory } = require('./utils/crud_category.js');

// Create function for categories

createCategory('gaming', (category) => console.log(`New Category: ${category}`));
