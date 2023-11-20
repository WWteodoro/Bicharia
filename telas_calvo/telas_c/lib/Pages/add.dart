// ignore_for_file: unnecessary_new, prefer_const_constructors, prefer_const_literals_to_create_immutables

import 'package:flutter/material.dart';

class Add extends StatefulWidget {
  const Add({super.key});

  @override
  State<Add> createState() => _AddState();
}

class _AddState extends State<Add> {
  String text = '';
  @override
  Widget build(BuildContext context) {
    return Scaffold(
    appBar: AppBar(
      title: Text('Add Post'),
      actions: <Widget>[
        TextButton(
          style: TextButton.styleFrom(foregroundColor: Colors.white,),
          onPressed: null,
          child: Text('Post'))
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