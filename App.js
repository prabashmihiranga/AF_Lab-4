function testPromise() {
  return new Promise((resolve, reject) => {
    const success = true;

    if (success) {
      resolve("Async/Await Success!");
    } else {
      reject("Async/Await Failed!");
    }
  });
}

async function run() {
  try {
    const result = await testPromise();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

run();