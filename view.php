<?php
    $id = $_GET['id'];
    $filename = $id . '.txt';
    $title = file_get_contents("codes" . DIRECTORY_SEPARATOR . "title" . DIRECTORY_SEPARATOR . $filename);
    $content = file_get_contents("codes" . DIRECTORY_SEPARATOR . "content" . DIRECTORY_SEPARATOR . $filename);

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Paste Code</title>
    <link rel="stylesheet" href="style.css" type = "text/css"/>
    <script src="script.js"></script>
</head>
<body>
    <div class="container" style="padding-top:30px;">
        <h2 class="text-center"><?php echo $title ?></h2>
        <pre><code><?php echo $content ?></code></pre>
    </div>

    <script>
        hljs.highlightAll();
    </script>
</body>
</html>