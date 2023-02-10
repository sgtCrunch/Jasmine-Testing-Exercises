describe("Payments function tests", function() {
    beforeEach(function () {
      // initialization logic
        billAmtInput.value = '50.00';
        tipAmtInput.value = '15.00';
    });
  
    it('Should clear bill amount and tip amount inputs', function () {
      submitPaymentInfo();
      expect(billAmtInput.value).toEqual('');
      expect(tipAmtInput.value).toEqual('');
    });
  
    it('Should return nothing when bill amount or tip amount are empty', function () {
        billAmtInput.value = '';
        expect(createCurPayment()).toEqual(undefined);
        billAmtInput.value = '43.00';
        tipAmtInput.value = '';
        expect(createCurPayment()).toEqual(undefined);
    });
  
    it('Should return undefined if bill amount is zero or less', function () {
        billAmtInput.value = '0';
        expect(createCurPayment()).toEqual(undefined);
    });

    it('Should return undefined if tip amount less than zero', function () {
        tipAmtInput.value = '-1';
        expect(createCurPayment()).toEqual(undefined);
    });
  
    afterEach(function() {
      // teardown logic
      allPayments = {};
      paymentId = 0;
      billAmtInput.value = '';
      tipAmtInput.value = '';
      paymentTbody.innerHTML = '';
      updateSummary();
    });
    
  });
  
  