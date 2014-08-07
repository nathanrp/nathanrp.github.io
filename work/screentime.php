<?php

$path = '../';

?>

<!DOCTYPE html>
<html dir="ltr" lang="en-US">
<head>

	<?php include($path.'inc/-brains.php');?>

</head>
<body>

	<div class="page">
		<h1>Screen Time</h1>
		<p>An app for managing your children&rsquo;s screen time.</p>
		<div class="samples">
			<img src="<?php echo $path;?>img/screentime.png" alt="screentime" class="sample" >
			<img src="<?php echo $path;?>img/screentime2.png" alt="Screenshot" class="sample" />
			<img src="<?php echo $path;?>img/screentime3.png" alt="screentime3" class="sample" >
			<img src="<?php echo $path;?>img/screentime4.png" alt="screentime4" class="sample" >
		</div>
		<footer>
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