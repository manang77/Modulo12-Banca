const dayValidatorType = 'DAY_VALIDATOR';
export const dayValidator = (validatorArgs) => {
  const { value } = validatorArgs;
  const dayValidationResult = {
    succeeded: false,
    type: dayValidatorType,
    message: 'El campo debe ser un valor valido de dia del mes',
  };
  if (
    !isNaN(parseInt(value)) &&
    parseInt(value) >= 1 &&
    parseInt(value) <= 31
  ) {
    dayValidationResult.succeeded = true;
    dayValidationResult.message = '';
  }
  return dayValidationResult;
};

const monthValidatorType = 'MONTH_VALIDATOR';
export const monthValidator = (validatorArgs) => {
  const { value } = validatorArgs;
  const monthValidationResult = {
    succeeded: false,
    type: monthValidatorType,
    message: 'El campo debe ser un valor valido de mes',
  };
  if (
    !isNaN(parseInt(value)) &&
    parseInt(value) >= 1 &&
    parseInt(value) <= 12
  ) {
    monthValidationResult.succeeded = true;
    monthValidationResult.message = '';
  }
  return monthValidationResult;
};

const isValidYear = (year) => year && year >= new Date().getFullYear();

const yearValidatorType = 'YEAR_VALIDATOR';
export const yearValidator = (validatorArgs) => {
  const { value } = validatorArgs;
  const yearValidationResult = {
    succeeded: false,
    type: yearValidatorType,
    message: 'El campo debe ser un valor valido de año',
  };
  // if (!isNaN(parseInt(value)) && parseInt(value) >= new Date().getFullYear()) {
  if (isValidYear(value)) {
    yearValidationResult.succeeded = true;
    yearValidationResult.message = '';
  }
  return yearValidationResult;
};

const isValidMonth = (month) => month && month >= 1 && month <= 12;
const isLeapYear = (year) =>
  year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);
const isValidDay = (day, month, year) => {
  var monthLength = [
    31,
    isLeapYear(year) ? 29 : 28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31,
  ];
  return day > 0 && day <= monthLength[month - 1];
};
const splitDateInParts = (date) => {
  const parts = date.split('/');
  return {
    day: parseInt(parts[0]),
    month: parseInt(parts[1]),
    year: parseInt(parts[2]),
  };
};

const dateValidatorType = 'DATE_VALIDATOR';
export const dateValidator = (validatorArgs) => {
  const { value } = validatorArgs;
  const dateValidationResult = {
    succeeded: false,
    type: dateValidatorType,
    message: 'Debe introducir una fecha valida',
  };

  if (value && value.length >= 8 && value.length <= 10) {
    const dateInParts = splitDateInParts(value);
    if (
      isValidYear(dateInParts.year) &&
      isValidMonth(dateInParts.month) &&
      isValidDay(dateInParts.day, dateInParts.month, dateInParts.year) &&
      new Date(dateInParts.year, dateInParts.month - 1, dateInParts.day) >=
        new Date() - 1
    ) {
      dateValidationResult.succeeded = true;
      dateValidationResult.message = '';
    }
  }
  return dateValidationResult;
};

const amountValidatorType = 'AMOUNT_VALIDATOR';
export const amountValidator = (validatorArgs) => {
  const { value } = validatorArgs;
  const amountValidationResult = {
    succeeded: false,
    type: amountValidatorType,
    message: 'El campo debe ser un valor numerico válido',
  };
  if (!isNaN(parseFloat(value))) {
    amountValidationResult.succeeded = true;
    amountValidationResult.message = '';
  }
  return amountValidationResult;
};
