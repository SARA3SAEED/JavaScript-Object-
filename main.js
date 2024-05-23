

/*----------------------------------------------------------------*/
 
let user={
    name: "John",
    email: "John@example",
    Id: 123456,
    avaliable: false,
    isAvaliable: function() {
       if(this.avaliable == true) {
        this.console.log("avaliable");}
        else {
           console.log("not avaliable");
        }
    },
    address:{
        city: {
            street: "John",
            number: 12345,
        },
        country: "USA",
        zip: 12345,
    },
    skills:[ "HTML", "CSS", "JS"],
}



console.log(user.name);
console.log(user.email);
console.log(user.Id);
console.log(user.avaliable);
user.isAvaliable();
console.log(user.address.city.street);
console.log(user.address.country);
console.log(user.address.zip);
console.log(user.skills.toString());