// DOM Elements
const balanceAmount = document.getElementById('balance-amount');
const deposit = document.querySelector('.deposit-btn');
const withdraw = document.getElementById('withdraw');
const transfer = document.getElementById('transfer');
const addUserBtn = document.getElementById('add-user');


// Event Listeners

// Add user
    //  Make object
    //  Update UI
        // Append to list
        // Update name, update balance
addUserBtn.addEventListener('click', addUser);

function addUser()
{   
    console.log('User added!');

    formName = document.getElementById('form-name').value;
    formBalance = document.getElementById('form-balance').value;
    usersCount = document.getElementById('users-list').getElementsByTagName("li").length;
    // Instantiate a bankAccount object
    const account = new BankAccount(formName, formBalance);
   
    //  Show the list
    document.getElementById('users-list').style.display = 'block';
    //Create list element
    const li = document.createElement('li'); 
    // Add class
    li.className = 'list-unstyled list-group-item';
    // Add HTML
    li.innerHTML = `<div id=user-${usersCount+1}>
    <div class="d-flex p-2 justify-content-around align-items-center">
        <div id="account-name">
            <label for="account-name"><strong>Account:</strong></label>
            <label id="account-name">${formName}</label>
        </div>
        <div id="balance">
            <label for="balance"><strong>Balance:</strong></label>
            <label id="balance-amount">$${formBalance}</label>
        </div>
    </div>

    <div id="balance-buttons" class="d-flex justify-content-around">
        
        <button class="btn btn-secondary btn deposit-btn">Deposit</button>
        <button type="button" id="withdraw" class="btn btn-secondary">Withdraw</button>
        <button type="button" id="transfer" class="btn btn-secondary">Transfer</button>
    </div>

    <div class="d-flex justify-content-around d-none">

        <div id="deposit-group" class="invisible">

            <div id="deposit-control" class="d-flex flex-column justify-content-center p-2 w-75">
                <span><strong>Deposit Amount:</strong></span>
                <input type="number" id="deposit-amt" class="w-75">
                <button type="button" id="deposit-confirm" class="btn btn-primary btn-sm self-align-end w-50 mt-2">Confirm</button>
            </div>
        </div>
    
        <div id="withdraw-group" class="invisible">
            
            <div id="withdraw-control" class="d-flex flex-column justify-content-center p-2 w-75">
                <span class><strong>Withdraw Amount:</strong></span>
                <input type="number" id="withdraw-amt" class="w-75">
                <button type="button" id="withdraw-confirm" class="btn btn-primary btn-sm self-align-end w-50 mt-2">Confirm</button>
            </div>
        </div>
       
        <div id="transfer-group"  class="d-flex flex-column invisible">
            <span class><strong>Transfer To:</strong></span>
            <input type="text" id="transfer-to" class="w-75">
            <span class><strong>Transfer Amount:</strong></span>
            <input type="number" id="transfer-amt" class="w-50">
            <button type="button" id="transfer-confirm" class="btn btn-primary btn-sm self-align-end w-50 mt-2">Confirm</button>
        </div>
    </div>

</div>`

// document.getElementById('users-list').insertAdjacentElement('beforeend', li)
document.getElementById('users-list').appendChild(li);

}

// Deposit click event
    // Take input value
    // Update the value
    // Display the updated value by changing CSS
    // Reset input field after

// deposit.addEventListener('click', () => {

//     // showDepositGroup();
//     showGroup('deposit');
//     depAmt = document.getElementById('deposit-amt').value;
// });

// Listen for deposit, withdraw and transfer
document.getElementById('users-list').addEventListener('click', enableDeposit);
document.getElementById('users-list').addEventListener('click', enableWithdraw);
document.getElementById('users-list').addEventListener('click', enableTransfer);

function enableDeposit(e){
    const event = e
    if(e.target.classList.contains('deposit-btn'))
    {   
        showGroup('deposit', event);
    }
    e.preventDefault();
}

function enableWithdraw(e){
    const event = e
    if(e.target.classList.contains('withdraw-btn'))
    {   
        showGroup('withdraw', event);
    }
    e.preventDefault();
}

function enableTransfer(e){
    const event = e
    if(e.target.classList.contains('transfer-btn'))
    {   
        showGroup('transfer', event);
    }
    e.preventDefault();
}


// Change CSS for deposit, withdraw and transfer groups
// type = 'deposit' or 'withdaw' or transfer
function showGroup(type, e)
{   
    // Select the div that holds the deposit, withdraw and transfer buttons
    const dropDown = e.target.parentElement.nextElementSibling;
    dropDown.classList.toggle('d-none');
    
    depositGroup = e.target.parentElement.nextElementSibling.children[0];
    withdrawGroup = e.target.parentElement.nextElementSibling.children[1];
    transferGroup = e.target.parentElement.nextElementSibling.children[2];
    
    switch(type){
        case 'deposit':
        
        // console.log(dropDown.childNodes);

        //  CONTINUE HERE TO GET CHILD ELEMENTS AND CHECK FOR CLASS NAME WITH DEPOSIT

        // var nodes = document.getElementById('ID_of_parent').childNodes;
        // for(var i=0; i<nodes.length; i++) {
        // if (nodes[i].nodeName.toLowerCase() == 'div') {
        //  nodes[i].style.background = color;
        //   }
        // }
        
        depositGroup.classList.remove('invisible');
        depositGroup.classList.add('visible');
        withdrawGroup.classList.add('invisible');
        transferGroup.classList.add('invisible');
        break;
    }

    switch(type){
        case 'withdraw':
            withdrawGroup.classList.remove('invisible');
            withdrawGroup.classList.add('visible');       
            depositGroup.classList.add('invisible');
            transferGroup.classList.add('invisible');
        break;
    }

    switch(type){
        case 'transfer':
            transferGroup.classList.remove('invisible');
            transferGroup.classList.add('visible');
            depositGroup.classList.add('invisible');
            withdrawGroup.classList.add('invisible');
        break;
    }
}


// when 'add user' take input from name and balance form
// make a bankAccount object with the given data
// add to UI the data by appending to the list
