"use strict";

let katexify = () => {
    renderMathInElement(document.body, {
        delimiters: [{
            left: "$$",
            right: "$$",
            display: true
        },{
            left: "!$",
            right: "!$",
            display: false
            }],
        macros: {
            "\RR": "\mathbb{R}",
            "\NN": "\mathbb{N}",
            "\[": "{",
            "\]": "}"
        }
    });
};