const { createCategory } = require('./utils/crud_category.js');
const { createTag } = require('./utils/crud_tag.js');
const { createPost, showPost } = require('./utils/crud_post.js');

// Create function for categories
// createCategory('gaming', (category) => console.log(`New Category: ${category}`));


// Create function for tags
// createTag('casual', (tag) => console.log(tag));

// Create function for post
// const newPost = {
//     title: "Post 2",
//     image: "https://image.com",
//     content: "Description post 2",
//     published: false,
//     categoryId: 1,
//     tags: {
//         connect:[
//             {id: 1},
//             {id: 5},
//             {id: 2},
//             {id: 3},
//             {id: 20},
//         ]
//     },
// }
// createPost(newPost, (post) => console.log(post));

// Show function that returns a post based on the slug
showPost("post-2", (post) => console.log(post));