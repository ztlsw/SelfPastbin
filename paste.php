<?php
ob_start();//调试用
function uuid() {  
    $chars = md5(uniqid(mt_rand(), true));  
    $uuid = substr ( $chars, 0, 8 ) . '-'
            . substr ( $chars, 8, 4 ) . '-' 
            . substr ( $chars, 12, 4 ) . '-'
            . substr ( $chars, 16, 4 ) . '-'
            . substr ( $chars, 20, 12 );  
    return $uuid ;
}  
//var_dump($_POST);    //调试用
$maxSizeInBytes  = 1024*1024*5;
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $contentLength = (int)$_SERVER['CONTENT_LENGTH'];
    if ($contentLength > $maxSizeInBytes) {
    exit('数据超过限制');
    }
}
$filename = uuid();
$file_path1 = 'codes' . DIRECTORY_SEPARATOR . 'title' . DIRECTORY_SEPARATOR . $filename . '.txt';
$file_path2 = 'codes' . DIRECTORY_SEPARATOR . 'content' . DIRECTORY_SEPARATOR . $filename . '.txt';
file_put_contents($file_path1, $_POST['title']);
file_put_contents($file_path2, htmlspecialchars($_POST['content']));

header("location:view.php?id=".$filename);

ob_end_flush();  //调试用
?>