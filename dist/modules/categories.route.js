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
const categories_controller_1 = require("./categories.controller");
const routes = (app, options, done) => {
    // Tüm kategorileri getiren yol
    app.get('/categories', (req, reply) => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, categories_controller_1.getCategories)(req, reply);
    }));
    // Yeni bir kategori oluşturan yol
    app.post('/post', (req, reply) => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, categories_controller_1.createCategory)(req, reply);
    }));
    // Belirli bir kategoriye ait ilanları getiren yol
    app.get('/categories/:id/listings', (req, reply) => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, categories_controller_1.getCategoryListings)(req, reply);
    }));
    app.delete('/categories/:id', (req, reply) => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, categories_controller_1.deleteCategory)(req, reply);
    }));
    app.put('/update/:id', (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, categories_controller_1.updateCategory)(request, reply);
    }));
    done();
};
exports.default = routes;
//# sourceMappingURL=categories.route.js.map