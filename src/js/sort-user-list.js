import { createUserList } from './create-user-list';

export function sortBy(userList) {
    var usersElement = document.body.querySelector('.userList');    
    var checkbox = document.body.querySelector('[name="gender"]:checked').value;

    usersElement.innerHTML = '';

    if (checkbox != 'all') {
        for (var user of userList ) {        
            if (user.gender == checkbox) {
                createUserList(user);
            }     
        }
    } else {
        for (var user of userList ) {        
            createUserList(user);
        }     
    }    
}