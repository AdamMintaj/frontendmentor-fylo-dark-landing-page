// Import = filename in camelCase
// Element's id = img-tag-filename
// Variable = Element's id in camelCase
// It's complicated but I couldn't come up with anything better

import logo from "./assets/logo.svg";
import illustrationIntro from "./assets/illustration-intro.png";
import iconAccessAnywhere from "./assets/icon-access-anywhere.svg";
import iconSecurity from "./assets/icon-security.svg";
import iconCollaboration from "./assets/icon-collaboration.svg";
import iconAnyFile from "./assets/icon-any-file.svg";
import illustrationStayProductive from "./assets/illustration-stay-productive.png";
import profile1 from "./assets/profile-1.jpg";
import profile2 from "./assets/profile-2.jpg";
import profile3 from "./assets/profile-3.jpg";
import iconLocation from "./assets/icon-location.svg";
import iconPhone from "./assets/icon-phone.svg";
import iconEmail from "./assets/icon-email.svg";

const imgTagLogo = document.getElementById("img-tag-logo");
const imgTagIllustrationIntro = document.getElementById(
	"img-tag-illustration-intro"
);
const imgTagIconAccessAnywhere = document.getElementById(
	"img-tag-icon-access-anywhere"
);
const imgTagIconSecurity = document.getElementById("img-tag-icon-security");
const imgTagIconCollaboration = document.getElementById(
	"img-tag-icon-collaboration"
);
const imgTagAnyFile = document.getElementById("img-tag-icon-any-file");
const imgTagIllustrationStayProductive = document.getElementById(
	"img-tag-illustration-stay-productive"
);
const imgTagProfile1 = document.getElementById("img-tag-profile-1");
const imgTagProfile2 = document.getElementById("img-tag-profile-2");
const imgTagProfile3 = document.getElementById("img-tag-profile-3");
const imgTagLogo2 = document.getElementById("img-tag-logo-2");
const imgTagIconLocation = document.getElementById("img-tag-icon-location");
const imgTagIconPhone = document.getElementById("img-tag-icon-phone");
const imgTagIconEmail = document.getElementById("img-tag-icon-email");

function loadImgSources() {
	imgTagLogo.src = logo;
	imgTagIllustrationIntro.src = illustrationIntro;
	imgTagIconAccessAnywhere.src = iconAccessAnywhere;
	imgTagIconSecurity.src = iconSecurity;
	imgTagIconCollaboration.src = iconCollaboration;
	imgTagAnyFile.src = iconAnyFile;
	imgTagIllustrationStayProductive.src = illustrationStayProductive;
	imgTagProfile1.src = profile1;
	imgTagProfile2.src = profile2;
	imgTagProfile3.src = profile3;
	imgTagLogo2.src = logo;
	imgTagIconLocation.src = iconLocation;
	imgTagIconPhone.src = iconPhone;
	imgTagIconEmail.src = iconEmail;
}

export default loadImgSources;
