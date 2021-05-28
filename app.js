// DOM Element
const addUserBtn = document.getElementById('add-user');


// Event Listeners

    // When user clicked 'Add User'
    // Get form values
    // Instantiate bankAccount object
    // Instantiate UI Object
        // Turn the individual functions relating to UI to UI object methods
addUserBtn.addEventListener('click', function(){
    formName = document.getElementById('form-name');
    formBalance = document.getElementById('form-balance');
    
    // Instantiate bankAccount object
    const userBankAccount = new BankAccount(formName.value, formBalance.value);

    // Instantiate UI object
    const ui = new UI();

    // Validate forms not empty
    if(formName.value === '' || formBalance.value === ''){
    ui.showEmptyFieldsAlert();
    }
    else{   
        ui.addUserToList(userBankAccount);
    }
});

// Listen for deposit
document.getElementById('users-list').addEventListener('click', function(e){
    if(e.target.classList.contains('deposit-btn')){
        const ui = new UI();
        ui.showGroup('deposit', e);
    }
});

// Listen for withdraw
document.getElementById('users-list').addEventListener('click', function(e){
    if(e.target.classList.contains('withdraw-btn')){
        const ui = new UI();
        ui.showGroup('withdraw', e);
    }
});
// Listen for transfer
document.getElementById('users-list').addEventListener('click', function(e){
    if(e.target.classList.contains('transfer-btn')){
        const ui = new UI();
        ui.showGroup('transfer', e);
    }
});


// Listeners for confirm buttons


document.getElementById('users-list').addEventListener('click', confirmTransfer);

// Submit deposit amount
    // Get input amount
    // Updates the object's balance
    document.getElementById('users-list').addEventListener('click', function(e){
        if(e.target.classList.contains('deposit-confirm')){
        const ui = new UI();
        const name = e.target.parentElement.parentElement.parentElement.parentElement.firstElementChild.firstElementChild.lastElementChild.innerHTML;
        const balanceHTML = e.target.parentElement.parentElement.parentElement.parentElement.firstElementChild.children[1].lastElementChild.innerHTML;
        const balanceSpliced = balanceHTML.substr(1);
        const balance = parseInt(balanceSpliced);

        // Instantiate object for sumbit event
        const userBankAccount = new BankAccount(name, balance);

        const depositAmtHTML = e.target.previousElementSibling.value;
        const depositAmt = parseFloat(depositAmtHTML);
        
        userBankAccount.deposit(depositAmt);

        // Update UI for balance
        ui.confirmDeposit(userBankAccount, e);
        }
        
    });


    // Submit withdraw amount
    document.getElementById('users-list').addEventListener('click', function(e)
    {
        if(e.target.classList.contains('withdraw-confirm'))
    {   
        console.log('Withdraw confirmed!');
        const ui = new UI();
        const name = e.target.parentElement.parentElement.parentElement.parentElement.firstElementChild.firstElementChild.lastElementChild.innerHTML;
        const balanceHTML = e.target.parentElement.parentElement.parentElement.parentElement.firstElementChild.children[1].lastElementChild.innerHTML;
        const balanceSpliced = balanceHTML.substr(1);
        const balance = parseInt(balanceSpliced);

        // Instantiate object for sumbit event
        const userBankAccount = new BankAccount(name, balance);

        const withdrawAmtHTML = e.target.previousElementSibling.value;
        const withdrawAmt = parseFloat(withdrawAmtHTML);
        
        if (withdrawAmt <= balance){
            userBankAccount.withdraw(withdrawAmt);
            // Update UI for balance
            ui.confirmWithdraw(userBankAccount, e);
        }
        else{
            alert("Invalid withdraw amount");
        }

        

    }
    });

// Submit transfer amount
    // Get the sender's balance, check if sent amt is less than balance, withdraw that amount
    // Get the receiver's name, make it's object, deposit amount into their account
function confirmTransfer(e){
    if(e.target.classList.contains('transfer-confirm'))
    {   
        console.log('Transfer confirmed!');
        const ui = new UI();
        const senderName = e.target.parentElement.parentElement.parentElement.parentElement.firstElementChild.firstElementChild.lastElementChild.innerHTML;
        const senderBalanceHTML = e.target.parentElement.parentElement.parentElement.firstElementChild.lastElementChild.lastElementChild.innerHTML;
        const senderBalanceSpliced = senderBalanceHTML.substr(1);
        const senderBalance = parseInt(senderBalanceSpliced);
        

        // Instantiate object for sender
        const senderBankAccount = new BankAccount(senderName, senderBalance);
        
        const transferAmtHTML = e.target.previousElementSibling.value;
        const transferAmt = parseFloat(transferAmtHTML);
        
        
        if (transferAmt <= senderBankAccount.getBalance());
        {
            
            senderBankAccount.withdraw(transferAmt);
            console.log("balance after transfer",senderBankAccount.getBalance());   
            const receiverName = e.target.previousElementSibling.previousElementSibling.previousElementSibling.value;
        }

        
        
    }
    e.preventDefault();
}




