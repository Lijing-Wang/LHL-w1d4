const loanOut = (amount) => {
    return new Promise((resolve,  reject) => {
        if(creditLimit === 0) {
            reject(new Error('Zero balance'));
        } else {
            const finalLoan = creditLimit <= amount ? creditLimit : amount;
            creditLimit = creditLimit - amount > 0 ? creditLimit - amount : 0;
            resolve(finalLoan);
        }
    });
};

let creditLimit = 5000;

console.log("Asking for $150, which should be okay ...");
loanOut(150)
  .then((amountReceived) => {
    console.log(`\t-> I got $${amountReceived} loan from the bank! Remaining Credit Limit: $${creditLimit}`);
  })
  .catch((err) => {
    console.log(`\t-> Error: ${err}!`);
  });