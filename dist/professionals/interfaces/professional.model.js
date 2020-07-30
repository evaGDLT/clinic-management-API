"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.personalDataApi = exports.addressApi = void 0;
exports.addressApi = {
    type: 'object',
    properties: {
        street: { type: 'string' },
        number: { type: 'string' },
        door: { type: 'string' },
        postalCode: { type: 'string' },
        city: { type: 'string' }
    }
};
exports.personalDataApi = {
    type: 'object',
    properties: {
        medicalBoardNumber: { type: 'string' },
        firstName: { type: 'string' },
        lastName: { type: 'string' },
        secondLastName: { type: 'string' },
        gender: { type: 'string' },
        birthdate: { type: 'string' },
        NIF: { type: 'string' },
        professionalType: { type: 'string' }
    }
};
//# sourceMappingURL=professional.model.js.map