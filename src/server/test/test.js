const test = require("tape");
const test = require("../handler");
const supertest = require("supertest");

test("Testing tape", t => {
	t.equal(1, 1, "one equals one");
	t.end();
});


test("Testing home endpoint", t => {
	supertest("../handler.js")
		.get("/")
	.expect(200)
});
