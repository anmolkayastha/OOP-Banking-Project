class BankAccount{

    // Account constructor
    constructor(name, balance)
    {
        this.name = name;
        this.balance = balance;
    }

    getName()
    {
        return this.name;
    }

    getBalance()
    {
        return this.balance;
    }

    deposit(amount)
    {
        this.balance += amount;
    }

    withdraw(amount)
    {
      this.balance -= amount;   
    }


}
