var MODULE = (function () {
	var module = {};
	var privateVar = 7;
	function privateFunc() {}
	module.moduleProperty = 1;
	module.moduleMethod = function () {};
	return module;
})();
