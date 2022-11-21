/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};
let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let ext = [".com", ".net", ".us", ".io"];

let domain = [];

// for (var i = 0; i < pronoun.length; i++) {
//   for (var j = 0; j < adj.length; j++) {
//     for (let x = 0; x < noun.length; x++) {
//       for (let e = 0; e < ext.length; e++) {
//         domain.push(pronoun[i] + adj[j] + noun[x] + ext[e]);
//       }
//     }
//   }
// }

pronoun.forEach(pronoun => {
  adj.forEach(adj => {
    noun.forEach(noun => {
      ext.forEach(ext => {
        domain.push(pronoun + adj + noun + ext);
      });
    });
  });
});

let domainList = document.querySelector(".domainsList");

for (let i = 0; i < domain.length; i++) {
  domainList.innerHTML += "<li>" + domain[i] + "</li>";
}
console.log(domain);
