window.hello = function(){
	return "Hello World Test";
}

describe("Testing the test libraries", function(){
	describe("chai", function(){
		it("Should be equal to using expect", function(){
			expect(hello()).to.equal("Hello World Test");
		});
	});
});

describe("Sinon.js", function(){
	it("Should report spy called", function(){
		var helloSpy = sinon.spy(window, "hello");

		expect(helloSpy.called).to.be.false;
		hello();
		expect(helloSpy.called).to.be.true;
		hello.restore();
	})
})