import 'dart:convert';

Cliente ClienteFromJson(String str) => Cliente.fromJson(json.decode(str));
String ClienteToJson(Cliente data) => json.encode(data.toJson());

class Cliente {
  String name;
  String email;
  String password;

  Cliente({
    required this.name,
    required this.email,
    required this.password,
  });

  factory Cliente.fromJson(Map<String, dynamic> json) => Cliente(
        name: json["name"],
        email: json["email"],
        password: json["password"],
      );

  Map<String, dynamic> toJson() => {
        "name": name,
        "email": email,
        "password": password,
      };
}
