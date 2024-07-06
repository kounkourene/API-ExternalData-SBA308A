import { fetchCats, searchCats, fetchRandomCat } from "./api.js";
import { displayCats, displayRandomCat, clearGallery } from "./gallery.js";

let currentPage = 1;

document.addEventListener("DOMContentLoaded", async () => {
  const cats = await fetchCats(currentPage);
  displayCats(cats);
});

document.getElementById("searchButton").addEventListener("click", async () => {
  const searchQuery = document.getElementById("search").value.trim();
  if (searchQuery) {
    const cats = await searchCats(searchQuery);
    displayCats(cats);
  }
});

document.getElementById("prevPage").addEventListener("click", async () => {
  if (currentPage > 1) {
    currentPage--;
    const cats = await fetchCats(currentPage);
    displayCats(cats);
  }
});

document.getElementById("nextPage").addEventListener("click", async () => {
  currentPage++;
  const cats = await fetchCats(currentPage);
  displayCats(cats);
});

document
  .getElementById("randomCatButton")
  .addEventListener("click", async () => {
    const cat = await fetchRandomCat();
    clearGallery();
    displayRandomCat(cat);
  });
