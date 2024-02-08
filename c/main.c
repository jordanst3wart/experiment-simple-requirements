#include <stdio.h>
#include <stdlib.h>
#define CLOG_MAIN
#include "clog.h"
#include <curl/curl.h>

const int MY_LOGGER = 0; /* Unique identifier for logger */

void request();

int main() {
    /* Initialize the logger */
    int r = clog_init_path(MY_LOGGER, "my_log.txt");
    if (r != 0) {
        fprintf(stderr, "Logger initialization failed.\n");
        return 1;
    }

    /* Set minimum log level to info (default: debug) */
    clog_set_level(MY_LOGGER, CLOG_INFO);

    /* Write a message */
    clog_info(CLOG(MY_LOGGER), "Hello, %s!", "world");

    printf("Hello, World!\n");

    request();

    /* Clean up */
    clog_free(MY_LOGGER);
    return 0;
}

void request() {
    CURL *curl;
    CURLcode res;

    // Initialize libcurl
    curl = curl_easy_init();
    if (curl) {
        // Set the URL to send the request to
        curl_easy_setopt(curl, CURLOPT_URL, "http://example.com");

        // Perform the request
        res = curl_easy_perform(curl);
        if (res != CURLE_OK) {
            fprintf(stderr, "curl_easy_perform() failed: %s\n", curl_easy_strerror(res));
        }

        // Cleanup
        curl_easy_cleanup(curl);
    }
}
