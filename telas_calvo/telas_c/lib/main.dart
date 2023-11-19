// ignore_for_file: unused_import

import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:telas_c/Pages/Pet_editar.dart';
import 'package:telas_c/Pages/Petadicionar.dart';
import 'package:telas_c/Pages/approute/AppRoute.dart';
import 'package:telas_c/Pages/cadastroPet.dart';
import 'package:telas_c/Pages/cadastropage.dart';
import 'package:telas_c/Pages/home.dart';
import 'package:telas_c/Pages/Profile.dart';
import 'package:telas_c/approute/AppRoute.dart';
import 'package:telas_c/componentes/Pets.dart';
import 'Pages/loginpage.dart';
import 'Pages/editar_user.dart';
import 'package:telas_c/Pages/Profile.dart';

void main() => runApp(const MyApp());

class MyApp extends StatelessWidget {
  const MyApp({super.key});
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MultiProvider(
        providers: [ChangeNotifierProvider(create: (ctx) => Pets())],
        child: MaterialApp(
          debugShowCheckedModeBanner: false,
          title: 'Bicharia',
          home: Editar_Users(),
          routes: {
            Routaaas.Animal_Cadastro: (_) => const PetCadastros(),
            Routaaas.Animal_adicionar: (_) => AdicionarAnimal(),
            Routaaas.Home: (_) => Home(),
            Routaaas.Login: (_) => LoginPage(),
            Routaaas.Cadastro_user: (_) => CadastroPage(),
            Routaaas.Animal_editar: (_) => Editar_animal(),
            Routaaas.Profile: (_) => Profile()
          },
        ));
  }
}
