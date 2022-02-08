class person {
    constructor(Name, fatherNAme, motherName, Gender, Age, Mobile_No, Email, ) {
        this.Name = Name;
        this.fatherNAme = fatherNAme;
        this.motherName = motherName;
        this.Gender = Gender;
        this.Age = Age
        this.Mobile_No = Mobile_No;;
        this.Email = Email;
    }
    personName() {
        return `i'm ${this.Name}`;
    }
    personFatherName() {
        return `My Father Name is ${this.fatherNAme}`;
    }
    personMotherName() {
        return `My Mother Name is ${this.motherName}`;
    }
    personGender() {
        return `i am a ${this.Gender}`;
    }
    personAge() {
        return `I'm ${this.Age} Years Old`;
    }
    personMobileNumber() {
        return `For Contact ${this.Mobile_No}`;
    }
    personEmail() {
        return `My Personal Email ${this.Email}`;
    }
}
const information = new person("Naveen Raj B", "Balu K", "Kavitha B", "Male", "21", "1122334455", "naveencyosec@gmail.com");
console.log(information.personName());
console.log(information.personFatherName());
console.log(information.personMotherName());
console.log(information.personGender());
console.log(information.personAge());
console.log(information.personMobileNumber());
console.log(information.personEmail());