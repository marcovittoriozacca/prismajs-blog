const { createCategory } = require('./utils/crud_category.js');
const { createTag } = require('./utils/crud_tag.js');
const { 
    createPost, 
    showPost, 
    indexPost, 
    updatePost, 
    deletePost, 
    publishedPosts,
    postsBasedOnAString
} = require('./utils/crud_post.js');

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
// showPost("post-2", (post) => console.log(post));

// Index functions that returs a list of all Posts
// indexPost(list => console.log(list))

// Update function that updates a record based on his slug
// const upPost = {
//     title: "First Post",
//     categoryId: 5,
//     tags: {
//         set:[
//             {id: 1},
//             {id: 5},
//             {id: 2},
//         ]
//     },
// }


// updatePost("post-2", upPost, (update) => console.log(update) );

// Delete function to delete a post based on the slug
// deletePost("first-post", (dp) => console.log(`Post Deleted: ${dp}`))


// BONUS: publishedPost function that returns all published post (published: true)
// publishedPosts(fp => console.log(fp));

// BONUS: list of posts that contains a given string
postsBasedOnAString("desc", (list) => console.log(list));