import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'package:telas_c/modelo/usermodel.dart';
import 'package:telas_c/constantes.dart';

Future<void> createCliente(String name, String email, String password) async {
  final response = await http.post(
      Uri.parse(
        "http://localhost:3333/users",
      ),
      headers: <String, String>{
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: jsonEncode(<String, String>{
        "name": name,
        "email": email,
        "password": password
      }));
  print(response.body);
}
