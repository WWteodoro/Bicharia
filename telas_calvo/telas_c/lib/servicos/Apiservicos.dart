import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'package:telas_c/modelo/usermodel.dart';
import 'package:telas_c/servicos/dados_autenticados.dart';
import 'package:telas_c/servicos/dados_autenticados.dart';

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
  if (response.statusCode == 201) {
    print("O usuário foi cadastrado");
  } else {
    throw Exception('O requisitos não foram atendidios para criar o cliente');
  }
}

Future<void> AutenticarUser(String email, String password) async {
  final resposta = await http.post(Uri.parse("http://localhost:3333/auth"),
      headers: <String, String>{
        'Content-Type': 'application/json; charset=UTF-8'
      },
      body: jsonEncode(<String, String>{"email": email, "password": password}));
  print(resposta.body);
}

Future<void> Deletar_user(String id) async {
  final http.Response response = await http.delete(
    Uri.parse('http://localhost:3333/users/' + id),
    headers: <String, String>{
      'Content-Type': 'application/json; charset=UTF-8',
    },
  );
}

Future<void> Update_user_data(
    String id, String nome, String email, String password) async {
  final response =
      await http.put(Uri.parse('http://localhost:3333/users/' + id),
          headers: <String, String>{
            'Content-Type': 'application/json; charset=UTF-8',
          },
          body: jsonEncode(<String, String>{
            'name': nome,
            'email': email,
            'passoword': password,
          }));
  Dados_Usuario.email = email;
  Dados_Usuario.nome = nome;
}
