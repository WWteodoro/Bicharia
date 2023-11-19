import 'package:flutter/material.dart';
import 'package:telas_c/Pages/loginpage.dart';

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
                    MaterialPageRoute(builder: (context) => LoginPage()),
                  );
                })
          ],
        ),
        floatingActionButton: FloatingActionButton(
            onPressed:
                () {}, // No futuro redirecionará para uma tela de "Tweetar"
            child: Icon(Icons.add)),
        drawer: Drawer(
          child: ListView(children: <Widget>[
            DrawerHeader(
                decoration: BoxDecoration(color: Colors.orange),
                child: Text('User Placeholder')),
            ListTile(
                title: Text('Perfil'),
                onTap: () {
                  //Navigator.push(
                  //context,
                  //MaterialPageRoute(builder: (context) => const ()),
                  //);
                }),
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
