let person = {
    firstName : "fathima",
    lastName : "naja"
    }
let user = {
    fullName : function(age){
        return this.firstName + " " + this.lastName + " is " + age
    }
}

console.log(user.fullName.call(person, "20"));
    console.log(user.fullName.apply(person, ["20"]));
    let binded= user.fullName.bind(person,20);
    console.log(binded());