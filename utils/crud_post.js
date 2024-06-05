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

const showPost = (slug, callback) => {
    prisma.post
        .findUnique({
            where: {
                slug: slug
            },
            include: {
                category: {
                    select: {
                        name: true,
                    }
                },
                tags: {
                    select: {
                        name: true,
                    }
                },
            }
        })
        .then(pf => callback(pf))
        .catch(err => console.error(err))
}

const indexPost = (callback) => {
    prisma.post
        .findMany()
        .then(p => callback(p))
        .catch(err => console.error(err));
}

module.exports = {
    createPost,
    showPost,
    indexPost,
}
