// ignore_for_file: unnecessary_new, prefer_const_constructors, prefer_const_literals_to_create_immutables

import 'package:flutter/material.dart';
import 'package:telas_c/servicos/Apiservicos.dart';
import 'package:telas_c/servicos/dados_autenticados.dart';
import 'package:telas_c/servicos/posts.dart';

class Add extends StatefulWidget {
  const Add({super.key});

  @override
  State<Add> createState() => _AddState();
}

class _AddState extends State<Add> {
  String text = '';
  late String urlImage;
  @override
  Widget build(BuildContext context) {
    return Scaffold(
    appBar: AppBar(
      title: Text('Add Post'),
      actions: <Widget>[
        IconButton(
          onPressed: () async{
            urlImage = (await pickImage())!;
          },
          icon:Icon(Icons.upload),
          color: Colors.orange,
        ),
        IconButton(
          onPressed: () async{
            CreatePost(urlImage, Dados_Usuario.id, text);
          },
          icon: Icon(Icons.add),
          color: Colors.orange,
        ),
      ],
    ),
    body: Container(
      padding: EdgeInsets.symmetric(vertical: 20, horizontal: 10),
      child: new Form(
        child: TextFormField(
          onChanged: (val) {
            setState((){
              text = val;
            });
          }
        ,)
        )
    )
    );
  }
}