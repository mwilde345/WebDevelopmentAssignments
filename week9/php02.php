<!doctype html>

<html>

	<head>
	<title>Hey</title>
	</head>
	
	<body>
		<center>
		<h1> Got it! </h1>
		You sagte: 
		<?php
			echo $_REQUEST["Data"]; //accepts data whether you are posting or getting it.
		?>
		Weather is: 
		<?php
			if(isset($_REQUEST["cb1"])){ //if it's selected then we will echo the data that was sent.
				echo $_REQUEST["cb1"], "<br>";
			}
			
			if(isset($_REQUEST["cb2"])){ 
				echo $_REQUEST["cb2"], "<br>";
			}
		?>
		</center>
	</body>
</html>
			