var Dexie = require('dexie')

var db = new Dexie('test')

db.version(1).stores({
	friends: 'nombre, apellidos, edad'
});

db.open().catch(function (err) {
	alert('uh oh: ' + err);
});

modules.export = db;