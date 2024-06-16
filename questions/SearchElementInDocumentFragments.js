function checkIfElementExistsInsideANode(node, elementToFind) {
  if (node.shadowRoot instanceof DocumentFragment) {
    node = node.shadowRoot;
  }

  var foundElements = [];

  if (node.tagName === "SLOT") {
    foundElements = node.assignedNodes().length > 0 ? node.assignedNodes() : node.childNodes;
  } else {
    foundElements = node.childNodes;
  }

  for (var i = 0; i < foundElements.length; i++) {
    console.log("foundElements[i] locator, tag", foundElements[i].tagName,foundElements[i]["locator"]);
    if (foundElements[i]["locator"] === elementToFind["locator"]) {
      console.log("%cFind the element", "color:green");
      return true;
    } else if (foundElements[i].shadowRoot instanceof DocumentFragment) {
      if (checkIfElementExistsInsideANode(foundElements[i].shadowRoot, elementToFind))
        return true;
    } else if (foundElements[i].tagName === "SLOT") {
      if (checkIfElementExistsInsideANode(foundElements[i], elementToFind)) return true;
    } else if (foundElements[i].hasChildNodes()) {
      if (checkIfElementExistsInsideANode(foundElements[i], elementToFind)) return true;
    }
  }
  return false;
}


function checkIfElementExistsOutsideANode(node, elementToFind) {
    if (node.shadowRoot instanceof DocumentFragment) {
      node = node.shadowRoot;
    }
  
    var foundElements = [];
  
    if (node.tagName === "SLOT") {
      foundElements = node.assignedNodes();
    } else {
      foundElements = node.childNodes;
    }
  
    for (var i = 0; i < foundElements.length; i++) {
      if (foundElements[i]["locator"] === elementToFind["locator"]) {
        console.log("%cFind the element", "color:green");
        return true;
      } else if (foundElements[i].shadowRoot instanceof DocumentFragment) {
        if (searchOrReplaceIntoNode(foundElements[i].shadowRoot, elementToFind))
          return true;
      } else if (foundElements[i].tagName === "SLOT") {
        if (searchOrReplaceIntoNode(foundElements[i], elementToFind)) return true;
      } else if (foundElements[i].hasChildNodes()) {
        if (searchOrReplaceIntoNode(foundElements[i], elementToFind)) return true;
      }
    }
    return false;
  }
  