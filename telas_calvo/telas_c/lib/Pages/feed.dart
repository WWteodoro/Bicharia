import 'package:flutter/material.dart';
import 'package:telas_c/componentes/model_post.dart';
import 'package:telas_c/servicos/dados_autenticados.dart';
import 'package:telas_c/servicos/posts.dart'; // Importe seu arquivo posts.dart

class FeedPosts extends StatefulWidget {
  @override
  _FeedPostsState createState() => _FeedPostsState();
}

class _FeedPostsState extends State<FeedPosts> {
  List<PostModel> posts = [];

  @override
  void initState() {
    super.initState();
    // Carregue os posts ao iniciar o widget
    carregarPosts();
  }

  Future<void> carregarPosts() async {
    List<PostModel> listaPosts = await listar_posts(Dados_Usuario.id);
    setState(() {
      posts = listaPosts;
    });
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
          return PostItem(post: posts[index]);
        },
      ),
    );
  }
}

class PostItem extends StatelessWidget {
  final PostModel post;

  const PostItem({required this.post});

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
            // Adicione outros widgets para exibir informações adicionais do post
          ],
        ),
      ),
    );
  }
}