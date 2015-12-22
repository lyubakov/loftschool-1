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
		console.log('Отправка формы');
		e.preventDefault();

		var form = $(this),
			url = 'contactme.php',
			defObj = _ajaxForm(form, url);

			//some actions with server defObj
	};

	function _ajaxForm (form, url) {
		console.log('Ajax запрос')
		if (!validation.validateForm(form)) return false;

	};
//__Public Methods
	return {
		init : init
	};
})();

contactMe.init();