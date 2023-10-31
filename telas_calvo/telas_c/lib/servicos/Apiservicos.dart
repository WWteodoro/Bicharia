import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'package:telas_c/modelo/usermodel.dart';
import 'package:telas_c/constantes.dart';

Future<Cliente> createCliente(
    String name, String email, String password) async {
  final response = await http.post(
      Uri.parse(
        'https://jsonplaceholder.typicode.com/albums',
      ),
      headers: <String, String>{
        'HttpHeaders.contentTypeHeader': 'application/json',
      },
      body:
          ClienteToJson(Cliente(name: name, email: email, password: password)));
  if (response.statusCode == 201) {
    return ClientefromJson(response.body);
  } else {
    throw Exception('falha em criar o cliente');
  }
}
