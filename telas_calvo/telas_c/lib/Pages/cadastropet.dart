import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:telas_c/componentes/Pets.dart';
import 'package:telas_c/componentes/pet_title.dart';
import 'package:telas_c/modelo/model_pet.dart';

class PetCadastros extends StatelessWidget {
  PetCadastros({super.key});

  @override
  Widget build(BuildContext context) {
    final Pets pet_list = Provider.of(context);
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.orange,
        title: Text("PET CRIAR"),
        actions: <Widget>[
          IconButton(
              onPressed: () {
                pet_list.put(Pet(
                    id: "10",
                    nome: "percival",
                    tipo: "calaveiro morte",
                    url:
                        "https://www.petz.com.br/blog/wp-content/uploads/2019/05/cachorro-independente-1.jpg"));
              },
              icon: Icon(Icons.add))
        ],
      ),
      body: ListView.builder(
          itemCount: pet_list.count,
          itemBuilder: (ctx, i) => PetTitle(pet_list.all.elementAt(i))),
    );
  }
}
