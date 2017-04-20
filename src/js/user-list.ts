export class UserList {
    constructor(public usersElement) {
        this.usersElement = usersElement
    }

    createUserList(user) {
        var userTag = document.createElement("div");
        
        userTag.classList.add('col-sm-4');
        userTag.innerHTML = `<div class="userTag">
                                <p>${user.name.title} ${user.name.last} ${user.name.first}</p>
                                <img src="${user.picture.medium}">
                            </div>`;
        
        this.usersElement.appendChild(userTag);
    }

    sortBy(userList) {
        var checkbox = (<HTMLInputElement>document.body.querySelector('[name="gender"]:checked')).value;

        this.usersElement.innerHTML = '';

        if (checkbox != 'all') {
            for (var user of userList ) {        
                if (user.gender == checkbox) {
                    this.createUserList(user);
                }     
            }
        } else {
            for (var user of userList ) {        
                this.createUserList(user);
            }  
        }   
    }
}