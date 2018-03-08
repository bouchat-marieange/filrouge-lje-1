<?php
session_start();
include 'model/db.php';
include 'model/user.php';
include 'model/actualite.php';
$f3 = require('fatfree/lib/base.php');

$f3->route('GET /',function() {
  echo \Template::instance()->render('index.html');
});
$f3->route('GET /json/actualite/list',function() {
    header('Content-Type: application/json');
    echo json_encode(get_actu());
});


$f3->route('GET /admin',function() {//login page
  echo \Template::instance()->render('views/login.html');

  echo "coucou ! ";
});
$f3->route('POST /admin/login',function() {
  if (connect($_POST['username'],$_POST['password'])) {
    $f3->reroute('/admin/actualite/list');
  }else{
    $f3->reroute('/admin');
  }
  echo "coucou ! ";
});
$f3->route('GET /admin/actualite/list',function() {
  $f3->set("all_actu",get_actu());
  echo \Template::instance()->render('views/actu_list.html');
});
$f3->route('GET /admin/actualite/id/@id',function() {
  echo \Template::instance()->render('views/actu_edit.html');
});
$f3->route('POST /admin/actualite/edit/@id',function() {
  //echo \Template::instance()->render('');
  echo "coucou ! ";
});

$f3->set('ONERROR',function($f3){
  //echo \Template::instance()->render('error.html');
   $info = parse_url($_SERVER['REQUEST_URI']);
   http_response_code(200);
   if (file_exists( "./$info[path]")) {
     //echo("Content-Type:".mime_content_type('./'.$info["path"]));
    // $finfo = finfo_open(FILEINFO_MIME_TYPE);
     //echo finfo_file($finfo, "./$info[path]");
     header("Content-Type:".mime_content_type("./$info[path]"));
     readfile("./$info[path]");
   }else{
     echo \Template::instance()->render('index.html');
   }
});


$f3->run();
?>
