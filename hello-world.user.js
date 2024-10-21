"use strict";
// ==UserScript==
// @name         Hello World User Script
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  A simple hello world script
// @author       You
// @match        https://github.com/*
// @grant        none
// @updateURL    https://github.com/sspatari/hello-world-userscript/blob/gh-pages/hello-world.user.js
// @downloadURL  https://github.com/sspatari/hello-world-userscript/blob/gh-pages/hello-world.user.js
// ==/UserScript==
(function () {
    console.log("Hello World from a User Script!");
})();
