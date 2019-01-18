<html>
<head>
       <title>Upload file</title>
</head>
<body>
<form enctype="multipart/form-data" action="http://localhost:8080/upload" method="post">
    <input type="radio" id="r1" name="type" value=json> Json
    <input type="radio" id="r2" name="type" value=raw> Raw
    File: <input type="file" name="upload" />
    <input type="submit" value="Upload to redis" />
</form>
</body>
</html>
