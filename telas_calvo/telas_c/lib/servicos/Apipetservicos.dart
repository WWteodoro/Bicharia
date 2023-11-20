import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'package:telas_c/modelo/usermodel.dart';
import 'package:telas_c/servicos/dados_autenticados.dart';
import 'package:telas_c/servicos/dados_autenticados.dart';

Future<void> Create_Pet(String pet_name, String type, String password,
    String passwordconfirm, String photo, String id_user) async {
  final pet = http.post(
    Uri.parse(
      "http://localhost:3333/",
    ),
    headers: <String, String>{
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: jsonEncode(<String, dynamic>{
      "name": pet_name,
      "type": type,
      "password": password,
      "confirmPassword": passwordconfirm,
      "photo": photo,
      "owners": {
        "connect": {"id": id_user}
      },
    }),
  );
}
