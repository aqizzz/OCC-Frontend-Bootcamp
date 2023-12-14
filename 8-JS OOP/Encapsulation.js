
// Create a class
// Encapsulation

class BankAccount {
  constructor(accountNumber, balance) {
    this.accountNumber = accountNumber;
    this.balance = balance;
  }
  
  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
    }
  }

  getAccountInfo() {
    return `Account number: ${this.accountNumber}, Balance: ${this.balance}`;
  }
}

const MyAccount = new BankAccount("1234567", 1000);
MyAccount.deposit(500);
MyAccount.withdraw(200);
console.log(MyAccount.getAccountInfo());