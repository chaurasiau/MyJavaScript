
self.addEventListner('message', function(e){
    var message = e.data + 'to myself!';
    self.postMessage(message);
    self.close();
})