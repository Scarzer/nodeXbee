var rsp = require('serialport')
    , xbee = require('xbee')
    , serial = rsp.SerialPort;

var xbeeSerial = new serial("/dev/ttyUSB0", {
    parser: xbee.packetParser()
});

xbeeSerial.on("data", function(data){
    console.log("Data recieved from: " + data.remote16.hex)
});

setInterval(function(){
    console.log("Thingy");
    },1000);
