<?php

function uuid() {  
    $chars = md5(uniqid(mt_rand(), true));  
    $uuid = substr ( $chars, 0, 8 ) . '-'
            . substr ( $chars, 8, 4 ) . '-' 
            . substr ( $chars, 12, 4 ) . '-'
            . substr ( $chars, 16, 4 ) . '-'
            . substr ( $chars, 20, 12 );  
    return $uuid ;  
}  

var_dump($_POST);
$filename = uuid();

file_put_contents("codes\\title\\" . $filename . '.txt', $_POST['title']);
file_put_contents("codes\\content\\" . $filename . '.txt', htmlspecialchars($_POST['content']));

header("location:view.php?id=".$filename);
?>