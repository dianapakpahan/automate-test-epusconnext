import { Before, After } from '@wdio/cucumber-framework'; 

Before(async () => {
     await driver.terminateApp('com.infokes.eposyandu');
     await driver.activateApp('com.infokes.eposyandu');
     await driver.pause(2000);
     await driver.activateApp('com.infokes.eposyandu'); 
     await driver.pause(5000); 
});

After(async () => { 
    console.log('Test selesai'); 
});