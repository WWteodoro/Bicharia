import 'package:flutter/material.dart';

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
                    _form.currentState?.save();
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
