<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://fonts.googleapis.com/css?family=Roboto:400,500,700" rel="stylesheet">
    <title>Liste Actualités</title>
  </head>
  <body>
    <?php foreach (($all_actu?:[]) as $actu): ?>
      <a href="id/<?= $actu['id'] ?>"><?= $actu['nom_evenement'] ?></a>
    <?php endforeach; ?>

  </body>
</html>
