import { history } from '../../core/router';
import { getAccountList } from '../../common/api/account-list.api';
import {
  mapAccountsListFromApiToVM,
  mapTransferFromVmToApi,
} from './transfer.mappers';
import { setAccountOptions } from './transfer.helpers';
import {
  onUpdateField,
  onSetError,
  onSubmitForm,
  onSetFormErrors,
  setElementClass,
} from '../../common/helpers';
import { formValidation } from './transfer.validations';
import { insertTransfer } from './transfer.api';

const params = history.getParams();

getAccountList().then((apiAccountList) => {
  const selectedAccount = params.id;
  const accountListViewModel = mapAccountsListFromApiToVM(apiAccountList);
  setAccountOptions(accountListViewModel, selectedAccount);
});

let transfer = {
  accountId: params.id,
  iban: '',
  name: '',
  amount: '',
  concept: '',
  notes: '',
  day: '',
  month: '',
  year: '',
  email: '',
};

onUpdateField('select-account', (event) => {
  const value = event.target.value;
  transfer = {
    ...transfer,
    accountId: value,
  };
});

onUpdateField('iban', (event) => {
  const value = event.target.value;
  transfer = {
    ...transfer,
    iban: value,
  };
  formValidation.validateField('iban', transfer.iban).then((result) => {
    onSetError('iban', result);
  });
});

onUpdateField('name', (event) => {
  const value = event.target.value;
  transfer = {
    ...transfer,
    name: value,
  };
  formValidation.validateField('name', transfer.name).then((result) => {
    onSetError('name', result);
  });
});

onUpdateField('amount', (event) => {
  const value = event.target.value;
  transfer = {
    ...transfer,
    amount: value,
  };
  formValidation.validateField('amount', transfer.amount).then((result) => {
    onSetError('amount', result);
  });
});

onUpdateField('concept', (event) => {
  const value = event.target.value;
  transfer = {
    ...transfer,
    concept: value,
  };
  formValidation.validateField('concept', transfer.concept).then((result) => {
    onSetError('concept', result);
  });
});

onUpdateField('notes', (event) => {
  const value = event.target.value;
  transfer = {
    ...transfer,
    notes: value,
  };
});

onUpdateField('day', (event) => {
  const value = event.target.value;
  transfer = {
    ...transfer,
    day: value,
  };
  formValidation.validateField('day', transfer.day).then((result) => {
    onSetError('day', result);
    onSetError('date', result);
  });
});

onUpdateField('month', (event) => {
  const value = event.target.value;
  transfer = {
    ...transfer,
    month: value,
  };
  formValidation.validateField('month', transfer.month).then((result) => {
    onSetError('month', result);
    onSetError('date', result);
  });
});

onUpdateField('year', (event) => {
  const value = event.target.value;
  transfer = {
    ...transfer,
    year: value,
  };
  formValidation.validateField('year', transfer.year).then((result) => {
    onSetError('year', result);
    onSetError('date', result);
  });
});

onUpdateField('email', (event) => {
  const value = event.target.value;
  transfer = {
    ...transfer,
    email: value,
  };
  formValidation.validateField('email', transfer.email).then((result) => {
    onSetError('email', result);
  });
});

const onSave = () => {
  const apiTransfer = mapTransferFromVmToApi(transfer);
  return insertTransfer(apiTransfer);
};

onSubmitForm('transfer-button', () => {
  transfer = {
    ...transfer,
    date: transfer.day + '/' + transfer.month + '/' + transfer.year,
  };
  formValidation.validateForm(transfer).then((result) => {
    onSetFormErrors(result);
    if (result.succeeded) {
      onSave().then((apiTransfer) => {
        history.back();
      });
    }
  });
});
