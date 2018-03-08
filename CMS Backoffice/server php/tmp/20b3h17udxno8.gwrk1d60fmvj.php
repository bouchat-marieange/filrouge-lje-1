<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <?php foreach (($all_actu?:[]) as $actu): ?>
      <a href="actualite/id/<?= $actu['id'] ?>"><?= $actu['nom_evenement'] ?></a>
    <?php endforeach; ?>

  </body>
</html>
