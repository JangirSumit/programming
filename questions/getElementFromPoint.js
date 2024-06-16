function getElementFromPoint() {
  var scale = 1;

  if (arguments[2]) {
    scale = arguments[2] / window.visualViewport.width;
  }

  const [x, y] = arguments;

  var element = document.elementFromPoint(x / scale, y / scale);

  function getCorrectElement(target) {
    const newTarget = target?.shadowRoot?.elementFromPoint(
      x / scale,
      y / scale
    );
    console.log(target, newTarget);
    if (target.shadowRoot && target !== newTarget) {
      target = newTarget;
      return getCorrectElement(target);
    }
    return target;
  }
  element = getCorrectElement(element);

  var rect;
  if (element != null) {
    rect = element.getBoundingClientRect();
  }

  var scaledRect = rect || {
    top: rect.top * scale,
    right: rect.right * scale,
    bottom: rect.bottom * scale,
    left: rect.left * scale,
    width: rect.width * scale,
    height: rect.height * scale,
    x: rect.x * scale,
    y: rect.y * scale,
  };

  return [element, scaledRect];
}
