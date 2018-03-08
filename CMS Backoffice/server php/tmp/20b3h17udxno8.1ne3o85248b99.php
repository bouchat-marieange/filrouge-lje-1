<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link href="https://fonts.googleapis.com/css?family=Roboto:400,500,700" rel="stylesheet">
  <title>Ajout Actualités</title>
</head>
<body>
  <div id="container">
    <h1>Ajouter un évènement à l'Actualité</h1>
    <div id="form_login">

      <form method="post" action="./admin/login">

        <p class="champs">
          <label for="nom_evenement">Nom de l'évènement (*)</label><br />
          <input type="text" name="nom_evenement" id="nom_evenement" size="80" />
        </p>

        <p class="champs">
          <label for="date_debut">Date de début</label><br />
          <input type="date" name="date_debut" id="date_debut" size="80" />
        </p>

        <p class="champs">
          <label for="date_fin">Date de fin </label><br />
          <input type="date" name="date_fin" id="date_fin" size="80" />
        </p>

        <p class="champs">
          <label for="heure_debut">Heure de début</label><br />
          <input type="time" name="heure_debut" id="heure_debut" size="80" />
        </p>

        <p class="champs">
          <label for="heure_fin">Heure de fin </label><br />
          <input type="time" name="heure_fin" id="heure_fin" size="80" />
        </p>

        <p class="champs">
          <label for="lieu">Lieu (nom + adresse)(*)</label><br />
          <input type="text" name="lieu" id="lieu" size="80" />
        </p>

        <p class="champs">
          <label for="description">Description</label><br />
          <textarea type="text" name="description" id="description"></textarea>
        </p>

        <p class="champs">
          <label for="image">Image</label><br />
          <input type="file" name="image" id="image" size="80" />
        </p>

        <p class="champs">
          <label for="document">Document</label><br />
          <input type="file" name="document" id="document" size="80" />
        </p>

        </p>
          <input id="bouton_seconnecter" type="submit" value="Modifier" />
        </p>

      </form>

      <p id="legende">(*) champs obligatoires</p>

    </div>
  </div>
</body>
</html>
