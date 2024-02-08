Installing elixir was annoying...

I had to use `brew`, where i normally just install a ".dmg" type file. That was the same with dart though.

I want to try:
- installing a certain version of the language, does it need a virtual env like python?
Installing was odd. I needed `brew` on mac. I had to google hello world projects.
You start a new project with: `mix new hello` or `mix new ...`
- installing a library, it there a package manager
So you use mix to manage dependencies, but can't figure stuff out:
```sh
❯ mix deps.get
** (ArgumentError) cannot invoke defp/2 outside module
```
I can't install a logger dependency. I get:
```
❯ mix deps.get
Failed to fetch record for logger from registry (using cache instead)
```

- versioning dependencies
versioning is in `mix.lock`
- setting up a logger, and then trying to setup a json structured logger

- importing code from another file, or module
- doing a http request
- parsing json to a domain object
- write a test
- setup a lint, or formatter
- deploying it to a server
