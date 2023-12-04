import 'dart:convert';
import 'dart:ffi';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'package:telas_c/componentes/model_post.dart';


Future<void> CreatePost(String idpet, String id) async {
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
    Uri.parse('http://localhost:3333/post/list'+),
    headers: <String, String>{
      'Content-Type' : 'application/json; charset=UTF-8'
    },
  );
}