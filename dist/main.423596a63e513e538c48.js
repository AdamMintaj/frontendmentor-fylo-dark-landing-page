/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.scss ***!
  \************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/bg-curvy-mobile.svg */ "./src/assets/bg-curvy-mobile.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/bg-quotes.png */ "./src/assets/bg-quotes.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".intro {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  background-color: #1C2431;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-repeat: no-repeat;\n  background-size: 100%;\n  background-position: center bottom;\n  font-size: 12px;\n}\n.intro__figure {\n  margin: 0;\n  width: 80%;\n  margin-left: auto;\n  margin-right: auto;\n}\n.intro__figure img {\n  width: 100%;\n  max-width: 700px;\n}\n.intro__text {\n  width: 81%;\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 610px;\n  text-align: center;\n}\n.intro__text p:first-of-type {\n  font-family: \"Raleway\";\n  font-weight: bold;\n  line-height: 1.5;\n  font-size: 1.7rem;\n}\n.intro__text p:nth-of-type(2) {\n  line-height: 1.8;\n}\n.intro__button {\n  width: 64%;\n  margin-bottom: 1rem;\n  max-width: 360px;\n  font-family: \"Open sans\";\n  font-weight: bold;\n  color: white;\n  background-image: linear-gradient(to right, #65E2D9, #339ECC);\n  border: 0;\n  height: 3rem;\n  border-radius: 50px;\n  margin: 0 auto;\n  display: block;\n  cursor: pointer;\n}\n.intro .header {\n  background-color: #1C2431;\n  font-family: \"Raleway\";\n  min-height: 3rem;\n  display: grid;\n  grid-template-columns: 26% auto 55%;\n}\n.intro .header__img {\n  grid-column: 1/2;\n  width: 80%;\n  margin-top: 10%;\n  max-height: 4rem;\n  max-width: 190px;\n  justify-self: end;\n  align-self: center;\n}\n.intro .header__nav {\n  grid-column: 3/4;\n  display: flex;\n  justify-content: space-evenly;\n}\n.intro .header__link {\n  color: white;\n  align-self: center;\n  text-decoration: none;\n  text-align: center;\n  width: 30%;\n}\n.intro .header__link:hover {\n  cursor: pointer;\n  font-weight: 700;\n  text-decoration: underline;\n}\n@media only screen and (orientation: landscape) and (max-height: 600px) {\n  .intro {\n    display: grid;\n    grid-template-rows: 15% 70% 15%;\n    grid-template-columns: 50% 50%;\n  }\n  .intro .header {\n    grid-row: 1/2;\n    grid-column: 1/3;\n  }\n  .intro__figure {\n    grid-column: 1/2;\n    grid-row: 2/3;\n    width: auto;\n    display: flex;\n  }\n  .intro__figure img {\n    width: 80%;\n    margin: auto;\n    display: block;\n  }\n  .intro__text {\n    grid-row: 2/3;\n    grid-column: 2/3;\n    font-size: 10px;\n    width: auto;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n  .intro__text p {\n    width: 80%;\n  }\n  .intro__text p:first-of-type {\n    line-height: 1;\n    font-size: 1.5rem;\n  }\n  .intro__button {\n    grid-row: 3/4;\n    grid-column: 1/3;\n    width: 30%;\n    font-size: 10px;\n    height: 3em;\n  }\n}\n@media only screen and (orientation: portrait) and (min-width: 360px) {\n  .intro {\n    font-size: 14px;\n    justify-content: space-between;\n  }\n  .intro__button {\n    margin-bottom: 10%;\n  }\n}\n@media only screen and (min-height: 601px) and (min-width: 800px) {\n  .intro {\n    font-size: 14px;\n    justify-content: space-around;\n  }\n  .intro__figure {\n    width: 40%;\n    max-height: 50%;\n    display: flex;\n    justify-content: center;\n  }\n  .intro__figure img {\n    width: auto;\n    max-width: none;\n  }\n  .intro__text {\n    width: 47%;\n    max-width: 550px;\n  }\n  .intro__button {\n    width: 20%;\n  }\n  .intro .header {\n    min-height: 0;\n    grid-template-columns: 20% auto 25%;\n  }\n  .intro .header__img {\n    width: 70%;\n    margin-top: 1rem;\n    align-self: end;\n  }\n  .intro .header__link {\n    align-self: flex-end;\n    margin-bottom: 5%;\n  }\n}\n\n.features {\n  height: 200%;\n  display: flex;\n  flex-direction: column;\n  font-size: 12px;\n}\n.features__feature-card {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  flex-grow: 1;\n  align-items: center;\n  width: 80%;\n  margin: 0 auto;\n}\n.features__img {\n  max-width: 5rem;\n  margin-bottom: 2rem;\n}\n.features__text {\n  max-width: 480px;\n  text-align: center;\n}\n.features__text p:first-of-type {\n  font-family: \"Raleway\";\n  font-weight: bold;\n  line-height: 1.5;\n  font-size: 1.7rem;\n}\n.features__text p:nth-of-type(2) {\n  line-height: 1.8;\n}\n.features__text p {\n  margin: 0.5rem 0;\n}\n@media only screen and (orientation: landscape) and (max-height: 600px) {\n  .features {\n    flex-direction: row;\n    flex-wrap: wrap;\n  }\n  .features__feature-card {\n    height: 50%;\n    width: 45%;\n    flex-grow: 0;\n  }\n}\n@media only screen and (orientation: portrait) and (min-width: 360px) {\n  .features {\n    font-size: 14px;\n  }\n}\n@media only screen and (min-height: 601px) and (min-width: 800px) {\n  .features {\n    height: 100%;\n    width: 70%;\n    flex-direction: row;\n    flex-wrap: wrap;\n    margin: 0 auto;\n    font-size: 14px;\n  }\n  .features__feature-card {\n    width: 40%;\n    flex-grow: 0;\n  }\n  .features__img {\n    max-height: 4rem;\n    max-width: none;\n  }\n}\n\n.presentation {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.presentation__figure {\n  margin: 0;\n  width: 80%;\n  margin-left: auto;\n  margin-right: auto;\n}\n.presentation__figure img {\n  width: 100%;\n  max-width: 700px;\n}\n.presentation__text {\n  text-align: left;\n  width: 90%;\n  margin: 0 auto;\n}\n.presentation__text p:first-of-type {\n  font-family: \"Raleway\";\n  font-weight: bold;\n  line-height: 1.5;\n  font-size: 1.7rem;\n}\n.presentation__text p:nth-of-type(2) {\n  line-height: 1.8;\n}\n.presentation__demo {\n  display: inline-flex;\n  border-bottom: 1px solid #181F2A;\n  padding-bottom: 4px;\n  transition: 0.7s;\n}\n.presentation__demo svg {\n  margin: auto 0 auto 8px;\n}\n.presentation__demo svg #circle {\n  fill: white;\n}\n.presentation__demo a {\n  text-decoration: none;\n  color: white;\n  font-family: \"Open sans\";\n}\n.presentation__demo:hover {\n  cursor: pointer;\n  color: #65E2D9;\n  border-bottom: 1px solid #65E2D9;\n}\n.presentation__demo:hover a {\n  color: #65E2D9;\n}\n.presentation__demo:hover svg {\n  cursor: pointer;\n}\n.presentation__demo:hover svg #circle {\n  fill: #65E2D9;\n}\n@media only screen and (orientation: landscape) and (max-height: 600px) {\n  .presentation {\n    flex-direction: row;\n    font-size: 12px;\n  }\n  .presentation__figure {\n    align-self: center;\n  }\n  .presentation__text {\n    align-self: center;\n    padding: 1em;\n  }\n  .presentation__text p:first-of-type {\n    font-size: 1.7em;\n  }\n}\n@media only screen and (orientation: portrait) and (min-width: 360px) {\n  .presentation {\n    justify-content: space-evenly;\n  }\n}\n@media only screen and (orientation: landscape) and (min-height: 601px) and (min-width: 800px) {\n  .presentation {\n    margin: 0 auto;\n    width: 85%;\n    flex-direction: row;\n    align-items: center;\n  }\n  .presentation__text {\n    margin-left: 5%;\n  }\n}\n\n.testimonials {\n  margin: 0 auto;\n  width: 80%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n}\n.testimonials .review {\n  background-color: #202A3C;\n  border-radius: 5px;\n  font-size: 0.75rem;\n  line-height: 2;\n  position: relative;\n  margin-bottom: 0.8rem;\n}\n.testimonials .review:first-of-type::before {\n  content: \"\";\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  display: block;\n  position: absolute;\n  height: 45px;\n  width: 55px;\n  top: -35px;\n  left: -10px;\n  z-index: -1;\n}\n.testimonials .review__content {\n  width: 85%;\n  margin: auto;\n}\n.testimonials .review__content p {\n  margin: 0;\n}\n.testimonials .review__text {\n  padding: 1rem 0;\n}\n.testimonials .review__id {\n  display: flex;\n  align-items: center;\n  padding-bottom: 1rem;\n}\n.testimonials .review__img {\n  height: 2.5rem;\n  border-radius: 50%;\n}\n.testimonials .review__name-tag {\n  margin-left: 0.5rem;\n}\n.testimonials .review__name-tag p:first-of-type {\n  font-weight: bold;\n  letter-spacing: 1px;\n}\n.testimonials .review__name-tag p:nth-of-type(2) {\n  font-size: 0.6rem;\n}\n@media only screen and (orientation: landscape) and (max-height: 600px) {\n  .testimonials {\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    width: 90%;\n  }\n  .testimonials .review {\n    width: 32%;\n  }\n}\n@media only screen and (orientation: portrait) and (min-width: 360px) {\n  .testimonials {\n    justify-content: center;\n  }\n  .testimonials .review {\n    font-size: 0.75rem;\n    margin: 1rem auto;\n  }\n  .testimonials .review__text {\n    padding: 1.5rem 0;\n  }\n  .testimonials .review__id {\n    padding-bottom: 1.5rem;\n  }\n}\n@media only screen and (orientation: landscape) and (min-height: 601px) and (min-width: 800px) {\n  .testimonials {\n    justify-content: space-evenly;\n    align-items: center;\n    flex-direction: row;\n  }\n  .testimonials .review {\n    margin-bottom: 0;\n    margin: 0 1rem;\n    font-size: 0.9rem;\n  }\n  .testimonials .review:first-of-type::before {\n    top: -40px;\n  }\n  .testimonials .review__text {\n    padding: 1.5rem 0;\n  }\n  .testimonials .review__id {\n    padding-bottom: 1.5rem;\n  }\n}\n\n.CTA {\n  width: 100%;\n  height: 100%;\n  background-image: linear-gradient(to bottom, #0B1523, #0B1523);\n  background-size: 100% 50%;\n  background-repeat: no-repeat;\n  background-position: bottom;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n.CTA__content {\n  width: 90%;\n  margin: 0 auto;\n  background-color: #1C2431;\n  border-radius: 15px;\n}\n.CTA__text {\n  padding-top: 1rem;\n  width: 90%;\n  max-width: 720px;\n  margin: 0 auto;\n  text-align: center;\n}\n.CTA__text p:first-of-type {\n  font-family: \"Raleway\";\n  font-weight: bold;\n  line-height: 1.5;\n  font-size: 1.7rem;\n}\n.CTA__text p:nth-of-type(2) {\n  line-height: 1.8;\n}\n.CTA__sign-up {\n  width: 90%;\n  max-width: 360px;\n  margin: 0 auto;\n  padding: 1rem 0;\n}\n.CTA__sign-up button {\n  width: 100%;\n  font-family: \"Open sans\";\n  font-weight: bold;\n  color: white;\n  background-image: linear-gradient(to right, #65E2D9, #339ECC);\n  border: 0;\n  height: 3rem;\n  border-radius: 50px;\n  margin: 0 auto;\n  display: block;\n  cursor: pointer;\n}\n.CTA__sign-up input {\n  border: 0;\n  height: 3rem;\n  width: 100%;\n  border-radius: 50px;\n  text-align: center;\n  margin-bottom: 1.5rem;\n}\n.CTA__sign-up input:focus {\n  outline: 0;\n}\n.CTA #alert {\n  color: red;\n  margin: 0 auto;\n  width: 90%;\n  text-align: center;\n}\n@media only screen and (orientation: landscape) and (max-height: 600px) {\n  .CTA__content {\n    font-size: 12px;\n  }\n}\n@media only screen and (orientation: portrait) and (min-width: 360px) {\n  .CTA__content {\n    min-height: 40%;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n  }\n  .CTA__text {\n    width: 75%;\n  }\n}\n@media only screen and (orientation: landscape) and (min-height: 601px) and (min-width: 800px) {\n  .CTA__content {\n    width: 60%;\n  }\n  .CTA__sign-up {\n    max-width: none;\n    display: flex;\n    justify-content: space-evenly;\n  }\n  .CTA__sign-up button {\n    width: 25%;\n    margin: 0;\n  }\n  .CTA__sign-up input {\n    width: 60%;\n    margin: 0;\n  }\n  .CTA #alert {\n    width: 80%;\n    height: 2.5rem;\n    text-align: left;\n  }\n}\n\n.footer {\n  background-color: #0B1523;\n  font-size: 12px;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n}\n.footer div {\n  width: 85%;\n  margin-left: auto;\n  margin-right: auto;\n}\n.footer__figure {\n  margin: 0 auto;\n  width: 85%;\n}\n.footer__location {\n  display: grid;\n  grid-template-columns: 15% 85%;\n}\n.footer__location img {\n  grid-column: 1/2;\n  margin-top: 1.2rem;\n}\n.footer__location p {\n  grid-column: 2/3;\n  line-height: 2;\n  margin: 0.5rem 0;\n}\n.footer__contact-info {\n  font-size: 0.9rem;\n  display: grid;\n  grid-template-columns: 15% 85%;\n}\n.footer__contact-info img {\n  grid-column: 1/2;\n}\n.footer__contact-info p {\n  grid-column: 2/3;\n  line-height: 2;\n  margin: 0.5rem 0;\n}\n.footer__contact-info img, .footer__contact-info p {\n  align-self: center;\n}\n.footer__about-us p a, .footer__contact-us p a {\n  text-decoration: none;\n  color: white;\n}\n.footer__about-us p a:hover, .footer__contact-us p a:hover {\n  font-weight: bold;\n}\n.footer__social-media {\n  display: flex;\n  justify-content: center;\n}\n.footer__social-media svg {\n  width: 24px;\n  fill: white;\n  margin: 0 1rem;\n  transition: 0.5s;\n}\n.footer__social-media svg:hover {\n  cursor: pointer;\n  fill: #65E2D9;\n}\n.footer__frontendmentor {\n  font-size: 11px;\n  text-align: center;\n}\n.footer__frontendmentor a {\n  color: white;\n  font-weight: bold;\n  transition: 0.5s;\n}\n.footer__frontendmentor a:hover {\n  color: #65E2D9;\n}\n@media only screen and (orientation: landscape) and (max-height: 600px) {\n  .footer {\n    display: grid;\n    grid-template-columns: 1fr 40% 2fr 15% 1fr 15% 1fr auto 1fr;\n    grid-template-rows: 3% auto auto 15% 15% auto;\n    justify-content: initial;\n    font-size: 14px;\n    height: 100%;\n  }\n  .footer div {\n    width: 100%;\n  }\n  .footer__figure {\n    grid-column: 2/3;\n    grid-row: 2/3;\n    margin-left: 0;\n  }\n  .footer__figure img {\n    margin-bottom: 0;\n  }\n  .footer__location {\n    grid-column: 2/3;\n    grid-row: 3/4;\n    font-size: 12px;\n  }\n  .footer__contact-info {\n    grid-column: 2/3;\n    grid-row: 4/6;\n  }\n  .footer__contact-info img {\n    align-self: center;\n  }\n  .footer__about-us {\n    grid-column: 4/5;\n    grid-row: 3/5;\n    margin: 0;\n  }\n  .footer__contact-us {\n    grid-column: 6/7;\n    grid-row: 3/5;\n    margin: 0;\n  }\n  .footer__social-media {\n    grid-column: 8/9;\n    grid-row: 3/6;\n    justify-content: space-evenly;\n    align-items: center;\n    margin-top: 0;\n    flex-direction: column;\n  }\n  .footer__social-media svg {\n    margin: 1rem 0;\n  }\n  .footer__frontendmentor {\n    margin-top: 0;\n    grid-row: 6/7;\n    grid-column: 1/10;\n  }\n}\n@media only screen and (min-height: 601px) and (min-width: 800px) {\n  .footer {\n    display: grid;\n    grid-template-columns: 8% 25% auto 15% auto 9% auto 9% auto 9% auto;\n    grid-template-rows: 100px 90px 60px 60px;\n    justify-content: initial;\n    font-size: 14px;\n    height: auto;\n  }\n  .footer div {\n    width: 100%;\n  }\n  .footer__figure {\n    grid-column: 2/3;\n    grid-row: 1/2;\n    margin-left: 0;\n  }\n  .footer__figure img {\n    margin-bottom: 3rem;\n  }\n  .footer__location {\n    grid-column: 2/3;\n    grid-row: 2/3;\n  }\n  .footer__contact-info {\n    grid-column: 4/5;\n    grid-row: 2/3;\n  }\n  .footer__contact-info img {\n    align-self: center;\n  }\n  .footer__about-us {\n    grid-column: 6/7;\n    grid-row: 2/4;\n    margin: 0;\n  }\n  .footer__contact-us {\n    grid-column: 8/9;\n    grid-row: 2/4;\n    margin: 0;\n  }\n  .footer__social-media {\n    grid-column: 10/11;\n    grid-row: 2/3;\n    justify-content: space-between;\n    align-items: flex-start;\n    margin-top: 0;\n  }\n  .footer__social-media svg {\n    margin: 1rem 0;\n  }\n  .footer__frontendmentor {\n    margin-top: 1rem;\n    grid-row: 4/5;\n    grid-column: 1/12;\n  }\n}\n@media only screen and (orientation: portrait) and (min-height: 601px) and (min-width: 800px) {\n  .footer {\n    grid-template-columns: 5% 25% auto 20% auto 9% auto 9% auto 12% auto;\n  }\n}\n\n* {\n  box-sizing: border-box;\n}\n\nhtml {\n  font-size: 14px;\n  height: 100%;\n}\n\nbody {\n  margin: 0;\n  background-color: #181F2A;\n  color: white;\n  font-family: \"Open sans\";\n  height: 100%;\n}\n\n#scroll-snap-container {\n  height: 100%;\n  width: 100%;\n  overflow-y: auto;\n  position: fixed;\n}", "",{"version":3,"sources":["webpack://./src/styles/_intro.scss","webpack://./src/styles/index.scss","webpack://./src/styles/_features.scss","webpack://./src/styles/_presentation.scss","webpack://./src/styles/_testimonials.scss","webpack://./src/styles/_CTA.scss","webpack://./src/styles/_footer.scss"],"names":[],"mappings":"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","sourcesContent":[".intro {\r\n    width: 100%;\r\n    height: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: flex-start;\r\n    background-color: #1C2431;\r\n    background-image: url(\"../assets/bg-curvy-mobile.svg\");\r\n    background-repeat: no-repeat;\r\n    background-size: 100%;\r\n    background-position: center bottom;\r\n    font-size: 12px;\r\n\r\n    &__figure {\r\n        margin: 0;\r\n        width: 80%;\r\n        margin-left: auto;\r\n        margin-right: auto;\r\n        \r\n        img\r\n        {\r\n            width: 100%;\r\n            max-width: 700px;\r\n        }\r\n    }\r\n\r\n    &__text\r\n    {\r\n        width: 81%;\r\n        margin-left: auto;\r\n        margin-right: auto;\r\n        max-width: 610px;\r\n        text-align: center;\r\n\r\n        p:first-of-type\r\n        {\r\n            font-family: \"Raleway\";\r\n            font-weight: bold;\r\n            line-height: 1.5;\r\n            font-size: 1.7rem;\r\n        }\r\n\r\n        p:nth-of-type(2)\r\n        {\r\n            line-height: 1.8;\r\n        }\r\n    }\r\n\r\n    &__button\r\n    {\r\n        width: 64%;\r\n        margin-bottom: 1rem;\r\n        max-width: 360px;\r\n        font-family: \"Open sans\";\r\n        font-weight: bold;\r\n        color: white;\r\n        background-image: linear-gradient(to right, #65E2D9, #339ECC);\r\n        border: 0;\r\n        height: 3rem;\r\n        border-radius: 50px;\r\n        margin: 0 auto;\r\n        display: block;\r\n        cursor: pointer;\r\n    }\r\n\r\n    .header {\r\n        background-color: #1C2431;\r\n        font-family: \"Raleway\";\r\n        min-height: 3rem;\r\n        display: grid;\r\n        grid-template-columns: 26% auto 55%;\r\n    \r\n        &__img {\r\n            grid-column: 1/2;\r\n            width:80%;\r\n            margin-top: 10%;\r\n            max-height: 4rem;\r\n            max-width: 190px;\r\n            justify-self: end;\r\n            align-self: center;\r\n        }\r\n    \r\n        &__nav {\r\n            grid-column: 3/4;\r\n            display: flex;\r\n            justify-content: space-evenly;\r\n        }\r\n    \r\n        &__link {\r\n            color: white;\r\n            align-self: center;\r\n            text-decoration: none;\r\n            text-align: center;\r\n            width: 30%;\r\n\r\n            &:hover {\r\n                cursor: pointer;\r\n                font-weight: 700;\r\n                text-decoration: underline;\r\n            }\r\n        }\r\n    }\r\n\r\n    // landscape mode for mobiles\r\n    @media only screen and (orientation: landscape) and (max-height: 600px) {\r\n        display: grid;\r\n        grid-template-rows: 15% 70% 15%;\r\n        grid-template-columns: 50% 50%;\r\n\r\n        .header {\r\n            grid-row: 1/2;\r\n            grid-column: 1/3;\r\n        }\r\n\r\n        &__figure {\r\n            grid-column: 1/2;\r\n            grid-row: 2/3;\r\n            width: auto;\r\n            display: flex;\r\n\r\n            img {\r\n                width: 80%;\r\n                margin: auto;\r\n                display: block;\r\n            }\r\n        }\r\n\r\n        &__text {\r\n            grid-row: 2/3;\r\n            grid-column: 2/3;\r\n            font-size: 10px;\r\n            width: auto;\r\n            display: flex;\r\n            flex-direction: column;\r\n            justify-content: center;\r\n            align-items: center;\r\n\r\n            p {\r\n                width: 80%;\r\n            }\r\n            \r\n            p:first-of-type {\r\n                line-height: 1;\r\n                font-size: 1.5rem;\r\n            }\r\n        }\r\n\r\n        &__button {\r\n            grid-row: 3/4;\r\n            grid-column: 1/3;\r\n            width: 30%;\r\n            font-size: 10px;\r\n            height: 3em;\r\n        }\r\n    }\r\n\r\n    // larger mobiles\r\n    @media only screen and (orientation: portrait) and (min-width: 360px) {\r\n        font-size: 14px;\r\n        justify-content: space-between;\r\n\r\n        &__button {\r\n            margin-bottom: 10%;\r\n        }\r\n    }\r\n\r\n    // tablets and desktop\r\n    @media only screen and /*(orientation: portrait) and*/(min-height: 601px) and (min-width: 800px) {\r\n        font-size: 14px;\r\n        justify-content: space-around;\r\n\r\n        &__figure {\r\n            width: 40%;\r\n            max-height: 50%;\r\n            display: flex;\r\n            justify-content: center;\r\n\r\n            img\r\n            {\r\n                width: auto;\r\n                max-width: none;\r\n            }\r\n        }\r\n\r\n        &__text {\r\n            width: 47%;\r\n            max-width: 550px;\r\n        }\r\n\r\n        &__button {\r\n            width: 20%;\r\n        }\r\n\r\n        .header {\r\n            min-height: 0;\r\n            grid-template-columns: 20% auto 25%;\r\n        \r\n            &__img\r\n            {\r\n                width: 70%;\r\n                margin-top: 1rem;\r\n                align-self: end;\r\n            }\r\n        \r\n            &__link\r\n            {\r\n                align-self: flex-end;\r\n                margin-bottom: 5%;\r\n            }\r\n        }\r\n    }\r\n}","@use \"intro\";\r\n@use \"features\";\r\n@use \"presentation\";\r\n@use \"testimonials\";\r\n@use \"CTA\";\r\n@use \"footer\";\r\n\r\n* {\r\n    box-sizing: border-box;\r\n}\r\n\r\nhtml {\r\n    font-size: 14px;\r\n    height: 100%;\r\n}\r\n\r\nbody {\r\n    margin: 0;\r\n    background-color: #181F2A;\r\n    color: white;\r\n    font-family: \"Open sans\";\r\n    height: 100%;\r\n}\r\n\r\n#scroll-snap-container {\r\n    height: 100%;\r\n    width: 100%;\r\n    overflow-y: auto;\r\n    position: fixed;\r\n} ",".features {\r\n    height: 200%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    font-size: 12px;\r\n\r\n    &__feature-card {\r\n        display: flex;\r\n        flex-direction: column;\r\n        justify-content: center;\r\n        flex-grow: 1;\r\n        align-items: center;\r\n        width: 80%;\r\n        margin: 0 auto;\r\n    }\r\n\r\n    &__img {\r\n        max-width: 5rem;\r\n        margin-bottom: 2rem;\r\n    }\r\n\r\n    &__text {\r\n        max-width: 480px;\r\n        text-align: center;\r\n   \r\n        p:first-of-type {\r\n            font-family: \"Raleway\";\r\n            font-weight: bold;\r\n            line-height: 1.5;\r\n            font-size: 1.7rem;\r\n        }\r\n   \r\n        p:nth-of-type(2) {\r\n            line-height: 1.8;\r\n        }\r\n\r\n        p {\r\n            margin: 0.5rem 0;\r\n        }\r\n    }\r\n\r\n    // landscape mode for mobiles\r\n    @media only screen and (orientation: landscape) and (max-height: 600px) {\r\n        flex-direction: row;\r\n        flex-wrap: wrap;\r\n\r\n        &__feature-card {\r\n            height: 50%;\r\n            width: 45%;\r\n            flex-grow: 0;\r\n        }\r\n    }\r\n\r\n    // larger mobiles\r\n    @media only screen and (orientation: portrait) and (min-width: 360px) {\r\n        font-size: 14px;\r\n    }\r\n\r\n    // tablets and desktop\r\n    @media only screen and /*(orientation: portrait) and*/(min-height: 601px) and (min-width: 800px) {\r\n        height:100%;\r\n        width: 70%;\r\n        flex-direction: row;\r\n        flex-wrap: wrap;\r\n        margin: 0 auto;\r\n        font-size: 14px;\r\n\r\n        &__feature-card {\r\n            width: 40%;\r\n            flex-grow: 0;\r\n        }\r\n\r\n        &__img {\r\n            max-height: 4rem;\r\n            max-width: none;\r\n        }\r\n    }\r\n}",".presentation {\r\n    height: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n\r\n    &__figure {\r\n        margin: 0;\r\n        width: 80%;\r\n        margin-left: auto;\r\n        margin-right: auto;\r\n        \r\n        img\r\n        {\r\n            width: 100%;\r\n            max-width: 700px;\r\n        }\r\n    }\r\n\r\n    &__text {\r\n        text-align: left;\r\n        width: 90%;\r\n        margin: 0 auto;\r\n   \r\n        p:first-of-type {\r\n            font-family: \"Raleway\";\r\n            font-weight: bold;\r\n            line-height: 1.5;\r\n            font-size: 1.7rem;\r\n        }\r\n    \r\n        p:nth-of-type(2) {\r\n            line-height: 1.8;\r\n        }\r\n    }\r\n\r\n    &__demo {\r\n        display: inline-flex;\r\n        border-bottom: 1px solid #181F2A;\r\n        padding-bottom: 4px;\r\n        transition: .7s;\r\n        \r\n        svg {\r\n            margin: auto 0 auto 8px;\r\n            \r\n            #circle /*this is the svg icon*/\r\n            {\r\n                fill: white;\r\n            }\r\n        }\r\n        \r\n        a {\r\n            text-decoration: none;\r\n            color: white;\r\n            font-family: \"Open sans\";\r\n            \r\n        }\r\n\r\n        &:hover {\r\n            cursor: pointer;\r\n            color: #65E2D9;\r\n            border-bottom: 1px solid #65E2D9;\r\n\r\n            a {\r\n                color: #65E2D9;\r\n            }\r\n\r\n            svg {\r\n                cursor: pointer;\r\n\r\n                #circle {\r\n                    fill: #65E2D9;\r\n                }\r\n            }\r\n        }\r\n    }\r\n\r\n    // landscape mode for mobiles\r\n    @media only screen and (orientation: landscape) and (max-height: 600px) {\r\n        flex-direction: row;\r\n        font-size: 12px;\r\n\r\n        &__figure {\r\n            align-self: center;\r\n        }\r\n\r\n        &__text {\r\n            align-self: center;\r\n            padding: 1em;\r\n            p:first-of-type {\r\n                font-size: 1.7em;\r\n            }\r\n        }\r\n    }\r\n\r\n\r\n    //larger mobiles and tablets\r\n    @media only screen and (orientation: portrait) and (min-width: 360px) {\r\n        justify-content: space-evenly;\r\n    }\r\n\r\n    // desktop\r\n    @media only screen and (orientation: landscape) and (min-height: 601px) and (min-width: 800px) {\r\n        margin: 0 auto;\r\n        width: 85%;\r\n        flex-direction: row;\r\n        align-items: center;\r\n\r\n        &__text {\r\n            margin-left: 5%;\r\n        }\r\n    }\r\n}",".testimonials {\r\n    margin: 0 auto;\r\n    width: 80%;\r\n    height: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: flex-end;\r\n\r\n    .review {\r\n        background-color: #202A3C;\r\n        border-radius: 5px;\r\n        font-size: .75rem;\r\n        line-height: 2;\r\n        position: relative;\r\n        margin-bottom: .8rem;\r\n\r\n        &:first-of-type::before {\r\n            content: \"\";\r\n            background-image: url(\"../assets/bg-quotes.png\");\r\n            display: block;\r\n            position: absolute;\r\n            height: 45px;\r\n            width: 55px;\r\n            top: -35px;\r\n            left: -10px;\r\n            z-index: -1;\r\n        }\r\n\r\n        &__content {\r\n            width: 85%;\r\n            margin: auto;\r\n            \r\n            p {\r\n                margin: 0;\r\n            }\r\n        }\r\n\r\n        &__text {\r\n            padding: 1rem 0;\r\n        }\r\n\r\n        &__id {\r\n            display: flex;\r\n            align-items: center;\r\n            padding-bottom: 1rem;\r\n        }\r\n\r\n        &__img {\r\n            height: 2.5rem;\r\n            border-radius: 50%;\r\n        }\r\n\r\n        &__name-tag {\r\n            margin-left: .5rem;\r\n\r\n            p:first-of-type {\r\n                font-weight: bold;\r\n                letter-spacing: 1px;\r\n            }\r\n\r\n            p:nth-of-type(2) {\r\n                font-size: .6rem;\r\n            }\r\n        }\r\n    }\r\n\r\n    // landscape mode for mobiles\r\n    @media only screen and (orientation: landscape) and (max-height: 600px) {\r\n        flex-direction: row;\r\n        justify-content: space-between;\r\n        align-items: center;\r\n        width: 90%;\r\n\r\n        .review {\r\n            width: 32%;\r\n        }\r\n    }\r\n\r\n    // larger mobiles and tablets\r\n    @media only screen and (orientation: portrait) and (min-width: 360px) {\r\n        justify-content: center;\r\n\r\n        .review {\r\n            font-size: .75rem;\r\n            margin: 1rem auto;\r\n\r\n            &__text {\r\n                padding: 1.5rem 0;\r\n            }\r\n\r\n            &__id {\r\n                padding-bottom: 1.5rem;\r\n            }\r\n        }\r\n    }\r\n\r\n    // desktop\r\n    @media only screen and (orientation: landscape) and (min-height: 601px) and (min-width: 800px) {\r\n        justify-content: space-evenly;\r\n        align-items: center;\r\n        flex-direction: row;\r\n\r\n        .review {\r\n            margin-bottom: 0;\r\n            margin: 0 1rem;\r\n            font-size: .9rem;\r\n\r\n            &:first-of-type::before {\r\n                top: -40px;\r\n            }\r\n\r\n            &__text {\r\n                padding: 1.5rem 0;\r\n            }\r\n\r\n            &__id {\r\n                padding-bottom: 1.5rem;\r\n            }\r\n        }\r\n    }\r\n}",".CTA {\r\n    width: 100%;\r\n    height: 100%;\r\n    background-image: linear-gradient(to bottom, #0B1523, #0B1523);\r\n    background-size: 100% 50%;\r\n    background-repeat: no-repeat;\r\n    background-position: bottom;\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n\r\n    &__content {\r\n        width: 90%;\r\n        margin: 0 auto;\r\n        background-color: #1C2431;\r\n        border-radius: 15px;\r\n    }\r\n\r\n    &__text {\r\n        padding-top: 1rem;\r\n        width: 90%;\r\n        max-width: 720px;\r\n        margin: 0 auto;\r\n        text-align: center;\r\n   \r\n        p:first-of-type {\r\n            font-family: \"Raleway\";\r\n            font-weight: bold;\r\n            line-height: 1.5;\r\n            font-size: 1.7rem;\r\n        }\r\n\r\n        p:nth-of-type(2) {\r\n            line-height: 1.8;\r\n        }\r\n    }\r\n\r\n    &__sign-up {\r\n        width: 90%;\r\n        max-width: 360px;\r\n        margin: 0 auto;\r\n        padding: 1rem 0;\r\n\r\n        button {\r\n            width: 100%;\r\n            font-family: \"Open sans\";\r\n            font-weight: bold;\r\n            color: white;\r\n            background-image: linear-gradient(to right, #65E2D9, #339ECC);\r\n            border: 0;\r\n            height: 3rem;\r\n            border-radius: 50px;\r\n            margin: 0 auto;\r\n            display: block;\r\n            cursor: pointer;\r\n        }\r\n            \r\n        input {\r\n            border: 0;\r\n            height: 3rem;\r\n            width: 100%;\r\n            border-radius: 50px;\r\n            text-align: center;\r\n            margin-bottom: 1.5rem;\r\n\r\n            &:focus {\r\n                outline: 0;\r\n            }\r\n        }\r\n    }\r\n\r\n    #alert {\r\n        color: red;\r\n        margin: 0 auto;\r\n        width: 90%;\r\n        text-align: center;\r\n    }\r\n\r\n    // landscape mode for mobiles\r\n    @media only screen and (orientation: landscape) and (max-height: 600px) {\r\n        &__content {\r\n            font-size: 12px;\r\n        }\r\n    }\r\n\r\n    // larger mobiles and tablets\r\n    @media only screen and (orientation: portrait) and (min-width: 360px) {\r\n        &__content {\r\n            min-height: 40%;\r\n            display: flex;\r\n            flex-direction: column;\r\n            justify-content: space-evenly;\r\n        }\r\n         \r\n        &__text {\r\n            width: 75%;\r\n        }\r\n    }\r\n\r\n    // desktop\r\n    @media only screen and (orientation: landscape) and (min-height: 601px) and (min-width: 800px) {\r\n        &__content {\r\n            width: 60%;\r\n        }\r\n    \r\n        &__sign-up {\r\n            max-width: none;\r\n            display: flex;\r\n            justify-content: space-evenly;\r\n\r\n            button {\r\n                width: 25%;\r\n                margin: 0;\r\n            }\r\n            \r\n            input {\r\n                width: 60%;\r\n                margin: 0;\r\n            }\r\n        }\r\n\r\n        #alert {\r\n            width: 80%;\r\n            height: 2.5rem;\r\n            text-align: left;\r\n        }\r\n    }\r\n}",".footer {\r\n    background-color: #0B1523;\r\n    font-size: 12px;\r\n    height: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-around;\r\n\r\n    div {\r\n        width: 85%;\r\n        margin-left: auto;\r\n        margin-right: auto;\r\n    }\r\n\r\n    &__figure {\r\n        margin: 0 auto;\r\n        width: 85%;\r\n    }\r\n    \r\n    &__location {\r\n        display: grid;\r\n        grid-template-columns: 15% 85%;\r\n            \r\n        img {\r\n            grid-column: 1/2;\r\n            margin-top: 1.2rem;\r\n        }\r\n        \r\n        p {\r\n            grid-column: 2/3;\r\n            line-height: 2;\r\n            margin: .5rem 0;\r\n        }\r\n    }\r\n    \r\n    &__contact-info {\r\n        font-size: .9rem;\r\n        display: grid;\r\n        grid-template-columns: 15% 85%;\r\n            \r\n        img {\r\n            grid-column: 1/2;\r\n        }\r\n        \r\n        p {\r\n            grid-column: 2/3;\r\n            line-height: 2;\r\n            margin: .5rem 0;\r\n        }\r\n\r\n        img, p {\r\n            align-self: center;\r\n        }\r\n    }\r\n\r\n    &__about-us, &__contact-us {\r\n        // margin-top: 1.5rem;\r\n           \r\n        p {\r\n            a {\r\n                text-decoration: none;\r\n                color: white;\r\n                \r\n                &:hover {\r\n                    font-weight: bold;\r\n                }\r\n            }\r\n        }\r\n    }\r\n\r\n    &__social-media {\r\n        display: flex;\r\n        justify-content: center;\r\n        // margin-top: 1.5rem;\r\n\r\n        svg {\r\n            width: 24px;\r\n            fill: white;\r\n            margin: 0 1rem;\r\n            transition: .5s;\r\n\r\n            &:hover {\r\n                cursor: pointer;\r\n                fill: #65E2D9;\r\n            }\r\n        }\r\n    }\r\n\r\n    &__frontendmentor {\r\n        font-size: 11px;\r\n        text-align: center;\r\n        // margin-top: 1.5rem;\r\n        \r\n        a {\r\n            color: white;\r\n            font-weight: bold;\r\n            transition: .5s;\r\n\r\n            &:hover {\r\n                color: #65E2D9;\r\n            }\r\n        }\r\n    }\r\n\r\n    // landscape mode for mobiles\r\n    @media only screen and (orientation: landscape) and (max-height: 600px) {\r\n        display: grid;\r\n        grid-template-columns: 1fr 40% 2fr 15% 1fr 15% 1fr auto 1fr;\r\n        grid-template-rows: 3% auto auto 15% 15% auto;\r\n        justify-content: initial;\r\n        font-size: 14px;\r\n        height: 100%;\r\n\r\n        div {\r\n            width: 100%;\r\n        }\r\n    \r\n        &__figure {\r\n            grid-column: 2/3;\r\n            grid-row: 2/3;\r\n            margin-left: 0;\r\n\r\n            img {\r\n                margin-bottom: 0;\r\n            }\r\n        }\r\n            \r\n        &__location {\r\n            grid-column: 2/3;\r\n            grid-row: 3/4;\r\n            font-size: 12px;\r\n        }\r\n            \r\n        &__contact-info {\r\n            grid-column: 2/3;\r\n            grid-row: 4/6;\r\n            \r\n            img {\r\n                align-self: center;\r\n            }\r\n        }\r\n            \r\n        &__about-us {\r\n            grid-column: 4/5;\r\n            grid-row: 3/5;\r\n            margin: 0;\r\n        }\r\n        \r\n        &__contact-us {\r\n            grid-column: 6/7;\r\n            grid-row: 3/5;\r\n            margin: 0;\r\n        }\r\n        \r\n        &__social-media {\r\n            grid-column: 8/9;\r\n            grid-row: 3/6;\r\n            justify-content: space-evenly;\r\n            align-items: center;\r\n            margin-top: 0;\r\n            flex-direction: column;\r\n\r\n            svg {\r\n                margin: 1rem 0;\r\n            }\r\n        }\r\n    \r\n        &__frontendmentor {\r\n            margin-top: 0;\r\n            grid-row: 6/7;\r\n            grid-column: 1/10;\r\n        }\r\n    }\r\n\r\n    // tablets and desktop\r\n    @media only screen and (min-height: 601px) and (min-width: 800px) {\r\n        display: grid;\r\n        grid-template-columns: 8% 25% auto 15% auto 9% auto 9% auto 9% auto;\r\n        grid-template-rows: 100px 90px 60px 60px;\r\n        justify-content: initial;\r\n        font-size: 14px;\r\n        height: auto;\r\n\r\n        div {\r\n            width: 100%;\r\n        }\r\n    \r\n        &__figure {\r\n            grid-column: 2/3;\r\n            grid-row: 1/2;\r\n            margin-left: 0;\r\n\r\n            img {\r\n                margin-bottom: 3rem;\r\n            }\r\n        }\r\n            \r\n        &__location {\r\n            grid-column: 2/3;\r\n            grid-row: 2/3;\r\n        }\r\n            \r\n        &__contact-info {\r\n            grid-column: 4/5;\r\n            grid-row: 2/3;\r\n            \r\n            img {\r\n                align-self: center;\r\n            }\r\n        }\r\n            \r\n        &__about-us {\r\n            grid-column: 6/7;\r\n            grid-row: 2/4;\r\n            margin: 0;\r\n        }\r\n        \r\n        &__contact-us {\r\n            grid-column: 8/9;\r\n            grid-row: 2/4;\r\n            margin: 0;\r\n        }\r\n        \r\n        &__social-media {\r\n            grid-column: 10/11;\r\n            grid-row: 2/3;\r\n            justify-content: space-between;\r\n            align-items: flex-start;\r\n            margin-top: 0;\r\n\r\n            svg {\r\n                margin: 1rem 0;\r\n            }\r\n        }\r\n    \r\n        &__frontendmentor {\r\n            margin-top: 1rem;\r\n            grid-row: 4/5;\r\n            grid-column: 1/12;\r\n        }\r\n    }\r\n\r\n    // tablets\r\n    @media only screen and (orientation: portrait) and (min-height: 601px) and (min-width: 800px) {\r\n        grid-template-columns: 5% 25% auto 20% auto 9% auto 9% auto 12% auto;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/scroll-snap/dist/esm/index.js":
/*!****************************************************!*\
  !*** ./node_modules/scroll-snap/dist/esm/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createScrollSnap)
/* harmony export */ });
function easeInOutQuad(t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}
var TIMEOUT_MIN = 50;
var TIMEOUT_DEFAULT = 100;
var DURATION_DEFAULT = 300;
var THRESHOLD_DEFAULT = 0.2;
var SNAPSTOP_DEFAULT = false;
var EASING_DEFAULT = easeInOutQuad;
var NOOP = function () { };
function createScrollSnap(element, settings, callback) {
    if (settings === void 0) { settings = {}; }
    var onAnimationEnd = typeof callback === 'function' ? callback : NOOP;
    var listenerElement;
    var target;
    var animating = false;
    var scrollHandlerTimer;
    var scrollSpeedTimer;
    var scrollStart;
    var speedDeltaX;
    var speedDeltaY;
    var snapLengthUnit;
    var lastScrollValue = {
        x: 0,
        y: 0,
    };
    var animationFrame;
    var snapDestinationX = settings.snapDestinationX, snapDestinationY = settings.snapDestinationY;
    if (snapDestinationX &&
        typeof snapDestinationX !== 'string' &&
        typeof snapDestinationX !== 'number') {
        throw new Error("Settings property 'snapDestinationX' is not valid, expected STRING or NUMBER but found " + (typeof snapDestinationX).toUpperCase());
    }
    if (snapDestinationY &&
        typeof snapDestinationY !== 'string' &&
        typeof snapDestinationY !== 'number') {
        throw new Error("Settings property 'snapDestinationY' is not valid, expected STRING or NUMBER but found " + (typeof snapDestinationY).toUpperCase());
    }
    if (settings.timeout && (isNaN(settings.timeout) || typeof settings.timeout === 'boolean')) {
        throw new Error("Optional settings property 'timeout' is not valid, expected NUMBER but found " + (typeof settings.timeout).toUpperCase());
    }
    // any value less then TIMEOUT_MIN may cause weird bahaviour on some devices (especially on mobile with momentum scrolling)
    var timeout = settings.timeout && settings.timeout >= TIMEOUT_MIN ? settings.timeout : TIMEOUT_DEFAULT;
    if (settings.duration && (isNaN(settings.duration) || typeof settings.duration === 'boolean')) {
        throw new Error("Optional settings property 'duration' is not valid, expected NUMBER but found " + (typeof settings.duration).toUpperCase());
    }
    var duration = settings.duration || DURATION_DEFAULT;
    if (settings.threshold &&
        (isNaN(settings.threshold) || typeof settings.threshold === 'boolean')) {
        throw new Error("Optional settings property 'threshold' is not valid, expected NUMBER but found " + (typeof settings.threshold).toUpperCase());
    }
    var threshold = settings.threshold || THRESHOLD_DEFAULT;
    if (settings.easing && typeof settings.easing !== 'function') {
        throw new Error("Optional settings property 'easing' is not valid, expected FUNCTION but found " + (typeof settings.easing).toUpperCase());
    }
    var easing = settings.easing || EASING_DEFAULT;
    if (settings.snapStop && typeof settings.snapStop !== 'boolean') {
        throw new Error("Optional settings property 'snapStop' is not valid, expected BOOLEAN but found " + (typeof settings.snapStop).toUpperCase());
    }
    var snapStop = settings.snapStop || SNAPSTOP_DEFAULT;
    function checkScrollSpeed(value, axis) {
        var clear = function () {
            lastScrollValue[axis] = null;
        };
        var newValue = value;
        var delta;
        if (lastScrollValue[axis] !== null) {
            delta = newValue - lastScrollValue[axis];
        }
        else {
            delta = 0;
        }
        lastScrollValue[axis] = newValue;
        scrollSpeedTimer && clearTimeout(scrollSpeedTimer);
        scrollSpeedTimer = window.setTimeout(clear, 100);
        return delta;
    }
    function bindElement(element) {
        target = element;
        listenerElement = element === document.documentElement ? window : element;
        listenerElement.addEventListener('scroll', startAnimation, false);
        snapLengthUnit = parseSnapCoordinatesValue(snapDestinationX, snapDestinationY);
    }
    function unbindElement() {
        listenerElement.removeEventListener('scroll', startAnimation, false);
    }
    function startAnimation() {
        speedDeltaX = checkScrollSpeed(target.scrollLeft, 'x');
        speedDeltaY = checkScrollSpeed(target.scrollTop, 'y');
        if (animating || (speedDeltaX === 0 && speedDeltaY === 0)) {
            return;
        }
        handler(target);
    }
    /**
     * scroll handler
     * this is the callback for scroll events.
     */
    function handler(target) {
        // if currently animating, stop it. this prevents flickering.
        if (animationFrame) {
            clearTimeout(animationFrame);
        }
        // if a previous timeout exists, clear it.
        if (scrollHandlerTimer) {
            // we only want to call a timeout once after scrolling..
            clearTimeout(scrollHandlerTimer);
        }
        else {
            scrollStart = {
                y: target.scrollTop,
                x: target.scrollLeft,
            };
        }
        scrollHandlerTimer = window.setTimeout(animationHandler, timeout);
    }
    function animationHandler() {
        // if we don't move a thing, we can ignore the timeout: if we did, there'd be another timeout added for scrollStart+1.
        if (scrollStart.y === target.scrollTop && scrollStart.x === target.scrollLeft) {
            // ignore timeout
            return;
        }
        // detect direction of scroll. negative is up, positive is down.
        var direction = {
            y: Math.sign(speedDeltaY),
            x: Math.sign(speedDeltaX),
        };
        // get the next snap-point to snap-to
        var snapPoint = getNextSnapPoint(target, direction);
        listenerElement.removeEventListener('scroll', startAnimation, false);
        animating = true;
        // smoothly move to the snap point
        smoothScroll(target, snapPoint, function () {
            // after moving to the snap point, rebind the scroll event handler
            animating = false;
            listenerElement.addEventListener('scroll', startAnimation, false);
            onAnimationEnd();
            // reset scrollStart
            scrollStart = {
                y: target.scrollTop,
                x: target.scrollLeft,
            };
        });
    }
    function getNextSnapPoint(target, direction) {
        // get snap length
        var snapLength = {
            y: Math.round(getYSnapLength(target, snapLengthUnit.y)),
            x: Math.round(getXSnapLength(target, snapLengthUnit.x)),
        };
        var top = target.scrollTop;
        var left = target.scrollLeft;
        var startPoint = {
            y: scrollStart.y / snapLength.y || 0,
            x: scrollStart.x / snapLength.x || 0,
        };
        var currentPoint = {
            y: top / snapLength.y || 0,
            x: left / snapLength.x || 0,
        };
        var nextPoint = {
            y: 0,
            x: 0,
        };
        /**
         * Set target and bounds by direction,
         * if threshold has not been reached, scroll back to currentPoint
         **/
        if (isAboveThreshold(direction.y, currentPoint.y)) {
            if (snapStop) {
                nextPoint.y = roundByDirection(-direction.y, startPoint.y + direction.y);
            }
            else {
                nextPoint.y = roundByDirection(direction.y, currentPoint.y);
            }
        }
        else {
            nextPoint.y = roundByDirection(direction.y * -1, currentPoint.y);
        }
        if (isAboveThreshold(direction.x, currentPoint.x)) {
            if (snapStop) {
                nextPoint.x = roundByDirection(-direction.x, startPoint.x + direction.x);
            }
            else {
                nextPoint.x = roundByDirection(direction.x, currentPoint.x);
            }
        }
        else {
            nextPoint.x = roundByDirection(direction.x * -1, currentPoint.x);
        }
        // DEBUG
        // console.log('direction', direction)
        // console.log('startPoint', startPoint)
        // console.log('currentPoint', currentPoint)
        // console.log('nextPoint', nextPoint)
        // calculate where to scroll
        var scrollTo = {
            y: nextPoint.y * snapLength.y,
            x: nextPoint.x * snapLength.x,
        };
        // stay in bounds (minimum: 0, maxmimum: absolute height)
        scrollTo.y = stayInBounds(0, target.scrollHeight, scrollTo.y);
        scrollTo.x = stayInBounds(0, target.scrollWidth, scrollTo.x);
        return scrollTo;
    }
    function isAboveThreshold(direction, value) {
        return direction > 0 ? value % 1 > threshold : 1 - (value % 1) > threshold;
    }
    function roundByDirection(direction, value) {
        if (direction === -1) {
            // when we go up, we floor the number to jump to the next snap-point in scroll direction
            return Math.floor(value);
        }
        // go down, we ceil the number to jump to the next in view.
        return Math.ceil(value);
    }
    function stayInBounds(min, max, destined) {
        return Math.max(Math.min(destined, max), min);
    }
    function parseSnapCoordinatesValue(x, y) {
        // regex to parse lengths
        var regex = /([+-]?(?=\.\d|\d)(?:\d+)?(?:\.?\d*)(?:[eE][+-]?\d+)?)(px|%|vw|vh)/;
        // defaults
        var parsed = {
            y: {
                value: 0,
                unit: 'px',
            },
            x: {
                value: 0,
                unit: 'px',
            },
        };
        if (typeof y === 'number') {
            parsed.y.value = y;
        }
        else {
            var resultY = regex.exec(y);
            if (resultY !== null) {
                parsed.y = {
                    value: Number(resultY[1]),
                    unit: resultY[2],
                };
            }
        }
        if (typeof x === 'number') {
            parsed.x.value = x;
        }
        else {
            var resultX = regex.exec(x);
            if (resultX !== null) {
                parsed.x = {
                    value: Number(resultX[1]),
                    unit: resultX[2],
                };
            }
        }
        return parsed;
    }
    function getYSnapLength(obj, declaration) {
        // get y snap length based on declaration unit
        if (declaration.unit === 'vh') {
            return ((Math.max(document.documentElement.clientHeight, window.innerHeight || 1) / 100) *
                declaration.value);
        }
        else if (declaration.unit === '%') {
            return (obj.clientHeight / 100) * declaration.value;
        }
        else {
            return declaration.value;
        }
    }
    function getXSnapLength(obj, declaration) {
        // get x snap length based on declaration unit
        if (declaration.unit === 'vw') {
            return ((Math.max(document.documentElement.clientWidth, window.innerWidth || 1) / 100) *
                declaration.value);
        }
        else if (declaration.unit === '%') {
            return (obj.clientWidth / 100) * declaration.value;
        }
        else {
            return declaration.value;
        }
    }
    function isEdge(Coordinates) {
        return (Coordinates.x === 0 && speedDeltaY === 0) || (Coordinates.y === 0 && speedDeltaX === 0);
    }
    function smoothScroll(obj, end, callback) {
        var position = function (start, end, elapsed, period) {
            if (elapsed > period) {
                return end;
            }
            return start + (end - start) * easing(elapsed / period);
        };
        var start = {
            y: obj.scrollTop,
            x: obj.scrollLeft,
        };
        // get animation frame or a fallback
        var requestAnimationFrame = window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            function (fn) {
                return window.setTimeout(fn, 15);
            };
        var period = isEdge(start) ? 1 : duration;
        var startTime;
        // setup the stepping function
        function step(timestamp) {
            if (!startTime) {
                startTime = timestamp;
            }
            var elapsed = timestamp - startTime;
            // change position on y-axis if result is a number.
            if (!isNaN(end.y)) {
                obj.scrollTop = position(start.y, end.y, elapsed, period);
            }
            // change position on x-axis if result is a number.
            if (!isNaN(end.x)) {
                obj.scrollLeft = position(start.x, end.x, elapsed, period);
            }
            // check if we are over due;
            if (elapsed < period) {
                requestAnimationFrame(step);
            }
            else {
                // is there a callback?
                if (typeof callback === 'function') {
                    // stop execution and run the callback
                    return callback(end);
                }
            }
        }
        animationFrame = requestAnimationFrame(step);
    }
    function bind() {
        bindElement(element);
    }
    function unbind() {
        unbindElement();
    }
    bind();
    return {
        bind: bind,
        unbind: unbind,
    };
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/imgSources.js":
/*!***************************!*\
  !*** ./src/imgSources.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_logo_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/logo.svg */ "./src/assets/logo.svg");
