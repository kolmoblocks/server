<html>
<head>
       <title>Upload file</title>
</head>
<body>
<form enctype="multipart/form-data" action="https://kolmo-228620.appspot.com/upload" method="post">
    Json file: <input type="file" name="uploadJson" />
    Raw file: <input type="file" name="uploadRaw" />
    <input type="submit" value="Upload to redis" />
</form>
</body>
</html>
