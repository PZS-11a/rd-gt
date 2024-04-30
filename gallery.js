const container = document.querySelector("#container");
const image = document.querySelector("#TargetImg");
console.log(container);

const kepek = ["delfi.png", "kutya.webp", "macsek.jpg"];

for (const kep of kepek) {
  const img = document.createElement("img");
  img.src = kep;
  img.width = "200";
  container.appendChild(img);
  img.addEventListener("click", function () {
    image.src = img.src;
  });
}
