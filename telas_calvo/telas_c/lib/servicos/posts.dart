import 'dart:convert';
import 'package:http/http.dart' as http;


Future<void> CreatePost(String photo, String id, String text) async {
    final response = await http.post(
      Uri.parse('http://localhost:3333/post'),
      headers: <String, String>{
        'Content-Type': 'application/json; charset=UTF-8'
      },
      body: jsonEncode(<String, String>{
          'photo' : photo,
          'User Id' : id,
          'text' : text,
      })
    );
  }

Future<void> ApagarPost(String PostId) async {
  final response = await http.delete(
    Uri.parse('http://localhost:3333/post/list'+PostId),
    headers: <String, String>{
      'Content-Type' : 'application/json; charset=UTF-8'
    },
  );
}