Had to google dart hello world

`dart run hello_world.dart`

- installing a certain version of the language, does it need a virtual env like python?
You use `pub get` to get the package manager. Except i don't seem to have that installed as part of the SDK.

So it is actually `dart pub get`

Now I'm getting this:
```
dart pub get
Error on line 8, column 1 of pubspec.yaml: Unexpected end of file.
  ╷
8 │ 
  │ ^
  ╵
```
Cool, fixed the pubspec.yaml file. I wonder if you can just do a `dart init` command

- installing a library, it there a package manager
So installing a library you do `dart pub get` after adding it to the pubspec.yaml
- versioning dependencies
You version in `pubspec.yaml`, and `pubspec.lock` is a lock file.
- setting up a logger, and then trying to setup a json structured logger
Setting a logger is okay.
- importing code from another file, or module
use `import 'request.dart';` makes sense, and `import 'request/request.dart';`
- doing a http request
good async support, and easy to understand. Uses exceptions
`var response = await http.get(url);`
- parsing json to a domain object
nice conversion from a json object
- write a test
run with `dart run test` and file names like `*_test.dart` and have them in a `test` directory
- setup a lint, or formatter
`dartfmt` and `dartanalyzer` for formatting and linting
- deploying it to a serve
`dart compile exe hello_world.dart` which generates `hello_world.exe`, which just runs. Nice!

