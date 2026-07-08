interface Contact extends Adress{ // declare like a class,hold group of variables
    // if it is extended from another interface. it will hold those variables as well
    id: number;
    name: string;
    birthDate?: Date; //variablename? means that the variable is optional but if it is used,
    //type of the variable must be Date.
    status: ContactName; //enum type variable, can only be one of the values in the enum ContactName

}
enum ContactName{ // enum limits variable to defined values.Still valid in run time
Active,
Inactive, // Also, the enum can be decleraed as  inactive = 0, active = 1, new= 0
 New

}
interface Adress{
    line1? : string // All Adress  varaiable marked as optional to prevent error in Contact variable when they are not in use.
    line2? : string
    city? : string
    state? : string
    zipCode? : number
}

let firstContact : Contact = {
    id: 1,
    name: "Amy Rose",
birthDate: new Date("1980-01-01"),
    status: ContactName.Active,
}

let secondContact : Contact = {
    id: 2,
    name: "John Doe",
    line1: "123 Main St",
    line2: "Apt 4B",  
    city: "Jacksonville",
    state: "FL",
    zipCode: 32207 ,
    status : ContactName.Inactive
} 