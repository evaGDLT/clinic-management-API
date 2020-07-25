export class CreateProfessionalDto {
    // _id: string;
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
export class Address {
    street: string;
    number: string;
    door: string;
    postalCode: string;
    city: string;
}
type professional = 'medico' | 'enfermero' | 'administrativo';