import assert from 'assert';


function sub(a, b) {
    return a - b;
}



function sum(a, b) {
    return a + b;
}

assert.strictEqual(sum(1, 2), 3, "1 + 2 should be 3");

/* -------------------- */

function greet(name) {
    return "Hello: " + name
}

assert.equal(greet("kaho"), "Hello: kaho")


// Test cases definition

// Test case 1

// give me the signature for the test case 1
// assert.strictEqual(actual, expected);
// genau gleich

// .equal "3" == 3
// .strictEqual "3" === 3

assert.strictEqual(sum(1, 2), 3, "1 + 2 should be 3");
assert.strictEqual(sub(2, 2), 0, "2 - 2 should be 0");


function login(username, password) {
    if (username === "admin" && password === 12345) {
        return "success"
    } else {
        return "error"
    }
}


// login aufrufen und als return value "success" erhalten
assert.strictEqual(login("admin", 12345), "success")

// login aufrufen und als return value "error" erhalten
assert.strictEqual(login("admin", 123456), "error")

// primitives -> strings, number, booleans, undefined
// complex (composites) -> object, array, functions

const user = { name: "Kaho", isAdmin: true }
const user2 = { name: "Kaho", isAdmin: true }

assert.deepStrictEqual(user, user2, "Diese beiden Objekte müssen gleich sein!!!")

function setToAdmin(username, isAdmin) {
    return {
        name: username,
        isAdmin: isAdmin
    }
}

//                          👇 actual value               👇 expected value
assert.deepStrictEqual(setToAdmin("Kaho", true), { name: "Kaho", isAdmin: true }, "Kaho is set to admin")
assert.deepStrictEqual(setToAdmin("Kaho", false), { name: "Kaho", isAdmin: false }, "Kaho is set not to admin")

// die aufgabe ist ein username und ein flag ob ein user admin ist true/false -> prüfung das object was wir bekommen richtig ist.

const fruits = ['apple', 'banana', 'orange'];
const expectedFruit = 'banana';

assert.strictEqual(fruits.includes(expectedFruit), true, "Banana ist in der Liste enthalten!!!")
assert.strictEqual(fruits.includes("kiwi"), false, "Kiwi ist in der Liste nicht vorhanden")
assert.ok(fruits.includes("banana"), "Banana sollte in fruits vorhanden sein")
assert.ok(!fruits.includes("kiwi"), "Kiwi sollte in fruits NICHT vorhanden sein")

// teste ob banana ist enthalten in fruits !!!!


const person = { name: 'Bob', age: 30 };

// Überprüfen, ob das Objekt die Eigenschaft 'name' hat
// if it is true or false
assert.ok('name' in person, 'Das Objekt sollte die Eigenschaft "name" haben');
assert.strictEqual('name' in person, true, "Das Object sollte die Eigenschaft 'name' haben")

// assert.strictEqual() <<<----- überprüfen von primitive values, damit prüfe ich strings, zahlen oder booleans
// assert.deepStrictEqual() <<<---- überprüfen von complex values, damit prüfe ich immer object oder arrays
// assert.doesNotReject() <<<---- das ist für die Prüfung von async functions, wenn wir eine API prüfen möchten


const API_ENDPOINT = "https://freetestapi.com/api/v1/cars?limit=5"



import assert from 'assert';
//import fetch from 'node-fetch';

const API_ENDPOINT = "https://freetestapi.com/api/v1/cars?limit=5";

async function fetchCars() {
    const response = await fetch(API_ENDPOINT);
    const data = await response.json();
    return data;
}

async function test() {
    const data = await fetchCars();
    assert.strictEqual(data.length, 5, "API should return exactly 5 items");
    // .strictEqual + .deepStrictEqual
}

test()


const API_ENDPOINT_SINGLE = "https://freetestapi.com/api/v1/cars/";

async function fetchCar(id) {
    const url = API_ENDPOINT_SINGLE + id
    console.log(url)
    const response = await fetch(API_ENDPOINT_SINGLE + id)
    const data = await response.json()
    if (data.error) {
        throw new Error(data.error)
    } else {
        return data
    }
}

async function testSingle(id) {
    console.log("das ist meine id", id)
    const data = await fetchCar(id)
    // wenn kein id übergeben wird, bekommen wir ein object {error: 'car not found'}
    console.log(data)
    assert.strictEqual(data.id, id, "API should return exactly id item")
}

// fetchCar umbauen damit man die ID übergeben kann
// testSingle umbauen damit man die ID übergeben kann

testSingle(5)
testSingle(15)
testSingle(25)
testSingle(50)
testSingle(150)
testSingle(500)
