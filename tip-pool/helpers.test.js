describe("Testing helper functions", function() {
    beforeEach(function () {
      // initialization logic
      allPayments = {
                        'payment1' : {billAmt: 100, tipAmt: 10, tipPercent: 10},
                        'payment2' : {billAmt: 200, tipAmt: 30, tipPercent: 15}
                    };
    });
  
    it('Should return the sum of Tip Amount, Bill Amount, Tip Percent', function () {
        expect(sumPaymentTotal('tipAmt')).toEqual(40);
        expect(sumPaymentTotal('tipPercent')).toEqual(25);
        expect(sumPaymentTotal('billAmt')).toEqual(300);
    });

    it('Should calculate tip percent', function () {
        expect(calculateTipPercent(300, 30)).toEqual(10);
    });

    it('Should return an integer for percent', function () {
        expect(Number.isInteger(calculateTipPercent(300, 30))).toEqual(true);
    });

    it('Should create a cell with value provided', function () {
        let newTr = document.createElement('tr');
        appendTd(newTr, '500');
        let checkTd = newTr.querySelector("td");

        expect(checkTd.innerText).toEqual('500');
    });

    it('Should create a cell with X in it', function () {
        let newTr = document.createElement('tr');
        appendDeleteBtn(newTr);
        let checkTd = newTr.querySelector("td");

        expect(checkTd.innerText).toEqual('X');
    });

  
    afterEach(function() {
      // teardown logic
      allPayments = {};
    });
    
});
  
  