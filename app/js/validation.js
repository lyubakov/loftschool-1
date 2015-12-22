var validation = (function () {

//__Module initialization
	function init () {
		_setUpListeners();
	};

//__Event Listening Start
	function _setUpListeners () {
		$('form').on('keydown', '.has-error', _removeError);
		$('form').on('reset', _clearForm);
		$('#laInput').on('click', _clearFileinput);
	};
//__Remove Red Border (error border)
	function _removeError(){
		$(this).removeClass('has-error');
	};
	function _clearFileinput(){
		console.log('now');
		$('#laClone').removeClass('has-error');
		$('#laClone').trigger('hideTooltip');
	};
	function _clearForm(form){
		var form = $(this);
		form.find('input, textarea').trigger('hideTooltip');
		form.find('.has-error').removeClass('has-error');
	}
//__qTip creator
	function _createQtip (element, position) {
	//__Tooltip position
		if (position === 'right') {
			position = {
			my: 'left center',
			at: 'right center'
			} 
		}else{
			position = {
				my: 'right center',
			    at: 'left center',
			    adjust: {
			     	method: 'shift none'
	        	}
			}
		}
	//__Tooltip initialization
		element.qtip({
			content: {
				text : function() {
				return $(this).attr('qtip-content');
				}
			},
			show: {
				event: 'show'
			},
			hide: {
				event: 'keydown hideTooltip'
			},
			position : position,
			style: {
				classes: 'qtip-custom-style qtip-rounded',
				tip: {
					height: 7,
					width: 7
				}
			}
		}).trigger('show')
	
	};
//__Form Validation
	function validateForm (form) {
		console.log('Валидация идет, это прекрасно')
	//__Collect all the needed inputs and textarea
		var elements = form.find('input, textarea').not('#laInput'),
			valid = true;
	//__Select each element of form
		$.each(elements, function(index, val) {
			var element = $(val),
				val = element.val(),
				pos = element.attr('qtip-position');
			if (val.length === 0){
				element.addClass('has-error');
				_createQtip(element, pos);
				valid = false;
			};
		});

		return valid;
	};

//__Public Methods
	return {
		init : init,
		validateForm : validateForm 
	};
})();

validation.init();