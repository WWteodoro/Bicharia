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