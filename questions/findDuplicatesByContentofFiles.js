//https://leetcode.com/problems/find-duplicate-file-in-system/description/

/**
 * @param {string[]} paths
 * @return {string[][]}
 */
var findDuplicate = function (paths) {
  const contentMap = {};

  paths.forEach((element) => {
    const pathWithFileContent = element.split(" ");

    const path = pathWithFileContent[0];

    for (let i = 1; i < pathWithFileContent.length; i++) {
      let fileAndContent = pathWithFileContent[i].split("(");
      let file = fileAndContent[0];
      let content = fileAndContent[1].replace(")", "");

      if (contentMap[content] && contentMap[content].length) {
        contentMap[content].push(`${path}/${file}`);
      } else {
        contentMap[content] = [`${path}/${file}`];
      }
    }
  });

  //console.log(contentMap);

  const fileResult = [];

  Object.keys(contentMap).forEach((key) => {
    if (contentMap[key].length > 1) {
      fileResult.push(contentMap[key]);
    }
  });

  return fileResult;
};

const paths = [
  "root/a 1.txt(abcd) 2.txt(efgh)",
  "root/c 3.txt(abcd)",
  "root/c/d 4.txt(efgh)",
  "root 4.txt(efgh)",
];

const paths1 = [
  "root/a 1.txt(abcd) 2.txt(efsfgh)",
  "root/c 3.txt(abdfcd)",
  "root/c/d 4.txt(efggdfh)",
];

console.log(findDuplicate(paths));
console.log(findDuplicate(paths1));
