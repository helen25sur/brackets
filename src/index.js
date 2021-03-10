module.exports = function check(str, bracketsConfig) {
	for (let i = 0; i < bracketsConfig.length; i++) {
		let brackStr = bracketsConfig[i].join('');
		if (str.includes(brackStr)) {
			str = str.replace(brackStr, '');
			i = -1;
		}
	}
	str = str.trim();
	if (str.length <= 0) {
		return true;
	} else {
		return false;
	}
}
