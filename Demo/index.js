const fetch = require("node-fetch");

fetch("https://reqres.in/api/users")
  .then((response) => {
    if (!response.ok) {
      throw Error("error");
    }
    return response.json();
  })
  .then((data) => {
    //console.log(data.data);
    const html = data.data
      .map((user) => {
        return `
      <div class = 'Admin'>
        <p>Name : ${user.first_name}</p>
      </div>
      `;
      })
      .join("");
    // console.log(html);
    console.log(data.data);
    document.querySelector("show").innerHTML = "Showing..";
    document.querySelector("#user").insertAdjacentHTMl("afterbegin", html);
  })
  .catch((error) => {
    console.error();
  });
