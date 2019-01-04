var live = new Audio('Blop.html');


	function aprovadascount(){
		$(document).ready(function() {
			var count = parseInt($('#ap').html());
			count++;
			$('#ap').html(count+"");
		});
	}
	function reprovadascount(){
		$(document).ready(function() {
			var count = parseInt($('#rp').html());
			count++;
			$('#rp').html(count+"");
		});
	}
	function totalcount(){
		$(document).ready(function() {
			var count = parseInt($('#total').html());
			count++;
			$('#total').html(count+"");
		});
	}
	function testadascount(){
		$(document).ready(function() {
			var count = parseInt($('#linhas').html());
			count++;
			$('#linhas').html(count+"");
		});
	}
function enviar() {
                var linha = $("#lista").val();
                var linhaenviar = linha.split("\n");
                linhaenviar.forEach(function (value, index) {
					totalcount();
                    setTimeout(
                            function () {
                                $.ajax({
                                    url: 'api2.php?lista=' + value,
                                    type: 'GET',
                                    success: function (resultado) {
										testadascount();
										if(resultado.match("APROVADA")){
											live.play();
											removelinha();
											aprovadas(resultado);
											aprovadascount();
										}else{
											removelinha();
											reprovadas(resultado);
											reprovadascount();
										}
                                    },
                                });
                            }, 50 * index);
                });
            }
            function aprovadas(str) {
                $("#aprovadas").append(str + "\n");
            }
            function reprovadas(str) {
                $("#reprovadas").append(str + "\n");
            }
            function removelinha() {
                var lines = $("#lista").val().split('\n');
                lines.splice(0, 1);
                $("#lista").val(lines.join("\n"));
            }