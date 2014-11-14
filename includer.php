<?php
define('_JEXEC', 1);
require_once '../requester/requester.php';
foreach(glob("insta-api/*.php") as $file){
    require $file;
}
foreach(glob("insta-api/Endpoints/*.php") as $file){
    require $file;
}
foreach(glob("insta-api/classes/*.php") as $file){
    require $file;
}
require_once 'settings.php';
?>
