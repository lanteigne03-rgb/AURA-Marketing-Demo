/*!
 * Aura Sports Group Marketing — simple site-wide password gate.
 *
 * This is a client-side deterrent only, not real security: anyone who views
 * this file's source can find the salted hash below and brute-force or
 * dictionary-attack it, and anyone with dev tools can bypass the gate
 * entirely. It's meant to keep the site out of casual view (search
 * crawlers, stray links, people poking around), not to protect anything
 * sensitive. For real protection, put the domain behind Cloudflare Access
 * or a host with built-in password protection (e.g. Netlify).
 *
 * To change the password: open a browser console anywhere and run
 *   simpleHash("asgm-lock-2026" + "your-new-password")
 * (paste the simpleHash function below into the console first), then swap
 * the LOCK_HASH value.
 */
(function () {
  "use strict";

  var SALT = "asgm-lock-2026";
  var LOCK_HASH = "68664837"; // hash of SALT + the site password
  var STORAGE_KEY = "asgmSiteUnlock";
  var UNLOCK_MS = 30 * 24 * 60 * 60 * 1000; // 30 days

  // Hide the page immediately, before anything renders, to avoid a flash
  // of real content. The overlay below explicitly re-enables its own
  // visibility, overriding this.
  document.documentElement.style.visibility = "hidden";

  function simpleHash(str) {
    var h = 5381;
    for (var i = 0; i < str.length; i++) {
      h = ((h << 5) + h + str.charCodeAt(i)) | 0;
    }
    return (h >>> 0).toString(16);
  }

  function isUnlocked() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return false;
      var data = JSON.parse(raw);
      return data && data.hash === LOCK_HASH && data.exp > Date.now();
    } catch (e) {
      return false;
    }
  }

  function markUnlocked() {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ hash: LOCK_HASH, exp: Date.now() + UNLOCK_MS })
      );
    } catch (e) {
      /* localStorage unavailable (e.g. private mode) — unlock still works
         for this page view, just won't persist. */
    }
  }

  function reveal() {
    document.documentElement.style.visibility = "visible";
  }

  function buildOverlay() {
    var style = document.createElement("style");
    style.textContent =
      "#asgm-lock-overlay{visibility:visible;position:fixed;inset:0;z-index:2147483647;" +
      "background:#0A0A0A;color:#F0EDE6;display:flex;align-items:center;justify-content:center;" +
      "font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif;padding:24px;}" +
      "#asgm-lock-box{width:100%;max-width:360px;text-align:center;}" +
      "#asgm-lock-box h1{font-size:15px;letter-spacing:0.12em;text-transform:uppercase;" +
      "color:#c6a567;margin:0 0 8px;font-weight:600;}" +
      "#asgm-lock-box p{font-size:14px;color:#888680;margin:0 0 24px;line-height:1.5;}" +
      "#asgm-lock-form{display:flex;flex-direction:column;gap:12px;}" +
      "#asgm-lock-input{width:100%;box-sizing:border-box;background:#161616;" +
      "border:1px solid rgba(198,165,103,0.18);color:#F0EDE6;font-size:16px;" +
      "padding:12px 14px;border-radius:6px;outline:none;}" +
      "#asgm-lock-input:focus{border-color:#c6a567;}" +
      "#asgm-lock-submit{width:100%;background:#c6a567;color:#0A0A0A;border:none;" +
      "font-size:14px;font-weight:600;letter-spacing:0.04em;text-transform:uppercase;" +
      "padding:12px 14px;border-radius:6px;cursor:pointer;}" +
      "#asgm-lock-submit:hover{background:#d9be85;}" +
      "#asgm-lock-error{color:#e08585;font-size:13px;min-height:18px;margin-top:4px;}";
    document.head.appendChild(style);

    var overlay = document.createElement("div");
    overlay.id = "asgm-lock-overlay";
    overlay.innerHTML =
      '<div id="asgm-lock-box">' +
      "<h1>Aura Sports Group Marketing</h1>" +
      "<p>This site is password protected.</p>" +
      '<form id="asgm-lock-form" autocomplete="off">' +
      '<input id="asgm-lock-input" type="password" placeholder="Enter password" autofocus />' +
      '<button id="asgm-lock-submit" type="submit">Enter</button>' +
      '<div id="asgm-lock-error"></div>' +
      "</form>" +
      "</div>";
    document.body.appendChild(overlay);

    var form = document.getElementById("asgm-lock-form");
    var input = document.getElementById("asgm-lock-input");
    var error = document.getElementById("asgm-lock-error");

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var entered = simpleHash(SALT + input.value);
      if (entered === LOCK_HASH) {
        markUnlocked();
        overlay.parentNode.removeChild(overlay);
        reveal();
      } else {
        error.textContent = "Incorrect password.";
        input.value = "";
        input.focus();
      }
    });
  }

  function init() {
    if (isUnlocked()) {
      reveal();
      return;
    }
    buildOverlay();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
