// type >> Allow define simple type aliases or pointers to another type

type ContactName = string;  //simple type

interface Contact{
    id :number;
    name : ContactName;
    birthday? :Date;

}