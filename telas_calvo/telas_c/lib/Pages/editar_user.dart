import 'package:flutter/material.dart';
import 'package:telas_c/Pages/approute/AppRoute.dart';
import "package:telas_c/servicos/Apiservicos.dart";
import 'package:telas_c/servicos/dados_autenticados.dart';

class Editar_Users extends StatelessWidget {
  const Editar_Users({super.key});
  @override
  Widget build(BuildContext context) {
    final senha = TextEditingController();
    final nome = TextEditingController();
    final email = TextEditingController();
    final email_confirmar = TextEditingController();
    final senha_confirmar = TextEditingController();
    final _form = GlobalKey<FormState>();
    return Scaffold(
      appBar: AppBar(
          leading: IconButton(
              onPressed: () {
                Navigator.pushNamed(context, Routaaas.Profile);
              },
              icon: Icon(Icons.arrow_back)),
          title: Text(
            "Editar Usuário",
          ),
          backgroundColor: Colors.orange,
          actions: [
            IconButton(
                onPressed: () {
                  Future<int> res = Update_user_data(
                      nome.text, email.text, senha.text, Dados_Usuario.id);
                  if (res == 1) {
                    ScaffoldMessenger.of(context).showSnackBar(
                      const SnackBar(content: Text('Dados Atualizados')),
                    );
                  } else {
                    ScaffoldMessenger.of(context).showSnackBar(
                      const SnackBar(
                          content: Text('Erro na Atualização tente novamente')),
                    );
                  }
                },
                icon: Icon(Icons.save_alt_outlined))
          ]),
      body: Padding(
          padding: EdgeInsets.all(10),
          child: Form(
              key: _form,
              child: Column(
                children: [
                  TextFormField(
                    controller: nome,
                    validator: (validtor) {
                      if (validtor == null || validtor.isEmpty) {
                        return "Campos vazio";
                      }
                      return null;
                    },
                    decoration: InputDecoration(labelText: "Nome"),
                  ),
                  TextFormField(
                      controller: email,
                      decoration: InputDecoration(labelText: "Email"),
                      validator: (validtor) {
                        if (validtor == null || validtor.isEmpty) {
                          return "Campos vazio";
                        }
                        if (validtor.contains("@")) {
                          return "Email invalido";
                        }
                        return null;
                      }),
                  TextFormField(
                      controller: senha_confirmar,
                      decoration: InputDecoration(labelText: "Senha"),
                      validator: (validtor) {
                        if (validtor == null || validtor.isEmpty) {
                          return "Campos vazio";
                        }
                        if (validtor.contains(RegExp(
                            "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})"))) {
                          return "As condições de senha não foram atendidas";
                        }
                        return null;
                      }),
                ],
              ))),
    );
  }
}
