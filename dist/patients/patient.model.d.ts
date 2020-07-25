import { Document } from 'mongoose';
export interface Patient extends Document {
    type: string;
    personalData: {
        NHC?: string;
        noColegiado?: string;
        firstName: string;
        lastName: string;
        secondLastName?: string;
        gender?: string;
        birthdate?: string;
        NIF: string;
        professional?: professionalType;
    };
    address: {
        street: string;
        number: string;
        door: string;
        postalCode: string;
        city: string;
    };
    issurances?: [{
        cardNumber: number;
        name: string;
        type: issurance;
    }];
}
export interface Address {
    street: string;
    number: string;
    door: string;
    postalCode: string;
    city: string;
}
declare type issurance = 'salud' | 'familiar' | 'dental';
export interface Issurance {
    cardNumber: number;
    name: string;
    type: issurance;
}
declare type professionalType = 'Medico' | 'Enfermero' | 'Administrativo';
export {};
