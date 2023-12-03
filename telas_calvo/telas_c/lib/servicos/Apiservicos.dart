import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'package:telas_c/Pages/approute/AppRoute.dart';
import 'package:telas_c/servicos/dados_autenticados.dart';
import 'package:file_picker/file_picker.dart';
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
 Future<String?> pickImage() async {
    FilePickerResult? image = await FilePicker.platform.pickFiles(
      type: FileType.image,
    );
    return image?.files.single.path;

  }
Future<void> AutenticarUser(String email, String password,BuildContext context) async {
  final resposta = await http.post(Uri.parse("http://localhost:3333/auth"),
      headers: <String, String>{
        'Content-Type': 'application/json; charset=UTF-8'
      },
      body: jsonEncode(<String, String>{"email": email, "password": password}));
  if (resposta.statusCode==201) {
    Navigator.pushNamed(context,Routaaas.Home);
    Dados_Usuario.email=email;
    Map<String, dynamic> userMap = jsonDecode(resposta.body);
    Dados_Usuario.nome=userMap["user"]["name"];
    Dados_Usuario.id=userMap["user"]["id"];
  }else{
    throw Exception("Tente novamente"); 
  }
}

Future<void> queryByEmail(String email, String nome) async {
    final response = await http.post(
      Uri.parse('http://localhost:3333/users/invite'),
      headers: <String, String>{
        'Content-Type': 'application/json; charset=UTF-8'
      },
      body: jsonEncode(<String, String>{
          'email' : email,
          'name' : nome,
      })
    );
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
    String id, String nome, String password) async {
  final response =
      await http.put(Uri.parse('http://localhost:3333/users/' + id),
          headers: <String, String>{
            'Content-Type': 'application/json; charset=UTF-8',
          },
          body: jsonEncode(<String, String>{
            'name': nome,
            'passoword': password,
          }));
  Dados_Usuario.nome = nome;
}
