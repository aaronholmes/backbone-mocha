// configure mocha to continue after first error
mocha.bail(false);

describe("Test failures", function(){
	it("Should fail on assertion", function(){
		expect("hi").to.equal("Bye");
	});

	it("Should fail on unexpected exception", function(){
		throw new Error();
	});
});