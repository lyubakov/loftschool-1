var validate = (function(){
	
	var init = function(){
		console.log('Начинаем валидацию');
		_setUpListeners();
		},
		validateForm = function(form){
			console.log('Проверка формы началась');

			var elements = $('.modal-form-addproj').find('input, textarea').not('#laInput, #laClone'),
				valid = true;

			$.each(elements, function(index, val) {
				var element = $(val),
				    val = element.val(),
				    pos = element.attr('qtip-position');

				    if (val.length === 0) {
				    	element.addClass('has-error');
				    	_createQtip(element, pos);
				    	valid = false;
				    }

			});

			return valid;
		},
		_setUpListeners = function () {
			$('.modal-form-addproj').on('keydown', '.has-error', _removeError);
			$('.modal-form-addproj').on('click', _clearForm);
			},
			_removeError = function() {
				console.log('удаляю обводку');

				$(this).removeClass('has-error');
			},
			_clearForm = function(form) {
				console.log('Очищаем форму');

				var form = $(this);
				form.find('input, textarea').trigger('hideTooltip');
				form.find('.has-error').removeClass('has-error');
			},	
			_createQtip	= function (element, position) {
				console.log('Создаю тултип');
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
						classes: 'qtip-mystyle qtip-rounded',
						tip: {
							height: 10,
							width: 16
						}
					}
				}).trigger('show')
			};
	return {
		init: init,
		validateForm: validateForm
	};		

})();

validate.init();