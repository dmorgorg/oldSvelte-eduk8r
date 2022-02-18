export const rect = {
    sdigs: 4,
    wdigs: 6,
    sds: function (n) {
        return n.toPrecision(rect.sdigs);
    },
    sdw: function (n) {
        return n.toPrecision(rect.wdigs);
    },
    // https://www.freecodecamp.org/news/javascript-debounce-example/
    debounce: function (func, timeout = 1500) {
        let timer;
        return (...args) => {
            clearTimeout(timer);
            timer = setTimeout(() => {
                func.apply(this, args);
            }, timeout);
        };
    },
    delayK: function () {
        rect.debounce(katexify, 100);
    },
   
    getA: function (b, y) {
        return Number(rect.sdw(b * y));
    },
    getP: function (b, y) {
        return Number(rect.sdw(b + 2 * y));
    },
    getR: function (b, y) {
        return Number(rect.sdw(rect.getA(b, y)) / Number(rect.getP(b, y)));
    },
    getManningsV: function (n, R, s) {
        return Number(rect.sdw(1 / n * R ** (2 / 3) * s / 100 ** 0.5));
    },
    getQfromVnA: function (v, A) {
        return Number(rect.sdw(v * A));
    },
    getE: function (y, v, g) {
        return Number(rect.sdw(y + v ** 2 / g / 2));
    },
    getT: function (b) {
        return Number(rect.sds(b));
    },
    getNF: function (v, g, A, T) {
        return Number(rect.sdw(v / ((g * A) / T) ** 0.5));
    },
    getYc: function (Q, g, b) {
        return Number(rect.sdw((Q * Q) / g / b / b) ** (1 / 3));
    },
    getV: function (Q, b, y) {
        return Number(rect.sdw(Q / b / y));
    }
}