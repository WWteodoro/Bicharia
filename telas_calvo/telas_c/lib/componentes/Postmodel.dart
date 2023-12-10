
class PostModel {
  final String photo;
  final String userId;
  final String text;

  PostModel(
      {
      required this.photo,
      required this.userId,
      required this.text,
});
  factory PostModel.fromJson(Map<String, dynamic> json) => PostModel(
        photo: json["photo"] as String,
        userId: json["userId"] as String,
        text: json["text"] as String,
      );
  Map<String, dynamic> toJson() => {
        "photo": photo,
        "userId": userId,
        "text": text,
      };
}