


import 'package:flutter/material.dart';

import 'package:telas_c/Pages/approute/AppRoute.dart';
import "package:telas_c/servicos/Apipetservicos.dart";
import 'package:telas_c/servicos/Apiservicos.dart';
import 'package:telas_c/servicos/dados_autenticados.dart';
import 'package:telas_c/componentes/model_pet.dart';
import 'package:telas_c/componentes/pet_title.dart';
class PetCadastro extends StatefulWidget {
  const PetCadastro({super.key});
 
  @override
  State<PetCadastro> createState() => _MyWidgetState();
}

class _MyWidgetState extends State<PetCadastro> {
  void atualizar_lista_pets()async{
    Pets.pets=await client_pets_id(Dados_Usuario.id);
  }
  @override
  Widget build(BuildContext context) {
    setState((){
      atualizar_lista_pets();
    });
  return Scaffold(
    body: ListView.builder(
          itemCount: Pets.pets.length,
          itemBuilder: (ctx, i) => Builder(
            builder: (context) {
              return PetTitle(Pets.pets.elementAt(i));
            }
          )),
    );
  }
   
}