export function displayCats(cats) {
  const gallery = document.getElementById("gallery");
  gallery.innerHTML = "";
  cats.forEach((cat) => {
    const img = document.createElement("img");
    img.src = cat.url;
    img.alt = "Cat Image";
    gallery.appendChild(img);
  });
}

export function displayRandomCat(cat) {
  const gallery = document.getElementById("gallery");
  gallery.innerHTML = "";
  const img = document.createElement("img");
  img.src = cat.url;
  img.alt = "Random Cat Image";
  gallery.appendChild(img);
}

export function clearGallery() {
  const gallery = document.getElementById("gallery");
  gallery.innerHTML = "";
}
