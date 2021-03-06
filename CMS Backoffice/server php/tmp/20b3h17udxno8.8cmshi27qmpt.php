<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link href="https://fonts.googleapis.com/css?family=Roboto:400,500,700" rel="stylesheet">
  <link rel="stylesheet" type="text/css" href="login.css" />
  <title>login</title>
</head>
<body>
  <div id="container">

    <div id="logo">
      <img id="logo_lje" src="./LJE-Logo.jpg" alt="logo les jeunes entreprises" />
    </div>

    <div
    <form id="form_login" method="post" action="./admin/login">
      <p class="champs">
        <label for="username">Nom d'utilisateur</label><br />
        <input type="text" name="username" id="username" size="30" autofocus />
      </p>
      <p class="champs">
        <label for="password">Mot de passe</label><br />
        <input type="text" name="password" id="password" size="30" />
      </p>
      <input id="bouton_seconnecter" type="submit" value="Se connecter" style="width:170px; white; font-size:20px"/>
    </p>

    <p>
      <a href="./admin/disconnect"><input type="button" id="bouton_seconnecter" value="Se deconnecter" style="width:170px; white; font-size:20px"></a>
    </p>
    <br />
  </form>
</div>
</div>
</body>
</html>
