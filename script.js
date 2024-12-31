const e = document.getElementById("education1");
const s = document.getElementById("skills1");
const e1 = document.getElementById("education");
const s1 = document.getElementById("skills");
function education() {
  s.style.display = "none";
  s1.style.color = "white";
  e1.style.color = "orange";
  e.style.display = "block";
}
function skills() {
  s1.style.color = "orange";
  e1.style.color = "white";
  s.style.display = "block";
  e.style.display = "none";
}
