import { Person } from './interface';

export class userActions {
    constructor(public usersWrapper: any) {
        this.usersWrapper = usersWrapper
    }

    createUser(user: Person) {
        let userTag = document.createElement('div');

        userTag.classList.add('col-sm-4');
        userTag.innerHTML = `   <div class="userTag">
                                    <p>${ user.name.title } ${ user.name.first } ${ user.name.last } </p>
                                    <img src="${ user.picture.medium }">
                                </div>`;

        this.usersWrapper.appendChild(userTag);            
    }

    sortBy(users: Person[]) {
        this.usersWrapper.innerHTML = '';

        let selectedValue = (<HTMLInputElement>document.body.querySelector('[name="gender"]:checked')).value;

        if (selectedValue != 'all') {
            for ( let user of  users) {
                if ( user.gender == selectedValue ) {
                    this.createUser(user); 
                }
            }
        } else {
            for ( let user of  users) {
                this.createUser(user); 
            }        
        }
    }
}




