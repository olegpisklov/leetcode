postMessage("Yo I'm worker");

onmessage = function(event) {
  postMessage('The data from main thread: ' + event.data);
};