/* harmony import */ var _assets_illustration_intro_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/illustration-intro.png */ "./src/assets/illustration-intro.png");
/* harmony import */ var _assets_icon_access_anywhere_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/icon-access-anywhere.svg */ "./src/assets/icon-access-anywhere.svg");
/* harmony import */ var _assets_icon_security_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/icon-security.svg */ "./src/assets/icon-security.svg");
/* harmony import */ var _assets_icon_collaboration_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/icon-collaboration.svg */ "./src/assets/icon-collaboration.svg");
/* harmony import */ var _assets_icon_any_file_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/icon-any-file.svg */ "./src/assets/icon-any-file.svg");
/* harmony import */ var _assets_illustration_stay_productive_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/illustration-stay-productive.png */ "./src/assets/illustration-stay-productive.png");
/* harmony import */ var _assets_profile_1_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/profile-1.jpg */ "./src/assets/profile-1.jpg");
/* harmony import */ var _assets_profile_2_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/profile-2.jpg */ "./src/assets/profile-2.jpg");
/* harmony import */ var _assets_profile_3_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/profile-3.jpg */ "./src/assets/profile-3.jpg");
/* harmony import */ var _assets_icon_location_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assets/icon-location.svg */ "./src/assets/icon-location.svg");
/* harmony import */ var _assets_icon_phone_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./assets/icon-phone.svg */ "./src/assets/icon-phone.svg");
/* harmony import */ var _assets_icon_email_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./assets/icon-email.svg */ "./src/assets/icon-email.svg");
// Import = filename in camelCase
// Element's id = img-tag-filename
// Variable = Element's id in camelCase
// It's complicated but I couldn't come up with anything better















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
	imgTagLogo.src = _assets_logo_svg__WEBPACK_IMPORTED_MODULE_0__;
	imgTagIllustrationIntro.src = _assets_illustration_intro_png__WEBPACK_IMPORTED_MODULE_1__;
	imgTagIconAccessAnywhere.src = _assets_icon_access_anywhere_svg__WEBPACK_IMPORTED_MODULE_2__;
	imgTagIconSecurity.src = _assets_icon_security_svg__WEBPACK_IMPORTED_MODULE_3__;
	imgTagIconCollaboration.src = _assets_icon_collaboration_svg__WEBPACK_IMPORTED_MODULE_4__;
	imgTagAnyFile.src = _assets_icon_any_file_svg__WEBPACK_IMPORTED_MODULE_5__;
	imgTagIllustrationStayProductive.src = _assets_illustration_stay_productive_png__WEBPACK_IMPORTED_MODULE_6__;
	imgTagProfile1.src = _assets_profile_1_jpg__WEBPACK_IMPORTED_MODULE_7__;
	imgTagProfile2.src = _assets_profile_2_jpg__WEBPACK_IMPORTED_MODULE_8__;
	imgTagProfile3.src = _assets_profile_3_jpg__WEBPACK_IMPORTED_MODULE_9__;
	imgTagLogo2.src = _assets_logo_svg__WEBPACK_IMPORTED_MODULE_0__;
	imgTagIconLocation.src = _assets_icon_location_svg__WEBPACK_IMPORTED_MODULE_10__;
	imgTagIconPhone.src = _assets_icon_phone_svg__WEBPACK_IMPORTED_MODULE_11__;
	imgTagIconEmail.src = _assets_icon_email_svg__WEBPACK_IMPORTED_MODULE_12__;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadImgSources);


