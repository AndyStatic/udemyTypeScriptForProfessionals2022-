const main = () => {
    console.log('Hello world');
};

//main();

//npx tsc --watch
//node lib/basics/21AsyncAwait.js

const main2 = () => {
    setTimeout(() => {
        console.log('1s');
        setTimeout(() => {
            console.log('2s');
            setTimeout(() => {
                console.log('3s');
            }, 1000);
        }, 1000);
    }, 1000);
};

//main2();

//rewrite this to Asyn Await
//have async keyworkd

//utitly function to resolve the promise after specified timeout
const delay = (ms: number) => new Promise(res => setTimeout(res, ms));
const mainAsync = async () => {
    await delay(1000);
    console.log('1s with mainAsync');
    await delay(1000);
    console.log('2s with mainAsync');
    await delay(1000);
    console.log('3s with mainAsync');
};

mainAsync();