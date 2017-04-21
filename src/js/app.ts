
// import styling
import '../style/app.css';

// import mock data
import mock from '../mock/users';

import { userActions } from './user-actions';

import { Person } from './interface';

var users: Array<any> = mock.users;
var heading = document.body.querySelector('.heading > h1');
var userList = document.body.querySelector('.userList');
// append message to element
var appendMessage = function(element, text) {
    element.innerHTML = `${ element.innerHTML } ${ text }`;
};

var actions = new userActions(userList);

appendMessage(heading, 'Test');

// create intial user list
for ( let user of  users) {
    actions.createUser(user);
}

var radioboxes: any = document.body.querySelectorAll('[name="gender"]')

for ( let radiobox of radioboxes ) {
    radiobox.addEventListener('click', evt => actions.sortBy(users));
}
