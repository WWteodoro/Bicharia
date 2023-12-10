
import 'dart:convert';
import 'package:http/http.dart' as http;

Future<void> Create_Pet(String pet_name, String type, String? photo, String id_user) async {
  final pet = http.post(
    Uri.parse(
      "http://localhost:3333/pets",
    ),
    headers: <String, String>{
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: jsonEncode(<String, dynamic>{
      "name": pet_name,
      "type": type,
      "photo": photo,
      "owners": {
        "connect": {"id": id_user}
      },
    }),
  );
}
Future<void> Deletar_pet(String id) async {
  final http.Response response = await http.delete(
    Uri.parse("http://localhost:3333/pets/" + id),
    headers: <String, String>{
      'Content-Type': 'application/json; charset=UTF-8',
    },
  );
}
Future<void> update_pet_data(
  String id_user,String id,String nome,String tipo) async {
  final response =
      await http.put(Uri.parse('http://localhost:3333/users/' + id),
          headers: <String, String>{
            'Content-Type': 'application/json; charset=UTF-8',
          },
          body: jsonEncode(<String,String>{
          "newId":id,
          "name": nome,
          "type": tipo,
          })
    );
}
Future<Map<String,dynamic>>Petfetch(String id) async {
  final response = await http.get(Uri.parse('http://localhost:3333/pets/'+id));
  Map<String,dynamic>lista_de_pets=jsonDecode(response.body);
  print(lista_de_pets);
  return lista_de_pets;
}