/***/ }),

/***/ "./src/assets/bg-curvy-mobile.svg":
/*!****************************************!*\
  !*** ./src/assets/bg-curvy-mobile.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bg-curvy-mobile.svg";

/***/ }),

/***/ "./src/assets/bg-quotes.png":
/*!**********************************!*\
  !*** ./src/assets/bg-quotes.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bg-quotes.png";

/***/ }),

/***/ "./src/assets/icon-access-anywhere.svg":
/*!*********************************************!*\
  !*** ./src/assets/icon-access-anywhere.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "icon-access-anywhere.svg";

/***/ }),

/***/ "./src/assets/icon-any-file.svg":
/*!**************************************!*\
  !*** ./src/assets/icon-any-file.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "icon-any-file.svg";

/***/ }),

/***/ "./src/assets/icon-collaboration.svg":
/*!*******************************************!*\
  !*** ./src/assets/icon-collaboration.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "icon-collaboration.svg";

/***/ }),

/***/ "./src/assets/icon-email.svg":
/*!***********************************!*\
  !*** ./src/assets/icon-email.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "icon-email.svg";

/***/ }),

/***/ "./src/assets/icon-location.svg":
/*!**************************************!*\
  !*** ./src/assets/icon-location.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "icon-location.svg";

/***/ }),

/***/ "./src/assets/icon-phone.svg":
/*!***********************************!*\
  !*** ./src/assets/icon-phone.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "icon-phone.svg";

/***/ }),

/***/ "./src/assets/icon-security.svg":
/*!**************************************!*\
  !*** ./src/assets/icon-security.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "icon-security.svg";

/***/ }),

/***/ "./src/assets/illustration-intro.png":
/*!*******************************************!*\
  !*** ./src/assets/illustration-intro.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "illustration-intro.png";

/***/ }),

/***/ "./src/assets/illustration-stay-productive.png":
/*!*****************************************************!*\
  !*** ./src/assets/illustration-stay-productive.png ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "illustration-stay-productive.png";

/***/ }),

/***/ "./src/assets/logo.svg":
/*!*****************************!*\
  !*** ./src/assets/logo.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "logo.svg";

/***/ }),

/***/ "./src/assets/profile-1.jpg":
/*!**********************************!*\
  !*** ./src/assets/profile-1.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "profile-1.jpg";

/***/ }),

/***/ "./src/assets/profile-2.jpg":
/*!**********************************!*\
  !*** ./src/assets/profile-2.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "profile-2.jpg";

/***/ }),

/***/ "./src/assets/profile-3.jpg":
/*!**********************************!*\
  !*** ./src/assets/profile-3.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "profile-3.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var _imgSources_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imgSources.js */ "./src/imgSources.js");
/* harmony import */ var scroll_snap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! scroll-snap */ "./node_modules/scroll-snap/dist/esm/index.js");




(0,_imgSources_js__WEBPACK_IMPORTED_MODULE_1__["default"])();

// Scroll-snap //

const scrollContainer = document.getElementById("scroll-snap-container");

