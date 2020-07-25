export declare class CreateProfessionalDto {
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
export declare class Address {
    street: string;
    number: string;
    door: string;
    postalCode: string;
    city: string;
}
declare type professional = 'medico' | 'enfermero' | 'administrativo';
export {};
