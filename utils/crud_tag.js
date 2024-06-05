const prisma = require('./prismaClient.js');

const createTag = (tag, callback) => {
    prisma.tag
        .create({
            data:{
                name: tag
            }
        })
        .then(t => callback(t))
        .catch(err => console.error(err));
}

module.exports = {
    createTag,
}