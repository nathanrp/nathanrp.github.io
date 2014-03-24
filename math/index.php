<?php

$path = "";

$page = "1";

$title = "Math";

?>

<?php echo $doctype;?>

<html>

<head>

<?php include ($path."math/math/brains.php") ?>

<script type="text/javascript"> 
//<![CDATA[

	$(document).ready(function() {

		newProblem();
		$('.get-answer').hover(function(){
			var a = $('.type')
			if($(this).attr('id')=='3'){
				a.text('+');
			} else {
				a.html('&minus;');
			}
		}).mouseout(function(){
			var a = $('.type')
			a.text('');
		}).click(function(){
			var a = parseInt($('#1').text());
				b = parseInt($('#2').text());
				c = $(this)
			// alert(a+'+'+b + '=' + (a+b))
			$('#5').dialog({
				width: '50%', 
				closeText: '×', 
				modal: true,
				open: function(event,ui) {
					if(c.attr('id')=='3') {
						$(this).find('.equation').html(a+'+'+b + '=' + '<span class="answer">' + (a+b) + '</span>');
					} else {
						$(this).find('.equation').html(a+'&minus;'+b + '=' + '<span class="answer">' + (a-b) + '</span>');
					}
				}
			});
		});
		
		$('.new-problem').click(function(){
			$('.ui-dialog-content').dialog('close');
			newProblem();
		});

	});

function newProblem() {
	$('#1').text(Math.floor((Math.random()*99)));
	$('#2').text(Math.floor((Math.random()*99)));
}

//]]>
</script>

</head>

<body>

	<header>
		<h1>Math</h1>
	</header>

	<section class="problem">
		<div class="width">
			<div class="equation">
				<div class="numbers">
					<span id="1" class="number"></span>
					<span class="type"></span>
					<span id="2" class="number"></span>
				</div>
			</div>
			<div class="btns">
				<button id="3" class="get-answer">Add</button>
				<button id="4" class="get-answer">Subtract</button>
			</div>
		</div>
	</section>

	<div class="dialog answer" id="5" title="Answer">
		<p class="equation"></p>
		<div class="btns">
			<button class="btn new-problem">New problem</button>
		</div>
	</div>

</body>

</html>
