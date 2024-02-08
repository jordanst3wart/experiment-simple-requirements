use reqwest;

pub async fn fetch_url() -> Result<(), reqwest::Error> {
    // Send an HTTP GET request to a URL
    let response = reqwest::get("https://jsonplaceholder.typicode.com/posts/1").await?;

    // Check if the request was successful (status code 200)
    if response.status().is_success() {
        // Get the response body as a string
        let body = response.text().await?;
        println!("Response body: {}", body);
    } else {
        println!("Request failed with status code: {}", response.status());
    }

    Ok(())
}
