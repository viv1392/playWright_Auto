const{test,expect}=require('@playwright/test');
 
test('Test one',{tag: "@smoke",},async({page})=>{
    console.log('this is test one');

});
 
test('Test two', {tag: "@smoke",},async({page})=>{
    console.log('this is test two');

});
 
test('Test three',{tag: "@reg",}, async({page})=>{
    console.log('this is test three');

});
 
test('Test four',{tag: "@reg,"},async({page})=>{
    console.log('this is test four');

});
 
test('Test Five',{tag: "@reg@smoke",},async({page})=>{
    console.log('this is test five');

});

//to run test command
//npx playwright test tagTest.spec.js --grep "@reg@smoke" --project chromium --headed
//npx playwright test tagTest.spec.js --grep "@reg" --project chromium --headed
//to exclude a test
//npx playwright test tagTest.spec.js --grep-invert "@reg@smoke" --project chromium --headed