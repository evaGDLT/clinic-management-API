export declare class CreateDto {
    id?: string;
    type: string;
    personalData: {
        NHC?: string;
        medicalBoardNumber?: string;
        firstName: string;
        lastName: string;
        secondLastName?: string;
        gender?: string;
        birthdate?: string;
        NIF: string;
        professional?: string;
    };
    address: {
        street: string;
        number: string;
        door: string;
        postalCode: string;
        city: string;
    };
    issurances?: [{
        cardNumber: string;
        name: string;
        type: string;
    }];
}
