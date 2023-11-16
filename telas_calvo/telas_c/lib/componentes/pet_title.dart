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
        title: Text(dog.nome),
        subtitle: Text(dog.tipo),
        trailing: Container(
          width: 100,
          child: Row(
            children: <Widget>[
<<<<<<< HEAD
              IconButton(onPressed: () {}, icon: Icon(Icons.edit)),
              IconButton(onPressed: () {}, icon: Icon(Icons.delete))
=======
              Text(dog.id),
              IconButton(
                onPressed: () {},
                icon: Icon(Icons.edit),
                tooltip: "Editar",
                splashRadius: 20.0,
              ),
              IconButton(
                onPressed: () {},
                icon: Icon(Icons.delete),
                tooltip: "Deletar",
                splashRadius: 20.0,
              )
>>>>>>> origin/telas
            ],
          ),
        ));
  }
}
