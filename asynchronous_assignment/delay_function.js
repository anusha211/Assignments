function delay(t){
    return new Promise(resolve => setTimeout(resolve,t));
}

console.log("Before the delay!");
  delay(3000).then(()=>{
    console.log("After the delay!"); 
    });




async function runAsyncTask() {
  console.log("Async task started...");
  await delay(4000); 
  console.log("Async task finished after 3 seconds");
}

runAsyncTask();

