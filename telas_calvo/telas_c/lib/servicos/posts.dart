import 'dart:convert';
import 'dart:ffi';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'package:provider/provider.dart';
import 'package:telas_c/Pages/approute/AppRoute.dart';
import 'package:telas_c/Pages/home.dart';
import 'package:telas_c/servicos/dados_autenticados.dart';

Future<void> CreatePost(String idpet, String id, String text) async {
    final response = await http.post(
      Uri.parse('http://localhost:3333/posts'),
      headers: <String, String>{
        'Content-Type': 'application/json; charset=UTF-8'
      },
      body: jsonEncode(<String, String>{
          'Id Pet' : idpet,
          'User Id' : id,
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