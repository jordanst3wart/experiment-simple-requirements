
- installing a certain version of the language, does it need a virtual env like python?
IDE handled version install, using gcc, or something to compile
- installing a library, it there a package manager
No, package manager, and have to build and link from source
- versioning dependencies
I don't think dependencies are versioned
- setting up a logger, and then trying to setup a json structured logger
You have to install logger from github, and have the file installed locally...
The API is weird. But it seems really reliable.
- importing code from another file, or module
Using .h files...
- doing a http request
using curl to do a http request, but compiling failed with something. It looks fine in the editor though
- parsing json to a domain object
- write a test
Need to install a c test library, and link it manually at compile. I should create a makefile.
- setup a lint, or formatter
- deploying it to a server
I guess this is building the right binary, and moving it.
