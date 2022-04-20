import { homeView } from "./home";
import { menuView } from "./menu";
import { deliveryView } from "./delivery";
import { bookView } from "./book";

export function addListener() {
  let homeBtn = document.getElementById('homeBtn');
  let menuBtn = document.getElementById('menuBtn');
  let deliveryBtn = document.getElementById('deliveryBtn');
  let bookBtn = document.getElementById('bookBtn');
  let tableBtn = document.getElementById('tableBtn');
  let leftBtn = document.getElementById('leftBtn');
  let midBtn = document.getElementById('midBtn');
  let rightBtn = document.getElementById('rightBtn');

  homeBtn.addEventListener("click", homeView);
  menuBtn.addEventListener("click", menuView);
  deliveryBtn.addEventListener("click", deliveryView);
  bookBtn.addEventListener("click", bookView);
  tableBtn.addEventListener("click", bookView);
  leftBtn.addEventListener("click", menuView);
  midBtn.addEventListener("click", deliveryView);
  rightBtn.addEventListener("click", bookView);
}