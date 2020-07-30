import { Document } from 'mongoose';
export interface Professional extends Document {
    type: string;
    personalData: {
        medicalBoardNumber: string;
        firstName: string;
        lastName: string;
        secondLastName?: string;
        gender?: string;
        birthdate?: string;
        NIF?: string;
        professionalType?: professional;
    };
    address?: Address;
}
export interface Address {
    street: string;
    number: string;
    door: string;
    postalCode: string;
    city: string;
}
export declare type professional = 'medico' | 'enfermero' | 'administrativo';
export declare const addressApi: {
    type: string;
    properties: {
        street: {
            type: string;
        };
        number: {
            type: string;
        };
        door: {
            type: string;
        };
        postalCode: {
            type: string;
        };
        city: {
            type: string;
        };
    };
};
export declare const personalDataApi: {
    type: string;
    properties: {
        medicalBoardNumber: {
            type: string;
        };
        firstName: {
            type: string;
        };
        lastName: {
            type: string;
        };
        secondLastName: {
            type: string;
        };
        gender: {
            type: string;
        };
        birthdate: {
            type: string;
        };
        NIF: {
            type: string;
        };
        professionalType: {
            type: string;
        };
    };
};
