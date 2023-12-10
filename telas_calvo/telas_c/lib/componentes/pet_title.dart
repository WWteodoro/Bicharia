import 'dart:io';

import 'package:flutter/material.dart';
import 'package:telas_c/Pages/Pet_editar.dart';
import 'package:telas_c/componentes/model_pet.dart';
import 'package:telas_c/servicos/Apipetservicos.dart';
import 'package:telas_c/servicos/Apiservicos.dart';
import 'package:telas_c/servicos/dados_autenticados.dart';
class PetTitle extends StatelessWidget {
  final Pet dog;
  const PetTitle(this.dog);
  @override
  Widget build(BuildContext context) {
    final avatar = CircleAvatar(backgroundImage:Image.file(
              File(dog.url),
            ).image,);
    return ListTile(
        leading: avatar,
        title: Text(dog.nome),
        subtitle: Text(dog.tipo),
        trailing: Container(
          width: 100,
          child: Row(
            children: <Widget>[
              IconButton(
                  onPressed: () {
                    Navigator.push(
                        context,
                        MaterialPageRoute(
                            builder: (context) => Editar_animal(dog)));
                  },
                  icon: Icon(Icons.edit)),
              IconButton(onPressed: ()async {
                Deletar_pet(dog.id);
                Pets.pets=await client_pets_id(Dados_Usuario.id);
              }, icon: Icon(Icons.delete)),
              IconButton(onPressed: ()async {
                
              }, icon: Icon(Icons.email))
            ],
          ),
        ));
  }
}
