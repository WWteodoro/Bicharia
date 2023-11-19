import 'package:flutter/material.dart';
import 'package:telas_c/Pages/loginpage.dart';
import 'package:telas_c/Pages/profile.dart';
import 'package:telas_c/Pages/Petadicionar.dart';

class Home extends StatelessWidget {
  const Home({super.key});

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
                  MaterialPageRoute(builder: (context) => AdicionarAnimal()),
                )
              }
            )
          ]),
        ),
        bottomNavigationBar: BottomNavigationBar(
          items: [
            BottomNavigationBarItem(
              icon: Icon(Icons.home),
              label: 'home',
            ),
            BottomNavigationBarItem(icon: Icon(Icons.add), label: 'Tweet'
                // onPressed: () {Navigator.pushNamed(context,);}
                ),
            BottomNavigationBarItem(icon: Icon(Icons.search), label: 'search'),
          ],
        ));
  }
}
