<?php
function db()
{
  $bdd= new PDO('mysql:host=localhost;dbname=lje_filrouge', 'root', 'root',[PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"]);
  $bdd->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);
  return $bdd;
}

 ?>
