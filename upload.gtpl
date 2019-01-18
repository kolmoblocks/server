<html>
<head>
       <title>Upload file</title>
</head>
<body>
<form enctype="multipart/form-data" action="http://localhost:8080/upload" method="post">
    Json file: <input type="file" name="uploadJson" />
    Raw file: <input type="file" name="uploadRaw" />
    <input type="submit" value="Upload to redis" />
</form>
</body>
</html>