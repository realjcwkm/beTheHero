const crypto = require('crypto');

module.exports = function generateUniquieId(){
	return crypto.randomBytes(4).toString('HEX');
}