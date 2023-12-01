import 'dart:io';

import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:telas_c/Pages/loginpage.dart';
import 'package:telas_c/servicos/Apiservicos.dart';
import 'package:telas_c/Pages/home.dart';

class CadastroPage extends StatelessWidget {
  final nome = TextEditingController();
  final email = TextEditingController();
  final data = TextEditingController();
  final senha = TextEditingController();
  final confirmar = TextEditingController();
  final confirmacaoemail = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.orange,
        leading: IconButton(
          onPressed: () {
            Navigator.push(
                context, MaterialPageRoute(builder: (context) => LoginPage()));
          },
          color: Colors.white,
          icon: Icon(Icons.login),
          tooltip: "login",
        ),
        title: const Row(mainAxisAlignment: MainAxisAlignment.start, children: [
          Text(
            "Cadastro",
            style: TextStyle(fontSize: 30, color: Colors.white),
          )
        ]),
      ),
      body: Container(
        padding: const EdgeInsets.only(top: 60, left: 40, right: 40),
        color: const Color.fromARGB(255, 255, 255, 255),
        child: Form(
          child: ListView(
            children: [
              SizedBox(
                width: 250,
                height: 250,
                child: Image.asset("assets/imagens/logo.jpeg"),
              ),
              TextFormField(
                keyboardType: TextInputType.name,
                decoration: const InputDecoration(
                    labelText: "Nome",
                    labelStyle: TextStyle(
                      color: Colors.black87,
                      fontWeight: FontWeight.w400,
                      fontSize: 20,
                    )),
                controller: nome,
                style: const TextStyle(fontSize: 20),
              ),
              const SizedBox(
                height: 10,
              ),
              TextFormField(
                keyboardType: TextInputType.emailAddress,
                decoration: const InputDecoration(
                    labelText: "E-mail",
                    labelStyle: TextStyle(
                      color: Colors.black38,
                      fontWeight: FontWeight.w400,
                      fontSize: 20,
                    )),
                controller: email,
                style: const TextStyle(fontSize: 20),
              ),
              const SizedBox(
                height: 10,
              ),
              TextFormField(
                controller: confirmacaoemail,
                keyboardType: TextInputType.emailAddress,
                decoration: const InputDecoration(
                  labelText: "E-mail Confirmação",
                  labelStyle: TextStyle(
                    color: Colors.black38,
                    fontWeight: FontWeight.w400,
                    fontSize: 20,
                  ),
                ),
                style: const TextStyle(fontSize: 20),
              ),
              const SizedBox(
                height: 10,
              ),
              TextFormField(
                keyboardType: TextInputType.text,
                obscureText: true,
                controller: senha,
                decoration: const InputDecoration(
                  labelText: "Senha",
                  labelStyle: TextStyle(
                    color: Colors.black38,
                    fontWeight: FontWeight.w400,
                    fontSize: 20,
                  ),
                ),
                style: const TextStyle(fontSize: 20),
              ),
              const SizedBox(
                height: 10,
              ),
              TextFormField(
                keyboardType: TextInputType.text,
                controller: confirmar,
                obscureText: true,
                decoration: const InputDecoration(
                  labelText: "Senha confirmacao",
                  labelStyle: TextStyle(
                    color: Colors.black38,
                    fontWeight: FontWeight.w400,
                    fontSize: 20,
                  ),
                ),
                style: const TextStyle(fontSize: 20),
              ),
              const SizedBox(
                height: 40,
              ),
              GestureDetector(
                onTap: () {
                  if (email.text == confirmacaoemail.text &&
                      confirmar.text == senha.text &&
                      email.text != "" &&
                      senha.text != "") {
                    createCliente(nome.text, email.text, senha.text);
                    ScaffoldMessenger.of(context).showSnackBar(
                      const SnackBar(content: Text('Usuário Cadastrado')),
                    );
                  } else {
                    ScaffoldMessenger.of(context).showSnackBar(
                      const SnackBar(content: Text('Informações invalidas')),
                    );
                  }
                },
                child: Container(
                  height: 50,
                  padding: const EdgeInsets.all(8),
                  margin: const EdgeInsets.symmetric(horizontal: 8),
                  decoration: BoxDecoration(
                      color: Colors.orange,
                      borderRadius: BorderRadius.circular(180)),
                  child: const Center(
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        Text(
                          "CADASTRAR-SE",
                          style: TextStyle(
                            color: Color.fromARGB(255, 255, 255, 255),
                            fontSize: 30,
                          ),
                        ),
                      ],
                    ),
                  ),
                ),
              )
            ],
          ),
        ),
      ),
    );
  }
}
