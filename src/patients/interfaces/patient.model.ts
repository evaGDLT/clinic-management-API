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
//type professionalType= 'Medico' | 'Enfermero' | 'Administrativo';
