use serde::{Deserialize, Serialize};
#[derive(Debug, Deserialize, Serialize)]
struct MyObject {
    field1: String,
    field2: i32,
    // Add more fields as needed
}

pub fn parse() {
    let json_data = r#"
        {
            "field1": "value1",
            "field2": 42
        }
    "#;

    // Parse JSON into MyObject
    let my_object: MyObject = serde_json::from_str(json_data).unwrap();

    // Now you can use my_object
    println!("{:?}", my_object);
}
