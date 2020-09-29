import {
  onUpdateField,
  onSubmitForm,
  onSetError,
  onSetFormErrors,
} from '../../common/helpers';
import { isValidLogin } from './login.api';
import { formValidation } from './login.validations';
import { routes, history } from '../../core/router';

let login = {
  user: '',
  password: '',
};

onUpdateField('user', (event) => {
  const value = event.target.value;
  login = { ...login, user: value };
  formValidation.validateField('user', login.user).then((result) => {
    onSetError('user', result);
  });
});

onUpdateField('password', (event) => {
  const value = event.target.value;
  login = { ...login, password: value };
  formValidation.validateField('password', login.password).then((result) => {
    onSetError('password', result);
  });
});

const onNavigate = (isValid) => {
  if (isValid) {
    history.push(routes.accountList);
  } else {
    alert('Usuario y/o contraseña invalidos');
  }
};

onSubmitForm('login-button', () => {
  formValidation.validateForm(login).then((result) => {
    onSetFormErrors(result);
    if (result.succeeded) {
      isValidLogin(login).then((isValid) => {
        onNavigate(isValid);
      });
    }
  });
});
