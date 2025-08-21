const{test, expect} = require('@playwright/test');
test.only("Only Annotation test",async({page})=>{

    console.log('this is only block');

});

test.skip("Skip annotation test",async({browser})=>{
     if (browser=== chrome){                             // conditional skip 
    console.log('this is skip block');
     }

});
test.fixme('Fixme annotation test',async({page})=>{

    console.log('this is fixme block'); 
      expect(1).toBe(4)                                 //this is used for the test cases that is failing but will be fixed later

});

test('Slow annotation test',async({page})=>{
    test.slow();       
    console.log("this slows the test ")                        // slows the test three time that is configured in playwright.config .js file


});