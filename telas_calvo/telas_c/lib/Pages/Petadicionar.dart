import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:http/http.dart' as http;
import 'package:telas_c/componentes/Pets.dart';
import 'package:telas_c/modelo/model_pet.dart';
import 'package:telas_c/servicos/Apipetservicos.dart';
import 'package:telas_c/servicos/dados_autenticados.dart';

class AdicionarAnimal extends StatelessWidget {
  const AdicionarAnimal({super.key});
  @override
  Widget build(BuildContext context) {
    final url = TextEditingController();
    final senha = TextEditingController();
    final senha_confirmar = TextEditingController();
    final nome = TextEditingController();
    final tipo = TextEditingController();
    final Map<String, String> _formData = {};
    final _form = GlobalKey<FormState>();
    return Scaffold(
      appBar: AppBar(
          title: Text(
            "Criar Pet",
          ),
          backgroundColor: Colors.orange,
          actions: [
            IconButton(
                onPressed: () {
                  final val = _form.currentState?.validate();
                  if (val == null || val == true) {
                    Create_Pet(nome.text, tipo.text, senha.text,
                        senha_confirmar.text, url.text, Dados_Usuario.id);
                    Navigator.of(context).pop();
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
                      controller: tipo,
                      decoration: InputDecoration(labelText: "Tipo"),
                      validator: (validtor) {
                        if (validtor == null || validtor.isEmpty) {
                          return "Campos vazio";
                        }
                        return null;
                      }),
                  TextFormField(
                      controller: url,
                      decoration: InputDecoration(labelText: "URL do Avatar"),
                      validator: (validtor) {
                        if (validtor == null || validtor.isEmpty) {
                          return "Campos vazio";
                        }
                        return null;
                      }),
                  TextFormField(
                      controller: senha,
                      decoration: InputDecoration(labelText: "Senha"),
                      validator: (validtor) {
                        if (validtor == null || validtor.isEmpty) {
                          return "Campos vazio";
                        }
                        return null;
                      }),
                  TextFormField(
                      controller: senha,
                      decoration: InputDecoration(labelText: "Senha Confirmar"),
                      validator: (validtor) {
                        if (validtor == null || validtor.isEmpty) {
                          return "Campos vazio";
                        }
                        return null;
                      })
                ],
              ))),
    );
  }
}
