export const mapTransferFromVmToApi = (transfer) => {
  const transferDate = new Date(
    transfer.year + '-' + transfer.month + '-' + transfer.day
  ).toLocaleDateString();
  console.log({ transferDate });

  return {
    accountId: transfer.accountId,
    iban: transfer.iban,
    name: transfer.name,
    amount: transfer.amount,
    concept: transfer.concept,
    notes: transfer.notes,
    date: transferDate,
    email: transfer.email,
  };
};

export const mapAccountsListFromApiToVM = (accountList) => {
  return accountList.map((account) => mapAccountFromApiToVM(account));
};

const mapAccountFromApiToVM = (account) => {
  return {
    id: account.id,
    name: account.name,
  };
};
