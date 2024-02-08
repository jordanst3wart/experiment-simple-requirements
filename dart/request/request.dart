import 'package:http/http.dart' as http;

Future<void> fetchData() async {
  var url = Uri.parse('https://jsonplaceholder.typicode.com/posts/1');

  try {
    var response = await http.get(url);

    if (response.statusCode == 200) {
      print('Response status: ${response.statusCode}');
      print('Response body: ${response.body}');
    } else {
      print('Request failed with status: ${response.statusCode}');
    }
  } catch (e) {
    print('Error: $e');
  }
}