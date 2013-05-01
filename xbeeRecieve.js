var rsp = require('serialport'),
    xbee = require('xbee'),
    serial = rsp.SerialPort;

var xbeeSerial = new serial("/dev/ttyUSB1", {
    parser: xbee.packetParser()
});

xbeeSerial.on("data", function(data){
    console.log("data: " + JSON.stringify(data) );
    console.log("From: " + data.remote16.hex + " Recieved: ", data.values + " " + Date.now() + "\n");
});

