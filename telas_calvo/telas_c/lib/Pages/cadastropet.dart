import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:telas_c/Pages/Petadicionar.dart';
import 'package:telas_c/Pages/approute/AppRoute.dart';
import 'package:telas_c/Pages/home.dart';
import "package:telas_c/servicos/Apipetservicos.dart";
import 'package:telas_c/componentes/pet_title.dart';
import 'package:telas_c/componentes/model_pet.dart';
import 'package:telas_c/servicos/dados_autenticados.dart';

class PetCadastros extends StatelessWidget {
  const PetCadastros({super.key});
  @override
  Widget build(BuildContext context) {
    final pet_list=Petfetch(Dados_Usuario.id).toString();
    print(pet_list);
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.orange,
        title: Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            IconButton(onPressed: () {}, icon: Icon(Icons.arrow_back)),
            Text("PETS", style: TextStyle(color: Colors.white)),
            IconButton(
                onPressed: () {
                  Navigator.of(context).pushNamed(Routaaas.Animal_adicionar);
                },
                icon: Icon(Icons.add)),
          ],
        ),
      ),
  );
}
}