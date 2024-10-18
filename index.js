"use strict";
// ==UserScript==
// @name         Hello World User Script
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  A simple hello world script
// @author       You
// @match        https://github.com/*
// @grant        none
// @updateURL    https://raw.githubusercontent.com/sspatari/hello-world-userscript/refs/heads/gh-pages/index.js
// @downloadURL  https://raw.githubusercontent.com/sspatari/hello-world-userscript/refs/heads/gh-pages/index.js
// ==/UserScript==
(function () {
    console.log("Hello World from a User Script!");
})();
