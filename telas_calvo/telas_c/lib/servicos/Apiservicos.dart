import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'package:telas_c/modelo/usermodel.dart';
import 'package:telas_c/constantes.dart';

Future<Cliente> createCliente(
    String name, String email, String passoword) async {
  final response = await http.post(
      Uri.parse(ApiConstantsPost.baseUrl + ApiConstantsPost.usersEndpoint),
      headers: <String, String>{
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: ClienteToJson(
          Cliente(name: name, email: email, password: passoword)));
  if (response.statusCode == 201) {
    return Cliente.fromJson(jsonDecode(response.body));
  } else {
    throw Exception('Failed to create album.');
  }
}
