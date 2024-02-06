function acceptCookies() {
  document.cookie =
    "cookieConsent=accepted; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
  document.getElementById("cookieConsentBanner").style.display = "none";
}

function refuseCookies() {
  document.cookie =
    "cookieConsent=refused; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
  document.getElementById("cookieConsentBanner").style.display = "none";
}

window.onload = function () {
  if (document.cookie.indexOf("cookieConsent=accepted") !== -1) {
    document.getElementById("cookieConsentBanner").style.display = "none";
  }
};
