"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const createCategoriesSchema = zod_1.z.object({
    name: zod_1.z.string(),
    picture: zod_1.z.string()
});
//# sourceMappingURL=categories.schema.js.map