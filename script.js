var test = document.getElementById('test');

test.value += "lol";

function onDeviceFound(devices) {
  this.devices=devices;
  if (devices) {
    if (devices.length > 0) {
      console.log("Device(s) found: "+devices.length);
    } else {
      console.log("Device could not be found");
    }
  } else {
    console.log("Permission denied.");
  }
}

chrome.usb.getDevices({"vendorId": 4176}, onDeviceFound);
