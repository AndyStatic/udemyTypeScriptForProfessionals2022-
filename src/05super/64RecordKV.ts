type Persons641 = Record<string, { name: string; role: string }>;
const persons641: Persons641 = {};
persons641["000"] = { name: "John", role: "admin" };
persons641["111"] = { name: "Jane", role: "owner" };

//persons641['222'] = {name: 'June'}; //Error: Missing property 'role'

type PersonsVerbose = { [key: string]: { name: string; role: string } };


type Roles641 = 'admin' | 'owner';

let peopleWithRoles641: Record<Roles641, string[]> = {
    'owner': ["Jane", 'June'],
    'admin': ["John"]
};



/*
peopleWithRoles641 = {
    'owner': ["Jane", 'June'],
}; //Error: admin is missing
*/

const admins: string[] = peopleWithRoles641['admin']; // Safe

type Point641 = Record<'x' | 'y', number>;

type PageInfo641 = {
    id: string,
    title: string,
}

type PageVerbose = {
    home: PageInfo641,
    services: PageInfo641,
    about: PageInfo641,
    contact: PageInfo641,
}

type Pages641 = Record<
    'home' | 'services' | 'about' | 'contact',
    {
        id: string,
        title: string,
    }
>;