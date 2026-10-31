// Greeting phrases in multiple languages for the soundboard app.
export interface Greeting {
  id: string
  phrase: string
  language: string
  translation?: string
  frequency?: number
  usage?: string
}

export const greetings: Greeting[] = [
  // East Asian
  { id: 'zh-hi', phrase: '你好', language: 'Chinese', translation: 'Hello', frequency: 220, usage: 'Greeting' },
  { id: 'zh-hk', phrase: '早上好', language: 'Chinese (Cantonese)', translation: 'Good morning', frequency: 261.63, usage: 'Morning' },
  { id: 'ja', phrase: 'こんにちは', language: 'Japanese', translation: 'Hello', frequency: 329.63, usage: 'Greeting' },
  { id: 'ko', phrase: '안녕하세요', language: 'Korean', translation: 'Hello', frequency: 392, usage: 'Greeting' },
  { id: 'vi', phrase: 'Xin chào', language: 'Vietnamese', translation: 'Hello / Welcome', frequency: 440, usage: 'Greeting' },
  { id: 'th', phrase: 'สวัสดีครับ', language: 'Thai', translation: 'Hello (male)', frequency: 493.88, usage: 'Greeting' },
  { id: 'lo', phrase: 'ສະບາຍດີ', language: 'Lao', translation: 'Hello', frequency: 523.25, usage: 'Greeting' },
  { id: 'ru', phrase: 'Здравствуйте', language: 'Russian', translation: 'Hello / Peace be with you', frequency: 220, usage: 'Greeting' },
  { id: 'uk', phrase: 'Доброго дня', language: 'Ukrainian', translation: 'Good day', frequency: 261.63, usage: 'Greeting' },
  { id: 'pl', phrase: 'Dzień dobry', language: 'Polish', translation: 'Good day', frequency: 329.63, usage: 'Greeting' },
  { id: 'cs', phrase: 'Dobrý den', language: 'Czech', translation: 'Good day', frequency: 392, usage: 'Greeting' },
  { id: 'sk', phrase: 'Dobrý deň', language: 'Slovak', translation: 'Good day', frequency: 440, usage: 'Greeting' },
  { id: 'es', phrase: 'Hola', language: 'Spanish', translation: 'Hello', frequency: 493.88, usage: 'Greeting' },
  { id: 'pt', phrase: 'Olá', language: 'Portuguese', translation: 'Hello', frequency: 523.25, usage: 'Greeting' },
  { id: 'it', phrase: 'Buongiorno', language: 'Italian', translation: 'Good morning', frequency: 587.33, usage: 'Greeting' },
  { id: 'fr', phrase: 'Bonjour', language: 'French', translation: 'Hello', frequency: 659.25, usage: 'Greeting' },
  { id: 'ro', phrase: 'Bună ziua', language: 'Romanian', translation: 'Good day', frequency: 698.46, usage: 'Greeting' },
  { id: 'la', phrase: 'Salve', language: 'Latin', translation: 'Greetings', frequency: 783.99, usage: 'Greeting' },
  { id: 'de', phrase: 'Hallo', language: 'German', translation: 'Hello', frequency: 880, usage: 'Greeting' },
  { id: 'nl', phrase: 'Hallo', language: 'Dutch', translation: 'Hello', frequency: 880, usage: 'Greeting' },
  { id: 'af', phrase: 'Hallo', language: 'Afrikaans', translation: 'Hello', frequency: 880, usage: 'Greeting' },
  { id: 'da', phrase: 'Hej', language: 'Danish', translation: 'Hi', frequency: 880, usage: 'Greeting' },
  { id: 'sv', phrase: 'Hej', language: 'Swedish', translation: 'Hi', frequency: 880, usage: 'Greeting' },
  { id: 'no', phrase: 'Hei', language: 'Norwegian', translation: 'Hi', frequency: 880, usage: 'Greeting' },
  { id: 'cy', phrase: 'Helo', language: 'Welsh', translation: 'Hello', frequency: 659.25, usage: 'Greeting' },
  { id: 'ga', phrase: 'Dia dhuit', language: 'Irish', translation: 'God be with you', frequency: 587.33, usage: 'Greeting' },
  { id: 'el', phrase: 'Γεια σας', language: 'Greek', translation: 'Hello', frequency: 659.25, usage: 'Greeting' },
  { id: 'he', phrase: 'שלום', language: 'Hebrew', translation: 'Peace/Shalom', frequency: 698.46, usage: 'Greeting' },
  { id: 'ar', phrase: 'مرحبا', language: 'Arabic', translation: 'Welcome/Hello', frequency: 587.33, usage: 'Greeting' },
  { id: 'hi', phrase: 'नमस्ते', language: 'Hindi', translation: 'Namaste / Hello', frequency: 523.25, usage: 'Greeting' },
  { id: 'bn', phrase: 'নমস্কার', language: 'Bengali', translation: 'Hello', frequency: 493.88, usage: 'Greeting' },
  { id: 'ur', phrase: 'ہیلو', language: 'Urdu', translation: 'Hello', frequency: 392, usage: 'Greeting' },
  { id: 'pa', phrase: 'ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ', language: 'Punjabi', translation: 'Peace be upon you', frequency: 329.63, usage: 'Greeting' },
  { id: 'ta', phrase: 'வணக்கம்', language: 'Tamil', translation: 'Hello / Greeting', frequency: 261.63, usage: 'Greeting' },
  { id: 'te', phrase: 'నమస్కారం', language: 'Telugu', translation: 'Hello', frequency: 261.63, usage: 'Greeting' },
  { id: 'kn', phrase: 'ನಮಸ್ಕಾರ', language: 'Kannada', translation: 'Hello', frequency: 220, usage: 'Greeting' },
  { id: 'ml', phrase: 'ഹലോ', language: 'Malayalam', translation: 'Hello', frequency: 261.63, usage: 'Greeting' },
  { id: 'ne', phrase: 'नमस्कार', language: 'Nepali', translation: 'Hello', frequency: 220, usage: 'Greeting' },
  { id: 'tr', phrase: 'Merhaba', language: 'Turkish', translation: 'Hello', frequency: 220, usage: 'Greeting' },
  { id: 'fa', phrase: 'سلام', language: 'Persian', translation: 'Hello / Peace', frequency: 329.63, usage: 'Greeting' },
  { id: 'ru', phrase: 'Привет', language: 'Russian', translation: 'Hi', frequency: 220, usage: 'Casual' },
  { id: 'fr', phrase: 'Salut', language: 'French', translation: 'Hi/Bye', frequency: 261.63, usage: 'Casual' },
  { id: 'es', phrase: '¿Cómo estás?', language: 'Spanish', translation: 'How are you?', frequency: 329.63, usage: 'Question' },
  { id: 'it', phrase: 'Come stai?', language: 'Italian', translation: 'How are you?', frequency: 392, usage: 'Question' },
  { id: 'ar', phrase: 'كيف حالك؟', language: 'Arabic', translation: 'How are you?', frequency: 392, usage: 'Question' },
  { id: 'ko', phrase: '잘 지냈어요?', language: 'Korean', translation: 'How have you been?', frequency: 440, usage: 'Question' },
  { id: 'ja', phrase: 'お元気ですか', language: 'Japanese', translation: 'How are you?', frequency: 493.88, usage: 'Question' },
  { id: 'vi', phrase: 'Bạn khỏe không?', language: 'Vietnamese', translation: 'How are you?', frequency: 493.88, usage: 'Question' },
  { id: 'th', phrase: 'สบายดีไหม', language: 'Thai', translation: 'How are you?', frequency: 523.25, usage: 'Question' },
  { id: 'ro', phrase: 'Ce faceți?', language: 'Romanian', translation: 'How are you?', frequency: 587.33, usage: 'Question' },
  { id: 'cs', phrase: 'Jak se máš?', language: 'Czech', translation: 'How are you (informal)?', frequency: 659.25, usage: 'Question' },
  { id: 'bg', phrase: 'Как си?', language: 'Bulgarian', translation: 'How are you?', frequency: 698.46, usage: 'Question' },
  { id: 'hr', phrase: 'Kako si?', language: 'Croatian', translation: 'How are you?', frequency: 698.46, usage: 'Question' },
  { id: 'sl', phrase: 'Kako si?', language: 'Slovenian', translation: 'How are you?', frequency: 698.46, usage: 'Question' },
  { id: 'et', phrase: 'Tere', language: 'Estonian', translation: 'Hello', frequency: 523.25, usage: 'Greeting' },
  { id: 'lt', phrase: 'Labas', language: 'Lithuanian', translation: 'Hello', frequency: 523.25, usage: 'Greeting' },
  { id: 'lv', phrase: 'Sveiki', language: 'Latvian', translation: 'Hello', frequency: 523.25, usage: 'Greeting' },
  { id: 'hy', phrase: 'Բարեւ', language: 'Armenian', translation: 'Hello', frequency: 523.25, usage: 'Greeting' },
  { id: 'ka', phrase: 'გამარჯობა', language: 'Georgian', translation: 'Hello', frequency: 523.25, usage: 'Greeting' },
  { id: 'am', phrase: 'ሰላም', language: 'Amharic', translation: 'Peace/Slam', frequency: 523.25, usage: 'Greeting' },
  { id: 'yo', phrase: 'Báwo ni', language: 'Yoruba', translation: 'Hello', frequency: 440, usage: 'Greeting' },
  { id: 'ig', phrase: 'Ndewo', language: 'Igbo', translation: 'Hello', frequency: 440, usage: 'Greeting' },
  { id: 'ha', phrase: 'Sannu', language: 'Hausa', translation: 'Hello', frequency: 440, usage: 'Greeting' },
  { id: 'zu', phrase: 'Molo', language: 'Zulu', translation: 'Hello (plural)', frequency: 440, usage: 'Greeting' },
  { id: 'xh', phrase: 'Molo', language: 'Xhosa', translation: 'Hello (plural)', frequency: 440, usage: 'Greeting' },
  { id: 'sw', phrase: 'Shikamoo', language: 'Swahili', translation: 'Respectful greeting', frequency: 392, usage: 'Greeting' },
  { id: 'si', phrase: 'Ayubowan', language: 'Sinhala', translation: 'Hello', frequency: 392, usage: 'Greeting' },
  { id: 'my', phrase: 'မင်္ဂလာပွဲ', language: 'Burmese', translation: 'Welcome', frequency: 392, usage: 'Greeting' },
  { id: 'km', phrase: 'ជំរាបសួរ', language: 'Khmer', translation: 'Hello / Welcome', frequency: 329.63, usage: 'Greeting' },
  { id: 'mm', phrase: 'မင်္ဂလာပါ', language: 'Burmese', translation: 'Hello', frequency: 329.63, usage: 'Greeting' },
  { id: 'as', phrase: 'নমস্কার', language: 'Assamese', translation: 'Hello', frequency: 329.63, usage: 'Greeting' },
  { id: 'or', phrase: 'ନମସ୍ତେ', language: 'Odia', translation: 'Hello', frequency: 261.63, usage: 'Greeting' },
  { id: 'bs', phrase: 'Zdravo', language: 'Bosnian', translation: 'Hello', frequency: 261.63, usage: 'Greeting' },
  { id: 'mk', phrase: 'Здраво', language: 'Macedonian', translation: 'Hello', frequency: 329.63, usage: 'Greeting' },
  { id: 'sq', phrase: 'Tungjatjeta', language: 'Albanian', translation: 'Hello /Greetings', frequency: 261.63, usage: 'Greeting' },
  { id: 'mt', phrase: 'Hello', language: 'Maltese', translation: 'Hello', frequency: 329.63, usage: 'Greeting' },
  { id: 'lb', phrase: 'Moien', language: 'Luxembourgish', translation: 'Hello', frequency: 440, usage: 'Greeting' },
  { id: 'is', phrase: 'Halló', language: 'Icelandic', translation: 'Hello', frequency: 493.88, usage: 'Greeting' },
  { id: 'mt', phrase: 'Bonġu', language: 'Maltese', translation: 'Good morning', frequency: 440, usage: 'Greeting' },
  { id: 'az', phrase: 'Salam', language: 'Azerbaijani', translation: 'Hello', frequency: 261.63, usage: 'Greeting' },
  { id: 'ty', phrase: 'Ia orana', language: 'Tahitian', translation: 'Hello', frequency: 261.63, usage: 'Greeting' },
  { id: 'sm', phrase: 'Talofa', language: 'Samoan', translation: 'Hello', frequency: 329.63, usage: 'Greeting' },
  { id: 'to', phrase: 'Talofa', language: 'Tongan', translation: 'Hello', frequency: 329.63, usage: 'Greeting' },
  { id: 'fh', phrase: 'Afio', language: 'Fijian', translation: 'Hello', frequency: 329.63, usage: 'Greeting' },
  { id: 'iu', phrase: 'Tanngovitat', language: 'Inuktitut', translation: 'Hello', frequency: 329.63, usage: 'Greeting' },
  { id: 'mi', phrase: 'Kia ora', language: 'Māori', translation: 'Hello', frequency: 329.63, usage: 'Greeting' },
  { id: 'ln', phrase: 'Mbote', language: 'Lingala', translation: 'Hello', frequency: 261.63, usage: 'Greeting' },
  { id: 'kg', phrase: 'Mbote', language: 'Kinyarwanda', translation: 'Hello', frequency: 329.63, usage: 'Greeting' },
  { id: 'rn', phrase: 'Mwirwe', language: 'Rundi', translation: 'Hello', frequency: 261.63, usage: 'Greeting' },
  { id: 'om', phrase: 'Saabaan', language: 'Oromo', translation: 'Hello', frequency: 329.63, usage: 'Greeting' },
  { id: 'so', phrase: 'Safir', language: 'Somali', translation: 'Hello', frequency: 329.63, usage: 'Greeting' },
  { id: 'ti', phrase: 'Salame', language: 'Tigrinya', translation: 'Hello', frequency: 329.63, usage: 'Greeting' },
  { id: 'wo', phrase: 'Salaam', language: 'Wolof', translation: 'Hello', frequency: 329.63, usage: 'Greeting' },
  { id: 'zu', phrase: 'Sawubona', language: 'Zulu', translation: 'Hello (singular)', frequency: 261.63, usage: 'Greeting' },
  { id: 'nr', phrase: 'Abaudla', language: 'Ndebele', translation: 'Hello', frequency: 329.63, usage: 'Greeting' },
  { id: 'st', phrase: 'Dumela', language: 'Sotho', translation: 'Hello', frequency: 329.63, usage: 'Greeting' },
  { id: 'tn', phrase: 'Dumela', language: 'Tswana', translation: 'Hello', frequency: 261.63, usage: 'Greeting' },
  { id: 've', phrase: 'Dumela', language: 'Venda', translation: 'Hello', frequency: 261.63, usage: 'Greeting' },
  { id: 'nr', phrase: 'Dumela', language: 'Ndebele', translation: 'Hello', frequency: 261.63, usage: 'Greeting' },
  { id: 'ts', phrase: 'Mabuza', language: 'Tsonga', translation: 'Hello', frequency: 261.63, usage: 'Greeting' },
  { id: 'ss', phrase: 'Dumelang', language: 'Siswati', translation: 'Hello', frequency: 261.63, usage: 'Greeting' },
  { id: 'sw', phrase: 'Hujambo', language: 'Swahili', translation: 'Hello', frequency: 392, usage: 'Greeting' },
  { id: 'km', phrase: 'Choum', language: 'Khmer', translation: 'Hello', frequency: 392, usage: 'Greeting' },
  { id: 'my', phrase: 'ဆင်းသက်လိုက်', language: 'Burmese', translation: 'Welcome', frequency: 440, usage: 'Greeting' },
]

export class GreetingApp {
  public greetings: Greeting[]
  public languageFilter: string
  public history: Greeting[]

  constructor() {
    this.greetings = [...greetings]
    this.languageFilter = 'All'
    this.history = []
  }

  public get all(): Greeting[] {
    return this.greetings
  }

  public filterByLanguage(lang: string): Greeting[] {
    if (lang === 'All') return this.greetings
    return this.greetings.filter(g => g.language === lang)
  }

  public get byLanguage(): Map<string, Greeting[]> {
    const map = new Map<string, Greeting[]>()
    for (const g of this.greetings) {
      if (!map.has(g.language)) map.set(g.language, [])
      map.get(g.language)!.push(g)
    }
    return map
  }

  public play(g: Greeting): void {
    const ctx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)()
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()
    osc.connect(gain)
    gain.connect(ctx.destination)
    osc.type = 'sine'
    osc.frequency.setValueAtTime(g.frequency || 440, ctx.currentTime)
    gain.gain.setValueAtTime(0.15, ctx.currentTime)
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.5)
    osc.start(ctx.currentTime)
    osc.stop(ctx.currentTime + 1.5)
    this.history.push(g)
  }

  public get last(): Greeting | undefined {
    return this.history[this.history.length - 1]
  }
}
