<html>
<head>
       <title>Upload file</title>
</head>
<body>
<form enctype="multipart/form-data" action="/upload" method="post">
    Raw files to upload: <input type="file" name="files"  multiple/>
    <input type="submit" value="Upload to redis" />
</form>
</body>
</html>
