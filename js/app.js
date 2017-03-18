$(document).ready(function (){	

	$('#TxtParrafos').change(function(event) {
		onCargarText();
	});

	$('#selectHtml').change(function(event) {
		onCargarText();
	});

	$("#textArea").dblclick(function() { 
		$(this).select(); 
	});

	function onCargarText(){

		let parra = $('#TxtParrafos').val();
		let formato = $('#selectHtml').val();
		let urlReq = 'http://hipsterjesus.com/api?paras='+parra+'&html='+formato;

		axios.get(urlReq)
		  .then(function (response) {
		    $("#textArea").val(response.data.text); 
		    $("#textArea").select();
		})
		  .catch(function (error) {
		    console.log(error);
		});	
	}

});