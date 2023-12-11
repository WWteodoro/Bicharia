// ignore_for_file: unnecessary_new, prefer_const_constructors, prefer_const_literals_to_create_immutables

import 'package:flutter/material.dart';
import 'package:telas_c/componentes/model_pet.dart';
import 'package:telas_c/servicos/Apiservicos.dart';
import 'package:telas_c/servicos/dados_autenticados.dart';
import 'package:telas_c/servicos/posts.dart';

class Add extends StatefulWidget {
  Pet dog;
  Add(this.dog);

  @override
  State<Add> createState() => _AddState();
}

class _AddState extends State<Add> {
  
  final text=TextEditingController();
  late String urlImage;
  @override
  Widget build(BuildContext context) {
    return Scaffold(
    appBar: AppBar(
      title: Text('Add Post',style: TextStyle(fontSize: 20,color: Colors.white),),
      centerTitle: true,
      backgroundColor: Colors.orange,
      actions: <Widget>[
        IconButton(
          onPressed: () async{
            urlImage = (await pickImage())!;
          },
          icon:Icon(Icons.upload),
          color: Colors.white,
        ),
        IconButton(
          onPressed: () async{
            await CreatePost(urlImage,widget.dog.id,Dados_Usuario.id,text.text);
            Navigator.pop(context);
          },
          icon: Icon(Icons.add),
          color: Colors.white,
        ),
      ],
    ),
    body: Container(
      padding: EdgeInsets.symmetric(vertical: 20, horizontal: 10),
      child: Form(
        child:ListView(children: [
          TextFormField(
            controller:text,
            style: TextStyle(
              fontSize: 20,
            ),
          ),
      ],)),      
    )
    );
  }
}
