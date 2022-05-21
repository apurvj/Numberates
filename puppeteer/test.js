const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  try{
    await page.goto('https://8081-bacefbcecadccbaeccbbafeacbeffeabeafcfebc.examlyiopb.examly.io/');
    await page.setViewport({
      width:1200,
      height:800,
    })
    await page.waitForSelector('label');
    console.log('TESTCASE:testcase1:success');
  }
  catch(e){
    console.log('TESTCASE:testcase1:failure');
  }finally{
    await page.close();
    await browser.close();
  }
})();

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  try{
    await page.goto('https://8081-bacefbcecadccbaeccbbafeacbeffeabeafcfebc.examlyiopb.examly.io/');
    await page.setViewport({
      width:1200,
      height:800,
    })
    await page.waitForSelector('h1');
    const result = await page.evaluate(()=>{
      let title = document.querySelector("#title");
      return title.innerHTML;
    })
    const result1 = await page.evaluate(()=>{
      let heading = document.querySelector("#heading");
      return heading.innerHTML;
    })
    console.log('TESTCASE:testcase2:success');
  }
  catch(e){
    console.log('TESTCASE:testcase2:failure');
  }finally{
    await page.close();
    await browser.close();
  }
})();

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  try{
    await page.goto('https://8081-bacefbcecadccbaeccbbafeacbeffeabeafcfebc.examlyiopb.examly.io/');
    await page.setViewport({
      width:1200,
      height:800,
    })
    await page.waitForSelector('img');
    const result = await page.evaluate(()=>{
      let button = document.querySelector("#checkButton");
      return button.innerHTML;
    })
    const result1 = await page.evaluate(()=>{
      let label = document.querySelector("#textLabel");
      return label.innerHTML;
    })
    console.log('TESTCASE:testcase3:success');
  }
  catch(e){
    console.log('TESTCASE:testcase3:failure');
  }finally{
    await page.close();
    await browser.close();
  }
})();

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  try{
    await page.goto('https://8081-bacefbcecadccbaeccbbafeacbeffeabeafcfebc.examlyiopb.examly.io/');
    await page.setViewport({
      width:1200,
      height:800,
    })
    await page.waitForSelector('input');
    const result = await page.evaluate(()=>{
      let box = document.querySelector("#textBox");
      return box.innerHTML;
    })
    console.log('TESTCASE:testcase4:success');
  }
  catch(e){
    console.log('TESTCASE:testcase4:failure');
  }finally{
    await page.close();
    await browser.close();
  }
})();

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  try{
    await page.goto('https://8081-bacefbcecadccbaeccbbafeacbeffeabeafcfebc.examlyiopb.examly.io/');
    await page.setViewport({
      width:1200,
      height:800,
    })
    await page.waitForSelector('button');
    const result = await page.evaluate(()=>{
      let attemptLabel = document.querySelector("#attemptLabel");
      return attemptLabel.innerHTML;
    })
    const result1 = await page.evaluate(()=>{
      let attemptCount = document.querySelector("#attemptCount");
      return attemptCount.innerHTML;
    })
    console.log('TESTCASE:testcase5:success');
  }
  catch(e){
    console.log('TESTCASE:testcase5:failure');
  }finally{
    await page.close();
    await browser.close();
  }
})();