var laModule = (function () {

	var init = function () {
		_setUpListeners();
	};

	var _setUpListeners = function () {
		$('#new-proj').on('click', _showModal); //open modal
		$('.modal-form-addproj').on('submit', _validateModal);
		};

	var _validateModal = function (e) {
		console.log('Modal Validation');
		e.preventDefault();
		var form = $(this);
		validation.validateForm(form);
	} 
	var _showModal = function (e) {
		e.preventDefault();
		console.log('Модал вперёд');
		$('#form-wrapper').bPopup({
            positionStyle: 'fixed', //'fixed' or 'absolute'
            onClose: function () {
            	$('.modal-form-addproj').trigger('reset');
            }
   		});
	};

	return{
		init: init
	};

})();

laModule.init()