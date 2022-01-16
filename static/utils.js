export const utils = {
  sdigs: 4,
  wdigs: 6,
  delay: 1500,
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
  sd: function (num, sigDigs) {
    return parseFloat(num).toPrecision(sigDigs);
  },
  sds: function (num) {
    return utils.sd(num, utils.sdigs);
  },
  sdw: function (num) {
    return utils.sd(num, utils.wdigs);
  },
  toRadians: function (deg) {
    return (deg * Math.PI) / 180;
  },
  toDegrees: function (rad) {
    return (rad / Math.PI) * 180;
  }
}

export const fluids = {
  getV: function (n, R, S) {
    return Number(utils.sdw((1 / n) * R ** (2 / 3) * (S / 100) ** 0.5));
  },
  getNF: function (v, A, T, g) {
    return Number(utils.sdw(v / ((g * A) / T) ** 0.5));
  },
  getE: function (y, v, g) {
    return Number(utils.sdw(y + v ** 2 / 2 / g));
  },
  getCriticalSlope: function (n, vc, Rc) {
    return Number(utils.sdw(((n * vc) / Rc ** (2 / 3)) ** 2 * 100));
  }
}