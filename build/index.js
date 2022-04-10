"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const zrender_1 = __importDefault(require("zrender"));
window.onload = function () {
    var container = document.getElementsByClassName('example-container')[0];
    var zr = zrender_1.default.init(container);
    var w = zr.getWidth();
    var h = zr.getHeight();
    var r = 30;
    var circle = new zrender_1.default.Circle({
        shape: {
            cx: r,
            cy: h / 2,
            r: r
        },
        style: {
            fill: 'transparent',
            stroke: '#FF6EBE'
        },
        silent: true
    });
    circle.animate('shape', true)
        .when(5000, {
        cx: w - r
    })
        .when(10000, {
        cx: r
    })
        .start();
    zr.add(circle);
};
//# sourceMappingURL=index.js.map