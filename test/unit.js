var mod = require('../lib/index');

var test = require('tape');


test('fill in this', function (t) {
  var s = mod('http://localhost:5984/idx-edm-v5/_design/idx/_view/by_id');
  var stream = s();
  stream.on('end', function(){
    console.log('round 2')
    var stream2 = s();
    stream2.pipe(process.stdout)


  })

  stream.pipe(process.stdout)

  t.ok(true)
  t.end();
});
