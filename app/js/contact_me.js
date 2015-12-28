var  contactMe = (function() {

//__Module initialization
	function init () {
		_setUpListeners();
	};

//__Event Listening Start
	function _setUpListeners () {
		$('#contact-me').on('submit', _submitForm);
	};
//__Submit Action
	function _submitForm (e) {
		e.preventDefault();

		var form = $(this),
			url = 'contactme.php',
			defObj = _ajaxForm(form, url);

			//some actions with server defObj
	};

	function _ajaxForm (form, url) {
		if (!validation.validateForm(form)) return false;

	};
//__Public Methods
	return {
		init : init
	};
})();

if($('#contact-me')) {
	contactMe.init();
}