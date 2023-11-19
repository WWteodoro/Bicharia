// ignore: camel_case_types
class Dados_Usuario {
  static late String id = "269b794f-2cac-4554-bfba-1cc16a30dd24";
  static late String nome = "Calvo calvo";
  static late String email = "exemplo@usuario.com";
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
