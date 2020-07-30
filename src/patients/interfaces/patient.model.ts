import { Document } from 'mongoose';

export interface Patient extends Document{
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

export interface Address{
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
type issurance = 'salud' | 'familia' | 'dental';

/**
 * Swagger API 
 */
export const issuranceApi = {
    type: 'object',
    properties:{
        cardNumber: {type: 'string'},
        name: {type: 'string'},
        type: {type: 'string'}
    }
}
export const addressApi = {
    type: 'object',
    properties: {
        street: {type: 'string'},
        number: {type: 'string'},
        door: {type: 'string'},
        postalCode: {type: 'string'},
        city: {type: 'string'}
    }
}
export const personalDataApi = {
    type: 'object',
    properties: {
        NHC: {type: 'string'},
        firstName: {type: 'string'},
        lastName: {type: 'string'},
        secondLastName: {type: 'string'},
        gender: {type: 'string'},
        birthdate: {type: 'string'},
        NIF: {type: 'string'}
    }
}
