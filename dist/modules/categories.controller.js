"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCategory = exports.deleteCategory = exports.getCategoryListings = exports.createCategory = exports.getCategories = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient({ log: ['error', 'info', 'warn', 'query'] });
// Tüm kategorileri getiren işlev
const getCategories = (req, reply) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const categories = yield prisma.categories.findMany();
        reply.send(categories);
    }
    catch (error) {
        console.error(error);
        reply.status(500).send('Server error');
    }
});
exports.getCategories = getCategories;
// Yeni bir kategori oluşturan işlev
const createCategory = (req, reply) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, picture } = req.body;
    try {
        const category = yield prisma.categories.create({
            data: { name, picture },
        });
        reply.send(category);
    }
    catch (error) {
        console.error(error);
        reply.status(500).send('Server error');
    }
});
exports.createCategory = createCategory;
// İlgili kategoriye ait ilanları getiren işlev
const getCategoryListings = (req, reply) => __awaiter(void 0, void 0, void 0, function* () {
    const categoryId = parseInt(req.params.id);
    try {
        const listings = yield prisma.listings.findMany({
            where: { category_id: categoryId },
        });
        reply.send(listings);
    }
    catch (error) {
        console.error(error);
        reply.status(500).send('Server error');
    }
});
exports.getCategoryListings = getCategoryListings;
const deleteCategory = (req, reply) => __awaiter(void 0, void 0, void 0, function* () {
    const categoryId = parseInt(req.params.id);
    try {
        const deletedCategory = yield prisma.categories.delete({
            where: { id: categoryId },
        });
        reply.send(deletedCategory);
    }
    catch (error) {
        console.error(error);
        reply.status(500).send('Server error');
    }
});
exports.deleteCategory = deleteCategory;
const updateCategory = (req, reply) => __awaiter(void 0, void 0, void 0, function* () {
    const categoryId = parseInt(req.params.id);
    const { name } = req.body;
    try {
        const updatedCategory = yield prisma.categories.update({
            where: { id: categoryId },
            data: { name },
        });
        reply.send(updatedCategory);
    }
    catch (error) {
        console.error(error);
        reply.status(500).send('Error updating category');
    }
});
exports.updateCategory = updateCategory;
//# sourceMappingURL=categories.controller.js.map