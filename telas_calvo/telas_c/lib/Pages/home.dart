// ignore_for_file: prefer_const_constructors, unnecessary_new

import 'package:flutter/material.dart';
import 'package:telas_c/Pages/add.dart';
import 'package:telas_c/Pages/loginpage.dart';
import 'package:telas_c/Pages/Pet_editar.dart';
import 'package:telas_c/Pages/profile.dart';
import 'package:telas_c/Pages/Petadicionar.dart';

class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  int _currentIndex = 0;
   final List<Widget> _children = [HomePage(), Add(), Editar_animal()];
  void onTabPressed(int index){
    setState(() {
      _currentIndex = index;
    });
  }
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: const Text("Home"),
          actions: <Widget>[
            IconButton(
              icon: Icon(Icons.logout),
              onPressed: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(builder: (context) =>  LoginPage()),
                 );
              }
            )
          ],
          backgroundColor: Colors.orange,
        ),
        drawer: Drawer(
          child: ListView(children: <Widget>[
            DrawerHeader(
                decoration: BoxDecoration(color: Colors.orange),
                child: Text('User Placeholder')),
            ListTile(
              title: Text('Perfil'),
              onTap: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(builder: (context) => Profile()),
                );
              }
            ),
            ListTile(
              title: Text('Novo Pet'),
              onTap: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(builder: (context) => Editar_animal()), //muda aqui de volta dps
                );
              }
            )
          ]),
        ),
      bottomNavigationBar: BottomNavigationBar(
        onTap: onTabPressed,
        currentIndex: _currentIndex,
        showSelectedLabels: false,
        showUnselectedLabels: false,
        items: [
          BottomNavigationBarItem(icon: new Icon(Icons.home), label: 'Home'),
          BottomNavigationBarItem(icon: new Icon(Icons.add), label: 'Novo Post'),
          BottomNavigationBarItem(icon: new Icon(Icons.pets), label: 'Pets'),
        ]
      ),
      body: _children[_currentIndex],
    );    
  }
}