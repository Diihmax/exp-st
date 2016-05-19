<html>
<head>
	
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="keywords" content="motoboy sp, empresa motoboy, Serviço Motoboy, motoboy em sp, motoboy Brooklin">
	<meta name="description" content="A ExpressPack empresa de Motoboy no Brooklin especializada na entrega de documentos, serviços de entraga rapida, entrega de malote -  Brooklin .">
	<meta name="author" content="Expresspack Brooklin">

	<title>Expresspack Brooklin - Pedidos Online</title>
	<meta name="url" content="http://berrine.expresspack.com.br">
	<meta name="language" content="Portugues">
	<meta name="Robots" content="index,follow, all" />
	<meta name="Googlebot" content="index,follow, all" />
	<meta name="InktomiSlurp" content="index, follow, all" />
	<meta name="Unknownrobot" content="index, follow, all" />
	<meta name="MSNBot" content="index, follow, all" />
	<meta http-equiv="content-Language" content="pt-br" />
	<link rel="stylesheet" type="text/css" href="../css/bootstrap.min.css" />
	<link rel="stylesheet" type="text/css" href="css/style.css" />
	<link rel="stylesheet" type="text/css" href="../css/style.css" />

</head>
<body>
	<!-- Navigation -->
    <?php include'../includes/menu.php';?>
	<div class="container-fluid full-height">
		<div class="col-sm-4">
			<div class="waypoints">
				<div class="waypoint">
					<div class="col-sm-1 side">A</div>
					<div class="col-sm-11 col-sm-offset-1">
						<input type="text" class="form-control" id="input-a" placeholder="Endereço - ex: Av. Paulista, 210" tabindex="1" autocomplete="off" />
					</div>
				</div>
				<div class="waypoint">
					<div class="col-sm-1 side">B</div>
					<div class="col-sm-11 col-sm-offset-1">
						<input type="text" class="form-control" id="input-b" placeholder="Endereço - ex: Av. Paulista, 470" tabindex="1" autocomplete="off" />
					</div>
				</div>
			</div>

			<div class="box-details type-selector">
				<select id="type" class="form-control">
					<option value="1.0">Motoboy</option>
					<option value="2.0">Fiorino</option>
				</select>
			</div>

			<div class="box-details">
				<div class="col-sm-4 duration">
					 Temp Percurso
					<span>-</span>
				</div>
				<div class="col-sm-4 value">
					Valor
					<span>-</span>
				</div>
				<div class="col-sm-4 distance">
					Distância
					<span>-</span>
				</div>
			</div>
		</div>
		<div class="col-sm-8 full-height map">
			<div id="map" class="full-height"></div>
		</div>
	</div>

	<script type="text/javascript" src="http://maps.google.com/maps/api/js?key=AIzaSyC1esiIUvQY-w6Q8khYrkeOnThq5qa4yUw&libraries=geometry,places"></script>
	<script type="text/javascript" src="js/jquery.min.js"></script>
	<script type="text/javascript" src="js/bootstrap.min.js"></script>
	<script type="text/javascript" src="js/app.js"></script>
</body>
</html>