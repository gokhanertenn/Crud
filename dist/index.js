"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const client_1 = require("@prisma/client");
const categories_route_1 = __importDefault(require("./modules/categories.route"));
const prisma = new client_1.PrismaClient({ log: ["error", "info", "warn", "query"] });
const app = (0, fastify_1.default)({
    logger: true
});
app.register(categories_route_1.default);
app.listen({ port: 8080 }, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Server listening at ${address}`);
});
//# sourceMappingURL=index.js.map