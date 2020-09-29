import { history } from '../../core/router';
import { getMovementsList } from './movements.api';
import {
  mapMovementsListFromApiToVM,
  mapAccountFromApiToVM,
} from './movements.mappers';
import { addMovementRows } from './movements.helpers';
import { getAccount } from '../../common/api/account.api';
import { onSetValues } from '../../common/helpers';

const params = history.getParams();
const accountSelected = Boolean(params.id);

let account = {
  alias: '',
  iban: '',
  balance: '',
};

if (accountSelected) {
  getAccount(params.id).then((apiAccount) => {
    account = mapAccountFromApiToVM(apiAccount);
    onSetValues(account);
  });
  getMovementsList(params.id).then((movementsList) => {
    const movementsVMList = mapMovementsListFromApiToVM(movementsList);
    addMovementRows(movementsVMList);
  });
}
