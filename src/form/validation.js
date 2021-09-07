// import isEmail from '../../../../../../../../../Ezequiel/AppDataLocal/Microsoft/TypeScript/4.4/node_modules/@types/validator/lib/isEmail'
import isEmail from 'validator/lib/isEmail';

export function email(value) {
  return value && !isEmail(value.trim()) ? 'Invalid email' : null;
}

function isDirty(value) {
  return value || value === 0;
}

export function required(requiredFields, values) {
  return requiredFields.reduce(
    (fields, field) => ({
      ...fields,
      ...(isDirty(values[field]) ? undefined : { [field]: 'Required' }),
    }),
    {},
  );
}
