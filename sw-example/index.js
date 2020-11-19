function getCurrentTime() {
  var date = new Date();
  return `${date.getDate()}:${date.getMonth()}:${date.getFullYear()}`;
}

function getAppName() {
  return "Demo Service-Worker";
}

function installServiceWorker() {
  if (navigator.serviceWorker) {
    window.addEventListener("load", function () {
      navigator.serviceWorker.register("./sw.js").then(
        function (registration) {
          console.log("Successfully installed Service Worker.");
        },
        function (error) {
          console.log("Failed to install Service Worker.");
        }
      );
    });
  }
}

installServiceWorker();
