<?php
function get_actu()
{
  $bdd=db();
  $res=$bdd->query("SELECT * FROM actualites");
  return $res->fetchAll(PDO::FETCH_ASSOC);
}
function create_actu()
{
  $bdd=db();
  $req->prepare("INSERT INTO actualites (nom_evenement,date_debut,date_fin,heure_debut,heure_fin,lieu,description,image,document) VALUES(:nom_evenement,:date_debut,:date_fin,:heure_debut,:heure_fin,:lieu,:description,:image,:document)");
  $res=$req->exec(["nom_evenement"]);
}
function update_actu($champs)
{
  
}
 ?>
