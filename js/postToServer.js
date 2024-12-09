const fetch = require("node-fetch");

const postToServer = async (data) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  // .then((response) => response.json())
  // .then((json) => console.log(json));
  const postedData = await response.json();
  return postedData;
};

module.exports = postToServer;
