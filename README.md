# OOP-Banking-Project
A project to practise object-oriented programming along with manipulating DOM elements.

Used Boostrap for CSS.

An person's account is represented by an objecto of class 'bankAccount'.
The object has methods to deposit, withdraw to their account.
Also, they can transfer funds to other accounts if they sufficient funds.


User will be able to add multiple bank accounts.
Users are differentiated according to their names.
Assumed name does not repeat.


Using CSS with Javascript to manipulate DOM elements will buttons appear as necessary.

Major Issues:
1. The program is very heavily dependant on events to identify which user clicked deposit, withdraw or transfer.
Heavy reliance on DOM traversal makes scaling or modifying program tedious. There are better ways to select elements for sure.

2. Forgot to implement delete function until later in the program. It'd be tedious to go back because of the event issue.



Possible minor improvements  (without making big code changes):
1. Replace alert functions with displaying an error message with DOM.
2. Identify users with a random generator for account number.
