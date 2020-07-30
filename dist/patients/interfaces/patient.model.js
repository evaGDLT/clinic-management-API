"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.personalDataApi = exports.addressApi = exports.issuranceApi = void 0;
exports.issuranceApi = {
    type: 'object',
    properties: {
        cardNumber: { type: 'string' },
        name: { type: 'string' },
        type: { type: 'string' }
    }
};
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
        NHC: { type: 'string' },
        firstName: { type: 'string' },
        lastName: { type: 'string' },
        secondLastName: { type: 'string' },
        gender: { type: 'string' },
        birthdate: { type: 'string' },
        NIF: { type: 'string' }
    }
};
//# sourceMappingURL=patient.model.js.map