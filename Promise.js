//using resolve
function getData() {
  return Promise.resolve("Data Received ✅");
}

getData().then((res) => {
  console.log(res);
});


//using reject
function getError() {
  return Promise.reject("Something went wrong ❌");
}

getError().catch((err) => {
  console.log(err);
});

// using async/await
async function fetchData() {
  return "Hello Promise ✅";
}

fetchData().then((res) => {
  console.log(res);
});