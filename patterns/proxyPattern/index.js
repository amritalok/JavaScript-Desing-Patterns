const Person = {
    name: 'Tony Stark',
    age: '42',
    nationality: 'American'
}

/*  
    This is a proxy pattern to interact with the Person object. 
    This pattern is useful to add validation, formatting, notifications or debugging
*/
const personProxy = new Proxy(target=Person, handler={
    get: (obj, prop) => {
        console.log(`The value of the ${prop} is ${obj[prop]}`);
    },
    set: (obj, prop, value) => {
        console.log(`Value of ${prop} changed from ${obj[prop]} to ${value}`);
        obj[prop] = value;
        return true;
    },
})

personProxy.name;
personProxy.age = 43;

/*  
    This is a proxy pattern to interact with the Person object. 
    Using Reflect, we can set or get object's value without using obj[key] pattern
*/
const personProxyWithReflect = new Proxy(target=Person, handler={
    get: (obj, prop) => {
        console.log(`The value of the ${prop} is ${Reflect.get(obj, prop)}`);
    },
    set: (obj, prop, value) => {
        console.log(`Value of ${prop} changed from ${obj[prop]} to ${value}`);
        Reflect.set(Person, prop, value);
        return true;
    },
})

personProxyWithReflect.name;
personProxyWithReflect.age = 43;
personProxyWithReflect.name = "Jane Doe";