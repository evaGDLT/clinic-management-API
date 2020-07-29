"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchema = void 0;
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
exports.userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: String,
});
exports.userSchema.methods.checkPassword = async (password) => {
    let user = this;
    return await bcrypt.compare(password, user.password);
};
//# sourceMappingURL=user.schema.js.map