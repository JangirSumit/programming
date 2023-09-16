async function sleep(ms) {
  return await new Promise((resolve) => setTimeout(resolve, ms));
}

async function typeText(text) {
  // Find the text input element and set its value
  const inputElement = temp1;

  

  // Loop through each character in the input value and dispatch a KeyboardEvent
  for (let i = 0; i < text.length; i++) {
    inputElement.value += text[i];
    console.log(inputElement.value);

    const keyEvent = new InputEvent("keyup", {
        bubbles: true,  // Whether the event should bubble up through the DOM or not
        cancelable: true,  // Whether the event is cancelable or not
        data: inputElement.value
    });

    inputElement.dispatchEvent(keyEvent);
    await sleep(500);

  }

  inputElement.click();

const parent = inputElement.closest("div.dyn-container[role='group']");
const lookup = parent.querySelector("div.dyn-lookup-button");

lookup.click();
}


await typeText("Martin L");

