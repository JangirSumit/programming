function getEventHandlers(element) {
  const eventHandlers = {};

  // Get event handlers attached to the element
  const elementEventListeners = getEventListeners(element);

  for (const eventType in elementEventListeners) {
    // Get the listeners for each event type
    const listeners = elementEventListeners[eventType];

    // Store the event handlers in the result object
    eventHandlers[eventType] = listeners.map(listener => listener.listener);
  }

  // Recursively traverse the child elements
  const childNodes = element.childNodes;
  for (let i = 0; i < childNodes.length; i++) {
    const child = childNodes[i];

    // Check if the child node is an element node
    if (child.nodeType === Node.ELEMENT_NODE) {
      // Get event handlers for child element
      const childEventHandlers = getAllEventHandlers(child);

      // Merge child event handlers with the parent event handlers
      for (const eventType in childEventHandlers) {
        if (eventHandlers[eventType]) {
          eventHandlers[eventType] = eventHandlers[eventType].concat(childEventHandlers[eventType]);
        } else {
          eventHandlers[eventType] = childEventHandlers[eventType];
        }
      }
    }
  }

  return eventHandlers;
}

// Usage example:
const parentElement = document.getElementById("parentElement");
const eventHandlers = getAllEventHandlers(parentElement);
console.log(eventHandlers);
