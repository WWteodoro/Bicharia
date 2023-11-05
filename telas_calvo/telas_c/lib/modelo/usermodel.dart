import 'dart:convert';

Cliente ClientefromJson(String str) => Cliente.fromJson(json.decode(str));
String ClienteToJson(Cliente data) => json.encode(data.toJson());

class Cliente {
  final String name;
  final String email;
  final String password;

  Cliente({
    required this.name,
    required this.email,
    required this.password,
  });

  factory Cliente.fromJson(Map<String, dynamic> json) => Cliente(
        name: json["name"] as String,
        email: json["email"] as String,
        password: json["password"] as String,
      );

  Map<String, dynamic> toJson() => {
        "name": name,
        "email": email,
        "password": password,
      };
}
