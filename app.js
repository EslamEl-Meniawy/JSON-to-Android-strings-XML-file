var fs = require('fs');
var obj = JSON.parse(fs.readFileSync('input.json', 'utf8'));
fs.writeFileSync("output.xml", '<?xml version="1.0" encoding="utf-8"?>' + "\n");
fs.appendFileSync("output.xml", '<resources>' + "\n");
for (var i = 0; i < obj.length; i++) {
	fs.appendFileSync("output.xml", '\t<string name="' + obj[i].key.trim() + '">' + obj[i].value.replace(/\t/g, '\\t').replace(/\r/g, '').replace(/\n/g, '\\n')
		.replace(/'/g, "\\'").replace(/ & /g, " &amp; ") + '</string>' + "\n");
}
fs.appendFileSync("output.xml", '</resources>');