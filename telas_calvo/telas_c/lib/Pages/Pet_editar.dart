import 'package:flutter/material.dart';
import 'package:telas_c/Pages/cadastropage.dart';
import 'package:telas_c/servicos/Apipetservicos.dart';
import 'package:telas_c/componentes/model_pet.dart';
import 'package:telas_c/servicos/Apiservicos.dart';
import 'package:telas_c/servicos/dados_autenticados.dart';
class Editar_animal extends StatelessWidget {
  final Pet dog;
  const Editar_animal(this.dog); 
  @override
  Widget build(BuildContext context) {
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
            IconButton(onPressed: () async {
              await update_pet_data(Dados_Usuario.id,dog.id, dog.nome,dog.tipo);
              Pets.pets= await client_pets_id(Dados_Usuario.id);
              Navigator.push(context, MaterialPageRoute(builder: (context)=>CadastroPage()));
            },color: Colors.white, 
            icon: Icon(Icons.save_alt_outlined),
            )
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
                ],
              ))),
    );
  }
}
