import 'dart:ffi';
import 'dart:io';

import 'package:flutter/material.dart';
import 'package:telas_c/Pages/cadastropage.dart';

class LoginPage extends StatefulWidget {
  const LoginPage({super.key});

  @override
  State<LoginPage> createState() => _LoginPageState();
}

class _LoginPageState extends State<LoginPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        padding: const EdgeInsets.only(top: 60, left: 40, right: 40),
        color: const Color.fromARGB(255, 255, 255, 255),
        child: ListView(
          children: [
            AppBar(
              leading: IconButton(
                icon: Icon(Icons.exit_to_app),
                tooltip: "sair",
                onPressed: () {
                  exit(-1);
                },
                color: Colors.orange,
              ),
              title: const Row(
                  mainAxisAlignment: MainAxisAlignment.start,
                  children: [Text("Login")]),
            ),
            SizedBox(
              width: 128,
              height: 128,
              child: Image.asset("assets/imagens/logo.jpeg"),
            ),
            const SizedBox(
              height: 20,
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
              style: const TextStyle(fontSize: 20),
            ),
            const SizedBox(
              height: 10,
            ),
            TextFormField(
              keyboardType: TextInputType.text,
              obscureText: true,
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
            Container(
              height: 40,
              alignment: Alignment.centerRight,
              child: const ButtonBar(
                children: [Text("Recuperar Senha", textAlign: TextAlign.right)],
              ),
            ),
            const SizedBox(
              height: 40,
            ),
            GestureDetector(
              onTap: () {},
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
                        "LOGIN",
                        style: TextStyle(
                          color: Color.fromARGB(255, 255, 255, 255),
                          fontSize: 30,
                        ),
                      ),
                    ]),
              ),
            ),
            const SizedBox(
              height: 40,
            ),
            Container(
              height: 60,
              alignment: Alignment.center,
              child: ElevatedButton(
                onPressed: () {
                  Navigator.push(context,
                      MaterialPageRoute(builder: (context) => CadastroPage()));
                },
                child: const Text("Cadastrar-se"),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
