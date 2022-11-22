//lesson 31
var person = {
    name : 'Nada',
    age : 17,
    favcolor : 'bluesky'
}
console.log(person.name)
console.log(person['name']) 

//lesson 32
function person(name, age, favcolor){
    this.name = name,
    this.age = age,
    this.favcolor = color
}

var p1 = new person('someone', 17, 'blue')
