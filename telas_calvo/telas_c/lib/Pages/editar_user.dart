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
                  Update_user_data(
                      Dados_Usuario.id, nome.text,senha.text);
                  ScaffoldMessenger.of(context).showSnackBar(
                    const SnackBar(content: Text('Dados Atualizados')),
                  );
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
                      controller: senha,
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
