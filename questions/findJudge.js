var findJudge = function (N, trust) {
  var map = {};

  for (let i = 1; i <= N; i++) {
    map[i] = trust.filter((a) => i === a[0]).map((a) => a[1]);
  }

  let judges = Object.keys(map).filter((a) => !map[a].length);
  let finalJudge = -1;
  //console.log("safsdfsda" + judges);

  for (let i = 0; i < judges.length; i++) {
    delete map[judges[i]];
    console.log(map);
    //console.log(Object.values(map));

    let temp = Object.values(map).filter((a) => {
      //console.log(a.indexOf(parseInt(judges[i])) > -1);
      return a.indexOf(parseInt(judges[i])) > -1;
    });

    //console.log(temp);

    if (temp.length === Object.values(map).length) {
      finalJudge = judges[i];
    }
  }

  console.log(finalJudge);
};

let N = 3;
let trust = [
  [1, 3],
  [2, 3],
];

findJudge(N, trust);
