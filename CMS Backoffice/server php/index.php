<?php
$f3 = require('fatfree/lib/base.php');

$f3->route('GET /',function() {
  echo \Template::instance()->render('index.html');

});
$f3->route('GET /admin',function() {
  //echo \Template::instance()->render('');
  echo "coucou ! ";
});

$f3->set('ONERROR',function($f3){
  //echo \Template::instance()->render('error.html');
  // $info = parse_url($_SERVER['REQUEST_URI']);
   http_response_code(200);

   if (file_exists( "./$info[path]")) {
     //echo("Content-Type:".mime_content_type('./'.$info["path"]));
    // $finfo = finfo_open(FILEINFO_MIME_TYPE);
     //echo finfo_file($finfo, "./$info[path]");
     //header("Content-Type:".mime_content_type("./$info[path]"));
     //readfile("./$info[path]");
   }else{
     echo \Template::instance()->render('index.html');
   }
});


$f3->run();
?>
