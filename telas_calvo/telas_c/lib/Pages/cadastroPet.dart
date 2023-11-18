import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:telas_c/Pages/Petadicionar.dart';
import 'package:telas_c/Pages/home.dart';
import 'package:telas_c/componentes/Pets.dart';
import 'package:telas_c/componentes/pet_title.dart';
import 'package:telas_c/modelo/model_pet.dart';
import 'package:telas_c/modelo/pet_exemplos.dart';

class AppRoute {
  static String Animal_Cadastro = "/cadastro_pet";
  static String Animal_adicionar = "/cadastro_adicionar";
}

class PetCadastros extends StatelessWidget {
  const PetCadastros({super.key});
  @override
  Widget build(BuildContext context) {
    final Pet pet_cadastro;
    final Pets pet_list = Provider.of(context, listen: false);
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
                  Navigator.of(context).pushNamed(AppRoute.Animal_adicionar,
                      arguments: pet_list);
                },
                icon: Icon(Icons.add)),
          ],
        ),
      ),
      body: ListView.builder(
          itemCount: pet_list.count,
          itemBuilder: (ctx, i) => PetTitle(pet_list.all.elementAt(i))),
    );
  }
}
