
const receivesAFunction = (callback) => {
     callback();
}

function returnsANamedFunction() {
    return function returnMe() {}

    
}

function returnsAnAnonymousFunction() {
    return () => {}
}