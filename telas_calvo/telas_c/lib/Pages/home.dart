import 'package:flutter/material.dart';

class Home extends StatelessWidget {
  const Home({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: const Text("Home"),
          actions: const <Widget>[
            IconButton(
              onPressed: null,
              icon: Icon(Icons.person),
            )
          ],
        ),
        floatingActionButton: const FloatingActionButton(
            onPressed:
                null, // No futuro redirecionará para uma tela de "Tweetar"
            child: Icon(Icons.add)),
        drawer: Drawer(
          child: ListView(children: const <Widget>[
            DrawerHeader(
                decoration: BoxDecoration(color: Colors.orange),
                child: Text('User Placeholder')),
            ListTile(
              title: Text('Perfil'),
              //Route futura para perfil
              //onTap: () {
              //  Navigator.pushNamed(context,routeName)
              //},
            ),
          ]),
        ),
        bottomNavigationBar: BottomNavigationBar(
          items: [
            BottomNavigationBarItem(
              icon: Icon(Icons.home),
              label: 'home',
            ),
            BottomNavigationBarItem(icon: Icon(Icons.search), label: 'search'),
            BottomNavigationBarItem(
                icon: Icon(Icons.account_circle), label: 'profile'),
          ],
        ));
  }
}
