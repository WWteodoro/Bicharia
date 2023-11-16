// ignore_for_file: unused_import

import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:telas_c/Pages/cadastropet.dart';
import 'package:telas_c/componentes/Pets.dart';

import 'Pages/loginpage.dart';
import 'Pages/cadastropage.dart';
import "Pages/cadastropage.dart";
import 'Pages/home.dart';

void main() => runApp(const MyApp());

class MyApp extends StatelessWidget {
  const MyApp({super.key});
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MultiProvider(
        providers: [ChangeNotifierProvider(create: (ctx) => Pets())],
        child: MaterialApp(
            title: 'Bicharia',
            theme: ThemeData(
              colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepPurple),
              useMaterial3: false,
            ),
            home: PetCadastros()));
  }
}
