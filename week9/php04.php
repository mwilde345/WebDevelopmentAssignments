<!doctype html>

<html>

	<head>
	<title>Hey</title>
	</head>
	
	<body>
		<center>
		<h1> Got it! </h1>
		
		<?php
		$myfile = fopen("testfile1.txt", "w") or die("Unable to open file!");
		 foreach ($_POST as $key => $entry)
			{
			     print $key . ": " . $entry . "<br>";
			}
			
		 foreach ($_POST as $key => $entry)
			{
				//$txt = print_r($data, true);
			    $txt = $key . ": " . $entry . "<br>";
				file_put_contents('testfile1.txt', $txt,FILE_APPEND);
				
				//fclose($myfile);
			}

				
		?>

		</center>
	</body>
</html>
			