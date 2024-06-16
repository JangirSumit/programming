function solution(S, X, Y) {
  const points = [];
  const visitedTags = new Set();

  for (let i = 0; i < S.length; i++) {
    const tag = S[i];
    const x = X[i];
    const y = Y[i];
    const distance = Math.sqrt(x * x + y * y);
    let counted = true;

    if (!visitedTags.has(tag)) {
      points.push({ tag, distance, counted });
      visitedTags.add(tag);
    } else {
      // Check if the current point is closer to the origin than the stored point with the same tag
      const index = points.findIndex((p) => p.tag === tag);

      if (distance === points[index].distance) {
        points[index].counted = false;
        //break;
      } else if (distance < points[index].distance) {
        points[index] = { tag, distance, counted: true };
      }
      // Discard points if points is repeated
      points.forEach((point, index) => {
        if (point.distance >= distance) {
          points[index].counted = false;
        }
      });
    }
  }

  //Discard Points if not required
  const maxFromCountedPoints = Math.max(
    ...points.filter((p) => !p.counted).map((p) => p.distance)
  );
  //console.log(maxFromCountedPoints);

  points.forEach((point, index) => {
    if (point.distance > maxFromCountedPoints) {
      points[index].counted = false;
    }
  });

  //console.log(points);
  return points.filter((p) => p.counted).length;
}

// Test cases
console.log(solution("ABDCA", [2, -1, -4, -3, 3], [2, -2, 4, 1, -3])); // Output: 3
console.log(solution("ABB", [1, -2, -2], [1, -2, 2])); // Output: 1
console.log(solution("CCD", [1, -1, 2], [1, -1, -2])); // Output: 0
