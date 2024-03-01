
$(function () {
	var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
	var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
		return new bootstrap.Tooltip(tooltipTriggerEl);
	});

	$('#correo').click(function() {
		alert("Receta Enviada Correctamente");
	});

	$('.subtitulo').dblclick(function(){
		$(this).addClass('text-danger');
	});

	$('.card-title').click(function(){
		$('.card-text').toggle()
	})
});

// agregar promt de correo y otra cosa----