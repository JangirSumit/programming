// IT SHOULD MATCHES WITH ELEMENTTYPE ENUM in C#
const ELEMENT_TYPES = {
  None: 0,
  Checkbox1: 1,

  Dropdown1: 101,
  Dropdown2: 102,

  RadioButton1: 1001,
  RadioButton2: 1002,
};

const ELEMENT_CATEGORIES = {
  None: 0,
  Checkbox: 1,
  Dropdown: 2,
  RadioButton: 3,
};

const APP_TYPES = {
  All: 0,
  FO: 1,
  CE: 2,
};

const CHECKBOXES = [
  {
    metaData: {
      category: ELEMENT_CATEGORIES.Checkbox,
      type: ELEMENT_TYPES.Checkbox1,
      appType: APP_TYPES.All,
    },
    check: checkCheckBox1,
  },
];

const DROPDOWNS = [
  {
    metaData: {
      category: ELEMENT_CATEGORIES.Dropdown,
      type: ELEMENT_TYPES.Dropdown1,
      appType: APP_TYPES.CE,
    },
    check: checkDropdown1,
  },
];

const RADIOBUTTONS = [
  {
    metaData: {
      category: ELEMENT_CATEGORIES.RadioButton,
      type: ELEMENT_TYPES.RadioButton1,
      appType: APP_TYPES.FO,
    },
    check: checkRadioButton1,
  },
];

const ELEMETS = [...CHECKBOXES, ...DROPDOWNS, ...RADIOBUTTONS];

/* Check Functions of Elements */

function checkCheckBox1(targetElement) {
  return targetElement;
}

function checkDropdown1(targetElement) {
  return targetElement;
}

function checkRadioButton1(targetElement) {
  return targetElement;
}

/* Get Element */

function getElements(targetElement, appType, elementCategory, elementType) {
  const elements = ELEMETS;

  if (appType) {
    elements = elements.filter(
      (element) =>
        element.metaData.appType === appType || element.metaData.appType === APP_TYPES.All
    );
  }

  if (elementCategory) {
    elements = elements.filter(
      (element) => element.metaData.category === elementCategory
    );
  }

  if (elementType) {
    elements = elements.filter((element) => element.metaData.type === elementType);
  }

  const gotElements = elements.filter((element) =>
    element.check(targetElement)
  );

  return gotElements.map(e => e.metaData);
}

console.log(getElements("xyz"));

///return getElement(...arguments);
