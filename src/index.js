import Style from "./styles/index.scss";
import loadImgSources from "./imgSources.js";
import createScrollSnap from "scroll-snap";

loadImgSources();

// Scroll-snap //

const scrollContainer = document.getElementById("scroll-snap-container");

createScrollSnap(scrollContainer, {
	snapDestinationX: "0%",
	snapDestinationY: "100%",
	timeout: 100,
	duration: 300,
	threshold: 0.2,
	snapStop: false,
	easing: (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t),
});

// Email address check for signup in the CTA section //

var button = document.getElementById("startbtn");
var email = document.getElementById("email-address");

function verify() {
	var pattern = /^\S+@\S+\.\S+$/;
	var result = pattern.test(email.value);

	if (result == false)
		document.getElementById("alert").innerHTML =
			"Please enter a valid email address";
	else document.getElementById("alert").innerHTML = "";
}

button.addEventListener("click", verify);

// --------------------------------------------------//
