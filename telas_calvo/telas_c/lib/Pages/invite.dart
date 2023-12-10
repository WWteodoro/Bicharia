import 'dart:ffi';

import 'package:flutter/material.dart';
import 'package:telas_c/Pages/home.dart';
import 'package:telas_c/componentes/model_pet.dart';
class Invite extends StatelessWidget {
  late Pet dog;
  Invite(Pet dog, {super.key}){
    this.dog=dog;
  } 
  @override
  Widget build(BuildContext context) {
    final email=TextEditingController();
    final pet=TextEditingController(text: dog.id);
    return Scaffold(
      appBar: AppBar(
        actions: [
          IconButton(onPressed:(){
            Navigator.push(context,
            MaterialPageRoute(builder: (context) => HomePage()));
          }, icon: Icon(Icons.home,color:Colors.white))
        ],
        centerTitle: true,
        title: const Text("Invite",style: TextStyle(
          color: Colors.white,
          fontSize: 30,
          ),
        ),
        backgroundColor:Colors.orange,
        leading:IconButton(
          icon: Icon(Icons.arrow_back,
          color: Colors.white,
          ),
          onPressed:(){
            Navigator.pop(context);
          },
        ),
      ),
      body:Container(
        padding: EdgeInsets.only(left:60,right:40,top:40),
        color: Color.fromARGB(255,255,255,255),
        child: ListView(
          children: [
            SizedBox(width: 125,
            height: 125,
            child: Icon(Icons.email,size: 125,color: Colors.orange,),),
            SizedBox(
              height: 10,
            ),TextFormField(
              keyboardType: TextInputType.emailAddress,
              decoration: const InputDecoration(
                  labelText: "Chave Pet",
                  labelStyle: TextStyle(
                    color: Colors.black38,
                    fontWeight: FontWeight.w400,
                    fontSize: 20,
                  )),
              style: const TextStyle(fontSize: 20),
              controller: pet, 
            ),SizedBox(
              height: 10,
            ),TextFormField(
              keyboardType: TextInputType.text,
              decoration: const InputDecoration(
                  labelText: "E-mail",
                  labelStyle: TextStyle(
                    color: Colors.black38,
                    fontWeight: FontWeight.w400,
                    fontSize: 20,
                  )),
              style: const TextStyle(fontSize: 20),
              controller:email, 
            ),SizedBox(
              height: 80,
            ),
            Container(
                height: 50,
                width: 50,
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
                        "Invite",
                        style: TextStyle(
                          color: Color.fromARGB(255, 255, 255, 255),
                          fontSize: 30,
                        ),
                      ),
                    ]),
              ),
          ],
        ),
      ),
    );
  
  }
  
}