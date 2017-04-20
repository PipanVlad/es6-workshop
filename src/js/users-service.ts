export function getUsers() {
    return fetch('https://randomuser.me/api/?results=20', {method: 'get'})
            .then((resp) => resp.json())
            .then(function(data: any){
                console.log(data.results);
                return data.results;
            })
            .catch(function(error) {
                console.log(error);
            });
}