function App() {
  let x = [
    [0, 0, 0],
    [0, 0, 1],
    [0, 1, 0],
    [0, 1, 1],
    [1, 0, 0],
    [1, 0, 1],
    [1, 1, 0],
    [1, 1, 1],
  ];
  let o = [
    [0, 0, 1, 1, 0, 1, 0, 1],
    [0, 1, 0, 1, 0, 0, 1, 1],
  ];
  let w = [
    [3, 2, 1],
    [1, 2, 3],
  ];
  let teta = [5, 4];
  let eta = 0.1;
  let e = 1;
  let ep = 0;
  while (e > 0 && ep < 25) {
    e = 0;
    for (let i = 0; i < x.length; i++) {
      let y1 = 0;
      for (let j = 0; j < x[0].length; j++) {
        y1 += x[i][j] * w[0][j];
      }
      if (y1 >= teta[0]) y1 = 1;
      else y1 = 0;
      if (y1 !== o[0][i]) {
        teta[0] = teta[0] - eta * (o[0][i] - y1);
        for (let k = 0; k < 3; k++) {
          w[0][k] += eta * (o[0][i] - y1) * x[i][k];
        }
        e += Math.abs(o[0][i] - y1);
      }

      let y2 = 0;
      for (let j = 0; j < x[0].length; j++) {
        y2 += x[i][j] * w[1][j];
      }
      if (y2 >= teta[1]) y2 = 1;
      else y2 = 0;
      if (y2 !== o[1][i]) {
        teta[1] = teta[1] - eta * (o[1][i] - y2);
        for (let k = 0; k < 3; k++) {
          w[1][k] += eta * (o[1][i] - y2) * x[i][k];
        }
        e += Math.abs(o[1][i] - y2);
      }
    }
    console.log("e :", e);
    ep++;
  }
  return <></>;
}

export default App;
