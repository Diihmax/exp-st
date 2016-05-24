<html>
    <head>
       <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Expresspack - Pedidos online</title>
        <meta name="description" content="">
        <meta name="HandheldFriendly" content="True">
        <meta name="MobileOptimized" content="320">
        <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0">
        <meta http-equiv="cleartype" content="on">
        <!-- SEO: If mobile URL is different from desktop URL, add a canonical link to the desktop page -->
        <link rel="canonical" href="http://www.expresspack.com.br/" >
        <base href="/">
        <link href='https://fonts.googleapis.com/css?family=Maven+Pro:400,700' rel='stylesheet' type='text/css'>
        <!-- Add to homescreen for Chrome on Android -->
        <meta name="mobile-web-app-capable" content="yes">
        <!-- For iOS web apps. -->
        <meta name="apple-mobile-web-app-capable" content="yes">
        <meta name="apple-mobile-web-app-status-bar-style" content="default">
        <meta name="apple-mobile-web-app-title" content="Deliciosas Online - Mobile">
        <link href="expresspack/app-cliente/css/theme.css" rel="stylesheet" type="text/css" />
        <link href="expresspack/berrine/css/bootstrap.css" rel="stylesheet" type="text/css" />
        <script src="expresspack/app-cliente/dist/slideout.js"></script>
        
    </head>
<body>
    <nav id="menu">
        <img src="expresspack/berrine/img/logo.jpg">
      <ul>
          <li>Fazer Pedido</li>
          <li>Perfil</li>
          <li>Historico</li>
          <li>Como Funciona</li>
          <li>Contato</li>
          <li>Sair</li>        
      </ul>
    </nav>

    <main id="panel">
      <header>
        <a class="toggle-button">☰</a>
        <h2>Solicitar Motoboy</h2>
      </header>
        <div class="orgigem">
            <label>Endereco de Origem</label>
            <input type="text" placeholder="Ex: Av. Paulista"><label>Numero</label><input type="number" placeholder="Numero">
            <label>Complemento</label>
            <input type="text" placeholder="Complemento">
        </div>
      <script src='https://maps.googleapis.com/maps/api/js?v=3.exp'></script><div style='overflow:hidden;height:540px;width:100%;'><div id='gmap_canvas' style='height:540px;width:100%;'></div><div><small><a href="http://embedgooglemaps.com">									embed google map							</a></small></div><div><small><a href="http://www.proxysitereviews.com /lime-proxies/">lime proxies</a></small></div><style>#gmap_canvas img{max-width:none!important;background:none!important}</style></div><script type='text/javascript'>function init_map(){var myOptions = {zoom:14,center:new google.maps.LatLng(-23.5630684,-46.65443270000003),mapTypeId: google.maps.MapTypeId.ROADMAP};map = new google.maps.Map(document.getElementById('gmap_canvas'), myOptions);marker = new google.maps.Marker({map: map,position: new google.maps.LatLng(-23.5630684,-46.65443270000003)});infowindow = new google.maps.InfoWindow({content:'<strong>Voce esta aqui</strong><br>av paulista, sao paulo<br>'});google.maps.event.addListener(marker, 'click', function(){infowindow.open(map,marker);});infowindow.open(map,marker);}google.maps.event.addDomListener(window, 'load', init_map);</script>
    </main>

    <script src="expresspack/app-cliente/dist/slideout.min.js"></script>
    <script>
      var slideout = new Slideout({
        'panel': document.getElementById('panel'),
        'menu': document.getElementById('menu'),
        'padding': 256,
        'tolerance': 70
      });

      // Toggle button
      document.querySelector('.toggle-button').addEventListener('click', function() {
        slideout.toggle();
      });
    </script>
    
    
    
</body>
</html>