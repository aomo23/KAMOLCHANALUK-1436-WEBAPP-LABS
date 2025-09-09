document.title = "KKU Engineering";

const section = document.querySelector("section");

const newImg = document.querySelector("img");
newImg.src = "src/en.jpg"; 
newImg.alt = "Faculty of Engineering";

 
const link = document.createElement("a");
link.href = "https://www.en.kku.ac.th";
link.appendChild(newImg);

section.insertBefore(link, section.firstChild);

const newText = document.querySelector("p");
newText.innerHTML = "We hope you enjoy learning";
newText.style.color = "white";
newText.style.backgroundColor = "black";
newText.style.fontSize = "1.5rem";
newText.style.textAlign = "center";


section.appendChild(newText);
