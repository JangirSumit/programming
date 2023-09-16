"use strict";

/**
 * Format a duration of milliseconds to the required format, e.g: "3:43:25".
 * Input in milliseconds. Specify options to customize.
 */
var Scale;
(function (Scale) {
  Scale[(Scale["MS"] = 1)] = "MS";
  Scale[(Scale["SECOND"] = 1000)] = "SECOND";
  Scale[(Scale["MINUTE"] = 60000)] = "MINUTE";
  Scale[(Scale["HOUR"] = 3600000)] = "HOUR";
  Scale[(Scale["DAY"] = 86400000)] = "DAY";
})(Scale || (Scale = {}));

const formatDuration = (ms, options) => {
  // Default parameters
  const {
    decimals = 0,
    decimalSeparator = ".",
    delimiter = ":",
    dayNotation = "d ",
    singleDayNotation,
    alwaysShow = Scale.MINUTE,
    showHighestLeadingZero = false,
    showDayNumber = true,
  } = options || {};
  let remainingMs = ms;
  let result = "";
  let numericScale = alwaysShow;

  // Days:
  if (showDayNumber) {
    const days = Math.floor(remainingMs / Scale.DAY);
    remainingMs = remainingMs - days * Scale.DAY;
    if (numericScale >= Scale.DAY || days > 0) {
      if (numericScale < Scale.DAY) numericScale = Scale.DAY;
      result +=
        days +
        (days === 1 && singleDayNotation ? singleDayNotation : dayNotation);
    }
  }

  // Hours:
  const hours = Math.floor(remainingMs / Scale.HOUR);
  remainingMs = remainingMs - hours * Scale.HOUR;
  if (numericScale >= Scale.HOUR || hours > 0) {
    if (numericScale < Scale.HOUR) numericScale = Scale.HOUR;
    result +=
      formatTimeScale(
        hours,
        showDayNumber && numericScale >= Scale.HOUR && showHighestLeadingZero
      ) + delimiter;
  }

  // Minutes:
  const mins = Math.floor(remainingMs / Scale.MINUTE);
  remainingMs = remainingMs - mins * Scale.MINUTE;
  if (numericScale >= Scale.MINUTE || mins > 0) {
    if (numericScale < Scale.MINUTE) numericScale = Scale.MINUTE;
    result +=
      formatTimeScale(
        mins,
        numericScale > Scale.MINUTE ||
          (numericScale === Scale.MINUTE && showHighestLeadingZero)
      ) + delimiter;
  }

  // Seconds:
  let secs = Math.floor(remainingMs / Scale.SECOND);
  remainingMs = remainingMs - secs * Scale.SECOND;
  if (numericScale >= Scale.SECOND || secs > 0) {
    if (numericScale < Scale.SECOND) numericScale = Scale.SECOND;
    // Round off seconds if no decimals:
    if (!decimals && remainingMs > 499) secs++;
    result += formatTimeScale(
      secs,
      numericScale > Scale.SECOND ||
        (numericScale === Scale.SECOND && showHighestLeadingZero)
    );
  }

  // Milliseconds:
  if ((numericScale >= Scale.MS && decimals) || numericScale === Scale.MS) {
    if (decimals) {
      // Round off ms to specified length (.toFixed() doesn't do it correctly):
      const rounded = Math.round(
        (remainingMs + Number.EPSILON) / Math.pow(10, 3 - decimals)
      ).toString();
      result +=
        numericScale > Scale.MS
          ? decimalSeparator + rounded.padStart(decimals, "0")
          : rounded;
    } else {
      result +=
        (numericScale > Scale.MS ? decimalSeparator : "") +
        remainingMs.toString().padStart(decimals, "0");
    }
  }
  return result === "" ? (0).toFixed(decimals) : result;
};
function formatTimeScale(value, leadingZero) {
  return `${
    leadingZero ? value.toString().padStart(2, "0") : value.toString()
  }`;
}

console.log(formatDuration(4329589432, { decimals: 0 }));
