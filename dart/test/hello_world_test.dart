import 'package:test/test.dart';

void main() {
  test('String length', () {
    expect('Hello'.length, 5);
  });

  test('List length', () {
    expect([1, 2, 3].length, 3);
  });
}