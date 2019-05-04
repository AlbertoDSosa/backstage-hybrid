function Dom() {
	
}

Dom.prototype.listener = function(element, event, handler) {
	element.addEventListener(event, handler)
};

module.exports = Dom