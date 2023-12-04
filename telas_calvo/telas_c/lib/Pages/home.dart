// ignore_for_file: prefer_const_constructors, unnecessary_new

import 'package:flutter/material.dart';
import 'package:telas_c/Pages/add.dart';
import 'package:telas_c/Pages/cadastropet.dart';
import 'package:telas_c/Pages/loginpage.dart';
import 'package:telas_c/Pages/Profile.dart';
import 'package:telas_c/Pages/Petadicionar.dart';
import 'package:telas_c/servicos/Apiservicos.dart';
import 'package:telas_c/servicos/dados_autenticados.dart';
import 'package:telas_c/componentes/model_pet.dart';
import 'package:telas_c/Pages/feed.dart';

class HomePage extends StatefulWidget {
  const HomePage({Key? key}) : super(key: key);

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  int _currentIndex = 0;
  final List<Widget> _children = [FeedPosts(), Add(), PetCadastro()];

  void onTabPressed(int index) {
    setState(() {
      
      _currentIndex = index;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("Home", style: TextStyle(color: Colors.white)),
        actions: <Widget>[
          IconButton(
            icon: Icon(Icons.login_outlined),
            color: Colors.white,
            onPressed: ()async {
              Navigator.push(
                  context,
                  MaterialPageRoute(builder: (context) => LoginPage()),
                );
            },
          )
        ],
        backgroundColor: Colors.orange,
      ),
      drawer: Drawer(
        surfaceTintColor: Colors.white,
        child: ListView(
          children: <Widget>[
            DrawerHeader(
              decoration: BoxDecoration(color: Colors.orange),
              child: Text('User Placeholder'),
            ),
            ListTile(
              title: Text('Perfil'),
              onTap: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(builder: (context) => Profile()),
                );
              },
            ),
            ListTile(
              title: Text('Novo Pet'),
              onTap: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(builder: (context) => AdicionarAnimal()),
                );
              },
            ),
          ],
        ),
      ),
      bottomNavigationBar: BottomNavigationBar(
        onTap: onTabPressed,
        selectedItemColor: Colors.orange,
        currentIndex: _currentIndex,
        showSelectedLabels: false,
        showUnselectedLabels: false,
        items: [
          BottomNavigationBarItem(icon: Icon(Icons.home), label: 'Home'),
          BottomNavigationBarItem(icon: Icon(Icons.add), label: 'Novo Post'),
          BottomNavigationBarItem(icon: Icon(Icons.pets), label: 'Pets'),
        ],
      ),
      body: _children[_currentIndex],
    );
  }
}

class HomeTab extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    // Replace with the content for the Home tab
    return Center(child: Text('Home Tab Content'));
  }
}
