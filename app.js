const { createCategory } = require('./utils/crud_category.js');
const { createTag } = require('./utils/crud_tag.js');
const { createPost } = require('./utils/crud_post.js');

// Create function for categories
createCategory('gaming', (category) => console.log(`New Category: ${category}`));


// Create function for tags
createTag('casual', (tag) => console.log(tag));

// Create function for post
const newPost = {
    title: "Post 1",
    image: "https://image.com",
    content: "Description",
    published: true,
    categoryId: 3,
    tags: {
        connect:[
            {id: 1},
            {id: 5},
            {id: 8}
        ]
    },
}
createPost(newPost, (post) => console.log(post));
