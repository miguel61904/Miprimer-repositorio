let table = document.querySelector("#users-table tbody");

const users = [
    {
        name: 'Erik',
        age: 29,
        email: 'erik@academlo.com',
        social: [
            { name: 'facebook', url: 'facebook/erik' },
            { name: 'twitter', url: 'twitter/erik' }
        ],
        gender: 'Male'
    },
    {
        name: 'Georg',
        age: 33,
        email: 'georg@academlo.com',
        social: [
            { name: 'facebook', url: 'facebook/georg' },
            { name: 'twitter', url: 'twitter/georg' }
        ],
        gender: 'Male'
    },
    {
        name: 'Andrea',
        age: 42,
        email: 'andrea@hotmail.com',
        social: [
            { name: 'facebook', url: 'facebook/andrea' },
            { name: 'twitter', url: 'twitter/andrea' }
        ],
        gender: 'Female'
    },
    {
        name: 'Oscar',
        age: 31,
        email: 'oscar@academlo.com',
        social: [
            { name: 'facebook', url: 'facebook/oscar' },
            { name: 'twitter', url: 'twiter/oscar' }
        ],
        gender: 'Male'
    },
    {
        name: 'Daniela',
        age: 22,
        email: 'andrea@uaq.mx',
        social: [
            { name: 'facebook', url: 'facebook/andrea' },
            { name: 'twitter', url: 'twitter/andrea' }
        ],
        gender: 'Female'
    },
];

function createTable(usersList){
    for (let i = 0; i < users.length; i++){
        let userEmail = usersList[i].email;
        if(userEmail.endsWith("@academlo.com")){
            let newRow = document.createElement("tr");
            table.appendChild(newRow);
            
            let usersName = document.createElement("td");
            usersName.innerText = usersList[i].name;
            let userAge = document.createElement("td");
            userAge.innerText = usersList[i].age;
            let usersEmail = document.createElement("td");
            usersEmail = document.createElement("td");
            usersEmail.innerText = usersList[i].email;

            newRow.appendChild(usersName);
            newRow.appendChild(userAge);
            newRow.appendChild(usersEmail);
            for(let j = 0; j <users[i].social.length; j++){
                let userSocial = document.createElement("td");
                userSocial.innerText = users[i].social[j];
                newRow.appendChild(userSocial);
            }
            let usersGender = document.createElement("td");
            usersGender.innerText = usersList[i].gender;
            newRow.appendChild(usersGender);
        }
        
    }
}
createTable(users);