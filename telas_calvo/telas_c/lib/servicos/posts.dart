import 'dart:convert';
import 'dart:ffi';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'package:provider/provider.dart';
import 'package:telas_c/componentes/Postmodel.dart';


Future<void> CreatePost(String photo, String userId, String text) async {
    final post = await http.post(
      Uri.parse('http://localhost:3333/posts'),
      headers: <String, String>{
        'Content-Type': 'application/json; charset=UTF-8'
      },
      body: jsonEncode(<String, dynamic>{
        "photo": photo,
        "userId": userId,
        "text": text,
      })
    );
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
    Uri.parse('http://localhost:3333/post/feed'),
    headers: <String, String>{
      'Content-Type': 'application/json; charset=UTF-8',
    },
  );

  if (response.statusCode == 200) {
    final List<dynamic> jsonData = json.decode(response.body);
    return jsonData.map((data) => PostModel.fromJson(data)).toList();
  } else {
    throw Exception('Failed to load posts');
  }
}