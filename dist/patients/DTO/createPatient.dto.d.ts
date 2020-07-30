export declare class Address {
    street: string;
    number: string;
    door: string;
    postalCode: string;
    city: string;
}
export declare class Issurance {
    cardNumber: number;
    name: string;
    type: issurance;
}
export declare class CreatePatientDto {
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
    issurances?: Issurance[];
    address?: Address;
}
declare type issurance = 'salud' | 'familia' | 'dental';
export {};
