/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let excuseGenerator = () => {
    let whos = ["The dog", "My grandma", "His turtle", "My bird", "my fish"];
    let whats = ["ate", "peed", "crushed", "broke", "sold"];
    let tos = [
      "my homework",
      "the keys",
      "the car",
      "my house",
      "my dental prosthesis"
    ];
    let whens = [
      "before the class",
      "right on time",
      "at the end of the day",
      "during my lunch",
      "while I was praying"
    ];

    let who = whos[Math.floor(Math.random() * whos.length)];
    let what = whats[Math.floor(Math.random() * whats.length)];
    let to = tos[Math.floor(Math.random() * tos.length)];
    let when = whens[Math.floor(Math.random() * whens.length)];

    return who + " " + what + " " + to + " " + when;
  };

  document.querySelector("#excuse").innerHTML = excuseGenerator();
};
