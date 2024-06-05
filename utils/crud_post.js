const { makeSlug } = require('./utils.js');
const prisma = require('./prismaClient.js');


const createPost = (post, callback) => {
    post.slug = makeSlug(post.title);
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

const updatePost = (slug, newData, callback) => {
    newData.slug = makeSlug(newData.title);
    prisma.post
        .update({
            where: {
                slug: slug
            },
            data: newData
        })
        .then(up => callback(up))
        .catch(err => console.error(err));
}

const deletePost = (slug, callback) => {
    prisma.post
        .delete({
            where: {
                slug: slug
            }
        })
        .then(dp => callback(dp))
        .catch(err => console.error(err))
}

module.exports = {
    createPost,
    showPost,
    indexPost,
    updatePost,
    deletePost
}
