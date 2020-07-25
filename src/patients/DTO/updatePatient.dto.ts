export class UpdatePatientDto {
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
export class Address {
    street: string;
    number: string;
    door: string;
    postalCode: string;
    city: string;
}

export class Issurance {
    cardNumber: number;
    name: string;
    type: issurance;
}
type issurance = 'salud' | 'familia' | 'dental';