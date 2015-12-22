$(document).ready(function () {	
	$('input, textarea').placeholder();
    console.log('Файл main.js успешно загружен')
})

$('#laInput').change(function(e){
	var laVal = $(this).val().split('\\').slice(-1);
  	$('#laClone').val(laVal)
});
//
//	var addProject = (function (){
//
//		// Инициализация проекта
//		var init = function(){
//			_setUpListners();
//	  };
//	  var _setUpListners = function (){
//			$('.modal-form-addproj').on('submit', addProject); // добавление проекта
//			$('#laInput').on('change', _changefileUpload);
//		};
////		var _changefileUpload = function (){
//			var input = $(this), // инпут type="file"
//				name = laVal; // имя загруженного файла
//
//			$('#filename')
//				.val(name) // 
//				.trigger('hideTooltip')
//				.removeClass('has-error'); 
//		};
//
//		var startTool = (function (form){
//			if (!validate.validateForm(form)) return false;
//			else console.log('Все поля заполнены!')
//		})();
//
//		return {
//			init: init
//		};
//	})();
//	addProject.init();
