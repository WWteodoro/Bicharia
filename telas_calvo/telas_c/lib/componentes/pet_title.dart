import 'package:flutter/material.dart';
import 'package:telas_c/Pages/Pet_editar.dart';
import 'package:telas_c/modelo/model_pet.dart';

class PetTitle extends StatelessWidget {
  final Pet dog;
  const PetTitle(this.dog);
  @override
  Widget build(BuildContext context) {
    final avatar = CircleAvatar(backgroundImage: NetworkImage(dog.url));
    return ListTile(
        leading: avatar,
        title: Text(dog.nome),
        subtitle: Text(dog.tipo),
        trailing: Container(
          width: 100,
          child: Row(
            children: <Widget>[
              IconButton(
                  onPressed: () {
                    Navigator.push(
                        context,
                        MaterialPageRoute(
                            builder: (context) => Editar_animal()));
                  },
                  icon: Icon(Icons.edit)),
              IconButton(onPressed: () {}, icon: Icon(Icons.delete))
            ],
          ),
        ));
  }
}
