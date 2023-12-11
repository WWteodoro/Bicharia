
class PostModel {
  final String photo;
  final String userId;
  final String text;
  final String petId;

  PostModel(
      {
      required this.photo,
      required this.userId,
      required this.text,
      required this.petId
});
  factory PostModel.fromJson(Map<String, dynamic> json) => PostModel(
        photo: json["photo"] as String,
        userId: json["userId"] as String,
        text: json["text"] as String,
        petId: json["petId"] as String,
      );
  Map<String, dynamic> toJson() => {
        "photo": photo,
        "userId": userId,
        "text": text,
        "petId": petId,
      };
}