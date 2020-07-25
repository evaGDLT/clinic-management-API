import * as mongoose from 'mongoose';

export const professionalSchema =new mongoose.Schema({
    type: String,
    personalData: {
        medicalBoardNumber: {type: String, required:true},
        firstName: {type: String, required:true},
        lastName: {type: String, required:true},
        secondLastName: String,
        gender: String,
        birthdate: String,
        NIF: String,
        professionalType: mongoose.Schema.Types.Mixed
    },
    address: {
        street: String,
        number: String,
        door: String,
        postalCode: String,
        city: String
    },
    createdAt: {
        type:Date,
        default: Date.now
    }
})