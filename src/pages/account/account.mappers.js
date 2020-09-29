export const mapAccountFromApiToVM = (account) => {
  return {
    ...account,
    alias: account.name,
  };
};

export const mapAccountFromVmToApi = (account) => {
  return {
    id: account.id,
    iban: account.iban,
    type: account.type,
    name: account.alias,
    balance: account.balance,
    lastTransaction: account.lastTransaction,
  };
};
