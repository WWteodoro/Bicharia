
class PostModel {
  final String id;
  final DateTime dated;
  final String photo;
  final String userId;
  final String text;


  int likesCount;

  PostModel(
      {required this.id,
      required this.dated,
      required this.photo,
      required this.userId,
      required this.text,
});
  factory PostModel.fromJson(Map<String, dynamic> json) => PostModel(
        id: json["id"] as String,
        dated: json["creator"] as DateTime,
        photo: json["photo"] as String,
        userId: json["userId"] as String,
        text: json["text"] as String,
      );
  Map<String, dynamic> toJson() => {
        "id": id,
        "dated": dated,
        "photo": photo,
        "userId": userId,
        "text": text,
      };
}