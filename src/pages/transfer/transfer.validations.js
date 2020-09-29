import { Validators, createFormValidation } from '@lemoncode/fonk';
import { iban } from '@lemoncode/fonk-iban-validator';
import {
  amountValidator,
  dayValidator,
  monthValidator,
  yearValidator,
  dateValidator,
} from './transfer.validations.custom';

const validationSchema = {
  field: {
    iban: [
      { validator: Validators.required, message: 'Campo requerido' },
      {
        validator: iban.validator,
        message: 'Debe introducir un código IBAN válido',
      },
    ],
    name: [{ validator: Validators.required, message: 'Campo requerido' }],
    amount: [
      { validator: Validators.required, message: 'Campo requerido' },
      { validator: amountValidator },
    ],
    concept: [{ validator: Validators.required, message: 'Campo requerido' }],
    day: [
      { validator: Validators.required, message: 'Campo requerido' },
      { validator: dayValidator },
    ],
    month: [
      { validator: Validators.required, message: 'Campo requerido' },
      { validator: monthValidator },
    ],
    year: [
      { validator: Validators.required, message: 'Campo requerido' },
      { validator: yearValidator },
    ],
    date: [{ validator: dateValidator }],
    email: [{ validator: Validators.email, message: 'Email no valido' }],
  },
};

export const formValidation = createFormValidation(validationSchema);