(0,scroll_snap__WEBPACK_IMPORTED_MODULE_2__["default"])(scrollContainer, {
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLEtBQUssS0FBSyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxLQUFLLE1BQU0sVUFBVSxXQUFXLEtBQUssTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLEtBQUssTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sTUFBTSxZQUFZLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxNQUFNLE1BQU0sV0FBVyxNQUFNLEtBQUssTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxNQUFNLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLE9BQU8sTUFBTSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsT0FBTyxPQUFPLFVBQVUsT0FBTyxNQUFNLE1BQU0sWUFBWSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sTUFBTSxZQUFZLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxLQUFLLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxPQUFPLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLE9BQU8sT0FBTyxVQUFVLFdBQVcsV0FBVyxPQUFPLE9BQU8sVUFBVSxVQUFVLE9BQU8sT0FBTyxVQUFVLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxVQUFVLFdBQVcsT0FBTyxPQUFPLFdBQVcsVUFBVSxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLFVBQVUsV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxVQUFVLFFBQVEsUUFBUSxXQUFXLFFBQVEsT0FBTyxVQUFVLFdBQVcsT0FBTyxPQUFPLFVBQVUsVUFBVSxVQUFVLFdBQVcsT0FBTyxPQUFPLFVBQVUsVUFBVSxRQUFRLE9BQU8sVUFBVSxXQUFXLE9BQU8sT0FBTyxVQUFVLFdBQVcsV0FBVyxPQUFPLE9BQU8sVUFBVSxRQUFRLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxPQUFPLE9BQU8sVUFBVSxPQUFPLE9BQU8sV0FBVyxVQUFVLFVBQVUsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsVUFBVSxVQUFVLE9BQU8sT0FBTyxXQUFXLFVBQVUsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsVUFBVSxVQUFVLE9BQU8sT0FBTyxXQUFXLFVBQVUsVUFBVSxPQUFPLE9BQU8sV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsT0FBTyxPQUFPLFVBQVUsT0FBTyxPQUFPLFVBQVUsVUFBVSxXQUFXLE9BQU8sS0FBSyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsT0FBTyxPQUFPLFVBQVUsT0FBTyxPQUFPLFdBQVcsVUFBVSxVQUFVLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLFVBQVUsT0FBTyxPQUFPLFdBQVcsVUFBVSxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxVQUFVLFVBQVUsT0FBTyxPQUFPLFdBQVcsVUFBVSxVQUFVLE9BQU8sTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFdBQVcsVUFBVSxXQUFXLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sT0FBTyxXQUFXLFFBQVEsT0FBTyxVQUFVLFVBQVUsUUFBUSxPQUFP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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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ay10aGVtZS1sYW5kaW5nLXBhZ2UtbWFzdGVyLXdpdGgtd2VicGFjay8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly9meWxvLWRhcmstdGhlbWUtbGFuZGluZy1wYWdlLW1hc3Rlci13aXRoLXdlYnBhY2svLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2Z5bG8tZGFyay10aGVtZS1sYW5kaW5nLXBhZ2UtbWFzdGVyLXdpdGgtd2VicGFjay8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vZnlsby1kYXJrLXRoZW1lLWxhbmRpbmctcGFnZS1tYXN0ZXItd2l0aC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vZnlsby1kYXJrLXRoZW1lLWxhbmRpbmctcGFnZS1tYXN0ZXItd2l0aC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3Njcm9sbC1zbmFwL2Rpc3QvZXNtL2luZGV4LmpzIiwid2VicGFjazovL2Z5bG8tZGFyay10aGVtZS1sYW5kaW5nLXBhZ2UtbWFzdGVyLXdpdGgtd2VicGFjay8uL3NyYy9zdHlsZXMvaW5kZXguc2Nzcz80YzM3Iiwid2VicGFjazovL2Z5bG8tZGFyay10aGVtZS1sYW5kaW5nLXBhZ2UtbWFzdGVyLXdpdGgtd2VicGFjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9meWxvLWRhcmstdGhlbWUtbGFuZGluZy1wYWdlLW1hc3Rlci13aXRoLXdlYnBhY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2Z5bG8tZGFyay10aGVtZS1sYW5kaW5nLXBhZ2UtbWFzdGVyLXdpdGgtd2VicGFjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9meWxvLWRhcmstdGhlbWUtbGFuZGluZy1wYWdlLW1hc3Rlci13aXRoLXdlYnBhY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vZnlsby1kYXJrLXRoZW1lLWxhbmRpbmctcGFnZS1tYXN0ZXItd2l0aC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vZnlsby1kYXJrLXRoZW1lLWxhbmRpbmctcGFnZS1tYXN0ZXItd2l0aC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vZnlsby1kYXJrLXRoZW1lLWxhbmRpbmctcGFnZS1tYXN0ZXItd2l0aC13ZWJwYWNrLy4vc3JjL2ltZ1NvdXJjZXMuanMiLCJ3ZWJwYWNrOi8vZnlsby1kYXJrLXRoZW1lLWxhbmRpbmctcGFnZS1tYXN0ZXItd2l0aC13ZWJwYWNrL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Z5bG8tZGFyay10aGVtZS1sYW5kaW5nLXBhZ2UtbWFzdGVyLXdpdGgtd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9meWxvLWRhcmstdGhlbWUtbGFuZGluZy1wYWdlLW1hc3Rlci13aXRoLXdlYnBhY2svd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Z5bG8tZGFyay10aGVtZS1sYW5kaW5nLXBhZ2UtbWFzdGVyLXdpdGgtd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2Z5bG8tZGFyay10aGVtZS1sYW5kaW5nLXBhZ2UtbWFzdGVyLXdpdGgtd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Z5bG8tZGFyay10aGVtZS1sYW5kaW5nLXBhZ2UtbWFzdGVyLXdpdGgtd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Z5bG8tZGFyay10aGVtZS1sYW5kaW5nLXBhZ2UtbWFzdGVyLXdpdGgtd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9meWxvLWRhcmstdGhlbWUtbGFuZGluZy1wYWdlLW1hc3Rlci13aXRoLXdlYnBhY2svd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vZnlsby1kYXJrLXRoZW1lLWxhbmRpbmctcGFnZS1tYXN0ZXItd2l0aC13ZWJwYWNrL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9meWxvLWRhcmstdGhlbWUtbGFuZGluZy1wYWdlLW1hc3Rlci13aXRoLXdlYnBhY2svLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9iZy1jdXJ2eS1tb2JpbGUuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2JnLXF1b3Rlcy5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmludHJvIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUMyNDMxO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgYm90dG9tO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbn1cXG4uaW50cm9fX2ZpZ3VyZSB7XFxuICBtYXJnaW46IDA7XFxuICB3aWR0aDogODAlO1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxufVxcbi5pbnRyb19fZmlndXJlIGltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogNzAwcHg7XFxufVxcbi5pbnRyb19fdGV4dCB7XFxuICB3aWR0aDogODElO1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICBtYXgtd2lkdGg6IDYxMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uaW50cm9fX3RleHQgcDpmaXJzdC1vZi10eXBlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUmFsZXdheVxcXCI7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICBmb250LXNpemU6IDEuN3JlbTtcXG59XFxuLmludHJvX190ZXh0IHA6bnRoLW9mLXR5cGUoMikge1xcbiAgbGluZS1oZWlnaHQ6IDEuODtcXG59XFxuLmludHJvX19idXR0b24ge1xcbiAgd2lkdGg6IDY0JTtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICBtYXgtd2lkdGg6IDM2MHB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJPcGVuIHNhbnNcXFwiO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM2NUUyRDksICMzMzlFQ0MpO1xcbiAgYm9yZGVyOiAwO1xcbiAgaGVpZ2h0OiAzcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5pbnRybyAuaGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxQzI0MzE7XFxuICBmb250LWZhbWlseTogXFxcIlJhbGV3YXlcXFwiO1xcbiAgbWluLWhlaWdodDogM3JlbTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI2JSBhdXRvIDU1JTtcXG59XFxuLmludHJvIC5oZWFkZXJfX2ltZyB7XFxuICBncmlkLWNvbHVtbjogMS8yO1xcbiAgd2lkdGg6IDgwJTtcXG4gIG1hcmdpbi10b3A6IDEwJTtcXG4gIG1heC1oZWlnaHQ6IDRyZW07XFxuICBtYXgtd2lkdGg6IDE5MHB4O1xcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcbi5pbnRybyAuaGVhZGVyX19uYXYge1xcbiAgZ3JpZC1jb2x1bW46IDMvNDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG59XFxuLmludHJvIC5oZWFkZXJfX2xpbmsge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDMwJTtcXG59XFxuLmludHJvIC5oZWFkZXJfX2xpbms6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC1oZWlnaHQ6IDYwMHB4KSB7XFxuICAuaW50cm8ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDE1JSA3MCUgMTUlO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwJSA1MCU7XFxuICB9XFxuICAuaW50cm8gLmhlYWRlciB7XFxuICAgIGdyaWQtcm93OiAxLzI7XFxuICAgIGdyaWQtY29sdW1uOiAxLzM7XFxuICB9XFxuICAuaW50cm9fX2ZpZ3VyZSB7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxuICAgIGdyaWQtcm93OiAyLzM7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgfVxcbiAgLmludHJvX19maWd1cmUgaW1nIHtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gIH1cXG4gIC5pbnRyb19fdGV4dCB7XFxuICAgIGdyaWQtcm93OiAyLzM7XFxuICAgIGdyaWQtY29sdW1uOiAyLzM7XFxuICAgIGZvbnQtc2l6ZTogMTBweDtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcbiAgLmludHJvX190ZXh0IHAge1xcbiAgICB3aWR0aDogODAlO1xcbiAgfVxcbiAgLmludHJvX190ZXh0IHA6Zmlyc3Qtb2YtdHlwZSB7XFxuICAgIGxpbmUtaGVpZ2h0OiAxO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gIH1cXG4gIC5pbnRyb19fYnV0dG9uIHtcXG4gICAgZ3JpZC1yb3c6IDMvNDtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMztcXG4gICAgd2lkdGg6IDMwJTtcXG4gICAgZm9udC1zaXplOiAxMHB4O1xcbiAgICBoZWlnaHQ6IDNlbTtcXG4gIH1cXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogMzYwcHgpIHtcXG4gIC5pbnRybyB7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgfVxcbiAgLmludHJvX19idXR0b24ge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMCU7XFxuICB9XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1oZWlnaHQ6IDYwMXB4KSBhbmQgKG1pbi13aWR0aDogODAwcHgpIHtcXG4gIC5pbnRybyB7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICB9XFxuICAuaW50cm9fX2ZpZ3VyZSB7XFxuICAgIHdpZHRoOiA0MCU7XFxuICAgIG1heC1oZWlnaHQ6IDUwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB9XFxuICAuaW50cm9fX2ZpZ3VyZSBpbWcge1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgbWF4LXdpZHRoOiBub25lO1xcbiAgfVxcbiAgLmludHJvX190ZXh0IHtcXG4gICAgd2lkdGg6IDQ3JTtcXG4gICAgbWF4LXdpZHRoOiA1NTBweDtcXG4gIH1cXG4gIC5pbnRyb19fYnV0dG9uIHtcXG4gICAgd2lkdGg6IDIwJTtcXG4gIH1cXG4gIC5pbnRybyAuaGVhZGVyIHtcXG4gICAgbWluLWhlaWdodDogMDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMCUgYXV0byAyNSU7XFxuICB9XFxuICAuaW50cm8gLmhlYWRlcl9faW1nIHtcXG4gICAgd2lkdGg6IDcwJTtcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXG4gICAgYWxpZ24tc2VsZjogZW5kO1xcbiAgfVxcbiAgLmludHJvIC5oZWFkZXJfX2xpbmsge1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNSU7XFxuICB9XFxufVxcblxcbi5mZWF0dXJlcyB7XFxuICBoZWlnaHQ6IDIwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG59XFxuLmZlYXR1cmVzX19mZWF0dXJlLWNhcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogODAlO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcbi5mZWF0dXJlc19faW1nIHtcXG4gIG1heC13aWR0aDogNXJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XFxufVxcbi5mZWF0dXJlc19fdGV4dCB7XFxuICBtYXgtd2lkdGg6IDQ4MHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uZmVhdHVyZXNfX3RleHQgcDpmaXJzdC1vZi10eXBlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUmFsZXdheVxcXCI7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICBmb250LXNpemU6IDEuN3JlbTtcXG59XFxuLmZlYXR1cmVzX190ZXh0IHA6bnRoLW9mLXR5cGUoMikge1xcbiAgbGluZS1oZWlnaHQ6IDEuODtcXG59XFxuLmZlYXR1cmVzX190ZXh0IHAge1xcbiAgbWFyZ2luOiAwLjVyZW0gMDtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtaGVpZ2h0OiA2MDBweCkge1xcbiAgLmZlYXR1cmVzIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgfVxcbiAgLmZlYXR1cmVzX19mZWF0dXJlLWNhcmQge1xcbiAgICBoZWlnaHQ6IDUwJTtcXG4gICAgd2lkdGg6IDQ1JTtcXG4gICAgZmxleC1ncm93OiAwO1xcbiAgfVxcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAzNjBweCkge1xcbiAgLmZlYXR1cmVzIHtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgfVxcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4taGVpZ2h0OiA2MDFweCkgYW5kIChtaW4td2lkdGg6IDgwMHB4KSB7XFxuICAuZmVhdHVyZXMge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiA3MCU7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gIH1cXG4gIC5mZWF0dXJlc19fZmVhdHVyZS1jYXJkIHtcXG4gICAgd2lkdGg6IDQwJTtcXG4gICAgZmxleC1ncm93OiAwO1xcbiAgfVxcbiAgLmZlYXR1cmVzX19pbWcge1xcbiAgICBtYXgtaGVpZ2h0OiA0cmVtO1xcbiAgICBtYXgtd2lkdGg6IG5vbmU7XFxuICB9XFxufVxcblxcbi5wcmVzZW50YXRpb24ge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLnByZXNlbnRhdGlvbl9fZmlndXJlIHtcXG4gIG1hcmdpbjogMDtcXG4gIHdpZHRoOiA4MCU7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxuLnByZXNlbnRhdGlvbl9fZmlndXJlIGltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogNzAwcHg7XFxufVxcbi5wcmVzZW50YXRpb25fX3RleHQge1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIHdpZHRoOiA5MCU7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuLnByZXNlbnRhdGlvbl9fdGV4dCBwOmZpcnN0LW9mLXR5cGUge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSYWxld2F5XFxcIjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG4gIGZvbnQtc2l6ZTogMS43cmVtO1xcbn1cXG4ucHJlc2VudGF0aW9uX190ZXh0IHA6bnRoLW9mLXR5cGUoMikge1xcbiAgbGluZS1oZWlnaHQ6IDEuODtcXG59XFxuLnByZXNlbnRhdGlvbl9fZGVtbyB7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMTgxRjJBO1xcbiAgcGFkZGluZy1ib3R0b206IDRweDtcXG4gIHRyYW5zaXRpb246IDAuN3M7XFxufVxcbi5wcmVzZW50YXRpb25fX2RlbW8gc3ZnIHtcXG4gIG1hcmdpbjogYXV0byAwIGF1dG8gOHB4O1xcbn1cXG4ucHJlc2VudGF0aW9uX19kZW1vIHN2ZyAjY2lyY2xlIHtcXG4gIGZpbGw6IHdoaXRlO1xcbn1cXG4ucHJlc2VudGF0aW9uX19kZW1vIGEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJPcGVuIHNhbnNcXFwiO1xcbn1cXG4ucHJlc2VudGF0aW9uX19kZW1vOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGNvbG9yOiAjNjVFMkQ5O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM2NUUyRDk7XFxufVxcbi5wcmVzZW50YXRpb25fX2RlbW86aG92ZXIgYSB7XFxuICBjb2xvcjogIzY1RTJEOTtcXG59XFxuLnByZXNlbnRhdGlvbl9fZGVtbzpob3ZlciBzdmcge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ucHJlc2VudGF0aW9uX19kZW1vOmhvdmVyIHN2ZyAjY2lyY2xlIHtcXG4gIGZpbGw6ICM2NUUyRDk7XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LWhlaWdodDogNjAwcHgpIHtcXG4gIC5wcmVzZW50YXRpb24ge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICB9XFxuICAucHJlc2VudGF0aW9uX19maWd1cmUge1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICB9XFxuICAucHJlc2VudGF0aW9uX190ZXh0IHtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxZW07XFxuICB9XFxuICAucHJlc2VudGF0aW9uX190ZXh0IHA6Zmlyc3Qtb2YtdHlwZSB7XFxuICAgIGZvbnQtc2l6ZTogMS43ZW07XFxuICB9XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6IDM2MHB4KSB7XFxuICAucHJlc2VudGF0aW9uIHtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICB9XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLWhlaWdodDogNjAxcHgpIGFuZCAobWluLXdpZHRoOiA4MDBweCkge1xcbiAgLnByZXNlbnRhdGlvbiB7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICB3aWR0aDogODUlO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcbiAgLnByZXNlbnRhdGlvbl9fdGV4dCB7XFxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcXG4gIH1cXG59XFxuXFxuLnRlc3RpbW9uaWFscyB7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHdpZHRoOiA4MCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcbi50ZXN0aW1vbmlhbHMgLnJldmlldyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyQTNDO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtYXJnaW4tYm90dG9tOiAwLjhyZW07XFxufVxcbi50ZXN0aW1vbmlhbHMgLnJldmlldzpmaXJzdC1vZi10eXBlOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBoZWlnaHQ6IDQ1cHg7XFxuICB3aWR0aDogNTVweDtcXG4gIHRvcDogLTM1cHg7XFxuICBsZWZ0OiAtMTBweDtcXG4gIHotaW5kZXg6IC0xO1xcbn1cXG4udGVzdGltb25pYWxzIC5yZXZpZXdfX2NvbnRlbnQge1xcbiAgd2lkdGg6IDg1JTtcXG4gIG1hcmdpbjogYXV0bztcXG59XFxuLnRlc3RpbW9uaWFscyAucmV2aWV3X19jb250ZW50IHAge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG4udGVzdGltb25pYWxzIC5yZXZpZXdfX3RleHQge1xcbiAgcGFkZGluZzogMXJlbSAwO1xcbn1cXG4udGVzdGltb25pYWxzIC5yZXZpZXdfX2lkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XFxufVxcbi50ZXN0aW1vbmlhbHMgLnJldmlld19faW1nIHtcXG4gIGhlaWdodDogMi41cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG4udGVzdGltb25pYWxzIC5yZXZpZXdfX25hbWUtdGFnIHtcXG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW07XFxufVxcbi50ZXN0aW1vbmlhbHMgLnJldmlld19fbmFtZS10YWcgcDpmaXJzdC1vZi10eXBlIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG59XFxuLnRlc3RpbW9uaWFscyAucmV2aWV3X19uYW1lLXRhZyBwOm50aC1vZi10eXBlKDIpIHtcXG4gIGZvbnQtc2l6ZTogMC42cmVtO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC1oZWlnaHQ6IDYwMHB4KSB7XFxuICAudGVzdGltb25pYWxzIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogOTAlO1xcbiAgfVxcbiAgLnRlc3RpbW9uaWFscyAucmV2aWV3IHtcXG4gICAgd2lkdGg6IDMyJTtcXG4gIH1cXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogMzYwcHgpIHtcXG4gIC50ZXN0aW1vbmlhbHMge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIH1cXG4gIC50ZXN0aW1vbmlhbHMgLnJldmlldyB7XFxuICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcXG4gICAgbWFyZ2luOiAxcmVtIGF1dG87XFxuICB9XFxuICAudGVzdGltb25pYWxzIC5yZXZpZXdfX3RleHQge1xcbiAgICBwYWRkaW5nOiAxLjVyZW0gMDtcXG4gIH1cXG4gIC50ZXN0aW1vbmlhbHMgLnJldmlld19faWQge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMS41cmVtO1xcbiAgfVxcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi1oZWlnaHQ6IDYwMXB4KSBhbmQgKG1pbi13aWR0aDogODAwcHgpIHtcXG4gIC50ZXN0aW1vbmlhbHMge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIH1cXG4gIC50ZXN0aW1vbmlhbHMgLnJldmlldyB7XFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxuICAgIG1hcmdpbjogMCAxcmVtO1xcbiAgICBmb250LXNpemU6IDAuOXJlbTtcXG4gIH1cXG4gIC50ZXN0aW1vbmlhbHMgLnJldmlldzpmaXJzdC1vZi10eXBlOjpiZWZvcmUge1xcbiAgICB0b3A6IC00MHB4O1xcbiAgfVxcbiAgLnRlc3RpbW9uaWFscyAucmV2aWV3X190ZXh0IHtcXG4gICAgcGFkZGluZzogMS41cmVtIDA7XFxuICB9XFxuICAudGVzdGltb25pYWxzIC5yZXZpZXdfX2lkIHtcXG4gICAgcGFkZGluZy1ib3R0b206IDEuNXJlbTtcXG4gIH1cXG59XFxuXFxuLkNUQSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMwQjE1MjMsICMwQjE1MjMpO1xcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDUwJTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b207XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5DVEFfX2NvbnRlbnQge1xcbiAgd2lkdGg6IDkwJTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFDMjQzMTtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxufVxcbi5DVEFfX3RleHQge1xcbiAgcGFkZGluZy10b3A6IDFyZW07XFxuICB3aWR0aDogOTAlO1xcbiAgbWF4LXdpZHRoOiA3MjBweDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uQ1RBX190ZXh0IHA6Zmlyc3Qtb2YtdHlwZSB7XFxuICBmb250LWZhbWlseTogXFxcIlJhbGV3YXlcXFwiO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbiAgZm9udC1zaXplOiAxLjdyZW07XFxufVxcbi5DVEFfX3RleHQgcDpudGgtb2YtdHlwZSgyKSB7XFxuICBsaW5lLWhlaWdodDogMS44O1xcbn1cXG4uQ1RBX19zaWduLXVwIHtcXG4gIHdpZHRoOiA5MCU7XFxuICBtYXgtd2lkdGg6IDM2MHB4O1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBwYWRkaW5nOiAxcmVtIDA7XFxufVxcbi5DVEFfX3NpZ24tdXAgYnV0dG9uIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJPcGVuIHNhbnNcXFwiO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM2NUUyRDksICMzMzlFQ0MpO1xcbiAgYm9yZGVyOiAwO1xcbiAgaGVpZ2h0OiAzcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5DVEFfX3NpZ24tdXAgaW5wdXQge1xcbiAgYm9yZGVyOiAwO1xcbiAgaGVpZ2h0OiAzcmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xcbn1cXG4uQ1RBX19zaWduLXVwIGlucHV0OmZvY3VzIHtcXG4gIG91dGxpbmU6IDA7XFxufVxcbi5DVEEgI2FsZXJ0IHtcXG4gIGNvbG9yOiByZWQ7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHdpZHRoOiA5MCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LWhlaWdodDogNjAwcHgpIHtcXG4gIC5DVEFfX2NvbnRlbnQge1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICB9XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6IDM2MHB4KSB7XFxuICAuQ1RBX19jb250ZW50IHtcXG4gICAgbWluLWhlaWdodDogNDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIH1cXG4gIC5DVEFfX3RleHQge1xcbiAgICB3aWR0aDogNzUlO1xcbiAgfVxcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi1oZWlnaHQ6IDYwMXB4KSBhbmQgKG1pbi13aWR0aDogODAwcHgpIHtcXG4gIC5DVEFfX2NvbnRlbnQge1xcbiAgICB3aWR0aDogNjAlO1xcbiAgfVxcbiAgLkNUQV9fc2lnbi11cCB7XFxuICAgIG1heC13aWR0aDogbm9uZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICB9XFxuICAuQ1RBX19zaWduLXVwIGJ1dHRvbiB7XFxuICAgIHdpZHRoOiAyNSU7XFxuICAgIG1hcmdpbjogMDtcXG4gIH1cXG4gIC5DVEFfX3NpZ24tdXAgaW5wdXQge1xcbiAgICB3aWR0aDogNjAlO1xcbiAgICBtYXJnaW46IDA7XFxuICB9XFxuICAuQ1RBICNhbGVydCB7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGhlaWdodDogMi41cmVtO1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgfVxcbn1cXG5cXG4uZm9vdGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwQjE1MjM7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG4uZm9vdGVyIGRpdiB7XFxuICB3aWR0aDogODUlO1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxufVxcbi5mb290ZXJfX2ZpZ3VyZSB7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHdpZHRoOiA4NSU7XFxufVxcbi5mb290ZXJfX2xvY2F0aW9uIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE1JSA4NSU7XFxufVxcbi5mb290ZXJfX2xvY2F0aW9uIGltZyB7XFxuICBncmlkLWNvbHVtbjogMS8yO1xcbiAgbWFyZ2luLXRvcDogMS4ycmVtO1xcbn1cXG4uZm9vdGVyX19sb2NhdGlvbiBwIHtcXG4gIGdyaWQtY29sdW1uOiAyLzM7XFxuICBsaW5lLWhlaWdodDogMjtcXG4gIG1hcmdpbjogMC41cmVtIDA7XFxufVxcbi5mb290ZXJfX2NvbnRhY3QtaW5mbyB7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE1JSA4NSU7XFxufVxcbi5mb290ZXJfX2NvbnRhY3QtaW5mbyBpbWcge1xcbiAgZ3JpZC1jb2x1bW46IDEvMjtcXG59XFxuLmZvb3Rlcl9fY29udGFjdC1pbmZvIHAge1xcbiAgZ3JpZC1jb2x1bW46IDIvMztcXG4gIGxpbmUtaGVpZ2h0OiAyO1xcbiAgbWFyZ2luOiAwLjVyZW0gMDtcXG59XFxuLmZvb3Rlcl9fY29udGFjdC1pbmZvIGltZywgLmZvb3Rlcl9fY29udGFjdC1pbmZvIHAge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG4uZm9vdGVyX19hYm91dC11cyBwIGEsIC5mb290ZXJfX2NvbnRhY3QtdXMgcCBhIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuLmZvb3Rlcl9fYWJvdXQtdXMgcCBhOmhvdmVyLCAuZm9vdGVyX19jb250YWN0LXVzIHAgYTpob3ZlciB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuLmZvb3Rlcl9fc29jaWFsLW1lZGlhIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLmZvb3Rlcl9fc29jaWFsLW1lZGlhIHN2ZyB7XFxuICB3aWR0aDogMjRweDtcXG4gIGZpbGw6IHdoaXRlO1xcbiAgbWFyZ2luOiAwIDFyZW07XFxuICB0cmFuc2l0aW9uOiAwLjVzO1xcbn1cXG4uZm9vdGVyX19zb2NpYWwtbWVkaWEgc3ZnOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZpbGw6ICM2NUUyRDk7XFxufVxcbi5mb290ZXJfX2Zyb250ZW5kbWVudG9yIHtcXG4gIGZvbnQtc2l6ZTogMTFweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmZvb3Rlcl9fZnJvbnRlbmRtZW50b3IgYSB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHRyYW5zaXRpb246IDAuNXM7XFxufVxcbi5mb290ZXJfX2Zyb250ZW5kbWVudG9yIGE6aG92ZXIge1xcbiAgY29sb3I6ICM2NUUyRDk7XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LWhlaWdodDogNjAwcHgpIHtcXG4gIC5mb290ZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0MCUgMmZyIDE1JSAxZnIgMTUlIDFmciBhdXRvIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzJSBhdXRvIGF1dG8gMTUlIDE1JSBhdXRvO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGluaXRpYWw7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgfVxcbiAgLmZvb3RlciBkaXYge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG4gIC5mb290ZXJfX2ZpZ3VyZSB7XFxuICAgIGdyaWQtY29sdW1uOiAyLzM7XFxuICAgIGdyaWQtcm93OiAyLzM7XFxuICAgIG1hcmdpbi1sZWZ0OiAwO1xcbiAgfVxcbiAgLmZvb3Rlcl9fZmlndXJlIGltZyB7XFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxuICB9XFxuICAuZm9vdGVyX19sb2NhdGlvbiB7XFxuICAgIGdyaWQtY29sdW1uOiAyLzM7XFxuICAgIGdyaWQtcm93OiAzLzQ7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gIH1cXG4gIC5mb290ZXJfX2NvbnRhY3QtaW5mbyB7XFxuICAgIGdyaWQtY29sdW1uOiAyLzM7XFxuICAgIGdyaWQtcm93OiA0LzY7XFxuICB9XFxuICAuZm9vdGVyX19jb250YWN0LWluZm8gaW1nIHtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgfVxcbiAgLmZvb3Rlcl9fYWJvdXQtdXMge1xcbiAgICBncmlkLWNvbHVtbjogNC81O1xcbiAgICBncmlkLXJvdzogMy81O1xcbiAgICBtYXJnaW46IDA7XFxuICB9XFxuICAuZm9vdGVyX19jb250YWN0LXVzIHtcXG4gICAgZ3JpZC1jb2x1bW46IDYvNztcXG4gICAgZ3JpZC1yb3c6IDMvNTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgfVxcbiAgLmZvb3Rlcl9fc29jaWFsLW1lZGlhIHtcXG4gICAgZ3JpZC1jb2x1bW46IDgvOTtcXG4gICAgZ3JpZC1yb3c6IDMvNjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDA7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuICAuZm9vdGVyX19zb2NpYWwtbWVkaWEgc3ZnIHtcXG4gICAgbWFyZ2luOiAxcmVtIDA7XFxuICB9XFxuICAuZm9vdGVyX19mcm9udGVuZG1lbnRvciB7XFxuICAgIG1hcmdpbi10b3A6IDA7XFxuICAgIGdyaWQtcm93OiA2Lzc7XFxuICAgIGdyaWQtY29sdW1uOiAxLzEwO1xcbiAgfVxcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4taGVpZ2h0OiA2MDFweCkgYW5kIChtaW4td2lkdGg6IDgwMHB4KSB7XFxuICAuZm9vdGVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA4JSAyNSUgYXV0byAxNSUgYXV0byA5JSBhdXRvIDklIGF1dG8gOSUgYXV0bztcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDBweCA5MHB4IDYwcHggNjBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBpbml0aWFsO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGhlaWdodDogYXV0bztcXG4gIH1cXG4gIC5mb290ZXIgZGl2IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuICAuZm9vdGVyX19maWd1cmUge1xcbiAgICBncmlkLWNvbHVtbjogMi8zO1xcbiAgICBncmlkLXJvdzogMS8yO1xcbiAgICBtYXJnaW4tbGVmdDogMDtcXG4gIH1cXG4gIC5mb290ZXJfX2ZpZ3VyZSBpbWcge1xcbiAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xcbiAgfVxcbiAgLmZvb3Rlcl9fbG9jYXRpb24ge1xcbiAgICBncmlkLWNvbHVtbjogMi8zO1xcbiAgICBncmlkLXJvdzogMi8zO1xcbiAgfVxcbiAgLmZvb3Rlcl9fY29udGFjdC1pbmZvIHtcXG4gICAgZ3JpZC1jb2x1bW46IDQvNTtcXG4gICAgZ3JpZC1yb3c6IDIvMztcXG4gIH1cXG4gIC5mb290ZXJfX2NvbnRhY3QtaW5mbyBpbWcge1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICB9XFxuICAuZm9vdGVyX19hYm91dC11cyB7XFxuICAgIGdyaWQtY29sdW1uOiA2Lzc7XFxuICAgIGdyaWQtcm93OiAyLzQ7XFxuICAgIG1hcmdpbjogMDtcXG4gIH1cXG4gIC5mb290ZXJfX2NvbnRhY3QtdXMge1xcbiAgICBncmlkLWNvbHVtbjogOC85O1xcbiAgICBncmlkLXJvdzogMi80O1xcbiAgICBtYXJnaW46IDA7XFxuICB9XFxuICAuZm9vdGVyX19zb2NpYWwtbWVkaWEge1xcbiAgICBncmlkLWNvbHVtbjogMTAvMTE7XFxuICAgIGdyaWQtcm93OiAyLzM7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIG1hcmdpbi10b3A6IDA7XFxuICB9XFxuICAuZm9vdGVyX19zb2NpYWwtbWVkaWEgc3ZnIHtcXG4gICAgbWFyZ2luOiAxcmVtIDA7XFxuICB9XFxuICAuZm9vdGVyX19mcm9udGVuZG1lbnRvciB7XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxuICAgIGdyaWQtcm93OiA0LzU7XFxuICAgIGdyaWQtY29sdW1uOiAxLzEyO1xcbiAgfVxcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLWhlaWdodDogNjAxcHgpIGFuZCAobWluLXdpZHRoOiA4MDBweCkge1xcbiAgLmZvb3RlciB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNSUgMjUlIGF1dG8gMjAlIGF1dG8gOSUgYXV0byA5JSBhdXRvIDEyJSBhdXRvO1xcbiAgfVxcbn1cXG5cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmh0bWwge1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxODFGMkE7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LWZhbWlseTogXFxcIk9wZW4gc2Fuc1xcXCI7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbiNzY3JvbGwtc25hcC1jb250YWluZXIge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL19pbnRyby5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvX2ZlYXR1cmVzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvX3ByZXNlbnRhdGlvbi5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL190ZXN0aW1vbmlhbHMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9fQ1RBLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvX2Zvb3Rlci5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLHlCQUFBO0VBQ0EseURBQUE7RUFDQSw0QkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0NBQUE7RUFDQSxlQUFBO0FDQ0o7QURDSTtFQUNJLFNBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0NSO0FEQ1E7RUFFSSxXQUFBO0VBQ0EsZ0JBQUE7QUNBWjtBRElJO0VBRUksVUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDSFI7QURLUTtFQUVJLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDSlo7QURPUTtFQUVJLGdCQUFBO0FDTlo7QURVSTtFQUVJLFVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSw2REFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0Es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LGNBQUE7RUw0Z0JkO0VLeGdCTTtJQUNJLGFBQUE7SUFDQSxhQUFBO0lBQ0EsaUJBQUE7RUwwZ0JWO0FBQ0Y7QUt0Z0JJO0VBL0tKO0lBZ0xRLGFBQUE7SUFDQSxtRUFBQTtJQUNBLHdDQUFBO0lBQ0Esd0JBQUE7SUFDQSxlQUFBO0lBQ0EsWUFBQTtFTHlnQk47RUt2Z0JNO0lBQ0ksV0FBQTtFTHlnQlY7RUt0Z0JNO0lBQ0ksZ0JBQUE7SUFDQSxhQUFBO0lBQ0EsY0FBQTtFTHdnQlY7RUt0Z0JVO0lBQ0ksbUJBQUE7RUx3Z0JkO0VLcGdCTTtJQUNJLGdCQUFBO0lBQ0EsYUFBQTtFTHNnQlY7RUtuZ0JNO0lBQ0ksZ0JBQUE7SUFDQSxhQUFBO0VMcWdCVjtFS25nQlU7SUFDSSxrQkFBQTtFTHFnQmQ7RUtqZ0JNO0lBQ0ksZ0JBQUE7SUFDQSxhQUFBO0lBQ0EsU0FBQTtFTG1nQlY7RUtoZ0JNO0lBQ0ksZ0JBQUE7SUFDQSxhQUFBO0lBQ0EsU0FBQTtFTGtnQlY7RUsvZk07SUFDSSxrQkFBQTtJQUNBLGFBQUE7SUFDQSw4QkFBQTtJQUNBLHVCQUFBO0lBQ0EsYUFBQTtFTGlnQlY7RUsvZlU7SUFDSSxjQUFBO0VMaWdCZDtFSzdmTTtJQUNJLGdCQUFBO0lBQ0EsYUFBQTtJQUNBLGlCQUFBO0VMK2ZWO0FBQ0Y7QUszZkk7RUFuUEo7SUFvUFEsb0VBQUE7RUw4Zk47QUFDRjs7QUE1dUJBO0VBQ0ksc0JBQUE7QUErdUJKOztBQTV1QkE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtBQSt1Qko7O0FBNXVCQTtFQUNJLFNBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtFQUNBLFlBQUE7QUErdUJKOztBQTV1QkE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQSt1QkpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmludHJvIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUMyNDMxO1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4uL2Fzc2V0cy9iZy1jdXJ2eS1tb2JpbGUuc3ZnXFxcIik7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGJvdHRvbTtcXHJcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcclxcblxcclxcbiAgICAmX19maWd1cmUge1xcclxcbiAgICAgICAgbWFyZ2luOiAwO1xcclxcbiAgICAgICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcclxcbiAgICAgICAgXFxyXFxuICAgICAgICBpbWdcXHJcXG4gICAgICAgIHtcXHJcXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDcwMHB4O1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfX3RleHRcXHJcXG4gICAge1xcclxcbiAgICAgICAgd2lkdGg6IDgxJTtcXHJcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcclxcbiAgICAgICAgbWF4LXdpZHRoOiA2MTBweDtcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgICAgIHA6Zmlyc3Qtb2YtdHlwZVxcclxcbiAgICAgICAge1xcclxcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcXFwiUmFsZXdheVxcXCI7XFxyXFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcXHJcXG4gICAgICAgICAgICBmb250LXNpemU6IDEuN3JlbTtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIHA6bnRoLW9mLXR5cGUoMilcXHJcXG4gICAgICAgIHtcXHJcXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS44O1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfX2J1dHRvblxcclxcbiAgICB7XFxyXFxuICAgICAgICB3aWR0aDogNjQlO1xcclxcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG4gICAgICAgIG1heC13aWR0aDogMzYwcHg7XFxyXFxuICAgICAgICBmb250LWZhbWlseTogXFxcIk9wZW4gc2Fuc1xcXCI7XFxyXFxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzY1RTJEOSwgIzMzOUVDQyk7XFxyXFxuICAgICAgICBib3JkZXI6IDA7XFxyXFxuICAgICAgICBoZWlnaHQ6IDNyZW07XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xcclxcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuaGVhZGVyIHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxQzI0MzE7XFxyXFxuICAgICAgICBmb250LWZhbWlseTogXFxcIlJhbGV3YXlcXFwiO1xcclxcbiAgICAgICAgbWluLWhlaWdodDogM3JlbTtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI2JSBhdXRvIDU1JTtcXHJcXG4gICAgXFxyXFxuICAgICAgICAmX19pbWcge1xcclxcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAxLzI7XFxyXFxuICAgICAgICAgICAgd2lkdGg6ODAlO1xcclxcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwJTtcXHJcXG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiA0cmVtO1xcclxcbiAgICAgICAgICAgIG1heC13aWR0aDogMTkwcHg7XFxyXFxuICAgICAgICAgICAganVzdGlmeS1zZWxmOiBlbmQ7XFxyXFxuICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgICAgICAgfVxcclxcbiAgICBcXHJcXG4gICAgICAgICZfX25hdiB7XFxyXFxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDMvNDtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgICAgICAgfVxcclxcbiAgICBcXHJcXG4gICAgICAgICZfX2xpbmsge1xcclxcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICB3aWR0aDogMzAlO1xcclxcblxcclxcbiAgICAgICAgICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAvLyBsYW5kc2NhcGUgbW9kZSBmb3IgbW9iaWxlc1xcclxcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC1oZWlnaHQ6IDYwMHB4KSB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxNSUgNzAlIDE1JTtcXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTAlIDUwJTtcXHJcXG5cXHJcXG4gICAgICAgIC5oZWFkZXIge1xcclxcbiAgICAgICAgICAgIGdyaWQtcm93OiAxLzI7XFxyXFxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDEvMztcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICZfX2ZpZ3VyZSB7XFxyXFxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDEvMjtcXHJcXG4gICAgICAgICAgICBncmlkLXJvdzogMi8zO1xcclxcbiAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuXFxyXFxuICAgICAgICAgICAgaW1nIHtcXHJcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAmX190ZXh0IHtcXHJcXG4gICAgICAgICAgICBncmlkLXJvdzogMi8zO1xcclxcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAyLzM7XFxyXFxuICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xcclxcbiAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcclxcbiAgICAgICAgICAgIHAge1xcclxcbiAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICBcXHJcXG4gICAgICAgICAgICBwOmZpcnN0LW9mLXR5cGUge1xcclxcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTtcXHJcXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgJl9fYnV0dG9uIHtcXHJcXG4gICAgICAgICAgICBncmlkLXJvdzogMy80O1xcclxcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAxLzM7XFxyXFxuICAgICAgICAgICAgd2lkdGg6IDMwJTtcXHJcXG4gICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiAzZW07XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLy8gbGFyZ2VyIG1vYmlsZXNcXHJcXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogMzYwcHgpIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG5cXHJcXG4gICAgICAgICZfX2J1dHRvbiB7XFxyXFxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTAlO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC8vIHRhYmxldHMgYW5kIGRlc2t0b3BcXHJcXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAvKihvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCovKG1pbi1oZWlnaHQ6IDYwMXB4KSBhbmQgKG1pbi13aWR0aDogODAwcHgpIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcblxcclxcbiAgICAgICAgJl9fZmlndXJlIHtcXHJcXG4gICAgICAgICAgICB3aWR0aDogNDAlO1xcclxcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDUwJTtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcclxcbiAgICAgICAgICAgIGltZ1xcclxcbiAgICAgICAgICAgIHtcXHJcXG4gICAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XFxyXFxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogbm9uZTtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAmX190ZXh0IHtcXHJcXG4gICAgICAgICAgICB3aWR0aDogNDclO1xcclxcbiAgICAgICAgICAgIG1heC13aWR0aDogNTUwcHg7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAmX19idXR0b24ge1xcclxcbiAgICAgICAgICAgIHdpZHRoOiAyMCU7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAuaGVhZGVyIHtcXHJcXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAwO1xcclxcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjAlIGF1dG8gMjUlO1xcclxcbiAgICAgICAgXFxyXFxuICAgICAgICAgICAgJl9faW1nXFxyXFxuICAgICAgICAgICAge1xcclxcbiAgICAgICAgICAgICAgICB3aWR0aDogNzAlO1xcclxcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xcclxcbiAgICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBlbmQ7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgXFxyXFxuICAgICAgICAgICAgJl9fbGlua1xcclxcbiAgICAgICAgICAgIHtcXHJcXG4gICAgICAgICAgICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxyXFxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDUlO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbn1cIixcIkB1c2UgXFxcImludHJvXFxcIjtcXHJcXG5AdXNlIFxcXCJmZWF0dXJlc1xcXCI7XFxyXFxuQHVzZSBcXFwicHJlc2VudGF0aW9uXFxcIjtcXHJcXG5AdXNlIFxcXCJ0ZXN0aW1vbmlhbHNcXFwiO1xcclxcbkB1c2UgXFxcIkNUQVxcXCI7XFxyXFxuQHVzZSBcXFwiZm9vdGVyXFxcIjtcXHJcXG5cXHJcXG4qIHtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgxRjJBO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiT3BlbiBzYW5zXFxcIjtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4jc2Nyb2xsLXNuYXAtY29udGFpbmVyIHtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbn0gXCIsXCIuZmVhdHVyZXMge1xcclxcbiAgICBoZWlnaHQ6IDIwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXHJcXG5cXHJcXG4gICAgJl9fZmVhdHVyZS1jYXJkIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICBmbGV4LWdyb3c6IDE7XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfX2ltZyB7XFxyXFxuICAgICAgICBtYXgtd2lkdGg6IDVyZW07XFxyXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfX3RleHQge1xcclxcbiAgICAgICAgbWF4LXdpZHRoOiA0ODBweDtcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICBcXHJcXG4gICAgICAgIHA6Zmlyc3Qtb2YtdHlwZSB7XFxyXFxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFxcXCJSYWxld2F5XFxcIjtcXHJcXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xcclxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS43cmVtO1xcclxcbiAgICAgICAgfVxcclxcbiAgIFxcclxcbiAgICAgICAgcDpudGgtb2YtdHlwZSgyKSB7XFxyXFxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuODtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIHAge1xcclxcbiAgICAgICAgICAgIG1hcmdpbjogMC41cmVtIDA7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLy8gbGFuZHNjYXBlIG1vZGUgZm9yIG1vYmlsZXNcXHJcXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtaGVpZ2h0OiA2MDBweCkge1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG5cXHJcXG4gICAgICAgICZfX2ZlYXR1cmUtY2FyZCB7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiA1MCU7XFxyXFxuICAgICAgICAgICAgd2lkdGg6IDQ1JTtcXHJcXG4gICAgICAgICAgICBmbGV4LWdyb3c6IDA7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLy8gbGFyZ2VyIG1vYmlsZXNcXHJcXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogMzYwcHgpIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAvLyB0YWJsZXRzIGFuZCBkZXNrdG9wXFxyXFxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgLyoob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQqLyhtaW4taGVpZ2h0OiA2MDFweCkgYW5kIChtaW4td2lkdGg6IDgwMHB4KSB7XFxyXFxuICAgICAgICBoZWlnaHQ6MTAwJTtcXHJcXG4gICAgICAgIHdpZHRoOiA3MCU7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICAgICAgICBmb250LXNpemU6IDE0cHg7XFxyXFxuXFxyXFxuICAgICAgICAmX19mZWF0dXJlLWNhcmQge1xcclxcbiAgICAgICAgICAgIHdpZHRoOiA0MCU7XFxyXFxuICAgICAgICAgICAgZmxleC1ncm93OiAwO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgJl9faW1nIHtcXHJcXG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiA0cmVtO1xcclxcbiAgICAgICAgICAgIG1heC13aWR0aDogbm9uZTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbn1cIixcIi5wcmVzZW50YXRpb24ge1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcclxcbiAgICAmX19maWd1cmUge1xcclxcbiAgICAgICAgbWFyZ2luOiAwO1xcclxcbiAgICAgICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcclxcbiAgICAgICAgXFxyXFxuICAgICAgICBpbWdcXHJcXG4gICAgICAgIHtcXHJcXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDcwMHB4O1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfX3RleHQge1xcclxcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gICAgICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgICAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICBcXHJcXG4gICAgICAgIHA6Zmlyc3Qtb2YtdHlwZSB7XFxyXFxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFxcXCJSYWxld2F5XFxcIjtcXHJcXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xcclxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS43cmVtO1xcclxcbiAgICAgICAgfVxcclxcbiAgICBcXHJcXG4gICAgICAgIHA6bnRoLW9mLXR5cGUoMikge1xcclxcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjg7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJl9fZGVtbyB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXHJcXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMTgxRjJBO1xcclxcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDRweDtcXHJcXG4gICAgICAgIHRyYW5zaXRpb246IC43cztcXHJcXG4gICAgICAgIFxcclxcbiAgICAgICAgc3ZnIHtcXHJcXG4gICAgICAgICAgICBtYXJnaW46IGF1dG8gMCBhdXRvIDhweDtcXHJcXG4gICAgICAgICAgICBcXHJcXG4gICAgICAgICAgICAjY2lyY2xlIC8qdGhpcyBpcyB0aGUgc3ZnIGljb24qL1xcclxcbiAgICAgICAgICAgIHtcXHJcXG4gICAgICAgICAgICAgICAgZmlsbDogd2hpdGU7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgXFxyXFxuICAgICAgICBhIHtcXHJcXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcXFwiT3BlbiBzYW5zXFxcIjtcXHJcXG4gICAgICAgICAgICBcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgICAgICBjb2xvcjogIzY1RTJEOTtcXHJcXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzY1RTJEOTtcXHJcXG5cXHJcXG4gICAgICAgICAgICBhIHtcXHJcXG4gICAgICAgICAgICAgICAgY29sb3I6ICM2NUUyRDk7XFxyXFxuICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgIHN2ZyB7XFxyXFxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgI2NpcmNsZSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBmaWxsOiAjNjVFMkQ5O1xcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC8vIGxhbmRzY2FwZSBtb2RlIGZvciBtb2JpbGVzXFxyXFxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LWhlaWdodDogNjAwcHgpIHtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgICAgICBmb250LXNpemU6IDEycHg7XFxyXFxuXFxyXFxuICAgICAgICAmX19maWd1cmUge1xcclxcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICZfX3RleHQge1xcclxcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICBwYWRkaW5nOiAxZW07XFxyXFxuICAgICAgICAgICAgcDpmaXJzdC1vZi10eXBlIHtcXHJcXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjdlbTtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG5cXHJcXG4gICAgLy9sYXJnZXIgbW9iaWxlcyBhbmQgdGFibGV0c1xcclxcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAzNjBweCkge1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLy8gZGVza3RvcFxcclxcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi1oZWlnaHQ6IDYwMXB4KSBhbmQgKG1pbi13aWR0aDogODAwcHgpIHtcXHJcXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgICAgICAgd2lkdGg6IDg1JTtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcclxcbiAgICAgICAgJl9fdGV4dCB7XFxyXFxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDUlO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxufVwiLFwiLnRlc3RpbW9uaWFscyB7XFxyXFxuICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgICB3aWR0aDogODAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxyXFxuXFxyXFxuICAgIC5yZXZpZXcge1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIwMkEzQztcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogLjc1cmVtO1xcclxcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI7XFxyXFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAuOHJlbTtcXHJcXG5cXHJcXG4gICAgICAgICY6Zmlyc3Qtb2YtdHlwZTo6YmVmb3JlIHtcXHJcXG4gICAgICAgICAgICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4uL2Fzc2V0cy9iZy1xdW90ZXMucG5nXFxcIik7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgICAgIGhlaWdodDogNDVweDtcXHJcXG4gICAgICAgICAgICB3aWR0aDogNTVweDtcXHJcXG4gICAgICAgICAgICB0b3A6IC0zNXB4O1xcclxcbiAgICAgICAgICAgIGxlZnQ6IC0xMHB4O1xcclxcbiAgICAgICAgICAgIHotaW5kZXg6IC0xO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgJl9fY29udGVudCB7XFxyXFxuICAgICAgICAgICAgd2lkdGg6IDg1JTtcXHJcXG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgICAgICAgICAgXFxyXFxuICAgICAgICAgICAgcCB7XFxyXFxuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAmX190ZXh0IHtcXHJcXG4gICAgICAgICAgICBwYWRkaW5nOiAxcmVtIDA7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAmX19pZCB7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgJl9faW1nIHtcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IDIuNXJlbTtcXHJcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAmX19uYW1lLXRhZyB7XFxyXFxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC41cmVtO1xcclxcblxcclxcbiAgICAgICAgICAgIHA6Zmlyc3Qtb2YtdHlwZSB7XFxyXFxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICBwOm50aC1vZi10eXBlKDIpIHtcXHJcXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAuNnJlbTtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLy8gbGFuZHNjYXBlIG1vZGUgZm9yIG1vYmlsZXNcXHJcXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtaGVpZ2h0OiA2MDBweCkge1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICB3aWR0aDogOTAlO1xcclxcblxcclxcbiAgICAgICAgLnJldmlldyB7XFxyXFxuICAgICAgICAgICAgd2lkdGg6IDMyJTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAvLyBsYXJnZXIgbW9iaWxlcyBhbmQgdGFibGV0c1xcclxcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAzNjBweCkge1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgICAgICAucmV2aWV3IHtcXHJcXG4gICAgICAgICAgICBmb250LXNpemU6IC43NXJlbTtcXHJcXG4gICAgICAgICAgICBtYXJnaW46IDFyZW0gYXV0bztcXHJcXG5cXHJcXG4gICAgICAgICAgICAmX190ZXh0IHtcXHJcXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMS41cmVtIDA7XFxyXFxuICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgICZfX2lkIHtcXHJcXG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEuNXJlbTtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLy8gZGVza3RvcFxcclxcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi1oZWlnaHQ6IDYwMXB4KSBhbmQgKG1pbi13aWR0aDogODAwcHgpIHtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuXFxyXFxuICAgICAgICAucmV2aWV3IHtcXHJcXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xcclxcbiAgICAgICAgICAgIG1hcmdpbjogMCAxcmVtO1xcclxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogLjlyZW07XFxyXFxuXFxyXFxuICAgICAgICAgICAgJjpmaXJzdC1vZi10eXBlOjpiZWZvcmUge1xcclxcbiAgICAgICAgICAgICAgICB0b3A6IC00MHB4O1xcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAmX190ZXh0IHtcXHJcXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMS41cmVtIDA7XFxyXFxuICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgICZfX2lkIHtcXHJcXG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEuNXJlbTtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG59XCIsXCIuQ1RBIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzBCMTUyMywgIzBCMTUyMyk7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSA1MCU7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgJl9fY29udGVudCB7XFxyXFxuICAgICAgICB3aWR0aDogOTAlO1xcclxcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUMyNDMxO1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmX190ZXh0IHtcXHJcXG4gICAgICAgIHBhZGRpbmctdG9wOiAxcmVtO1xcclxcbiAgICAgICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgICAgIG1heC13aWR0aDogNzIwcHg7XFxyXFxuICAgICAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICBcXHJcXG4gICAgICAgIHA6Zmlyc3Qtb2YtdHlwZSB7XFxyXFxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFxcXCJSYWxld2F5XFxcIjtcXHJcXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xcclxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS43cmVtO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgcDpudGgtb2YtdHlwZSgyKSB7XFxyXFxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuODtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmX19zaWduLXVwIHtcXHJcXG4gICAgICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgICAgICBtYXgtd2lkdGg6IDM2MHB4O1xcclxcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICAgICAgICBwYWRkaW5nOiAxcmVtIDA7XFxyXFxuXFxyXFxuICAgICAgICBidXR0b24ge1xcclxcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcXFwiT3BlbiBzYW5zXFxcIjtcXHJcXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjNjVFMkQ5LCAjMzM5RUNDKTtcXHJcXG4gICAgICAgICAgICBib3JkZXI6IDA7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiAzcmVtO1xcclxcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxyXFxuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgICAgIFxcclxcbiAgICAgICAgaW5wdXQge1xcclxcbiAgICAgICAgICAgIGJvcmRlcjogMDtcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IDNyZW07XFxyXFxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcXHJcXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xcclxcblxcclxcbiAgICAgICAgICAgICY6Zm9jdXMge1xcclxcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiAwO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAjYWxlcnQge1xcclxcbiAgICAgICAgY29sb3I6IHJlZDtcXHJcXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgICAgICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAvLyBsYW5kc2NhcGUgbW9kZSBmb3IgbW9iaWxlc1xcclxcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC1oZWlnaHQ6IDYwMHB4KSB7XFxyXFxuICAgICAgICAmX19jb250ZW50IHtcXHJcXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLy8gbGFyZ2VyIG1vYmlsZXMgYW5kIHRhYmxldHNcXHJcXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogMzYwcHgpIHtcXHJcXG4gICAgICAgICZfX2NvbnRlbnQge1xcclxcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDQwJTtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAgXFxyXFxuICAgICAgICAmX190ZXh0IHtcXHJcXG4gICAgICAgICAgICB3aWR0aDogNzUlO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC8vIGRlc2t0b3BcXHJcXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4taGVpZ2h0OiA2MDFweCkgYW5kIChtaW4td2lkdGg6IDgwMHB4KSB7XFxyXFxuICAgICAgICAmX19jb250ZW50IHtcXHJcXG4gICAgICAgICAgICB3aWR0aDogNjAlO1xcclxcbiAgICAgICAgfVxcclxcbiAgICBcXHJcXG4gICAgICAgICZfX3NpZ24tdXAge1xcclxcbiAgICAgICAgICAgIG1heC13aWR0aDogbm9uZTtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcblxcclxcbiAgICAgICAgICAgIGJ1dHRvbiB7XFxyXFxuICAgICAgICAgICAgICAgIHdpZHRoOiAyNSU7XFxyXFxuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgXFxyXFxuICAgICAgICAgICAgaW5wdXQge1xcclxcbiAgICAgICAgICAgICAgICB3aWR0aDogNjAlO1xcclxcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgI2FsZXJ0IHtcXHJcXG4gICAgICAgICAgICB3aWR0aDogODAlO1xcclxcbiAgICAgICAgICAgIGhlaWdodDogMi41cmVtO1xcclxcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG59XCIsXCIuZm9vdGVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBCMTUyMztcXHJcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcblxcclxcbiAgICBkaXYge1xcclxcbiAgICAgICAgd2lkdGg6IDg1JTtcXHJcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfX2ZpZ3VyZSB7XFxyXFxuICAgICAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgICAgIHdpZHRoOiA4NSU7XFxyXFxuICAgIH1cXHJcXG4gICAgXFxyXFxuICAgICZfX2xvY2F0aW9uIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE1JSA4NSU7XFxyXFxuICAgICAgICAgICAgXFxyXFxuICAgICAgICBpbWcge1xcclxcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAxLzI7XFxyXFxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMS4ycmVtO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgXFxyXFxuICAgICAgICBwIHtcXHJcXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMi8zO1xcclxcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyO1xcclxcbiAgICAgICAgICAgIG1hcmdpbjogLjVyZW0gMDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG4gICAgJl9fY29udGFjdC1pbmZvIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogLjlyZW07XFxyXFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxNSUgODUlO1xcclxcbiAgICAgICAgICAgIFxcclxcbiAgICAgICAgaW1nIHtcXHJcXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMS8yO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgXFxyXFxuICAgICAgICBwIHtcXHJcXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMi8zO1xcclxcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyO1xcclxcbiAgICAgICAgICAgIG1hcmdpbjogLjVyZW0gMDtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIGltZywgcCB7XFxyXFxuICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfX2Fib3V0LXVzLCAmX19jb250YWN0LXVzIHtcXHJcXG4gICAgICAgIC8vIG1hcmdpbi10b3A6IDEuNXJlbTtcXHJcXG4gICAgICAgICAgIFxcclxcbiAgICAgICAgcCB7XFxyXFxuICAgICAgICAgICAgYSB7XFxyXFxuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICAgICAgICAgICAgICBcXHJcXG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmX19zb2NpYWwtbWVkaWEge1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgLy8gbWFyZ2luLXRvcDogMS41cmVtO1xcclxcblxcclxcbiAgICAgICAgc3ZnIHtcXHJcXG4gICAgICAgICAgICB3aWR0aDogMjRweDtcXHJcXG4gICAgICAgICAgICBmaWxsOiB3aGl0ZTtcXHJcXG4gICAgICAgICAgICBtYXJnaW46IDAgMXJlbTtcXHJcXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAuNXM7XFxyXFxuXFxyXFxuICAgICAgICAgICAgJjpob3ZlciB7XFxyXFxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgICAgICAgICAgZmlsbDogIzY1RTJEOTtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJl9fZnJvbnRlbmRtZW50b3Ige1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxMXB4O1xcclxcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgICAgLy8gbWFyZ2luLXRvcDogMS41cmVtO1xcclxcbiAgICAgICAgXFxyXFxuICAgICAgICBhIHtcXHJcXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgICAgICAgICAgdHJhbnNpdGlvbjogLjVzO1xcclxcblxcclxcbiAgICAgICAgICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgICAgICAgICBjb2xvcjogIzY1RTJEOTtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLy8gbGFuZHNjYXBlIG1vZGUgZm9yIG1vYmlsZXNcXHJcXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtaGVpZ2h0OiA2MDBweCkge1xcclxcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDQwJSAyZnIgMTUlIDFmciAxNSUgMWZyIGF1dG8gMWZyO1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzJSBhdXRvIGF1dG8gMTUlIDE1JSBhdXRvO1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBpbml0aWFsO1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcclxcblxcclxcbiAgICAgICAgZGl2IHtcXHJcXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgXFxyXFxuICAgICAgICAmX19maWd1cmUge1xcclxcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAyLzM7XFxyXFxuICAgICAgICAgICAgZ3JpZC1yb3c6IDIvMztcXHJcXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcXHJcXG5cXHJcXG4gICAgICAgICAgICBpbWcge1xcclxcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgICAgICBcXHJcXG4gICAgICAgICZfX2xvY2F0aW9uIHtcXHJcXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMi8zO1xcclxcbiAgICAgICAgICAgIGdyaWQtcm93OiAzLzQ7XFxyXFxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgICAgIFxcclxcbiAgICAgICAgJl9fY29udGFjdC1pbmZvIHtcXHJcXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMi8zO1xcclxcbiAgICAgICAgICAgIGdyaWQtcm93OiA0LzY7XFxyXFxuICAgICAgICAgICAgXFxyXFxuICAgICAgICAgICAgaW1nIHtcXHJcXG4gICAgICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgICAgICBcXHJcXG4gICAgICAgICZfX2Fib3V0LXVzIHtcXHJcXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogNC81O1xcclxcbiAgICAgICAgICAgIGdyaWQtcm93OiAzLzU7XFxyXFxuICAgICAgICAgICAgbWFyZ2luOiAwO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgXFxyXFxuICAgICAgICAmX19jb250YWN0LXVzIHtcXHJcXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogNi83O1xcclxcbiAgICAgICAgICAgIGdyaWQtcm93OiAzLzU7XFxyXFxuICAgICAgICAgICAgbWFyZ2luOiAwO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgXFxyXFxuICAgICAgICAmX19zb2NpYWwtbWVkaWEge1xcclxcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiA4Lzk7XFxyXFxuICAgICAgICAgICAgZ3JpZC1yb3c6IDMvNjtcXHJcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XFxyXFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHJcXG4gICAgICAgICAgICBzdmcge1xcclxcbiAgICAgICAgICAgICAgICBtYXJnaW46IDFyZW0gMDtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgIFxcclxcbiAgICAgICAgJl9fZnJvbnRlbmRtZW50b3Ige1xcclxcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XFxyXFxuICAgICAgICAgICAgZ3JpZC1yb3c6IDYvNztcXHJcXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMS8xMDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAvLyB0YWJsZXRzIGFuZCBkZXNrdG9wXFxyXFxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1oZWlnaHQ6IDYwMXB4KSBhbmQgKG1pbi13aWR0aDogODAwcHgpIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDglIDI1JSBhdXRvIDE1JSBhdXRvIDklIGF1dG8gOSUgYXV0byA5JSBhdXRvO1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDBweCA5MHB4IDYwcHggNjBweDtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogaW5pdGlhbDtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gICAgICAgIGhlaWdodDogYXV0bztcXHJcXG5cXHJcXG4gICAgICAgIGRpdiB7XFxyXFxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIFxcclxcbiAgICAgICAgJl9fZmlndXJlIHtcXHJcXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMi8zO1xcclxcbiAgICAgICAgICAgIGdyaWQtcm93OiAxLzI7XFxyXFxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XFxyXFxuXFxyXFxuICAgICAgICAgICAgaW1nIHtcXHJcXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAgICAgXFxyXFxuICAgICAgICAmX19sb2NhdGlvbiB7XFxyXFxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDIvMztcXHJcXG4gICAgICAgICAgICBncmlkLXJvdzogMi8zO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgICAgIFxcclxcbiAgICAgICAgJl9fY29udGFjdC1pbmZvIHtcXHJcXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogNC81O1xcclxcbiAgICAgICAgICAgIGdyaWQtcm93OiAyLzM7XFxyXFxuICAgICAgICAgICAgXFxyXFxuICAgICAgICAgICAgaW1nIHtcXHJcXG4gICAgICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgICAgICBcXHJcXG4gICAgICAgICZfX2Fib3V0LXVzIHtcXHJcXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogNi83O1xcclxcbiAgICAgICAgICAgIGdyaWQtcm93OiAyLzQ7XFxyXFxuICAgICAgICAgICAgbWFyZ2luOiAwO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgXFxyXFxuICAgICAgICAmX19jb250YWN0LXVzIHtcXHJcXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogOC85O1xcclxcbiAgICAgICAgICAgIGdyaWQtcm93OiAyLzQ7XFxyXFxuICAgICAgICAgICAgbWFyZ2luOiAwO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgXFxyXFxuICAgICAgICAmX19zb2NpYWwtbWVkaWEge1xcclxcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAxMC8xMTtcXHJcXG4gICAgICAgICAgICBncmlkLXJvdzogMi8zO1xcclxcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xcclxcblxcclxcbiAgICAgICAgICAgIHN2ZyB7XFxyXFxuICAgICAgICAgICAgICAgIG1hcmdpbjogMXJlbSAwO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgXFxyXFxuICAgICAgICAmX19mcm9udGVuZG1lbnRvciB7XFxyXFxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcXHJcXG4gICAgICAgICAgICBncmlkLXJvdzogNC81O1xcclxcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAxLzEyO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC8vIHRhYmxldHNcXHJcXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi1oZWlnaHQ6IDYwMXB4KSBhbmQgKG1pbi13aWR0aDogODAwcHgpIHtcXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNSUgMjUlIGF1dG8gMjAlIGF1dG8gOSUgYXV0byA5JSBhdXRvIDEyJSBhdXRvO1xcclxcbiAgICB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImZ1bmN0aW9uIGVhc2VJbk91dFF1YWQodCkge1xuICAgIHJldHVybiB0IDwgMC41ID8gMiAqIHQgKiB0IDogLTEgKyAoNCAtIDIgKiB0KSAqIHQ7XG59XG52YXIgVElNRU9VVF9NSU4gPSA1MDtcbnZhciBUSU1FT1VUX0RFRkFVTFQgPSAxMDA7XG52YXIgRFVSQVRJT05fREVGQVVMVCA9IDMwMDtcbnZhciBUSFJFU0hPTERfREVGQVVMVCA9IDAuMjtcbnZhciBTTkFQU1RPUF9ERUZBVUxUID0gZmFsc2U7XG52YXIgRUFTSU5HX0RFRkFVTFQgPSBlYXNlSW5PdXRRdWFkO1xudmFyIE5PT1AgPSBmdW5jdGlvbiAoKSB7IH07XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVTY3JvbGxTbmFwKGVsZW1lbnQsIHNldHRpbmdzLCBjYWxsYmFjaykge1xuICAgIGlmIChzZXR0aW5ncyA9PT0gdm9pZCAwKSB7IHNldHRpbmdzID0ge307IH1cbiAgICB2YXIgb25BbmltYXRpb25FbmQgPSB0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicgPyBjYWxsYmFjayA6IE5PT1A7XG4gICAgdmFyIGxpc3RlbmVyRWxlbWVudDtcbiAgICB2YXIgdGFyZ2V0O1xuICAgIHZhciBhbmltYXRpbmcgPSBmYWxzZTtcbiAgICB2YXIgc2Nyb2xsSGFuZGxlclRpbWVyO1xuICAgIHZhciBzY3JvbGxTcGVlZFRpbWVyO1xuICAgIHZhciBzY3JvbGxTdGFydDtcbiAgICB2YXIgc3BlZWREZWx0YVg7XG4gICAgdmFyIHNwZWVkRGVsdGFZO1xuICAgIHZhciBzbmFwTGVuZ3RoVW5pdDtcbiAgICB2YXIgbGFzdFNjcm9sbFZhbHVlID0ge1xuICAgICAgICB4OiAwLFxuICAgICAgICB5OiAwLFxuICAgIH07XG4gICAgdmFyIGFuaW1hdGlvbkZyYW1lO1xuICAgIHZhciBzbmFwRGVzdGluYXRpb25YID0gc2V0dGluZ3Muc25hcERlc3RpbmF0aW9uWCwgc25hcERlc3RpbmF0aW9uWSA9IHNldHRpbmdzLnNuYXBEZXN0aW5hdGlvblk7XG4gICAgaWYgKHNuYXBEZXN0aW5hdGlvblggJiZcbiAgICAgICAgdHlwZW9mIHNuYXBEZXN0aW5hdGlvblggIT09ICdzdHJpbmcnICYmXG4gICAgICAgIHR5cGVvZiBzbmFwRGVzdGluYXRpb25YICE9PSAnbnVtYmVyJykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJTZXR0aW5ncyBwcm9wZXJ0eSAnc25hcERlc3RpbmF0aW9uWCcgaXMgbm90IHZhbGlkLCBleHBlY3RlZCBTVFJJTkcgb3IgTlVNQkVSIGJ1dCBmb3VuZCBcIiArICh0eXBlb2Ygc25hcERlc3RpbmF0aW9uWCkudG9VcHBlckNhc2UoKSk7XG4gICAgfVxuICAgIGlmIChzbmFwRGVzdGluYXRpb25ZICYmXG4gICAgICAgIHR5cGVvZiBzbmFwRGVzdGluYXRpb25ZICE9PSAnc3RyaW5nJyAmJlxuICAgICAgICB0eXBlb2Ygc25hcERlc3RpbmF0aW9uWSAhPT0gJ251bWJlcicpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiU2V0dGluZ3MgcHJvcGVydHkgJ3NuYXBEZXN0aW5hdGlvblknIGlzIG5vdCB2YWxpZCwgZXhwZWN0ZWQgU1RSSU5HIG9yIE5VTUJFUiBidXQgZm91bmQgXCIgKyAodHlwZW9mIHNuYXBEZXN0aW5hdGlvblkpLnRvVXBwZXJDYXNlKCkpO1xuICAgIH1cbiAgICBpZiAoc2V0dGluZ3MudGltZW91dCAmJiAoaXNOYU4oc2V0dGluZ3MudGltZW91dCkgfHwgdHlwZW9mIHNldHRpbmdzLnRpbWVvdXQgPT09ICdib29sZWFuJykpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiT3B0aW9uYWwgc2V0dGluZ3MgcHJvcGVydHkgJ3RpbWVvdXQnIGlzIG5vdCB2YWxpZCwgZXhwZWN0ZWQgTlVNQkVSIGJ1dCBmb3VuZCBcIiArICh0eXBlb2Ygc2V0dGluZ3MudGltZW91dCkudG9VcHBlckNhc2UoKSk7XG4gICAgfVxuICAgIC8vIGFueSB2YWx1ZSBsZXNzIHRoZW4gVElNRU9VVF9NSU4gbWF5IGNhdXNlIHdlaXJkIGJhaGF2aW91ciBvbiBzb21lIGRldmljZXMgKGVzcGVjaWFsbHkgb24gbW9iaWxlIHdpdGggbW9tZW50dW0gc2Nyb2xsaW5nKVxuICAgIHZhciB0aW1lb3V0ID0gc2V0dGluZ3MudGltZW91dCAmJiBzZXR0aW5ncy50aW1lb3V0ID49IFRJTUVPVVRfTUlOID8gc2V0dGluZ3MudGltZW91dCA6IFRJTUVPVVRfREVGQVVMVDtcbiAgICBpZiAoc2V0dGluZ3MuZHVyYXRpb24gJiYgKGlzTmFOKHNldHRpbmdzLmR1cmF0aW9uKSB8fCB0eXBlb2Ygc2V0dGluZ3MuZHVyYXRpb24gPT09ICdib29sZWFuJykpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiT3B0aW9uYWwgc2V0dGluZ3MgcHJvcGVydHkgJ2R1cmF0aW9uJyBpcyBub3QgdmFsaWQsIGV4cGVjdGVkIE5VTUJFUiBidXQgZm91bmQgXCIgKyAodHlwZW9mIHNldHRpbmdzLmR1cmF0aW9uKS50b1VwcGVyQ2FzZSgpKTtcbiAgICB9XG4gICAgdmFyIGR1cmF0aW9uID0gc2V0dGluZ3MuZHVyYXRpb24gfHwgRFVSQVRJT05fREVGQVVMVDtcbiAgICBpZiAoc2V0dGluZ3MudGhyZXNob2xkICYmXG4gICAgICAgIChpc05hTihzZXR0aW5ncy50aHJlc2hvbGQpIHx8IHR5cGVvZiBzZXR0aW5ncy50aHJlc2hvbGQgPT09ICdib29sZWFuJykpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiT3B0aW9uYWwgc2V0dGluZ3MgcHJvcGVydHkgJ3RocmVzaG9sZCcgaXMgbm90IHZhbGlkLCBleHBlY3RlZCBOVU1CRVIgYnV0IGZvdW5kIFwiICsgKHR5cGVvZiBzZXR0aW5ncy50aHJlc2hvbGQpLnRvVXBwZXJDYXNlKCkpO1xuICAgIH1cbiAgICB2YXIgdGhyZXNob2xkID0gc2V0dGluZ3MudGhyZXNob2xkIHx8IFRIUkVTSE9MRF9ERUZBVUxUO1xuICAgIGlmIChzZXR0aW5ncy5lYXNpbmcgJiYgdHlwZW9mIHNldHRpbmdzLmVhc2luZyAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJPcHRpb25hbCBzZXR0aW5ncyBwcm9wZXJ0eSAnZWFzaW5nJyBpcyBub3QgdmFsaWQsIGV4cGVjdGVkIEZVTkNUSU9OIGJ1dCBmb3VuZCBcIiArICh0eXBlb2Ygc2V0dGluZ3MuZWFzaW5nKS50b1VwcGVyQ2FzZSgpKTtcbiAgICB9XG4gICAgdmFyIGVhc2luZyA9IHNldHRpbmdzLmVhc2luZyB8fCBFQVNJTkdfREVGQVVMVDtcbiAgICBpZiAoc2V0dGluZ3Muc25hcFN0b3AgJiYgdHlwZW9mIHNldHRpbmdzLnNuYXBTdG9wICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiT3B0aW9uYWwgc2V0dGluZ3MgcHJvcGVydHkgJ3NuYXBTdG9wJyBpcyBub3QgdmFsaWQsIGV4cGVjdGVkIEJPT0xFQU4gYnV0IGZvdW5kIFwiICsgKHR5cGVvZiBzZXR0aW5ncy5zbmFwU3RvcCkudG9VcHBlckNhc2UoKSk7XG4gICAgfVxuICAgIHZhciBzbmFwU3RvcCA9IHNldHRpbmdzLnNuYXBTdG9wIHx8IFNOQVBTVE9QX0RFRkFVTFQ7XG4gICAgZnVuY3Rpb24gY2hlY2tTY3JvbGxTcGVlZCh2YWx1ZSwgYXhpcykge1xuICAgICAgICB2YXIgY2xlYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBsYXN0U2Nyb2xsVmFsdWVbYXhpc10gPSBudWxsO1xuICAgICAgICB9O1xuICAgICAgICB2YXIgbmV3VmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdmFyIGRlbHRhO1xuICAgICAgICBpZiAobGFzdFNjcm9sbFZhbHVlW2F4aXNdICE9PSBudWxsKSB7XG4gICAgICAgICAgICBkZWx0YSA9IG5ld1ZhbHVlIC0gbGFzdFNjcm9sbFZhbHVlW2F4aXNdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZGVsdGEgPSAwO1xuICAgICAgICB9XG4gICAgICAgIGxhc3RTY3JvbGxWYWx1ZVtheGlzXSA9IG5ld1ZhbHVlO1xuICAgICAgICBzY3JvbGxTcGVlZFRpbWVyICYmIGNsZWFyVGltZW91dChzY3JvbGxTcGVlZFRpbWVyKTtcbiAgICAgICAgc2Nyb2xsU3BlZWRUaW1lciA9IHdpbmRvdy5zZXRUaW1lb3V0KGNsZWFyLCAxMDApO1xuICAgICAgICByZXR1cm4gZGVsdGE7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGJpbmRFbGVtZW50KGVsZW1lbnQpIHtcbiAgICAgICAgdGFyZ2V0ID0gZWxlbWVudDtcbiAgICAgICAgbGlzdGVuZXJFbGVtZW50ID0gZWxlbWVudCA9PT0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50ID8gd2luZG93IDogZWxlbWVudDtcbiAgICAgICAgbGlzdGVuZXJFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHN0YXJ0QW5pbWF0aW9uLCBmYWxzZSk7XG4gICAgICAgIHNuYXBMZW5ndGhVbml0ID0gcGFyc2VTbmFwQ29vcmRpbmF0ZXNWYWx1ZShzbmFwRGVzdGluYXRpb25YLCBzbmFwRGVzdGluYXRpb25ZKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdW5iaW5kRWxlbWVudCgpIHtcbiAgICAgICAgbGlzdGVuZXJFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHN0YXJ0QW5pbWF0aW9uLCBmYWxzZSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHN0YXJ0QW5pbWF0aW9uKCkge1xuICAgICAgICBzcGVlZERlbHRhWCA9IGNoZWNrU2Nyb2xsU3BlZWQodGFyZ2V0LnNjcm9sbExlZnQsICd4Jyk7XG4gICAgICAgIHNwZWVkRGVsdGFZID0gY2hlY2tTY3JvbGxTcGVlZCh0YXJnZXQuc2Nyb2xsVG9wLCAneScpO1xuICAgICAgICBpZiAoYW5pbWF0aW5nIHx8IChzcGVlZERlbHRhWCA9PT0gMCAmJiBzcGVlZERlbHRhWSA9PT0gMCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBoYW5kbGVyKHRhcmdldCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIHNjcm9sbCBoYW5kbGVyXG4gICAgICogdGhpcyBpcyB0aGUgY2FsbGJhY2sgZm9yIHNjcm9sbCBldmVudHMuXG4gICAgICovXG4gICAgZnVuY3Rpb24gaGFuZGxlcih0YXJnZXQpIHtcbiAgICAgICAgLy8gaWYgY3VycmVudGx5IGFuaW1hdGluZywgc3RvcCBpdC4gdGhpcyBwcmV2ZW50cyBmbGlja2VyaW5nLlxuICAgICAgICBpZiAoYW5pbWF0aW9uRnJhbWUpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChhbmltYXRpb25GcmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gaWYgYSBwcmV2aW91cyB0aW1lb3V0IGV4aXN0cywgY2xlYXIgaXQuXG4gICAgICAgIGlmIChzY3JvbGxIYW5kbGVyVGltZXIpIHtcbiAgICAgICAgICAgIC8vIHdlIG9ubHkgd2FudCB0byBjYWxsIGEgdGltZW91dCBvbmNlIGFmdGVyIHNjcm9sbGluZy4uXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoc2Nyb2xsSGFuZGxlclRpbWVyKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHNjcm9sbFN0YXJ0ID0ge1xuICAgICAgICAgICAgICAgIHk6IHRhcmdldC5zY3JvbGxUb3AsXG4gICAgICAgICAgICAgICAgeDogdGFyZ2V0LnNjcm9sbExlZnQsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHNjcm9sbEhhbmRsZXJUaW1lciA9IHdpbmRvdy5zZXRUaW1lb3V0KGFuaW1hdGlvbkhhbmRsZXIsIHRpbWVvdXQpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBhbmltYXRpb25IYW5kbGVyKCkge1xuICAgICAgICAvLyBpZiB3ZSBkb24ndCBtb3ZlIGEgdGhpbmcsIHdlIGNhbiBpZ25vcmUgdGhlIHRpbWVvdXQ6IGlmIHdlIGRpZCwgdGhlcmUnZCBiZSBhbm90aGVyIHRpbWVvdXQgYWRkZWQgZm9yIHNjcm9sbFN0YXJ0KzEuXG4gICAgICAgIGlmIChzY3JvbGxTdGFydC55ID09PSB0YXJnZXQuc2Nyb2xsVG9wICYmIHNjcm9sbFN0YXJ0LnggPT09IHRhcmdldC5zY3JvbGxMZWZ0KSB7XG4gICAgICAgICAgICAvLyBpZ25vcmUgdGltZW91dFxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIGRldGVjdCBkaXJlY3Rpb24gb2Ygc2Nyb2xsLiBuZWdhdGl2ZSBpcyB1cCwgcG9zaXRpdmUgaXMgZG93bi5cbiAgICAgICAgdmFyIGRpcmVjdGlvbiA9IHtcbiAgICAgICAgICAgIHk6IE1hdGguc2lnbihzcGVlZERlbHRhWSksXG4gICAgICAgICAgICB4OiBNYXRoLnNpZ24oc3BlZWREZWx0YVgpLFxuICAgICAgICB9O1xuICAgICAgICAvLyBnZXQgdGhlIG5leHQgc25hcC1wb2ludCB0byBzbmFwLXRvXG4gICAgICAgIHZhciBzbmFwUG9pbnQgPSBnZXROZXh0U25hcFBvaW50KHRhcmdldCwgZGlyZWN0aW9uKTtcbiAgICAgICAgbGlzdGVuZXJFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHN0YXJ0QW5pbWF0aW9uLCBmYWxzZSk7XG4gICAgICAgIGFuaW1hdGluZyA9IHRydWU7XG4gICAgICAgIC8vIHNtb290aGx5IG1vdmUgdG8gdGhlIHNuYXAgcG9pbnRcbiAgICAgICAgc21vb3RoU2Nyb2xsKHRhcmdldCwgc25hcFBvaW50LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBhZnRlciBtb3ZpbmcgdG8gdGhlIHNuYXAgcG9pbnQsIHJlYmluZCB0aGUgc2Nyb2xsIGV2ZW50IGhhbmRsZXJcbiAgICAgICAgICAgIGFuaW1hdGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgbGlzdGVuZXJFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHN0YXJ0QW5pbWF0aW9uLCBmYWxzZSk7XG4gICAgICAgICAgICBvbkFuaW1hdGlvbkVuZCgpO1xuICAgICAgICAgICAgLy8gcmVzZXQgc2Nyb2xsU3RhcnRcbiAgICAgICAgICAgIHNjcm9sbFN0YXJ0ID0ge1xuICAgICAgICAgICAgICAgIHk6IHRhcmdldC5zY3JvbGxUb3AsXG4gICAgICAgICAgICAgICAgeDogdGFyZ2V0LnNjcm9sbExlZnQsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0TmV4dFNuYXBQb2ludCh0YXJnZXQsIGRpcmVjdGlvbikge1xuICAgICAgICAvLyBnZXQgc25hcCBsZW5ndGhcbiAgICAgICAgdmFyIHNuYXBMZW5ndGggPSB7XG4gICAgICAgICAgICB5OiBNYXRoLnJvdW5kKGdldFlTbmFwTGVuZ3RoKHRhcmdldCwgc25hcExlbmd0aFVuaXQueSkpLFxuICAgICAgICAgICAgeDogTWF0aC5yb3VuZChnZXRYU25hcExlbmd0aCh0YXJnZXQsIHNuYXBMZW5ndGhVbml0LngpKSxcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIHRvcCA9IHRhcmdldC5zY3JvbGxUb3A7XG4gICAgICAgIHZhciBsZWZ0ID0gdGFyZ2V0LnNjcm9sbExlZnQ7XG4gICAgICAgIHZhciBzdGFydFBvaW50ID0ge1xuICAgICAgICAgICAgeTogc2Nyb2xsU3RhcnQueSAvIHNuYXBMZW5ndGgueSB8fCAwLFxuICAgICAgICAgICAgeDogc2Nyb2xsU3RhcnQueCAvIHNuYXBMZW5ndGgueCB8fCAwLFxuICAgICAgICB9O1xuICAgICAgICB2YXIgY3VycmVudFBvaW50ID0ge1xuICAgICAgICAgICAgeTogdG9wIC8gc25hcExlbmd0aC55IHx8IDAsXG4gICAgICAgICAgICB4OiBsZWZ0IC8gc25hcExlbmd0aC54IHx8IDAsXG4gICAgICAgIH07XG4gICAgICAgIHZhciBuZXh0UG9pbnQgPSB7XG4gICAgICAgICAgICB5OiAwLFxuICAgICAgICAgICAgeDogMCxcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNldCB0YXJnZXQgYW5kIGJvdW5kcyBieSBkaXJlY3Rpb24sXG4gICAgICAgICAqIGlmIHRocmVzaG9sZCBoYXMgbm90IGJlZW4gcmVhY2hlZCwgc2Nyb2xsIGJhY2sgdG8gY3VycmVudFBvaW50XG4gICAgICAgICAqKi9cbiAgICAgICAgaWYgKGlzQWJvdmVUaHJlc2hvbGQoZGlyZWN0aW9uLnksIGN1cnJlbnRQb2ludC55KSkge1xuICAgICAgICAgICAgaWYgKHNuYXBTdG9wKSB7XG4gICAgICAgICAgICAgICAgbmV4dFBvaW50LnkgPSByb3VuZEJ5RGlyZWN0aW9uKC1kaXJlY3Rpb24ueSwgc3RhcnRQb2ludC55ICsgZGlyZWN0aW9uLnkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbmV4dFBvaW50LnkgPSByb3VuZEJ5RGlyZWN0aW9uKGRpcmVjdGlvbi55LCBjdXJyZW50UG9pbnQueSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBuZXh0UG9pbnQueSA9IHJvdW5kQnlEaXJlY3Rpb24oZGlyZWN0aW9uLnkgKiAtMSwgY3VycmVudFBvaW50LnkpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc0Fib3ZlVGhyZXNob2xkKGRpcmVjdGlvbi54LCBjdXJyZW50UG9pbnQueCkpIHtcbiAgICAgICAgICAgIGlmIChzbmFwU3RvcCkge1xuICAgICAgICAgICAgICAgIG5leHRQb2ludC54ID0gcm91bmRCeURpcmVjdGlvbigtZGlyZWN0aW9uLngsIHN0YXJ0UG9pbnQueCArIGRpcmVjdGlvbi54KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG5leHRQb2ludC54ID0gcm91bmRCeURpcmVjdGlvbihkaXJlY3Rpb24ueCwgY3VycmVudFBvaW50LngpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbmV4dFBvaW50LnggPSByb3VuZEJ5RGlyZWN0aW9uKGRpcmVjdGlvbi54ICogLTEsIGN1cnJlbnRQb2ludC54KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBERUJVR1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnZGlyZWN0aW9uJywgZGlyZWN0aW9uKVxuICAgICAgICAvLyBjb25zb2xlLmxvZygnc3RhcnRQb2ludCcsIHN0YXJ0UG9pbnQpXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdjdXJyZW50UG9pbnQnLCBjdXJyZW50UG9pbnQpXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCduZXh0UG9pbnQnLCBuZXh0UG9pbnQpXG4gICAgICAgIC8vIGNhbGN1bGF0ZSB3aGVyZSB0byBzY3JvbGxcbiAgICAgICAgdmFyIHNjcm9sbFRvID0ge1xuICAgICAgICAgICAgeTogbmV4dFBvaW50LnkgKiBzbmFwTGVuZ3RoLnksXG4gICAgICAgICAgICB4OiBuZXh0UG9pbnQueCAqIHNuYXBMZW5ndGgueCxcbiAgICAgICAgfTtcbiAgICAgICAgLy8gc3RheSBpbiBib3VuZHMgKG1pbmltdW06IDAsIG1heG1pbXVtOiBhYnNvbHV0ZSBoZWlnaHQpXG4gICAgICAgIHNjcm9sbFRvLnkgPSBzdGF5SW5Cb3VuZHMoMCwgdGFyZ2V0LnNjcm9sbEhlaWdodCwgc2Nyb2xsVG8ueSk7XG4gICAgICAgIHNjcm9sbFRvLnggPSBzdGF5SW5Cb3VuZHMoMCwgdGFyZ2V0LnNjcm9sbFdpZHRoLCBzY3JvbGxUby54KTtcbiAgICAgICAgcmV0dXJuIHNjcm9sbFRvO1xuICAgIH1cbiAgICBmdW5jdGlvbiBpc0Fib3ZlVGhyZXNob2xkKGRpcmVjdGlvbiwgdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGRpcmVjdGlvbiA+IDAgPyB2YWx1ZSAlIDEgPiB0aHJlc2hvbGQgOiAxIC0gKHZhbHVlICUgMSkgPiB0aHJlc2hvbGQ7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJvdW5kQnlEaXJlY3Rpb24oZGlyZWN0aW9uLCB2YWx1ZSkge1xuICAgICAgICBpZiAoZGlyZWN0aW9uID09PSAtMSkge1xuICAgICAgICAgICAgLy8gd2hlbiB3ZSBnbyB1cCwgd2UgZmxvb3IgdGhlIG51bWJlciB0byBqdW1wIHRvIHRoZSBuZXh0IHNuYXAtcG9pbnQgaW4gc2Nyb2xsIGRpcmVjdGlvblxuICAgICAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGdvIGRvd24sIHdlIGNlaWwgdGhlIG51bWJlciB0byBqdW1wIHRvIHRoZSBuZXh0IGluIHZpZXcuXG4gICAgICAgIHJldHVybiBNYXRoLmNlaWwodmFsdWUpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBzdGF5SW5Cb3VuZHMobWluLCBtYXgsIGRlc3RpbmVkKSB7XG4gICAgICAgIHJldHVybiBNYXRoLm1heChNYXRoLm1pbihkZXN0aW5lZCwgbWF4KSwgbWluKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcGFyc2VTbmFwQ29vcmRpbmF0ZXNWYWx1ZSh4LCB5KSB7XG4gICAgICAgIC8vIHJlZ2V4IHRvIHBhcnNlIGxlbmd0aHNcbiAgICAgICAgdmFyIHJlZ2V4ID0gLyhbKy1dPyg/PVxcLlxcZHxcXGQpKD86XFxkKyk/KD86XFwuP1xcZCopKD86W2VFXVsrLV0/XFxkKyk/KShweHwlfHZ3fHZoKS87XG4gICAgICAgIC8vIGRlZmF1bHRzXG4gICAgICAgIHZhciBwYXJzZWQgPSB7XG4gICAgICAgICAgICB5OiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IDAsXG4gICAgICAgICAgICAgICAgdW5pdDogJ3B4JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB4OiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IDAsXG4gICAgICAgICAgICAgICAgdW5pdDogJ3B4JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICAgIGlmICh0eXBlb2YgeSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIHBhcnNlZC55LnZhbHVlID0geTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciByZXN1bHRZID0gcmVnZXguZXhlYyh5KTtcbiAgICAgICAgICAgIGlmIChyZXN1bHRZICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcGFyc2VkLnkgPSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBOdW1iZXIocmVzdWx0WVsxXSksXG4gICAgICAgICAgICAgICAgICAgIHVuaXQ6IHJlc3VsdFlbMl0sXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHggPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBwYXJzZWQueC52YWx1ZSA9IHg7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgcmVzdWx0WCA9IHJlZ2V4LmV4ZWMoeCk7XG4gICAgICAgICAgICBpZiAocmVzdWx0WCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHBhcnNlZC54ID0ge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogTnVtYmVyKHJlc3VsdFhbMV0pLFxuICAgICAgICAgICAgICAgICAgICB1bml0OiByZXN1bHRYWzJdLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBhcnNlZDtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0WVNuYXBMZW5ndGgob2JqLCBkZWNsYXJhdGlvbikge1xuICAgICAgICAvLyBnZXQgeSBzbmFwIGxlbmd0aCBiYXNlZCBvbiBkZWNsYXJhdGlvbiB1bml0XG4gICAgICAgIGlmIChkZWNsYXJhdGlvbi51bml0ID09PSAndmgnKSB7XG4gICAgICAgICAgICByZXR1cm4gKChNYXRoLm1heChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0LCB3aW5kb3cuaW5uZXJIZWlnaHQgfHwgMSkgLyAxMDApICpcbiAgICAgICAgICAgICAgICBkZWNsYXJhdGlvbi52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZGVjbGFyYXRpb24udW5pdCA9PT0gJyUnKSB7XG4gICAgICAgICAgICByZXR1cm4gKG9iai5jbGllbnRIZWlnaHQgLyAxMDApICogZGVjbGFyYXRpb24udmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZGVjbGFyYXRpb24udmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0WFNuYXBMZW5ndGgob2JqLCBkZWNsYXJhdGlvbikge1xuICAgICAgICAvLyBnZXQgeCBzbmFwIGxlbmd0aCBiYXNlZCBvbiBkZWNsYXJhdGlvbiB1bml0XG4gICAgICAgIGlmIChkZWNsYXJhdGlvbi51bml0ID09PSAndncnKSB7XG4gICAgICAgICAgICByZXR1cm4gKChNYXRoLm1heChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgsIHdpbmRvdy5pbm5lcldpZHRoIHx8IDEpIC8gMTAwKSAqXG4gICAgICAgICAgICAgICAgZGVjbGFyYXRpb24udmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGRlY2xhcmF0aW9uLnVuaXQgPT09ICclJykge1xuICAgICAgICAgICAgcmV0dXJuIChvYmouY2xpZW50V2lkdGggLyAxMDApICogZGVjbGFyYXRpb24udmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZGVjbGFyYXRpb24udmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gaXNFZGdlKENvb3JkaW5hdGVzKSB7XG4gICAgICAgIHJldHVybiAoQ29vcmRpbmF0ZXMueCA9PT0gMCAmJiBzcGVlZERlbHRhWSA9PT0gMCkgfHwgKENvb3JkaW5hdGVzLnkgPT09IDAgJiYgc3BlZWREZWx0YVggPT09IDApO1xuICAgIH1cbiAgICBmdW5jdGlvbiBzbW9vdGhTY3JvbGwob2JqLCBlbmQsIGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBwb3NpdGlvbiA9IGZ1bmN0aW9uIChzdGFydCwgZW5kLCBlbGFwc2VkLCBwZXJpb2QpIHtcbiAgICAgICAgICAgIGlmIChlbGFwc2VkID4gcGVyaW9kKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVuZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBzdGFydCArIChlbmQgLSBzdGFydCkgKiBlYXNpbmcoZWxhcHNlZCAvIHBlcmlvZCk7XG4gICAgICAgIH07XG4gICAgICAgIHZhciBzdGFydCA9IHtcbiAgICAgICAgICAgIHk6IG9iai5zY3JvbGxUb3AsXG4gICAgICAgICAgICB4OiBvYmouc2Nyb2xsTGVmdCxcbiAgICAgICAgfTtcbiAgICAgICAgLy8gZ2V0IGFuaW1hdGlvbiBmcmFtZSBvciBhIGZhbGxiYWNrXG4gICAgICAgIHZhciByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgICAgICAgICB3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZm4pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gd2luZG93LnNldFRpbWVvdXQoZm4sIDE1KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIHZhciBwZXJpb2QgPSBpc0VkZ2Uoc3RhcnQpID8gMSA6IGR1cmF0aW9uO1xuICAgICAgICB2YXIgc3RhcnRUaW1lO1xuICAgICAgICAvLyBzZXR1cCB0aGUgc3RlcHBpbmcgZnVuY3Rpb25cbiAgICAgICAgZnVuY3Rpb24gc3RlcCh0aW1lc3RhbXApIHtcbiAgICAgICAgICAgIGlmICghc3RhcnRUaW1lKSB7XG4gICAgICAgICAgICAgICAgc3RhcnRUaW1lID0gdGltZXN0YW1wO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGVsYXBzZWQgPSB0aW1lc3RhbXAgLSBzdGFydFRpbWU7XG4gICAgICAgICAgICAvLyBjaGFuZ2UgcG9zaXRpb24gb24geS1heGlzIGlmIHJlc3VsdCBpcyBhIG51bWJlci5cbiAgICAgICAgICAgIGlmICghaXNOYU4oZW5kLnkpKSB7XG4gICAgICAgICAgICAgICAgb2JqLnNjcm9sbFRvcCA9IHBvc2l0aW9uKHN0YXJ0LnksIGVuZC55LCBlbGFwc2VkLCBwZXJpb2QpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gY2hhbmdlIHBvc2l0aW9uIG9uIHgtYXhpcyBpZiByZXN1bHQgaXMgYSBudW1iZXIuXG4gICAgICAgICAgICBpZiAoIWlzTmFOKGVuZC54KSkge1xuICAgICAgICAgICAgICAgIG9iai5zY3JvbGxMZWZ0ID0gcG9zaXRpb24oc3RhcnQueCwgZW5kLngsIGVsYXBzZWQsIHBlcmlvZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBjaGVjayBpZiB3ZSBhcmUgb3ZlciBkdWU7XG4gICAgICAgICAgICBpZiAoZWxhcHNlZCA8IHBlcmlvZCkge1xuICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShzdGVwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIGlzIHRoZXJlIGEgY2FsbGJhY2s/XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAvLyBzdG9wIGV4ZWN1dGlvbiBhbmQgcnVuIHRoZSBjYWxsYmFja1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soZW5kKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYW5pbWF0aW9uRnJhbWUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGJpbmQoKSB7XG4gICAgICAgIGJpbmRFbGVtZW50KGVsZW1lbnQpO1xuICAgIH1cbiAgICBmdW5jdGlvbiB1bmJpbmQoKSB7XG4gICAgICAgIHVuYmluZEVsZW1lbnQoKTtcbiAgICB9XG4gICAgYmluZCgpO1xuICAgIHJldHVybiB7XG4gICAgICAgIGJpbmQ6IGJpbmQsXG4gICAgICAgIHVuYmluZDogdW5iaW5kLFxuICAgIH07XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIEltcG9ydCA9IGZpbGVuYW1lIGluIGNhbWVsQ2FzZVxyXG4vLyBFbGVtZW50J3MgaWQgPSBpbWctdGFnLWZpbGVuYW1lXHJcbi8vIFZhcmlhYmxlID0gRWxlbWVudCdzIGlkIGluIGNhbWVsQ2FzZVxyXG4vLyBJdCdzIGNvbXBsaWNhdGVkIGJ1dCBJIGNvdWxkbid0IGNvbWUgdXAgd2l0aCBhbnl0aGluZyBiZXR0ZXJcclxuXHJcbmltcG9ydCBsb2dvIGZyb20gXCIuL2Fzc2V0cy9sb2dvLnN2Z1wiO1xyXG5pbXBvcnQgaWxsdXN0cmF0aW9uSW50cm8gZnJvbSBcIi4vYXNzZXRzL2lsbHVzdHJhdGlvbi1pbnRyby5wbmdcIjtcclxuaW1wb3J0IGljb25BY2Nlc3NBbnl3aGVyZSBmcm9tIFwiLi9hc3NldHMvaWNvbi1hY2Nlc3MtYW55d2hlcmUuc3ZnXCI7XHJcbmltcG9ydCBpY29uU2VjdXJpdHkgZnJvbSBcIi4vYXNzZXRzL2ljb24tc2VjdXJpdHkuc3ZnXCI7XHJcbmltcG9ydCBpY29uQ29sbGFib3JhdGlvbiBmcm9tIFwiLi9hc3NldHMvaWNvbi1jb2xsYWJvcmF0aW9uLnN2Z1wiO1xyXG5pbXBvcnQgaWNvbkFueUZpbGUgZnJvbSBcIi4vYXNzZXRzL2ljb24tYW55LWZpbGUuc3ZnXCI7XHJcbmltcG9ydCBpbGx1c3RyYXRpb25TdGF5UHJvZHVjdGl2ZSBmcm9tIFwiLi9hc3NldHMvaWxsdXN0cmF0aW9uLXN0YXktcHJvZHVjdGl2ZS5wbmdcIjtcclxuaW1wb3J0IHByb2ZpbGUxIGZyb20gXCIuL2Fzc2V0cy9wcm9maWxlLTEuanBnXCI7XHJcbmltcG9ydCBwcm9maWxlMiBmcm9tIFwiLi9hc3NldHMvcHJvZmlsZS0yLmpwZ1wiO1xyXG5pbXBvcnQgcHJvZmlsZTMgZnJvbSBcIi4vYXNzZXRzL3Byb2ZpbGUtMy5qcGdcIjtcclxuaW1wb3J0IGljb25Mb2NhdGlvbiBmcm9tIFwiLi9hc3NldHMvaWNvbi1sb2NhdGlvbi5zdmdcIjtcclxuaW1wb3J0IGljb25QaG9uZSBmcm9tIFwiLi9hc3NldHMvaWNvbi1waG9uZS5zdmdcIjtcclxuaW1wb3J0IGljb25FbWFpbCBmcm9tIFwiLi9hc3NldHMvaWNvbi1lbWFpbC5zdmdcIjtcclxuXHJcbmNvbnN0IGltZ1RhZ0xvZ28gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImltZy10YWctbG9nb1wiKTtcclxuY29uc3QgaW1nVGFnSWxsdXN0cmF0aW9uSW50cm8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuXHRcImltZy10YWctaWxsdXN0cmF0aW9uLWludHJvXCJcclxuKTtcclxuY29uc3QgaW1nVGFnSWNvbkFjY2Vzc0FueXdoZXJlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcblx0XCJpbWctdGFnLWljb24tYWNjZXNzLWFueXdoZXJlXCJcclxuKTtcclxuY29uc3QgaW1nVGFnSWNvblNlY3VyaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbWctdGFnLWljb24tc2VjdXJpdHlcIik7XHJcbmNvbnN0IGltZ1RhZ0ljb25Db2xsYWJvcmF0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcblx0XCJpbWctdGFnLWljb24tY29sbGFib3JhdGlvblwiXHJcbik7XHJcbmNvbnN0IGltZ1RhZ0FueUZpbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImltZy10YWctaWNvbi1hbnktZmlsZVwiKTtcclxuY29uc3QgaW1nVGFnSWxsdXN0cmF0aW9uU3RheVByb2R1Y3RpdmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuXHRcImltZy10YWctaWxsdXN0cmF0aW9uLXN0YXktcHJvZHVjdGl2ZVwiXHJcbik7XHJcbmNvbnN0IGltZ1RhZ1Byb2ZpbGUxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbWctdGFnLXByb2ZpbGUtMVwiKTtcclxuY29uc3QgaW1nVGFnUHJvZmlsZTIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImltZy10YWctcHJvZmlsZS0yXCIpO1xyXG5jb25zdCBpbWdUYWdQcm9maWxlMyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW1nLXRhZy1wcm9maWxlLTNcIik7XHJcbmNvbnN0IGltZ1RhZ0xvZ28yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbWctdGFnLWxvZ28tMlwiKTtcclxuY29uc3QgaW1nVGFnSWNvbkxvY2F0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbWctdGFnLWljb24tbG9jYXRpb25cIik7XHJcbmNvbnN0IGltZ1RhZ0ljb25QaG9uZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW1nLXRhZy1pY29uLXBob25lXCIpO1xyXG5jb25zdCBpbWdUYWdJY29uRW1haWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImltZy10YWctaWNvbi1lbWFpbFwiKTtcclxuXHJcbmZ1bmN0aW9uIGxvYWRJbWdTb3VyY2VzKCkge1xyXG5cdGltZ1RhZ0xvZ28uc3JjID0gbG9nbztcclxuXHRpbWdUYWdJbGx1c3RyYXRpb25JbnRyby5zcmMgPSBpbGx1c3RyYXRpb25JbnRybztcclxuXHRpbWdUYWdJY29uQWNjZXNzQW55d2hlcmUuc3JjID0gaWNvbkFjY2Vzc0FueXdoZXJlO1xyXG5cdGltZ1RhZ0ljb25TZWN1cml0eS5zcmMgPSBpY29uU2VjdXJpdHk7XHJcblx0aW1nVGFnSWNvbkNvbGxhYm9yYXRpb24uc3JjID0gaWNvbkNvbGxhYm9yYXRpb247XHJcblx0aW1nVGFnQW55RmlsZS5zcmMgPSBpY29uQW55RmlsZTtcclxuXHRpbWdUYWdJbGx1c3RyYXRpb25TdGF5UHJvZHVjdGl2ZS5zcmMgPSBpbGx1c3RyYXRpb25TdGF5UHJvZHVjdGl2ZTtcclxuXHRpbWdUYWdQcm9maWxlMS5zcmMgPSBwcm9maWxlMTtcclxuXHRpbWdUYWdQcm9maWxlMi5zcmMgPSBwcm9maWxlMjtcclxuXHRpbWdUYWdQcm9maWxlMy5zcmMgPSBwcm9maWxlMztcclxuXHRpbWdUYWdMb2dvMi5zcmMgPSBsb2dvO1xyXG5cdGltZ1RhZ0ljb25Mb2NhdGlvbi5zcmMgPSBpY29uTG9jYXRpb247XHJcblx0aW1nVGFnSWNvblBob25lLnNyYyA9IGljb25QaG9uZTtcclxuXHRpbWdUYWdJY29uRW1haWwuc3JjID0gaWNvbkVtYWlsO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBsb2FkSW1nU291cmNlcztcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBTdHlsZSBmcm9tIFwiLi9zdHlsZXMvaW5kZXguc2Nzc1wiO1xyXG5pbXBvcnQgbG9hZEltZ1NvdXJjZXMgZnJvbSBcIi4vaW1nU291cmNlcy5qc1wiO1xyXG5pbXBvcnQgY3JlYXRlU2Nyb2xsU25hcCBmcm9tIFwic2Nyb2xsLXNuYXBcIjtcclxuXHJcbmxvYWRJbWdTb3VyY2VzKCk7XHJcblxyXG4vLyBTY3JvbGwtc25hcCAvL1xyXG5cclxuY29uc3Qgc2Nyb2xsQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzY3JvbGwtc25hcC1jb250YWluZXJcIik7XHJcblxyXG5jcmVhdGVTY3JvbGxTbmFwKHNjcm9sbENvbnRhaW5lciwge1xyXG5cdHNuYXBEZXN0aW5hdGlvblg6IFwiMCVcIixcclxuXHRzbmFwRGVzdGluYXRpb25ZOiBcIjEwMCVcIixcclxuXHR0aW1lb3V0OiAxMDAsXHJcblx0ZHVyYXRpb246IDMwMCxcclxuXHR0aHJlc2hvbGQ6IDAuMixcclxuXHRzbmFwU3RvcDogZmFsc2UsXHJcblx0ZWFzaW5nOiAodCkgPT4gKHQgPCAwLjUgPyAyICogdCAqIHQgOiAtMSArICg0IC0gMiAqIHQpICogdCksXHJcbn0pO1xyXG5cclxuLy8gRW1haWwgYWRkcmVzcyBjaGVjayBmb3Igc2lnbnVwIGluIHRoZSBDVEEgc2VjdGlvbiAvL1xyXG5cclxudmFyIGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RhcnRidG5cIik7XHJcbnZhciBlbWFpbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZW1haWwtYWRkcmVzc1wiKTtcclxuXHJcbmZ1bmN0aW9uIHZlcmlmeSgpIHtcclxuXHR2YXIgcGF0dGVybiA9IC9eXFxTK0BcXFMrXFwuXFxTKyQvO1xyXG5cdHZhciByZXN1bHQgPSBwYXR0ZXJuLnRlc3QoZW1haWwudmFsdWUpO1xyXG5cclxuXHRpZiAocmVzdWx0ID09IGZhbHNlKVxyXG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbGVydFwiKS5pbm5lckhUTUwgPVxyXG5cdFx0XHRcIlBsZWFzZSBlbnRlciBhIHZhbGlkIGVtYWlsIGFkZHJlc3NcIjtcclxuXHRlbHNlIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWxlcnRcIikuaW5uZXJIVE1MID0gXCJcIjtcclxufVxyXG5cclxuYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB2ZXJpZnkpO1xyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=