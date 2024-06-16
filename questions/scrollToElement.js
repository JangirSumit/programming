function scrollHorizontal(element, scrollElement, scrollBy = 100) {
  console.log("Trying 1st way to Scroll...");

  // First try
  element.scrollIntoView();

  let rects = element.getBoundingClientRect();
  let elementFromLocation = document.elementFromPoint(rects.x, rects.y);

  console.log(element, elementFromLocation);

  if (element == elementFromLocation) {
    return;
  }

  console.log("Trying 2nd way to Scroll...");

  // Seconds try
  let currentScrollPos,
    nextScrollPos = scrollElement.scrollLeft;

  while (element != elementFromLocation && currentScrollPos != nextScrollPos) {
    scrollElement.scrollLeft += scrollBy;
    currentScrollPos = nextScrollPos;
    nextScrollPos = scrollElement.scrollLeft;
    console.log("Scrolling...");
    rects = element.getBoundingClientRect();
    elementFromLocation = document.elementFromPoint(rects.x, rects.y);
  }

  if (element == elementFromLocation) {
    return;
  }

  console.log("Trying 3rd way to Scroll...");

  // Thirs try
  scrollElement = element
    .closest("div[role='grid']")
    .querySelector('[class*="ScrollbarLayout_face"]');

  currentScrollPos,
    (nextScrollPos = getHorizontalPosition(scrollElement.style.transform));

  while (
    scrollElement.style["transform"] &&
    element != elementFromLocation &&
    currentScrollPos != nextScrollPos
  ) {
    currentScrollPos = nextScrollPos;
    nextScrollPos =
      getHorizontalPosition(scrollElement.style.transform) + scrollBy;
    scrollElement.style.transform = `translate3d(${nextScrollPos}px, 50%, 3em);`;
  }
}

function getHorizontalPosition(str) {
  const regex = /translate3d\(([^\s]+),[^\s]+\)/;
  const match = str.match(regex);
  let xValue = match ? match[1] : null;

  if (xValue) {
    // remove "px" suffix and convert to integer
    const xInt = parseInt(xValue.slice(0, -2), 10);
    return xInt;
  }
}
