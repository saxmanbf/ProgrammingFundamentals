let prime = require('../Prime');

describe('a program to identify if an input number is prime', () => {
	
	it('can perform a smoke test', () => {
		expect(true).toBe(true)
	});

	it('can identify a prime number', () => {
		expect(prime.primeTest(7)).toBe(true)
		expect(prime.primeTest(8)).toBe(false)
		expect(prime.primeTest(23)).toBe(true)
		expect(prime.primeTest(4001)).toBe(true)
		expect(prime.primeTest(7043)).toBe(true)
		expect(prime.primeTest(7044)).toBe(false)
	});
});


