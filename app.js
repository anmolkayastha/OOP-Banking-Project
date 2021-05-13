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
        if(amount > this.balance)
        {
            console.log("Invalid amount entered");
        }
        else{
            this.balance -= amount;
        }
    }

    // transferBalance(name, amount)
    // {

    // }


}

const JohnDoe = new BankAccount("John Doe",0);


console.log("Account name is: ", JohnDoe.getName());
console.log("Account balance is: ", JohnDoe.getBalance());

JohnDoe.deposit(1000);
console.log("Amount after depositing: ",JohnDoe.getBalance());

JohnDoe.withdraw(1100);
console.log("Amount after withdrawing: ", JohnDoe.getBalance());


const SteveHarris = new BankAccount("Harris",0);

console.log(SteveHarris.getBalance());




