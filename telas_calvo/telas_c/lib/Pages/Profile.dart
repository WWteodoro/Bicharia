import 'package:flutter/material.dart';
import 'package:telas_c/Pages/approute/AppRoute.dart';
import 'package:telas_c/servicos/dados_autenticados.dart';
import "package:telas_c/servicos/Apiservicos.dart";

class Profile extends StatefulWidget {
  @override
  _MinhaPaginaState createState() => _MinhaPaginaState();
}

class _MinhaPaginaState extends State<Profile> {
  static late String meu_email;
  static late String meu_nome;

  @override
  void initState() {
    super.initState();
    meu_nome = Dados_Usuario.nome; // Inicializando a variável
    meu_email = Dados_Usuario.email; // Inicializando a variável
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
          backgroundColor: Colors.orange,
          leading: IconButton(
            onPressed: () {
              Deletar_user(Dados_Usuario.id);
              Navigator.pushNamed(context, Routaaas.Cadastro_user);
            },
            icon: Icon(
              Icons.remove,
              color: Colors.white,
            ),
          ),
          actions: [
            IconButton(
              onPressed: () {
                Navigator.pushNamed(context, Routaaas.Home);
              },
              icon: Icon(
                Icons.home,
                color: Colors.white,
              ),
            ),
          ],
          title: Row(mainAxisAlignment: MainAxisAlignment.center, children: [
            Text(
              "Perfil",
              style: TextStyle(fontSize: 30, color: Colors.white),
            ),
          ])),
      body: ListView(
        children: [
          SizedBox(
            height: 20,
          ),
          CircleAvatar(
            child: Icon(color: Colors.white, Icons.person, size: 75),
            radius: 75,
            backgroundColor: Colors.orange,
          ),
          SizedBox(
            height: 40,
          ),
          ListTile(
            leading: Icon(Icons.email),
            title: Text(meu_email, style: TextStyle(fontSize: 16)),
          ),
          SizedBox(
            height: 20,
          ),
          ListTile(
            leading: Icon(Icons.person),
            title: Text(
              meu_nome,
              style: TextStyle(fontSize: 16),
            ),
          ),
        ],
      ),
    );
  }
}
