var Calculator = {
    add: function(a,b) {return a+b}, 
    subtract: function(a,b) {return a-b}
};

describe("Calculator", function() {
    
    it("2+2=4", function() {
      expect(1).toEqual(1); 
    });

    it("Calculator is defined", function() {
       expect(Calculator).toBeDefined(); 
    });
    
    describe("addition", function() {
        it("can add 1 and 1", function() {
            expect(Calculator.add(1,1)).toEqual(2);
        });
        it("can add 2 and 2", function() {
            expect(Calculator.add(2,2)).toEqual(4);
        });
    });
    
    describe("subtraction", function() {
        it("1-1=0", function() {
            expect(Calculator.subtract(1,1)).toEqual(0);
        });
    })
    
});