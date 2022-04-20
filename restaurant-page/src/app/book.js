import { clearView } from "./clear";
import { addListener } from "./listener";
export function bookView() {
  clearView();
  let div = document.getElementById('content');
  div.innerHTML = '<div class="delivery-container"> <div class="nav"> <div class="logo"> <img src="../src/img/logo.png"></img> </div><div class="menu"></div></div><div class="delivery-contents"> <div class="delivery-left"> <h1>Bookings Currently Closed</h1> <p>Due to renovations taking place, we are currently not accepting any bookings. We will be announcing the grand re-opening soon through our newsletter and social media.</p><h2>Stay In The Know</h2> <div class="delivery-newsletter"> <p>Sign up to our newsletter to be notified when we re-open!<p> <div class="delivery-signup"> <input type="email" id="email" name="email" placeholder="Your email address.."> <button class="sign-up">Sign Up</button> </div></div></div><div class="delivery-right"> <img class="delivery-pic" src="../src/img/restaurant.jpg"></img> </div></div></div>';
}