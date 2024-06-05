const slugify = require('slugify')
const prisma = require('./prismaClient.js');


const createPost = (post, callback) => {
    const {title} = post;
    const slug = slugify(title, {lower: true});
    post.slug = slug;
    prisma.post
        .create({data: post})
        .then(p => callback(p))
        .catch(err => console.error(err));
}

module.exports = {
    createPost,
}
