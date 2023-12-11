import 'dart:io';

import 'package:flutter/material.dart';
import 'package:telas_c/componentes/Postmodel.dart';
import 'package:telas_c/servicos/dados_autenticados.dart';
import 'package:telas_c/servicos/posts.dart';
import 'package:telas_c/servicos/Apipetservicos.dart';
import 'package:telas_c/servicos/Apiservicos.dart';

class FeedPosts extends StatefulWidget {
  @override
  _FeedPostsState createState() => _FeedPostsState();
}

class _FeedPostsState extends State<FeedPosts> {
  List<PostModel> posts = [];

  @override
  void initState() {
    super.initState();
    carregarPosts();
  }

  Future<void> carregarPosts() async {
    try {
      final List<PostModel> postsCarregados = await Feed(Dados_Usuario.id);

      setState(() {
        posts = postsCarregados;
      });
    } catch (error) {
      print('Erro ao carregar posts: $error');
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Feed de Posts'),
      ),
      body: ListView.builder(
        itemCount: posts.length,
        itemBuilder: (context, index) {
          return PostItem(posts[index]);
        },
      ),
    );
  }
}

class PostItem extends StatelessWidget {
  final PostModel post;

  PostItem(this.post);

  @override
  Widget build(BuildContext context) {
    return Card(
      margin: EdgeInsets.all(8.0),
      child: Padding(
        padding: EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              post.text,
              style: TextStyle(
                fontSize: 18.0,
                fontWeight: FontWeight.bold,
              ),
            ),
            SizedBox(height: 8.0),
            Image.file(File(post.photo)), // Exibindo a foto anexada
            SizedBox(height: 8.0),
            FutureBuilder<String>(
              future: GetUser(post.userId),
              builder: (context, snapshot) {
                if (snapshot.connectionState == ConnectionState.waiting) {
                  return CircularProgressIndicator(); // ou outro indicador de carregamento
                } else if (snapshot.hasError) {
                  return Text('Erro ao carregar nome do usuário');
                } else {
                  final user_name = snapshot.data;
                  return Text(
                    'Postado por: $user_name',
                    style: TextStyle(
                      fontSize: 16.0,
                      fontWeight: FontWeight.bold,
                    ),
                  );
                }
              },
            ),
            SizedBox(height: 8.0),
            FutureBuilder<String>(
              future: GetPet(post.petId),
              builder: (context, snapshot) {
                if (snapshot.connectionState == ConnectionState.waiting) {
                  return CircularProgressIndicator(); // ou outro indicador de carregamento
                } else if (snapshot.hasError) {
                  return Text('Erro ao carregar nome do pet');
                } else {
                  final pet_name = snapshot.data;
                  return Text(
                    'Pet: $pet_name',
                    style: TextStyle(
                      fontSize: 16.0,
                      fontStyle: FontStyle.italic,
                    ),
                  );
                }
              },
            ),
          ],
        ),
      ),
    );
  }
}