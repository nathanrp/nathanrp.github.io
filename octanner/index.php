<?php

$path = '../';

?>

<!DOCTYPE html>
<html dir="ltr" lang="en-US">
<head>

	<?php include($path.'inc/-brains.php');?>

</head>
<body>

	<div class="page imgs">
		<div class="container">
			<h1>Welcome, <abbr>O.C.</abbr> Tanner</h1>
			<p>Here is a brief sample of my work, enjoy.</p>
		</div>
		<div class="works">
			<div class="work">
				<h2><abbr>WGU</abbr></h2>
				<p><abbr>UX</abbr> and <abbr>UI</abbr> design for <abbr>WGU</abbr>&rsquo;s iOS and Android apps. <abbr>WGU</abbr> is an online, competency-based university. <abbr>WGU</abbr> has over 50,000 students and they need to be able to study and get stuff done whenever, wherever.</p>
				<picture>
					<img src="<?php echo $path;?>img/wgu.jpg" alt="Screenshot" />
				</picture>
			</div>
		</div>
		<footer class="container">
			<p>&copy; 2014 Nathan Philpot, Inc.</p>
			<p>This site was made with <a href="http://www.wolframalpha.com/share/clip?f=d41d8cd98f00b204e9800998ecf8427e2dsvrfghkk">prime numbers</a>.</p>
		</footer>
	</div>

<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-3470140-1', 'nathanphilpot.com');
  ga('send', 'pageview');

</script>

</body>
</html>