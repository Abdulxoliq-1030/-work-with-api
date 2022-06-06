fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => console.log(data));

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.log("Error"));

fetch("https://jsonplaceholder.typicode.com/users").then((res) => {
  if (res.ok) {
    console.log("Success");
  } else {
    console.log("Not successfull");
  }
});
