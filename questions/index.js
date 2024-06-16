//Flatten the obj
/*
var inputObj = {
  name: "jane",
  last_name: "doe",
  profession: "engineer",
  characteristics: {
    intelligent: true,
    punctual: false,
    experience: {
      "2012": "college passout",
      "2014": "mba passout",
      "2016": "employed",
    },
  },
};

function flatten(obj) {
  var newObj = {};
  function flatObject(obj, parentName) {
    for (let o in obj) {
      if (typeof obj[o] === "object") {
        let prop = parentName ? parentName + "." + o : o;
        flatObject(obj[o], prop);
      } else {
        let prop = parentName ? parentName + "." + o : o;
        newObj[prop] = obj[o];
      }
    }
  }
  flatObject(obj);
  return newObj;
}

console.log(flatten(inputObj));
*/

// function sum(a, b) {
//   console.log("Sum is: ", a + b);
// }

// Object.prototype.callAfter = function (delay, a, b) {
//   setTimeout(() => {
//     this(a, b);
//   }, delay);
// };
// sum.callAfter(5000, 8, 9);

// function difference(a, b) {
//   console.log("Difference is: ", a - b);
// }
// difference.callAfter(4000, 8, 6);

// Question 5
// Write an implementation of a function called `generateSelector` to generate a CSS selector path of a DOM element.

// Base structure:

// function generateSelector(DOMNode) {
//  //should return the CSS selector
// }

// Output:
// For the given sample HTML, the possible selector for each DOM element is mentioned against it in the comments

// <body>
// 	<div id="z"><!-- Possible CSS Selector Path : #z -->
// 		<span class="a">Empty span</span><!-- Possible CSS Selector Path : span:nth-of-type(1), NOTE: .a would give two elements if we choose that. -->
// 		<ul class="a b c"></ul><!-- Possible CSS Selector Path : .a.b.c -->
// 		<ul><!-- Possible CSS Selector Path : ul:nth-of-type(2) -->
// 			<li>1</li><!-- Possible CSS Selector Path : ul:nth-of-type(2) > li:nth-of-type(1) -->
// 			<li>2</li><!-- Possible CSS Selector Path : ul:nth-of-type(2) > li:nth-of-type(2) -->
// 			<li>3</li><!-- Possible CSS Selector Path : ul:nth-of-type(2) > li:nth-of-type(3) -->
// 		</ul>
// 	</div>
// </body>

function generateSelector(DOMNode) {
  //should return the CSS selector
  let selector = getNodeSelector(DOMNode);

  //check for parent
  if (!selector) {
    if (selector.parentNode) {
      let parentSelector = getNodeSelector(DOMNode);
      if (parentSelector) {
        selector = `${parentSelector} > ${DOMNode.nodeName}`;
      }
    } else {
      if (
        DOMNode.previousSibling &&
        DOMNode.previousSibling.nodeName === DOMNode.nodeName
      ) {
        selector = `${DOMNode.nodeName}:nth-of-type(2)`;
      }
      selector = `${DOMNode.nodeName}:nth-of-type(1)`;
    }
  }
  return selector;
}

function getNodeSelector(DOMNode) {
  let selector = "";
  if (DOMNode.id) {
    selector = `#${DOMNode.id}`;
  } else if (DOMNode.classList.value) {
    selector = `${DOMNode.nodeName}.${DOMNode.classList.value
      .split(",")
      .join(".")}:nth-child(1)`;
  }
  return selector;
}
