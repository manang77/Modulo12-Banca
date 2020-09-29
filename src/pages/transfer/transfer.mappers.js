export const mapTransferFromVmToApi = (transfer) => {
  const transferDate = new Date();
  transferDate.setFullYear(transfer.year);
  transferDate.setMonth(transfer.month - 1);
  transferDate.setDate(transfer.day);
  return {
    accountId: transfer.accountId,
    iban: transfer.iban,
    name: transfer.name,
    amount: transfer.amount,
    concept: transfer.concept,
    notes: transfer.notes,
    date: transferDate,
    // date:
    //   transfer.year +
    //   '-' +
    //   (transfer.month <= 9 ? '0' : '') +
    //   transfer.month +
    //   '-' +
    //   (transfer.day <= 9 ? '0' : '') +
    //   transfer.day,
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
