/* eslint linebreak-style: ["error", "windows"] */
/* eslint-disable import/no-extraneous-dependencies */

const sum = (a, b) => (a + b);

function findDuplicateTransactions (transactions = []) {
  if (!transactions.length) {
    return [];
  }
  const compareTimeDifferenceOfTransactionsInSeconds = (transactionA, transactionB) =>
    Math.abs(new Date(transactionA.time) - new Date(transactionB.time)) / 1000;
  // compare transactions data, to check if they are duplicated
  const compareTransactions = (transactionA, transactionB) => {
    const {
      sourceAccount,
      targetAccount,
      amount,
      category,
    } = transactionA;
    if (sourceAccount !== transactionB.sourceAccount) {
      return false;
    }
    if (targetAccount !== transactionB.targetAccount) {
      return false;
    }
    if (amount !== transactionB.amount) {
      return false;
    }
    if (category !== transactionB.category) {
      return false;
    }
    if (compareTimeDifferenceOfTransactionsInSeconds(transactionA, transactionB) > 60) {
      return false;
    }
    return true;
  };
  // check if transaction has duplicated in the list of transactions sorted by time
  const evaluateTransactions = (transaction, transactionsArray) => {
    if (transactionsArray.length < 2) {
      return [];
    }
    for (let i = 1; i < transactionsArray.length - 1; i += 1) {
      if (compareTimeDifferenceOfTransactionsInSeconds(transaction, transactionsArray[i]) > 60) {
        return [];
      }
      if (compareTransactions(transaction, transactionsArray[i])) {
        return [transaction, transactionsArray[i]];
      }
    }
    return [];
  };
  // given one transaction, return all duplicated transactions of the same group in the array
  const returnGroupOfDuplicatedTransaction = (transaction, array) => {
    const group = [];
    let currentDuplicatedTransaction = transaction;
    array.forEach((candidateTransaction) => {
      if (compareTransactions(candidateTransaction, currentDuplicatedTransaction)) {
        currentDuplicatedTransaction = candidateTransaction;
        group.push(currentDuplicatedTransaction);
      }
    });
    return group;
  };
  // sort transactions by time
  transactions.sort((transactionA, transactionB) =>
    new Date(transactionA.time) - new Date(transactionB.time));
  // list duplicated transactions
  let duplicatedTransactions = [];
  transactions.forEach((transaction, index) => {
    const duplicateds = evaluateTransactions(
      transaction,
      transactions.slice(index, transactions.length),
    );
    duplicatedTransactions = [...duplicatedTransactions, ...duplicateds];
  });
  // filter duplicated transactions
  duplicatedTransactions.sort((transactionA, transactionB) => transactionA.id - transactionB.id);
  duplicatedTransactions = duplicatedTransactions.filter((trans, index, array) => {
    if ((index < array.length - 1) && (trans.id === array[index + 1].id)) {
      return false;
    }
    return true;
  });
  // sort duplicated transactions by time
  duplicatedTransactions.sort((transactionA, transactionB) =>
    new Date(transactionA.time) - new Date(transactionB.time));
  // list groups of transactions
  let duplicateTransactions = [];
  duplicatedTransactions.forEach((transaction, index) => {
    const group = returnGroupOfDuplicatedTransaction(
      transaction,
      duplicatedTransactions.slice(index, duplicatedTransactions.length),
    );
    duplicateTransactions.push(group);
  });
  // filter groups that are contained in other groups
  duplicateTransactions = duplicateTransactions.filter((group, index) => {
    if (index === 0) {
      return true;
    }
    let answer = true;
    duplicateTransactions.slice(0, index).forEach((previousGroup) => {
      if (previousGroup[previousGroup.length - 1].id === group[group.length - 1].id) {
        answer = false;
      }
    });
    return answer;
  });
  return duplicateTransactions;
}

findDuplicateTransactions();

module.exports = sum;
