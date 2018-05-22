$(document).ready(function(){
	//console.log("eae viado!!");

	//$(ekemento).funçao(callback(){
	//});

	$("#txtNome").keyup(function(){
		var nome = $(this).val();

		if(nome.length>=2 && $("alerta").css("display") == "none"){
			$("#alert").show();
		}
		$("#alert").html(nome);
	});
});