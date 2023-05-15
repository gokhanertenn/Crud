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
exports.createCategoriesHandler = void 0;
const categories_service_1 = require("./categories.service");
function createCategoriesHandler(request, reply) {
    return __awaiter(this, void 0, void 0, function* () {
        const body = request.body;
        try {
            const categoriess = yield (0, categories_service_1.categories)(body);
            return reply.code(201).send(categoriess);
        }
        catch (e) {
            console.log(e);
            return reply.code(500).send(e);
        }
    });
}
exports.createCategoriesHandler = createCategoriesHandler;
//# sourceMappingURL=categories.controller.js.map