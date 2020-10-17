const people = [
    {name : 'david'},
    {name : 'patel'},
    {name : 'kevin'},
    {name : 'steven'},
    {name : 'coco'},
    {name : 'brock'},
    {name : 'rock'},
    {name : 'burak'},
    {name : 'divya'},
    {name : 'tiago'},
    {name : 'patrick'},
    {name : 'kemi'},
    {name : 'bermarte'},
]

const list = document.getElementById('list');

function setList(group){
    clearList();
    for (const person of group){
        const item = document.createElement('li');
        item.classList.add('list-group-item');
        const text = document.createTextNode(person.name);
        item.appendChild(text);
        list.appendChild(item);
        console.log(item)
        console.log(list)
    }

}

function clearList(){
    while (list.firstChild){
        list.removeChild(list.firstChild);
    }
}

function getRelevancy(value, searchTerm){
    if (value === searchTerm){
        return 2;
    }else if (value.startsWith(searchTerm)){
        return 1; 
    }else {
        return 0;
    }
}

const searchInput = document.getElementById('search');

searchInput.addEventListener('input', (event)=> {
    let value = event.target.value ;
    if (value){
        value = value.trim().toLowerCase();
        setList(people.filter(person => {
            return person.name.includes(value);
        }).sort((personA, personB) => {
            return getRelevancy(personB.name, value) - getRelevancy(personA.name, value);
        }));
    }else {
        clearList();
    }
});