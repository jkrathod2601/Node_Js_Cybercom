<h1>
    Dynamic Route
</h1>

<h3>
    how to clone directory in your locals
</h3>


```
git clone <dir_name>
```
<h3>
    after cloning how to install npm package
</h3>

```
npm install
```
<h3>
    to run project write command
</h3>

```
npm run dev
```
<h3>
    if you want to add controller in controller folder then follow this rule
</h3>

```
filename >> controllername.js

** DO NOT CRATE A FOLDER STRUCTURE IN THAT**
```

<h3>
    if you want to add middleware in middleware folder then follow this rule
</h3>

```
filename >> middleware.js

** DO NOT CRATE A FOLDER STRUCTURE IN THAT**
```

<h3>
    How to add route?
</h3>

```
open >> /util/route.json

//add route like this

{
        "method": "get"/"post/"put"/"delete"/"patch",
        "path": "route_path",
        "controller": "controller full path from controller folder",
        "middlewares": [
            middlewares full path from middleware folder",
            (multiple middleware allows)
        ]
}
//if you don't want to add middleware so remain empty array of it don't try to write object withour middleware array 
```