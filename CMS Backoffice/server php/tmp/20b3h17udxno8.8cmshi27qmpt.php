<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>login</title>
</head>
<body>
  <div id="container">
    <div id="logo">
      <img src="./LJE-Logo.jpg" alt="logo les jeunes entreprises">
    </div>
    <div id="form_login">
      <form method="post" action="./admin/login">
        <p class="champs">
          <label for="username">Nom d'utilisateur</label><br />
          <input type="text" name="username" id="username" size="30" />
        </p>
        <p class="champs">
          <label for="password">Mot de passe</label><br />
          <input type="text" name="password" id="password" size="30" />
        </p>
          <input id="bouton_seconnecter" type="submit" value="Se connecter" />
        </p>
        <br />

      </form>
    </div>
  </div>
</body>
</html>
