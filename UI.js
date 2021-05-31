class UI
{
    addUserToList(bankAccount)
    {   
        var usersCount = document.getElementById('users-list').getElementsByTagName("li").length;
        
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
                <label id="account-name">${bankAccount.getName()}</label>
            </div>
            <div id="balance">
                <label for="balance"><strong>Balance:</strong></label>
                <label id="balance-amount">$${Number(bankAccount.getBalance()).toFixed(2)}</label>
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



    showEmptyFieldsAlert(){
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

    clearFields(field1, field2)
    {
        field1.value = '';
        field2.value = '';

    }

    // Change CSS for deposit, withdraw and transfer groups
    // type = 'deposit' or 'withdaw' or transfer
    showGroup(type, e)
    {   
        // Select the div that holds the deposit, withdraw and transfer buttons
        const dropDown = e.target.parentElement.nextElementSibling;
        dropDown.classList.toggle('d-none');
        
        const depositGroup = e.target.parentElement.nextElementSibling.children[0];
        const withdrawGroup = e.target.parentElement.nextElementSibling.children[1];
        const transferGroup = e.target.parentElement.nextElementSibling.children[2];
        
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

    // Update UI
        // Update balance amount
        // Clear form for confirm input
    confirmDeposit(bankAccount, e){
        let balanceHTML = e.target.parentElement.parentElement.parentElement.parentElement.firstElementChild.children[1].lastElementChild;

        balanceHTML.innerHTML = "$" + Number(bankAccount.getBalance()).toFixed(2);
        e.preventDefault();
    }

    confirmWithdraw(bankAccount, e)
    {
        let balanceHTML = e.target.parentElement.parentElement.parentElement.parentElement.firstElementChild.children[1].lastElementChild;

        balanceHTML.innerHTML = "$" + Number(bankAccount.getBalance()).toFixed(2);
        e.preventDefault();
    }

    confirmTransfer(senderBankAccount, receiverBankAccount, e)
    {   
        // Update bank balance for sender
        e.target.parentElement.parentElement.parentElement.firstElementChild.lastElementChild.lastElementChild.innerHTML = `$${senderBankAccount.getBalance().toFixed(2)}`;

        // Update balance for receiver
        let usersList = document.querySelectorAll('ul li');
        const arrayList = Array.from(usersList);


        arrayList.forEach(function(user){
            const receiverName = user.firstElementChild.firstElementChild.firstElementChild.children[1].innerHTML;
            if(receiverName === receiverBankAccount.getName()){
                user.firstElementChild.firstElementChild.lastElementChild.lastElementChild.innerHTML = `$${receiverBankAccount.getBalance().toFixed(2)}`;
            }
            });
    }


}
