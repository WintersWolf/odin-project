import { clearView } from "./clear";
import { addListener } from "./listener";
export function deliveryView() {
  clearView();
  let div = document.getElementById('content');
  div.innerHTML = '<div class="delivery-container"> <div class="nav"> <div class="logo"> <img src="./src/img/logo.png"></img> </div><div class="menu"></div></div><div class="delivery-contents"> <div class="delivery-left"> <h1>Delivery Coming Soon</h1> <p>At Glaze we are currently working to ensure that our customers receive the same quality they have come to know and love when ordering takeaway. We appreciate your patience, please check back soon!</p><h2>We Are Partnering With</h2> <div class="delivery-partners"> <img src="../src/img/uber-eats.png"></img> <img src="../src/img/deliveroo.png"></img> <img src="../src/img/menulog.png"></img> </div><div class="delivery-newsletter"> <p>Sign up to our newsletter to be notified when delivery begins!<p> <div class="delivery-signup"> <input type="email" id="email" name="email" placeholder="Your email address.."> <button class="sign-up">Sign Up</button> </div></div></div><div class="delivery-right"> <img class="delivery-pic" src="../src/img/delivery.jpg"></img> </div></div></div>';
  addListener();
}