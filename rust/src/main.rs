mod add;
mod logger;
mod parse;
mod request;

use crate::parse::parse;
use crate::request::fetch_url;
use log::{debug, error, info, warn};

#[tokio::main]
async fn main() {
    println!("Hello, world!");
    logger::initialize_logger();

    // Log messages
    info!("This is an informational message");
    debug!("This is a debug message");
    warn!("This is a warning message");
    error!("This is an error message");

    // Call the fetch_url function
    if let Err(e) = fetch_url().await {
        eprintln!("Error: {}", e);
    }

    parse()
}
