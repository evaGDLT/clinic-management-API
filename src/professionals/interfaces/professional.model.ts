import { Document } from 'mongoose';

export interface Professional extends Document{
    type: string;
    personalData: {
        medicalBoardNumber: string;
        firstName: string;
        lastName: string;
        secondLastName?: string;
        gender?: string;
        birthdate?: string;
        NIF?: string;
        professionalType?: professional
    };
    address?: Address;
}

export interface Address{
    street: string;
    number: string;
    door: string;
    postalCode: string;
    city: string;
}
type professional= 'medico' | 'enfermero' | 'administrativo';
