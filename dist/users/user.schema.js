"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchema = void 0;
const mongoose = require("mongoose");
exports.userSchema = new mongoose.Schema({
    type: String,
    personalData: {
        NHC: String,
        medicalBoardNumber: String,
        firstName: String,
        lastName: String,
        secondLastName: String,
        gender: String,
        birthdate: String,
        NIF: String,
        professionalType: String,
    },
    address: {
        street: String,
        number: String,
        door: String,
        postalCode: String,
        city: String
    },
    issurances: [
        {
            cardNumber: Number,
            name: String,
            type: String,
        }
    ],
});
//# sourceMappingURL=user.schema.js.map