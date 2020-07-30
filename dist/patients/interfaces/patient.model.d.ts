import { Document } from 'mongoose';
export interface Patient extends Document {
    type: string;
    personalData: {
        NHC: string;
        firstName: string;
        lastName: string;
        secondLastName?: string;
        gender?: string;
        birthdate?: string;
        NIF?: string;
    };
    address?: Address;
    issurances?: Issurance[];
}
export interface Address {
    street: string;
    number: string;
    door: string;
    postalCode: string;
    city: string;
}
export interface Issurance {
    cardNumber: number;
    name: string;
    type: issurance;
}
declare type issurance = 'salud' | 'familia' | 'dental';
export declare const issuranceApi: {
    type: string;
    properties: {
        cardNumber: {
            type: string;
        };
        name: {
            type: string;
        };
        type: {
            type: string;
        };
    };
};
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
        NHC: {
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
    };
};
export {};
