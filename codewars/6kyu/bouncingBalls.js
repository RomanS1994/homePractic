function bouncingBall(h, bounce, window) {
  if (h > 0 && (bounce > 0 || bounce < 1) && window < h) {
    let count = 0;
    while (h > window) {
      h *= bounce;
      count += 2;
    }
    return count - 1;
  } else {
    return -1;
  }
}
// console.log(bouncingBall(30, 0.66, 1.5));
