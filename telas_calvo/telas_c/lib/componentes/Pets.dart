import 'dart:math';

import 'package:flutter/material.dart';
import 'package:telas_c/modelo/model_pet.dart';
import 'package:telas_c/modelo/pet_exemplos.dart';

class Pets with ChangeNotifier {
  final _itemns = {...MEU_PET};
  List<Pet> get all {
    return [..._itemns.values];
  }

  int get count {
    return _itemns.length;
  }

  void put(Pet pet) {
    if (pet == null) {
      return;
    }
    final id = Random().nextDouble().toString();
    _itemns.putIfAbsent(
        id, () => Pet(id: id, nome: pet.nome, tipo: pet.tipo, url: pet.url));
  }
}
