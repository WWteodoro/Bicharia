

import 'package:flutter/material.dart';
import 'package:telas_c/servicos/Apipetservicos.dart';
import 'package:telas_c/servicos/Apiservicos.dart';
import 'package:telas_c/servicos/dados_autenticados.dart';

class AdicionarAnimal extends StatelessWidget {
  const AdicionarAnimal({super.key});
  @override
  Widget build(BuildContext context) {
    late String? url;
    final senha = TextEditingController();
    final senha_confirmar = TextEditingController();
    final nome = TextEditingController();
    final tipo = TextEditingController();
    final _form = GlobalKey<FormState>();
    return Scaffold(
      appBar: AppBar(
          centerTitle: true,
          leading:IconButton(
            icon: Icon(Icons.arrow_back),
            onPressed: (){
              Navigator.pop(context);
            },
            color: Colors.white,
          ),
          title:Text(
            "Criar Pet",
            style:TextStyle(fontSize: 28,color: Colors.white,),
          ), 
          backgroundColor: Colors.orange,
          ),
      body:Padding(
          padding: EdgeInsets.all(10),
          child: Form(
              key: _form,
              child: Column(
            children: [
            CircleAvatar(
            child: IconButton(
              color: Colors.white,
              icon: Icon(Icons.pets),
              iconSize: 75,
              onPressed: () async{
                url=await pickImage();
              },
            ),
            radius: 75,
            backgroundColor: Colors.orange,
          ),
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
          }),SizedBox(
              height: 80,
          ), 
          GestureDetector(
          onTap: ()async{
            final val = _form.currentState?.validate();
            if (val == null || val == true) {
              await Create_Pet(nome.text, tipo.text,url, Dados_Usuario.id);
              Pets.pets=await client_pets_id(Dados_Usuario.id);
              Navigator.of(context).pop();
            }
        },
        child: Container(
            height: 50,
            padding: const EdgeInsets.all(8),
            margin: const EdgeInsets.symmetric(horizontal: 8),
            decoration: BoxDecoration(
            color: Colors.orange,
            borderRadius: BorderRadius.circular(180),
            ),
            child: const Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Text(
                        "Criar Pet",
                        style: TextStyle(
                          color: Color.fromARGB(255, 255, 255, 255),
                          fontSize: 30,
                        ),
                      ),
                    ]),
              ),
            ),                    ],
    ))),
  );
}

}
