import 'dart:convert';
import 'dart:core';
import 'dart:ffi';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'package:provider/provider.dart';
import 'package:telas_c/componentes/Postmodel.dart';


Future<void> CreatePost(String photo,String pet_id, 
String userId, String text) async {
    final post = await http.post(
      Uri.parse('http://localhost:3333/post'),
      headers: <String , String>{
        'Content-Type': 'application/json; charset=UTF-8'
      },
      body: jsonEncode({
      "photo" : photo,
      "userId" : userId,
      "text" : text,
      "petId": pet_id,}));
    print(post.body);
    print(post.statusCode);
}



Future<void> ApagarPost(String PostId) async {
  final response = await http.delete(
    Uri.parse('http://localhost:3333/post/list'),
    headers: <String, String>{
      'Content-Type' : 'application/json; charset=UTF-8'
    },
  );
}

Future<List<PostModel>> Feed(String userId) async {
  final response = await http.get(
    Uri.parse('http://localhost:3333/post/feed/'+userId),
    headers: <String, String>{
      'Content-Type': 'application/json; charset=UTF-8',
    },
  );
  List<PostModel> list_post=[];
  final  jsonData = jsonDecode(response.body);
  for (var i = 0; i < jsonData.length; i++) {
    if (jsonData[i].length!=0) {
      for (var j = 0; j < jsonData[i].length; j++) {
        list_post.add(PostModel.fromJson(jsonData[i][j]));
      }
    }
  }


  if (response.statusCode == 200) {
    return list_post;
  } else {
    throw Exception('Failed to load posts');
  }
}