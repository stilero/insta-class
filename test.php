<?php
require_once '../requester/requester.php';
foreach(glob("insta-api/*.php") as $file){
    require_once $file;
}
foreach(glob("insta-api/Endpoints/*.php") as $file){
    require $file;
}

?>
