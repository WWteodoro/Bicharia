import 'package:flutter/material.dart';

class Editar_animal extends StatelessWidget {
  const Editar_animal({super.key});
  @override
  Widget build(BuildContext context) {
    final url = TextEditingController();
    final nome = TextEditingController();
    final tipo = TextEditingController();
    final _form = GlobalKey<FormState>();
    return Scaffold(
      appBar: AppBar(
          title: Text(
            "Editar Pet",
          ),
          backgroundColor: Colors.orange,
          actions: [
            IconButton(onPressed: () {}, icon: Icon(Icons.save_alt_outlined))
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
                ],
              ))),
    );
  }
}
