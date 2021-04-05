//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {
  constructor(balance = 0, isOpen = false) {
    this._balance = balance;
    this.isOpen = isOpen;
  }

  open(amount) {
    if (amount === undefined) amount = 0;
    if(this.isOpen) throw new ValueError;
    this.isOpen = true;
    this._balance += amount;
  }

  close() {
    if(!this.isOpen) throw new ValueError;
    this._balance = 0;
    this.isOpen = false;
  }

  deposit(amount) {
    if(amount < 0 || !this.isOpen) throw new ValueError;
    this._balance += amount;
  }

  withdraw(amount) {
    if (this._balance - amount < 0 || amount < 0 || !this.isOpen) throw new ValueError;
    this._balance -= amount;
  }

  get balance() {
    if (this.isOpen){
      return this._balance
    }
    throw new ValueError;
  }
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}

