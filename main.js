const flashCards = document.getElementsByClassName("flashCards")[0];
const container = document.getElementsByClassName("container")[0];
const question = document.getElementById("question");
const answer = document.getElementById("answer");
let contentArray = localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : [];

function delFlashCards() {
  localStorage.clear();
  flashCards.innerHTML = "";
  contentArray = [];
  var intro = document.getElementById("intro");
    intro.innerHTML = "Your Flash Cards Will apear here 😉";
    intro.style.fontSize = "25px"
}

function hideCreateBox() {
  container.style.display = "none";
}

function showCreateCardBox() {
  container.style.display = "block";
}

// WIP ONWARDS 👍
function addFlashCard() {
  var ansVal = answer.value;
  var qVal = question.value;

  if (question.value == "") {
    errorThrow();
  }
  else if (answer.value == "") {
    errorThrow();
  }
  else {
    var intro = document.getElementById("intro");
    intro.innerHTML = "Your Flash Card here 😀";
    // intro.style.fontSize = "25px"

    var divParent = document.createElement("div");
    divParent.classList = "flashCard";
    divParent.innerHTML = "<h3>" + question.value + "</h3>" + "<hr> <br> <br> <br>";
    flashCards.appendChild(divParent);

    divParent.addEventListener("click", function() {
      divParent.innerHTML = "<h3>" + qVal + "</h3>" + "<h6>" + "<hr>" + ansVal + "<h6>";
      setTimeout(function() {
        divParent.innerHTML = "<h3>" + qVal + "</h3>" + "<hr>";
      }, 5000)
    })
    question.value = "";
    answer.value = "";
  }
}

function errorThrow() {
  document.getElementById("errorThrow").style.display = "block";
  setTimeout(function() {
    document.getElementById("errorThrow").style.display = "none";
  }, 5000)
}