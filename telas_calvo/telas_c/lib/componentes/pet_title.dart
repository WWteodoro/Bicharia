import 'package:flutter/material.dart';
import 'package:telas_c/modelo/model_pet.dart';

class PetTitle extends StatelessWidget {
  final Pet dog;
  const PetTitle(this.dog);
  @override
  Widget build(BuildContext context) {
    final avatar = CircleAvatar(backgroundImage: NetworkImage(dog.url));
    return ListTile(
        leading: avatar,
        title: Column(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [Text(dog.nome), Text(dog.id)],
        ),
        subtitle: Text(dog.tipo),
        trailing: Container(
          width: 100,
          child: Row(
            children: <Widget>[
              IconButton(onPressed: () {}, icon: Icon(Icons.edit)),
              IconButton(onPressed: () {}, icon: Icon(Icons.delete))
            ],
          ),
        ));
  }
}
