const text = document.querySelector(".text");
let textInner = text.innerHTML.trim().split("");

let spanText = "";


function getSpanText() {
  for (let i = 0; i < textInner.length; i++) {
    if (textInner[i].includes(" ")) {
      spanText += " ";
    } else {
      spanText += `<span>${textInner[i]}</span>`;
    }
  }
  return spanText;
}
getSpanText();

text.innerHTML = spanText;


text.addEventListener("mouseover", (e) => {
  if (e.target.tagName !== "SPAN") return;
  e.target.classList.add("active");
});
