// logger.rs

// logger.rs

use env_logger;
use log::LevelFilter;

pub fn initialize_logger() {
    // Initialize logger
    env_logger::Builder::new()
        .filter_level(LevelFilter::Info)
        .init();
}
