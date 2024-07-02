	// 11ty debug filters by pdehaan
	debugOptions = Object.assign({
		space: 0
	});

const inspect = require("util").inspect;

function keys(obj) {
	return Object.keys(obj).sort();
}

module.exports = { inspect, keys};
