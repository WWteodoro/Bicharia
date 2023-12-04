import 'dart:convert';
import 'package:http/http.dart' as http;
import 'package:telas_c/componentes/model_post.dart';


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
    Uri.parse('http://localhost:3333/post'+PostId),
    headers: <String, String>{
      'Content-Type' : 'application/json; charset=UTF-8'
    },
  );
}

Future<List<PostModel>> listar_posts(String Id) async {
  final response = await http.get(
    Uri.parse('http://localhost:3333/post/list'+Id),
    headers: <String, String>{
      'Content-Type' : 'application/json; charset=UTF-8'
    },
  );
  final post_s=jsonDecode(response.body) as List<Map<String,dynamic>>;
  print(post_s);
  List<PostModel> list_posts=[];
  for (var i = 0; i <post_s[i].length; i++) {
    list_posts.add(PostModel(id:post_s[i][""], dated:post_s[i][""], photo: post_s[i][""], userId:post_s[i][""], text: post_s[i][""]));
  }
  return list_posts;
}