
describe("Checking monthly payment calculation", () => {

  it("should return a string", function() {

    expect(calculateMonthlyPayment({amount:200000, rate: 6, years: 15})).toMatch(/.*/);

  });

  it('should calculate the monthly rate correctly', function () {

    expect(calculateMonthlyPayment({amount:200000, rate: 6, years: 15})).toEqual("1687.71");
    expect(calculateMonthlyPayment({amount:0, rate: 6, years: 15})).toEqual("Enter an amount greater than zero!");
    expect(calculateMonthlyPayment({amount:200000, rate: 6, years: 0})).toEqual("Enter a term greater than zero!");

  });
  
  
  it("should return a result with 2 decimal places", function() {
    expect(calculateMonthlyPayment({amount:200000, rate: 6, years: 15})).toMatch(/\d+\.\d\d/);
  });
  
});

