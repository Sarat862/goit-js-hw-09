!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),d=document.querySelector("body"),n=null;t.addEventListener("click",(function(){n=setInterval((function(){d.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3),t.setAttribute("disabled","disabled"),e.removeAttribute("disabled")})),e.addEventListener("click",(function(){clearInterval(n),e.setAttribute("disabled","disabled"),t.removeAttribute("disabled")}))}();
//# sourceMappingURL=01-color-switcher.e34023b5.js.map
