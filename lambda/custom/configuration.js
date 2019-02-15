let config = {
  // TODO Add Application ID
  appId: "amzn1.ask.skill.a91efa42-6260-4cb9-b60f-09f1c93da274",
  // TODO Add an appropriate welcome message.
  welcome_message: "Welcome to mHack",

  number_feeds_per_prompt: 3,
  speak_only_feed_title: true,
  display_only_title_in_card: true,

  // TODO Add the category name (to feed name) and the corresponding URL
  feeds: {
    CATEGORY_NAME_1:
      "https://www2.morgenweb.de/austausch/vk_abfrage.php?xml=json&typ=0&ab=2019-02-14&bis=2019-02-14",
    CATEGORY_NAME_2:
      "https://www2.morgenweb.de/austausch/vk_abfrage.php?out=xml&typ=0&ab=2019-02-14&bis=2019-02-14&rid%5b%5d=31&rid%5b%5d=17&rid%5b%5d=59&rid%5b%5d=28&rid%5b%5d=34&oid%5b%5d=143&oid%5b%5d=225&oid%5b%5d=232&oid%5b%5d=436&oid%5b%5d=457",
    CATEGORY_NAME_3:
      "https://www2.morgenweb.de/austausch/vk_abfrage2.php?out=xml&typ=3&ort=Mannheim&rubrik=Kino"
  },

  speech_style_for_numbering_feeds: "Item",

  // TODO Add the s3 Bucket Name, dynamoDB Table Name and Region
  s3BucketName: "mhack",
  dynamoDBTableName: "mhackEntries",
  dynamoDBRegion: "us-east-1"
};

module.exports = config;
