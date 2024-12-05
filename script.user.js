// ==UserScript==
// @name                Allow Copy
// @description         Allow copying.
// @version             0.9
// @author              Yos_sy
// @match               *://*/*
// @namespace           http://tampermonkey.net/
// @icon                data:image/png;base64,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
// @license             MIT
// @run-at              document-start
// @grant               none
// ==/UserScript==

(function () {
  "use strict";

  // user-select-noneのインラインスタイルを削除
  const removeUserSelectNone = () => {
    document.querySelectorAll('[style*="user-select: none"]').forEach((el) => {
      [
        "user-select",
        "-webkit-user-select",
        "-moz-user-select",
        "-ms-user-select",
      ].forEach((prop) => {
        el.style.removeProperty(prop);
      });
    });
  };

  // スタイルシートからuser-select-noneのルールを削除
  const removeUserSelectNoneRules = () => {
    Array.from(document.styleSheets).forEach((stylesheet) => {
      try {
        Array.from(stylesheet.cssRules).forEach((rule) => {
          if (rule.style) {
            [
              "user-select",
              "-webkit-user-select",
              "-moz-user-select",
              "-ms-user-select",
            ].forEach((prop) => {
              if (rule.style[prop] === "none") {
                rule.style.removeProperty(prop);
              }
            });
          }
        });
      } catch (e) {
        console.error("Could not access stylesheet", e);
      }
    });
  };

  const observer = new MutationObserver(() => {
    removeUserSelectNone();
    removeUserSelectNoneRules();
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ["style"],
  });
})();
