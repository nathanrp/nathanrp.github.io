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
		<?php include($path.'inc/-nav.php');?>
		<h3><abbr>WGU</abbr></h3>
		<p>Western Governors University (<abbr>WGU</abbr>) is a non-profit online university offering a convenient, flexible online education. WGU is the only accredited university in the U.S. offering competency-based, online degrees.</p>
		<p>My first project here was to help them with there mobile products. They had an existing &lsquo;<abbr>MVP</abbr>&rsquo; app, (Yes, those are air quotes around <abbr>MVP</abbr>). The <abbr>MVP</abbr> app was throw away, students didn&rsquo;t like it and it was basically a native app pointing them to webviews of what they wanted to get done.</p>
		<p>I started by asking lots of questions, and internally I was seeing the repeating data points to give me my first big idea. But I needed more validation. I discovered that the product team had a focus group specialist. His name was Tom. He has been conducting student research for about the last 10 years in some form or another. I talked to Tom and had found the same things.</p>
		<figure class="imgs">
			<img src="<?php echo $path;?>img/wgu-1.jpg" alt="User Story Mapping" />
			<figcaption class="caption">User storing mapping with the team.</figcaption>
		</figure>
		<p>But first, let me talk about the current student portal. The portal is the system the student logs into and has access to their courses and some administrative features around being a student at <abbr>WGU</abbr>.</p>
		<figure class="imgs">
			<img src="<?php echo $path;?>img/wgu-1.jpg" alt="User Story Mapping" />
			<figcaption class="caption">User storing mapping with the team.</figcaption>
		</figure>
		<?php include($path.'inc/-footer.php');?>
	</div>

</body>
</html>