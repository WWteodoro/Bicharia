import 'package:telas_c/componentes/model_pet.dart';

class Pets{ 
  static List<Pet> pets=[];
}

class Dados_Usuario {
  static late String id;
  static late String nome ;
  static late String email;
}

class User {
  final String id;
  final String nome;
  final String email;
  const User({
    required this.id,
    required this.nome,
    required this.email,
  });
}
