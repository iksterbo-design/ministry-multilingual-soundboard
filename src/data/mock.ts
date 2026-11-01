export interface Phrase {
  id: number;
  key: string;
  lang: string;
  langName: string;
  emoji: string;
  en: string;
  tone: string;
  src: string;
}

export const Phrase: Phrase[] = [
  { id: 0, key: "Amazing Grace", lang: "en", langName: "English", emoji: "\ud83c\udfb5", en: "Amazing Grace", tone: "Hymn", src: "assets/phrases/amazing-grace.mp3" },
  { id: 1, key: "Hallelujah", lang: "en", langName: "English", emoji: "\ud83c\udfb6", en: "Hallelujah", tone: "Gospel", src: "assets/phrases/hallelujah.mp3" },
  { id: 2, key: "Yesu Bari", lang: "sw", langName: "Swahili", emoji: "\ud83d\ude4f", en: "Lord yesu", tone: "Gospel", src: "assets/phrases/yesu-bari.mp3" },
  { id: 3, key: "Habari Njema", lang: "sw", langName: "Swahili", emoji: "\ud83c\udf05", en: "Good news", tone: "Greeting", src: "assets/phrases/habari-njema.mp3" },
  { id: 4, key: "Salam Aleikum", lang: "ar", langName: "Arabic", emoji: "\u262a\ufe0f", en: "Peace be upon you", tone: "Greeting", src: "assets/phrases/salam-aleikum.mp3" },
  { id: 5, key: "La Ilaha Illallah", lang: "ar", langName: "Arabic", emoji: "\u2728", en: "There is no god", tone: "Declaration", src: "assets/phrases/la-ilaha-illallah.mp3" },
  { id: 6, key: "Aten\u00e7\u00e3o", lang: "pt", langName: "Portuguese", emoji: "\ud83c\udf38", en: "Attention", tone: "Praise", src: "assets/phrases/aten\u00e7\u00e3o.mp3" },
  { id: 7, key: "Ameni", lang: "fr", langName: "French", emoji: "\u271d\ufe0f", en: "Amen", tone: "Hymn", src: "assets/phrases/ameni.mp3" },
  { id: 8, key: "Alleluia", lang: "it", langName: "Italian", emoji: "\u2b50", en: "Praise", tone: "Hymn", src: "assets/phrases/alleluia.mp3" },
  { id: 9, key: "Shalom", lang: "he", langName: "Hebrew", emoji: "\ud83d\udd4a\ufe0f", en: "Peace", tone: "Greeting", src: "assets/phrases/shalom.mp3" }
];
