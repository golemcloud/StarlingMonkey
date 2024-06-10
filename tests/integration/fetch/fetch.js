import {serveTest} from "../test-server.js";
import {assert, strictEqual, throws, deepStrictEqual} from "../assert.js";

export const handler = serveTest(async (t) => {
    t.test("fetch - get array - users - 10", () => {
        testGetJsonArray("https://jsonplaceholder.typicode.com/users", 10);
    });

    t.test("fetch - get array - comments - 500", () => {
        testGetJsonArray("https://jsonplaceholder.typicode.com/comments", 500);
    });

    /* TODO: not working yet
    t.test("fetch - get array - comments - 5000", () => {
        testGetJsonArray("https://jsonplaceholder.typicode.com/photos", 5000);
    });
    */
});

function testGetJsonArray(url, length) {
    let result = syncGetJson(url);
    console.log("result:")
    console.log(result);
    assert(result != null, "result is not nullish");
    assert(result["length"] === length, "length == " + length);
}

async function asyncGetJson(url) {
    let response = await fetch(url);
    let json = response.json();
    return json;
}

function syncGetJson(url) {
    return asyncToSync(asyncGetJson(url));
}

function asyncToSync(promise) {
    let success = false;
    let done = false;
    let result;
    let error;

    promise
        .then(r => {
            result = r;
            success = true;
            done = true;
        })
        .catch(e => {
            error = e;
            done = true;
        });

    runEventLoopUntilInterest();

    if (!done) {
        let error = new Error("asyncToSync: illegal state: not done")
        console.error(error);
        throw error
    }

    if (!success) {
        console.error("asyncToSync: error: {}", error);
        throw error;
    }

    return result;
}
