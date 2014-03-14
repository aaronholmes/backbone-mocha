describe("Test timing", function(){
	//done specifies to wait until async test is complete
	it("Should be a fast test", function(done){
		expect("hi").to.equal("hi");
		done();
	});

	it("Should be a medium test", function(done){
		setTimeout(function(){
			expect("hi").to.equal("hi");
			done();
		}, 40);
	});

	it ("Should be a slow test", function(done){
		setTimeout(function(){
			expect("hi").to.equal("hi");
			done();
		},100);
	});

	it ("Should be a timeout failure", function(done){
		setTimeout(function(){
			expect("hi").to.equal("hi");
			done();
		},400);
	});
});