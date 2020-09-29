import { getAccountList } from '../../common/api/account-list.api';
import { addAccountRows } from './account-list.helpers';
import { mapAccountListFromApiToVM } from './account-list.mappers';
import { onUpdateField } from '../../common/helpers';
import { history } from '../../core/router';

getAccountList().then((accountList) => {
  const viewModelAccountList = mapAccountListFromApiToVM(accountList);
  addAccountRows(viewModelAccountList);
  viewModelAccountList.forEach((account) => {
    onUpdateField(`select-${account.id}`, (event) => {
      const route = event.target.value;
      history.push(route);
    });
  });
});
