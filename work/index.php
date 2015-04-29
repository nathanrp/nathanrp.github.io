<?php

$path = '../';

$page = 2;

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
		<p>I started by asking lots of questions, and internally I was seeing the repeating data points to give me my first big idea. But I needed more validation. I discovered that the product team had a focus-group specialist. His name is Tom. He has been conducting student research for about the last 10 years in some form or another. I talked to Tom and he had found the same things.</p>
		<p>Also on the first floor of our office there is a student testing center. <abbr>WGU</abbr> students are in and out of there all day long taking proctored tests. I started interviewing students who were kind enough to visit with me after they finished taking their assessments. In these interviews my big idea was being confirmed. I was also able to interview other students. I interview about 20 students.</p>
		<figure class="imgs">
			<img src="<?php echo $path;?>img/wgu-3.png" alt="Student Interviews" />
			<figcaption class="caption">Student interviews, looking for the big idea.</figcaption>
		</figure>
		<p>My next step was to share my findings and articulate the experience I wanted to create. The vision was a big one, but step one, was to create an iOS and Android app, that brought the course material, course progress visualization, mentor access, and assessment result notification. This might sound confusing to you, but to the students enrolled at <abbr>WGU</abbr>, this is what they wanted.</p>
		<p>At so it began.</p>
		<figure class="imgs">
			<img src="<?php echo $path;?>img/wgu-4.jpg" alt="Affinity Diagram" />
			<figcaption class="caption">Affinity Diagram, <abbr>IA</abbr> exercises.</figcaption>
		</figure>
		<p>I got our Dev team involved early on. We had our iOS Dev team help build quick testable prototypes when we had a particular interaction or problem we wanted to learn from and test with our students.</p>
		<figure class="imgs">
			<img src="<?php echo $path;?>img/wgu-2.jpg" alt="Telling the story" />
			<figcaption class="caption">Sharing understanding with a member of the the Dev Team.</figcaption>
		</figure>
		<p>As we tested and learned more, the design changed.</p>
		<figure class="imgs">
			<img src="<?php echo $path;?>img/wgu-5.jpg" alt="Telling the story" />
			<figcaption class="caption">Design evolution.</figcaption>
		</figure>
		<figure class="imgs">
			<img src="<?php echo $path;?>img/wgu-6.png" alt="Icons" />
			<figcaption class="caption">Badges</figcaption>
		</figure>
		<figure class="imgs">
			<img src="<?php echo $path;?>img/wgu-7.png" alt="Icons" />
			<figcaption class="caption">Iconography</figcaption>
		</figure>
		<figure class="imgs">
			<img src="<?php echo $path;?>img/wgu-8.jpg" alt="Icons" />
			<figcaption class="caption">Behold, the <abbr>WGU</abbr> app.</figcaption>
		</figure>
		<p>This is only the beginning. <abbr>UX</abbr> is helping everyone in the organization understand how to continue to design the right product and experience.</p>
		<figure class="imgs">
			<img src="<?php echo $path;?>img/wgu-1.jpg" alt="Icons" />
			<figcaption class="caption">Design the right product by mapping the complete experience.</figcaption>
		</figure>
		<p><a href="https://itunes.apple.com/us/app/wgu-mobile/id730640860">Check it out.</a></p>
		<?php include($path.'inc/-footer.php');?>
	</div>

</body>
</html>