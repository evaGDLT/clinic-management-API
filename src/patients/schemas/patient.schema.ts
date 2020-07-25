import * as mongoose from 'mongoose';

export const patientSchema =new mongoose.Schema({
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
    issurances:  [], 
    createdAt: {
        type:Date,
        default: Date.now
    }
})