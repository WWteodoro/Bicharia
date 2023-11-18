import 'package:flutter/material.dart';
import 'package:telas_c/Pages/approute/AppRoute.dart';
import 'package:telas_c/Pages/loginpage.dart';

class Profile extends StatelessWidget {
  const Profile({super.key});
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
          backgroundColor: Colors.orange,
          title: Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              IconButton(
                  onPressed: () {
                    Navigator.of(context).pushNamed(Routaaas.Login);
                  },
                  icon: Icon(Icons.logout)),
              Text("Profile", style: TextStyle(color: Colors.white)),
              IconButton(
                  onPressed: () {
                    Navigator.of(context).pushNamed(Routaaas.Home);
                  },
                  icon: Icon(Icons.home)),
            ],
          )),
      body: ListView(
        padding: EdgeInsets.all(16),
        children: const [
          CircleAvatar(
              backgroundColor: Colors.orange,
              child: Icon(
                color: Colors.white,
                Icons.person,
                size: 90,
              ),
              radius: 90),
          SizedBox(
            height: 40,
          ),
          ListTile(
            title: Text(
              "guiguigui098@gmail.com",
              style: TextStyle(fontSize: 16),
            ),
            leading: Icon(Icons.email),
          ),
          SizedBox(
            height: 20,
          ),
          ListTile(
            title: Text(
              "Guilherme Almeida Lopes",
              style: TextStyle(fontSize: 16),
            ),
            leading: Icon(Icons.person),
          )
        ],
      ),
    );
  }
}
