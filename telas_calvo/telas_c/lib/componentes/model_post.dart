
class PostModel {
  final String id;
  final DateTime dated;
  final String photo;
  final String userId;
  final String text;
  final DateTime createdAt;
  final DateTime updatedAt;

  PostModel(
      {required this.id,
      required this.dated,
      required this.photo,
      required this.userId,
      required this.text,
      required this.createdAt,
      required this.updatedAt,
});
  factory PostModel.fromJson(Map<String, dynamic> json) => PostModel(
        id: json["id"] as String,
        dated: json["creator"] as DateTime,
        photo: json["photo"] as String,
        userId: json["userId"] as String,
        text: json["text"] as String,
        createdAt: json["createdAt"] as DateTime,
        updatedAt: json["updatedAt"] as DateTime,
      );
  Map<String, dynamic> toJson() => {
        "id": id,
        "dated": dated,
        "photo": photo,
        "userId": userId,
        "text": text,
        "createdAt": createdAt,
        "updatedAt": updatedAt,
      };
}