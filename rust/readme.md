Firstly, i have never used rust, and these will be my first lines of rust code.

Questions:
- installing a certain version of the language, does it need a virtual env like python?
No, virtual env. My editor just did everything. It seems to just use 'cargo'
- installing a library, it there a package manager
installing "serde" as a test. You just add it to Cargo.toml
- versioning dependencies
Versioning is just in Cargo.toml
- setting up a logger, and then trying to setup a json structured logger
Has a few mature standard loggers, including a simple logger, and structured logger
- importing code from another file, or module
Importing code is easy.
- doing a http request
The importing and compiling is pretty fast, the warning are a little verbose
I have to add `#[tokio::main]` to a function doing the http request, which is a bit weird
The request is async easy out of the box, which is nice
- parsing json to a domain object
Parsing json objects is easy
- write a test
It's odd you write tests in the same file as the code you are testing.

I liked writing test file next to the files you are testing. I'm not sure about next too.
Testing worked straight away, and was fast and easy (unlike jest with TypeScript)
- setup a lint, or formatter
Is just `cargo fmt` so that is done now.
- deploying code
is `cargo build --release` it seems to build to `target/release`, there is a fair bit of random garbage in there. I'm not sure where the binary I deploy is.



Rust was easier setting up than a TypeScript project, which is extremely odd.

Rust does seem to have some verbose wording like `error!("This is an error message");` what is the `!`
and `#[tokio::main]` seems a bit odd. Testing in the same file is interesting. `cargo` seems amazing.
