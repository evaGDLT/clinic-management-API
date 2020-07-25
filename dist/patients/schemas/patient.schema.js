"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.patientSchema = void 0;
const mongoose = require("mongoose");
exports.patientSchema = new mongoose.Schema({
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
    issurances: [],
    createdAt: {
        type: Date,
        default: Date.now
    }
});
//# sourceMappingURL=patient.schema.js.map