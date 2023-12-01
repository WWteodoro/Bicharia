// ignore_for_file: unused_import

import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:telas_c/Pages/Pet_editar.dart';
import 'package:telas_c/Pages/Petadicionar.dart';
import 'package:telas_c/Pages/approute/AppRoute.dart';
import 'package:telas_c/Pages/cadastropage.dart';
import 'package:telas_c/Pages/cadastropet.dart';
import 'package:telas_c/Pages/home.dart';
import 'package:telas_c/Pages/Profile.dart';
import 'package:telas_c/approute/AppRoute.dart';
import 'package:telas_c/componentes/Pets.dart';
import 'Pages/loginpage.dart';
import 'Pages/editar_user.dart';
import 'Pages/Petadicionar.dart';
void main() => runApp(const MyApp());

class MyApp extends StatelessWidget {
  const MyApp({super.key});
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
        return MaterialApp(
          debugShowCheckedModeBanner: false,
          title: 'Bicharia',
          home: CadastroPage(),
          routes: {
            // Routaaas.Animal_adicionar: (_) => AdicionarAnimal(),
            Routaaas.Home: (_) => HomePage(),
            Routaaas.Login: (_) => LoginPage(),
            Routaaas.Cadastro_user: (_) => CadastroPage(),
            Routaaas.Profile: (_) => Profile()
          },
        );
  }
}
