//  Test Script ADD FUNCTIONS according to Jasmine test style
//  I have only included Random Number Generator Below 

//  By default Jasmine will be disabled, and should be ultimately removed in production deployment!

// expect(something).not.toBe(true);
// expect().nothing();
// expect(thing).toBe(realThing);
// expect(number).toBeCloseTo(42.2, 3);
// expect(result).toBeDefined();
// expect(result).toBeFalse();
// expect(result).toBeFalsy();
// expect(result).toBeGreaterThan(3);
// expect(result).toBeGreaterThanOrEqual(25);
// expect(result).toBeLessThan(0);
// expect(result).toBeLessThanOrEqual(123);
// expect(thing).toBeNaN();
// expect(thing).toBeNegativeInfinity();
// expect(result).toBeNull();
// expect(thing).toBePositiveInfinity();
// expect(result).toBeTrue();
// expect(thing).toBeTruthy();
// expect(result).toBeUndefined():
// expect(bigObject).toEqual({"foo": ['bar', 'baz']});
// expect(mySpy).toHaveBeenCalledBefore(otherSpy);
// expect(mySpy).toHaveBeenCalledTimes(3);
// expect(mySpy).toHaveBeenCalledWith('foo', 'bar', 2);

// expect(function() { throw new Error('nope'); }).toThrowMatching(function(thrown) { return thrown.message === 'nope'; });


// Example:
// describe("Hello world", function() {

//     it("says hello", function() {
//         expect(helloWorld()).toEqual("Hello world!");
//     });

// }); 

 


// Test Random Number Generator
describe ("get Random Number with Limit",function(){
it("gives number back", function(){
    expect(getRandom(5)).toBeLessThan(6);
});
});


