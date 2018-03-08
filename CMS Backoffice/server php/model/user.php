<?php

function connect($pseudo,$password)
{
    //$hash=password_hash($password,PASSWORD_DEFAULT);
    $bdd=init_DB();
    $stmt = $bdd->prepare("SELECT * FROM administrateurs WHERE username= :pseudo AND password = :password  ");
    $stmt->execute(['pseudo'=>$pseudo,'password'=>$password]);
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
    $_SESSION['id']=$result[0]['id'];
    $_SESSION ['auth']=$result[0]['auth'];
    return count($result)? true : false;
}


?>
