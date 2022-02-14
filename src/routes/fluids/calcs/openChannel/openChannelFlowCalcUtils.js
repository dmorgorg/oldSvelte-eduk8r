export const rect = {
    sdigs: 4,
    wdigs: 6,
    sds: function (n) {
        return n.toPrecision(rect.sdigs);
    },
    sdw: function (n) {
        return n.toPrecision(rect.wdigs);
    },
    getA: function (b, y) {
        return Number(b * y);
    },
    getP: function (b, y) {
        return Number(b + 2 * y);
    },
    getR: function (b, y) {
        return Number(rect.sdw(rect.getA(b, y)) / Number(rect.getP(b, y)));
    },
    getManningsV: function (n, R, s) {
        return Number(rect.sdw(1 / n * R ** (2 / 3) * s / 100 ** 0.5));
    },
    getQfromVnA: function (v, A) {
        return Number(rect.sdw(v * A));
    }
}