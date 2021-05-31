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
        ui.clearFields(formName, formBalance);
    }
});


// Display the appropriate buttons
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


// Confirm buttons
    // Actual functions where deposit, withdraw and transfer happen

// Submit deposit amount
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
document.getElementById('users-list').addEventListener('click', confirmTransfer);

function confirmTransfer(e){
    if(e.target.classList.contains('transfer-confirm'))
    {   
        const ui = new UI();
        const senderName = e.target.parentElement.parentElement.parentElement.firstElementChild.firstElementChild.lastElementChild.innerHTML;
        const senderBalanceHTML = e.target.parentElement.parentElement.parentElement.firstElementChild.lastElementChild.lastElementChild.innerHTML;
        const senderBalanceSpliced = senderBalanceHTML.substr(1);
        const senderBalance = parseInt(senderBalanceSpliced);
        

        // Instantiate object for sender
        const senderBankAccount = new BankAccount(senderName, senderBalance);
        
        //  Transfer amount in HTML
        const transferAmtHTML = e.target.previousElementSibling.value;
        //  Transfer amount in float
        const transferAmt = parseFloat(transferAmtHTML);
        
        if(transferAmt <= senderBankAccount.getBalance())
        {
            const receiverName = e.target.previousElementSibling.previousElementSibling.previousElementSibling.value;

            let usersList = document.querySelectorAll('ul li');
            const arrayList = Array.from(usersList);

            // Check to see if the name of input receiver matches the name in user list
            // Loop through each user
            // If they match, get their balance, instantiate object, update balance and UI
            arrayList.forEach(function(user){
            const fnReceiverName = user.firstElementChild.firstElementChild.firstElementChild.children[1].innerHTML;
            const fnReceiverBalanceHTML = user.firstElementChild.firstElementChild.lastElementChild.lastElementChild.innerHTML;
            const fnReceiverBalance = parseFloat(fnReceiverBalanceHTML.substr(1));

            
            if (receiverName === fnReceiverName)
            {   
                // Instantiate object for receiver
                const receiverBankAccount = new BankAccount(fnReceiverName, fnReceiverBalance);
                // Deposit money to receiver's account
                receiverBankAccount.deposit(transferAmt);
                //  Deduct balance from sender's account
                senderBankAccount.withdraw(transferAmt);

                
                // Update UI for receiver and sender balance
                ui.confirmTransfer(senderBankAccount, receiverBankAccount, e);
            }
            });
        }
        // Display error: balance is lower than transfer amount
        else
        {
            alert("Transfer amount is invalid");
        }
    
    
    }
    e.preventDefault();
}




