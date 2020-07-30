import { ApiProperty } from "@nestjs/swagger";
import { personalDataApi, addressApi } from '../interfaces/professional.model'

export class Address {
    street: string;
    number: string;
    door: string;
    postalCode: string;
    city: string;
}
export class CreateProfessionalDto {
    @ApiProperty({
        description: "Tipo de usuario (paciente)",
        type: 'string'
    })
    type: string;
    @ApiProperty(personalDataApi)
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
    @ApiProperty(addressApi)
    address?: Address;
}
type professional = 'medico' | 'enfermero' | 'administrativo';