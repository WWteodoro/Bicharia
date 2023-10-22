import 'dart:convert';

Welcome welcomeFromJson(String str) => Welcome.fromJson(json.decode(str));

String welcomeToJson(Welcome data) => json.encode(data.toJson());

class Welcome {
    String name;
    String email;
    String password;

    Welcome({
        required this.name,
        required this.email,
        required this.password,
    });

    factory Welcome.fromJson(Map<String, dynamic> json) => Welcome(
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
