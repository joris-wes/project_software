# Weather Application web site
### This repository contains source code of web application.
In general, this application written on JavaScript library called React. The functional components can be found in the source.

## Bugs and issues
Usually, this application shows the error on runnig.

To run the localhost site try 
```console
npm start
```
If you have a error like 
```console
error:0308010C:digital envelope routines::unsupported
```
Then it means that some of the libraries are legacy and you have to put this flag

Linux and macOS (Windows Git Bash)-
```console
export NODE_OPTIONS=--openssl-legacy-provider
```

Windows command prompt-
```console
set NODE_OPTIONS=--openssl-legacy-provider
```
Windows PowerShell-
```console
$env:NODE_OPTIONS = "--openssl-legacy-provider"
```
After the executing this command you can
```console
npm start
```
...and ejnoy the website (^_^)
