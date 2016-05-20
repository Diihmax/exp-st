<!doctype html>
<html>
    <head>
        <title>Slidebars Mobile Only Example</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
        <!-- Slidebars CSS -->
        <link rel="stylesheet" href="slidebars.css">
        <!-- Example Styles -->
        <link rel="stylesheet" href="example-styles.css">
    </head>
	
	<body>	
            <div id="sb-site">
                <ul>
                    <li class="sb-toggle-left">Toggle left Slidebar</li>
                </ul>
                <p>teste site</p>
            </div>
		
            <div class="sb-slidebar sb-left">
                <ul>
                    <li>Home</li>
                </ul>
            </div>
		
				
		<!-- jQuery -->
		<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
		
		<!-- Slidebars -->
		<script src="slidebars.js"></script>
		<script>
			(function($) {
				$(document).ready(function() {
					$.slidebars({
						disableOver: 480,
						hideControlClasses: true
					});
				});
			}) (jQuery);
		</script>
	</body>
</html>