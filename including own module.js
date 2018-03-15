
exports.myDateTime= function (){ //own module.
    return Date();
};


var http=require('http');
var dt=require('./mf');
http.createServer(function(req,res)
{ 
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("hello madhan" + dt.myDateTime()); //dispalying date&time from own module.
    res.end();
}).listen(1111)
