export const mapMovementsListFromApiToVM = (movementsList) => {
  return movementsList.map((movement) => mapMovementFromApiToVM(movement));
};

const mapMovementFromApiToVM = (movement) => {
  return {
    transaction: new Date(movement.transaction).toLocaleDateString(),
    realTransaction: new Date(movement.realTransaction).toLocaleDateString(),
    description: movement.description,
    amount: `${movement.amount} €`,
    balance: `${movement.balance} €`,
  };
};

export const mapAccountFromApiToVM = (account) => {
  return {
    iban: account.iban,
    alias: account.name,
    balance: `${account.balance} €`,
  };
};
