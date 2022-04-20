import { clearView } from "./clear";
import { addListener } from "./listener";
export function homeView() {
  clearView();
  let div = document.getElementById('content');
  div.innerHTML = '<div class="home-hero"> <div class="nav"> <div class="logo"> <img src="./src/img/logo.png"></img> </div><div class="menu"></div></div><div class="hero-items"> <h1>Made With Love</h1> <h3>Inspiring taste buds is our business</h3> <button class="hero-btn" id="tableBtn">Book a Table</button> </div></div><div class="home-buttons"> <div class="home-container-l"> <div class="home-button-l" id="leftBtn"> <h2>MENU</h2> <p>View our menu</p></div></div><div class="home-container-m"> <div class="home-button-m" id="midBtn"> <h2>DELIVERY</h2> <p>Enjoy home delivery</p></div></div><div class="home-container-r"> <div class="home-button-r" id="rightBtn"> <h2>RESERVATIONS</h2> <p>Book a table</p></div></div></div>';
  addListener();
}