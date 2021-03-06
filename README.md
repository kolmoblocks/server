Intro
--------

Kolmoserver is the backend for the kolmoblocks demo webapp.

Kolmoupload is a script that uploads a file or directory to the redis db that kolmoserver is connected to.

Features
--------

- The webapp currently supports: 
    - Upload (endpoint: /upload): single/multiple files. The manifest is autogenerated and contains the MIME type and             size. The manifest and bytes of the file are then stored as a hash on redis. 
    
    - Search (endpoint: /search): Searches for the hash in the redis db matching the given query parameter 'cid' and returns         the manifest of that cid in the form of json. 
    
    - Serving a raw file (endpoint: /raw/{ref}): Searches for the hash in the redis db matching the given ref and returns the 
      bytes with http header content-type set to its MIME type.

- Kolmoupload supports the command line flag -upload and and takes in a file/directory path 


Installation
------------

Compile with:

    go install 

