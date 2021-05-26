// DOM Elements
const balanceAmount = document.getElementById('balance-amount');
const addUserBtn = document.getElementById('add-user');


// Event Listeners

// Add user
    //  Make object
    //  Update UI
        // Append to list
        // Update name, update balance
addUserBtn.addEventListener('click', addUser);

function addUserToList()
{   
    formName = document.getElementById('form-name');
    formBalance = document.getElementById('form-balance');

    if(formName.value === '' || formBalance.value === ''){
        showEmptyFieldsAlert();

    }else{
        userName = document.getElementById('form-name').value;
        userBalance = document.getElementById('form-balance').value;
        usersCount = document.getElementById('users-list').getElementsByTagName("li").length;
        
        
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
                <label id="account-name">${userName}</label>
            </div>
            <div id="balance">
                <label for="balance"><strong>Balance:</strong></label>
                <label id="balance-amount">$${Number(userBalance).toFixed(2)}</label>
            </div>
        </div>

        <div id="balance-buttons" class="d-flex justify-content-around">
            
            <button class="btn btn-secondary deposit-btn">Deposit</button>
            <button class="btn btn-secondary withdraw-btn">Withdraw</button>
            <button class="btn btn-secondary transfer-btn">Transfer</button>
        </div>

        <div class="d-flex justify-content-around d-none">

            <div id="deposit-group" class="invisible">

                <div id="deposit-control" class="d-flex flex-column justify-content-center p-2 w-75">
                    <span><strong>Deposit Amount:</strong></span>
                    <input type="number" id="deposit-amt" class="w-75">
                    <button type="button" id="deposit-confirm" class="deposit-confirm btn btn-primary btn-sm self-align-end w-50 mt-2">Confirm</button>
                </div>
            </div>
        
            <div id="withdraw-group" class="invisible">
                
                <div id="withdraw-control" class="d-flex flex-column justify-content-center p-2 w-75">
                    <span class><strong>Withdraw Amount:</strong></span>
                    <input type="number" id="withdraw-amt" class="w-75">
                    <button type="button" id="withdraw-confirm" class="withdraw-confirm btn btn-primary btn-sm self-align-end w-50 mt-2">Confirm</button>
                </div>
            </div>
        
            <div id="transfer-group"  class="d-flex flex-column invisible">
                <span class><strong>Transfer To:</strong></span>
                <input type="text" id="transfer-to" class="w-75">
                <span class><strong>Transfer Amount:</strong></span>
                <input type="number" id="transfer-amt" class="w-50">
                <button type="button" id="transfer-confirm" class="transfer-confirm btn btn-primary btn-sm self-align-end w-50 mt-2">Confirm</button>
            </div>
        </div>

    </div>`

    // document.getElementById('users-list').insertAdjacentElement('beforeend', li)
    document.getElementById('users-list').appendChild(li);
    }
    console.log("Name: ", "Balance: ", userName, userBalance);
    
    const newUser = new BankAccount(userName, userBalance);
}


function showEmptyFieldsAlert(){
    // Create div
    const div = document.createElement('div');
    // Add ID
    div.id = 'alert';
    // Add classes
    div.className = 'bg-white text-danger border rounded border-danger p-1 mt-3';
    // Add text
    div.appendChild(document.createTextNode("Please enter all fields"));
    // Get parent
    const formGroup = document.querySelector('.form-group');
    // Get posts
    // const posts = document.querySelector('#posts');
    formGroup.appendChild(div);
    // Timeout after 3 seconds
    setTimeout(function(){
        document.querySelector('#alert').remove();
        }, 3000);
}




// Listen for deposit
document.getElementById('users-list').addEventListener('click', enableDeposit);
// Listen for withdraw
document.getElementById('users-list').addEventListener('click', enableWithdraw);
// Listen for transfer
document.getElementById('users-list').addEventListener('click', enableTransfer);

// Deposit click event
    // Take input value
    // Update the value
    // Display the updated value by changing CSS
    // Reset input field after
function enableDeposit(e){
    if(e.target.classList.contains('deposit-btn'))
    {   
        showGroup('deposit', e);
    }
    e.preventDefault();
}

function enableWithdraw(e){
    if(e.target.classList.contains('withdraw-btn'))
    {   
        console.log('withdraw!');
        showGroup('withdraw', e);
    }
    e.preventDefault();
}

function enableTransfer(e){
    if(e.target.classList.contains('transfer-btn'))
    {   
        showGroup('transfer', e);
    }
    e.preventDefault();
}

// Listeners for confirm buttons
document.getElementById('users-list').addEventListener('click', confirmDeposit);
document.getElementById('users-list').addEventListener('click', confirmWithdraw);
document.getElementById('users-list').addEventListener('click', confirmTransfer);

// Submit deposit amount
    // Get input amount
    // Add the value to bank balance
        // Get the object with the same name as in the html
        // get the balance from that object
        // use obj.deposit method to add money
    // Show the updated balance
        // get the balance using obj.getBalance()
    // Copy paste code for withdraw and transfer
function confirmDeposit(e){
    if(e.target.classList.contains('deposit-confirm'))
    {   
        console.log('Deposit confirmed!');
        const depositAmt = e.target.previousElementSibling.value;
        
        const name = e.target.parentElement.parentElement.parentElement.parentElement.firstElementChild.firstElementChild.lastElementChild.innerHTML;
        console.log(name);
        
        


    }
    e.preventDefault();
}

// Submit withdraw amount
function confirmWithdraw(e){
    if(e.target.classList.contains('withdraw-confirm'))
    {   
        console.log('Withdraw confirmed!');
    }
    e.preventDefault();
}

// Submit transfer amount
function confirmTransfer(e){
    if(e.target.classList.contains('transfer-confirm'))
    {   
        console.log('Transfer confirmed!');
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

