Questions:
- installing a certain version of the language, does it need a virtual env like python?
install is easy the difference between npm, and node is odd, the setup of a project is extremely unstandard, and the default are dumb. ie. just the tsconfig.json file
- installing a library, it there a package manager
npm package manager seems fine for standard cases
- versioning dependencies
versioned in package-lock.json
- setting up a logger, and then trying to setup a json structured logger
Uses a library called winston. It can be structured.
- importing code from another file, or module
importing code seems fine, but there is complicated resolution with commonjs, and esmodules
- doing a http request
using axios seems to be very popular, it's odd it's not standard library. It's odd it's using then operations, rather than await
- parsing json to a domain object
This seems very easy. I don't think it does validation though
- write a test
Writing a test is odd. It uses a 3rd party library called jest
Ran into this issue setting up a test: `SyntaxError: Cannot use import statement outside a module`
Couldn't get tests working straight away
- setup a lint, or formatter
Setting up a linter requires a lot of libraries
```shell
npm install eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin --save-dev
```
- deploying it to a server
This requires installing node, and npm (maybe). Maybe compiling from TypeScript. And other things

Other notes:
exports seem odd like this:
`export default add;` why not just export it's name

# Steps

install npm, and node
Setup npm `npm init`
package.json has a lot of random pieces of data

Setup tsc `tsc --init`
tsconfig.json has a of random values in it.
Starts at 100 files of comments in config. It's odd have a json file with comments in it.

extra files:
```
package.json
tsconfig.json
```

Keeping original tsconfig.json in tsconfig.bak.json

Setting up src, and dest directories as that seems to be the thing people do.

I find it odd the root directory is standard for source code in TypeScript. But that might just be from coming from Java.

1. setting up a logger used a package normally winston
   npm install winston

