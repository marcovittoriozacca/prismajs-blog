const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();


const createCategory = (category, callback) => {
    prisma.category
        .create({
            data: {
                name: category
            }
        })
        .then(c => callback(c))
        .catch(err => console.error(err));
}

module.exports = {
    createCategory,
}