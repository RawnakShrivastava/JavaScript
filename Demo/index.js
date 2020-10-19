// let counter = 0;

// document.querySelector(".inc").addEventListener("click", function () {
//   counter++;
//   console.log(counter);

//   document.querySelector(".counter").textContent = counter;
// });
// document.querySelector(".dec").addEventListener("click", function () {
//   counter--;
//   console.log(counter);

//   document.querySelector(".counter").textContent = counter;
// });

// console.log("No");
// // let i = 60;

// var i = 60;

// function onTimer() {
//   document.getElementById("mycounter").innerHTML = i + "s";
//   i--;
//   if (i < 0) {
//     alert("You lose!");
//   } else {
//     setTimeout(onTimer, 1000);
//   }
// }

// // do {
// //   setTimeout(
// //     (delay = () => {
// //       i--;
// //       console.log(i);
// //       s;
// //       document.querySelector(".counter").textContent = i;
// //       // Something you want delayed.
// //       delay;
// //     }),
// //     5000
// //   ); //
// // } while (i > 1);

//ASYNC js

// const second = () => {
//   setTimeout(() => {
//     console.log("ASYNC Second");
//   }, 2000);
// };

// const first = () => {
//   console.log("first");
//   setTimeout(() => {
//     console.log("ASYNC First");
//   }, 4000);
//   second();
//   console.log("End");
// };

// first();

//CALLBACK//

// const posts = [
//   { title: "Post 1", body: "This is Post 1" },
//   { title: "post 2", body: "This is post 2" },
// ];

// const getPost = () => {
//   setTimeout(() => {
//     posts.forEach((post, index) => {
//       console.log(`My post ${index + 1} ` + ": " + post.body);
//     });
//     console.log("Get Post Ends...");
//   }, 2000);
// };

// const createPost = (post, callback) => {
//   setTimeout(() => {
//     callback();
//     posts.push(post);
//     console.log("Create Post Ends...");
//   }, 1000);
// };

// createPost({ title: "Post 3", body: "This is post 3" }, getPost);

// //Promise
// const createPostPromise = (post) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       posts.push(post);
//       resolve();
//       console.log("Create Post Ends...");
//     }, 1000);
//   });
// };

// createPostPromise({ title: "Post 4", body: "This is post 4" }).then(getPost);
//=============================================================================================
//                                          To Do list

//Add Item
document.querySelector(".add-item").addEventListener("click", function () {
  var input = document.querySelector(".todo-item").value;

  //Create Elements
  var li = document.createElement("li");
  var ul = document.getElementById("listUl");
  var text = document.createTextNode(input);

  li.appendChild(text);
  if (input === "") {
    alert("PLease enter something..");
  } else {
    ul.appendChild(li);
  }
  document.querySelector(".todo-item").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  var close = document.getElementsByClassName("close");

  for (var i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      this.parentElement.style.display = "none";
    };
  }
});
//============================================================================================
