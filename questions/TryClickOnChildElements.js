function tryClickOnChildElements(rootElement) {
  doClick(rootElement);
  if (rootElement?.children?.length > 0) {
    for (let index = 0; index < rootElement.children.length; index++) {
      console.log(
        `Root element ${rootElement.children[index].tagName} got child node(s)`
      );
      tryClickOnChildElements(rootElement.children[index]);
    }
  }
}

function doClick(rootElement) {
  console.log(`Clicking on Element ${rootElement.tagName}`, rootElement);
  try {
    const element = rootElement;

    if (!element) {
      return;
    }

    const eventProperties = {
      bubbles: true,
      composed: true,
    };

    const mouseenter = new MouseEvent("mouseenter", eventProperties);
    const mousedown = new MouseEvent("mousedown", eventProperties);
    const focus = new MouseEvent("focus", eventProperties);
    const mouseup = new MouseEvent("mouseup", eventProperties);
    const click = new MouseEvent("click", eventProperties);

    element.dispatchEvent(mouseenter);
    element.dispatchEvent(mousedown);
    element.dispatchEvent(focus);
    element.dispatchEvent(mouseup);
    element.dispatchEvent(click);
  } catch (error) {
    console.error(`Got error while click on element`, error);
  }
}
