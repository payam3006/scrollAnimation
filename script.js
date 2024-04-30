const q = console.log;

// console.log(document.body.offsetHeight);

// console.log(document.body.scrollHeight);

// console.log(document.querySelector("main").clientHeight);

// console.log(document.body.clientHeight);

let contentNum = 0;
let mainHeight = document.querySelector("main").clientHeight;
let bodyHeight = document.body.clientHeight;
let docHeight = document.documentElement.clientHeight;
let newDiv;
let newContent;
const main = document.querySelector("main");

const addNewContent = () => {
  contentNum += 1;
  newContent = document.createElement("div");
  newContent.id = `content${contentNum}`;
  if (contentNum % 2 == 0) {
    newContent.classList = "content even";
  } else {
    newContent.classList = "content odd";
  }
  newContent.innerText = "Content";
  main.appendChild(newContent);
  mainHeight = main.clientHeight;
  bodyHeight = document.body.clientHeight;
  setTimeout(function () {
    newContent.classList = "content";
  }, 10);
};

const removeLastContent = () => {
  if (contentNum % 2 == 0) {
    main.lastElementChild.classList.add("even");
  } else {
    main.lastElementChild.classList.add("odd");
  }
  contentNum -= 1;
  setTimeout(function () {
    main.removeChild(main.lastElementChild);
    mainHeight = main.clientHeight;
  }, 600);
};

while (mainHeight < docHeight - 100) {
  contentNum += 1;
  newContent = document.createElement("div");
  newContent.id = `content${contentNum}`;
  newContent.classList = "content";
  newContent.innerText = "Content";
  main.appendChild(newContent);
  mainHeight = main.clientHeight;
  bodyHeight = document.body.clientHeight;
}

let contentHeight = document.getElementById("content1").clientHeight;

const update = (event) => {
  mainHeight = main.clientHeight;
  bodyHeight = document.body.clientHeight;
  docHeight = document.documentElement.clientHeight;
  if (event.deltaY > 0) {
    if (bodyHeight <= mainHeight) {
      document.body.style.height =
        document.querySelector("body").clientHeight + event.deltaY + "px";
    } else {
      addNewContent();
    }
  } else if (bodyHeight >= docHeight) {
    removeLastContent();
    document.body.style.height =
      document.querySelector("body").clientHeight + event.deltaY + "px";
  }
};

window.addEventListener("wheel", update);

// addNewContent();
// q(contentNum);
// q(mainHeight);
// q(bodyHeight);
// q(docHeight);
