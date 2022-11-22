type ExampleOptional671 = {
    name?: string;
};

let optional671: ExampleOptional671;

optional671 = { name: undefined };
optional671 = {};

type ExampleUnion671 = {
    name: string | undefined;
};

let union671: ExampleUnion671;

union671 = { name: undefined };
//union671 = {}; //Error: name is missing

function logOptional(message?: string) {
    console.log(message);
}

function logUnion(message: string | undefined) {
    console.log(message);
}

logOptional(undefined);
logOptional();

logUnion(undefined);
//logUnion(); //Error: Expected 1 argument. `message` was not provided

//Error: a required parameter cannot follow an optional parameter
//function logOptional672(error?: Error, message: string) { //A required parameter cannot follow an optional parameter.ts(1016)
function logOptional672(error: Error | undefined, message: string) {
    if (error != undefined) {
        console.error(message);
    }
}

function setConfig671(config: {
    name: string;
    priority: number | undefined; // if add it as optionsl (i.e. priority?: number), no error will be displayed for defined calls
}) {
    // ...
}

// ---------------------------
// ok
setConfig671({ name: "hello", priority: undefined });
// bad
setConfig671({ name: "ooops", priority: 10 });
// ok
setConfig671({ name: "perfect", priority: undefined });
// bad
setConfig671({ name: "no", priority: undefined });
