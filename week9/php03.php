<!doctype html>

<html>

	<head>
	<title>Hey</title>
	</head>
	
	<body>
		<center>
		<h1> Got it! </h1>
		
		<?php
		   $listvals=$_POST['mylist'];
		   $n=count($listvals);
		   echo "User chose $n items from the list.<br>\n";
		   for($i=0;$i<$n;$i++)
		      echo "Item $i=".$listvals[$i]."<br>\n";
		?>

		</center>
	</body>
</html>
			