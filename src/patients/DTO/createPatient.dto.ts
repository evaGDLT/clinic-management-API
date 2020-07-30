import { ApiProperty } from "@nestjs/swagger";
import { personalDataApi, issuranceApi, addressApi } from '../interfaces/patient.model'

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
export class CreatePatientDto {
    @ApiProperty({
        description: "Tipo de usuario (paciente)"
    })
    type: string;
    @ApiProperty(personalDataApi)
    personalData: {
        NHC: string;
        firstName: string;
        lastName: string;
        secondLastName?: string;
        gender?: string;
        birthdate?: string;
        NIF?: string;
    };
    @ApiProperty(issuranceApi)
    issurances?: Issurance[];
    @ApiProperty(addressApi)
    address?: Address;
}
type issurance = 'salud' | 'familia' | 'dental';