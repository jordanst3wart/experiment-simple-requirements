import 'package:logger/logger.dart';
import 'dart:io';
import 'request/request.dart';
import 'dart:convert';

void main() {
  // Create a File object to represent the log file
  var logFile = File('app.log');

  // Create a FileSink to write log messages to the log file
  var fileSink = logFile.openWrite(mode: FileMode.append);

  // Create a Logger instance
  var logger = Logger();

  logger.d('Debug message');
  logger.i('Info message');
  logger.w('Warning message');
  logger.e('Error message');
  logger.v('Verbose message');

  print("Hello, World!");

  fetchData();
  String jsonString = '{"name": "John", "age": 30}';
  Map<String, dynamic> jsonMap = json.decode(jsonString);

  print(jsonMap['name']); // Output: John
  print(jsonMap['age']); // Output: 30
}
