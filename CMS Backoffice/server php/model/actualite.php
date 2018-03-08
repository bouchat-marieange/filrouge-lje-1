<?php
function get_actu()
{
  $bdd=db();
  $res=$bdd->query("SELECT * FROM actualites");
  return $res->fetchAll(PDO::FETCH_ASSOC);
}
function get_actu_id($id)
{
  $bdd=db();
  $req=$bdd->prepare("SELECT * FROM `actualites` WHERE id = :id ");
  $req->execute(["id"=>$id]);



  return $req->fetchAll(PDO::FETCH_ASSOC)[0];
}
function create_actu($champs)
{
  $bdd=db();
  $req=$bdd->prepare("INSERT INTO actualites (nom_evenement,date_debut,date_fin,heure_debut,heure_fin,lieu,description,image,document) VALUES(:nom_evenement,:date_debut,:date_fin,:heure_debut,:heure_fin,:lieu,:description,:image,:document)");
  $res=$req->execute($champs);
  return $bdd->lastInsertId();
}
function update_actu($champs)
{
  $bdd=db();
  $req=$bdd->prepare("UPDATE actualites SET nom_evenement = :nom_evenement ,date_debut = :date_debut ,date_fin= :date_fin,heure_debut= :heure_debut,heure_fin= :heure_fin,lieu= :lieu,description= :description,image= :image,document= :document WHERE id= :id");
  $res=$req->execute($champs);

}
 ?>
