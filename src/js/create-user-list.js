export function createUserList(user) {
    var userTag = document.createElement("div");
    var usersElement = document.body.querySelector('.userList');
    
    userTag.classList.add('col-sm-4');
    userTag.innerHTML = `<div class="userTag">
                            <p>${user.name.title} ${user.name.last} ${user.name.first}</p>
                            <img src="${user.picture.medium}">
                        </div>`;
    
    usersElement.appendChild(userTag);
}