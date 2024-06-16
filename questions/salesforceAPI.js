function salesforceApi() {
  const api = {
    enableLogging: true,
    nativeAlert: window.alert,
    developerPageUrl : 'https://developer.salesforce.com/',
    logMessage: function (...message) {
      if (this.enableLogging) {
        console.log(...message);
      }
    },
    getElementsByXpath: function (path, parent) {
      this.logMessage("***path is***", path);
      this.logMessage("***parent is***", parent);

      const result = document.evaluate(
        path,
        parent ?? document,
        null,
        XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
        null
      );

      const elements = [];

      for (var index = 0; index < result.snapshotLength; index++) {
        elements.push(result.snapshotItem(index));
      }

      this.logMessage("***getElementsByXpath output is***", elements);

      return elements;
    },

    getElementByXpath: function (path, parent) {
      this.logMessage("***path is***", path);
      this.logMessage("***parent is***", parent);

      var element = document.evaluate(
        path,
        parent ?? document,
        null,
        XPathResult.FIRST_ORDERED_NODE_TYPE,
        null
      ).singleNodeValue;

      this.logMessage("***getElementByXpath output is***", element);
      return element;
    },

    waitForElementToRender: async function (toBeFoundElement, maxTimeout) {
      const self = this;
      return new Promise((resolve, reject) => {
        const timeWas = new Date();
        const wait = setInterval(function () {
          if (toBeFoundElement()) {
            self.logMessage("resolved after", new Date() - timeWas, " ms");

            clearInterval(wait);
            resolve();
          } else if (new Date() - timeWas > maxTimeout) {
            // Timeout
            self.logMessage("rejected after", new Date() - timeWas, " ms");
            clearInterval(wait);
            reject();
          }
        }, 500);
      });
    },

    dismissAlert: function (autoDismissAlert) {
      const self = this;
      const isDeveloperPage = this.developerPageUrl === window.location.origin;

      const dismiss = autoDismissAlert && isDeveloperPage; // TODO: Will work for Developer site only

      window.alert = function () {
        self.logMessage("*** Custom override alert ***");
        if (!dismiss) return self.nativeAlert.apply(this, arguments);
      };
    },
  };

  if (!document.salesforceApi) {
    document.salesforceApi = api;
  }
}

return salesforceApi();
