function throttle(fn, delay) {
  let timer = null;

  return (...args) => {
    if (!timer) {
      const res = fn.apply(this, args);
      timer = setTimeout(() => {
        clearTimeout(timer);
        timer = null;
      }, delay);
      return res;
    }
  };
}

module.exports = throttle;

// const throttled = throttle(function (name, age) {
//   console.log(name, age);
// }, 1000);

// setInterval(() => {
//   throttled("ice", "24");
// }, 0);
