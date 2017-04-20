'use strict';

import '../style/app.css';
import users from '../mock/users'

console.log('mock', users);

import { getUsers }  from './users-service';
import { UserList } from './user-list';

var userList = [];
var hello = document.body.querySelector('h1');
var usersElement = document.body.querySelector('.userList');

// append message to title
var appendMessage = function(element, text) {
    element.innerHTML = element.innerHTML + ' ' + text;
}
appendMessage(hello, 'test');

var test = new UserList(usersElement);

// get userList
getUsers()
    .then((users) => {
        userList = users;
        for (var user of userList ) {
            test.createUserList(user)
        }
    })
    .catch((error) => {
        console.log(error);
    });

var checkboxes: any = document.body.querySelectorAll('[name="gender"]');

for ( let checkbox of checkboxes ) {
    checkbox.addEventListener('click', evt => test.sortBy(userList))
}