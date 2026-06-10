import { VocabWord } from "./types";

export const initialWords: VocabWord[] = [
  {
    id: "init-1",
    german: "der Tisch",
    english: "table",
    wordType: "noun",
    plural: "-e",
    level: 1,
    nextReview: Date.now(),
    cefrLevel: "A1",
    theme: "Furniture",
    examples: ["Der Tisch ist aus Holz. - The table is made of wood."]
  },
  {
    id: "init-2",
    german: "die Brücke",
    english: "bridge",
    wordType: "noun",
    plural: "-n",
    level: 2,
    nextReview: Date.now() + 43200000, // 12 hours from now
    cefrLevel: "A2",
    theme: "Infrastructure",
    examples: ["Die Brücke führt über den Fluss. - The bridge leads over the river."]
  },
  {
    id: "init-3",
    german: "das Buch",
    english: "book",
    wordType: "noun",
    plural: "¨-er",
    level: 3,
    nextReview: Date.now() + 172800000, // 2 days from now
    cefrLevel: "A1",
    theme: "Education",
    examples: ["Ich lese ein spannendes Buch. - I am reading an exciting book."]
  },
  {
    id: "init-4",
    german: "entscheiden",
    english: "to decide",
    wordType: "verb",
    present: "er entscheidet",
    preterite: "er entschied",
    perfect: "hat entschieden",
    verbClass: "unregelmäßig",
    level: 1,
    nextReview: Date.now(),
    cefrLevel: "B1",
    theme: "Mental Activity",
    examples: ["Wir müssen uns jetzt entscheiden. - We have to decide now."]
  },
  {
    id: "init-5",
    german: "reisen",
    english: "to travel",
    wordType: "verb",
    present: "er reist",
    preterite: "er reiste",
    perfect: "ist gereist",
    verbClass: "regelmäßig",
    level: 2,
    nextReview: Date.now() + 43200000,
    cefrLevel: "A2",
    theme: "Travel",
    examples: ["Sie reist im Sommer nach Japan. - She is traveling to Japan in the summer."]
  },
  {
    id: "init-6",
    german: "müssen",
    english: "must / to have to",
    wordType: "verb",
    present: "er muss",
    preterite: "er musste",
    perfect: "hat gemusst",
    verbClass: "modal",
    level: 4,
    nextReview: Date.now() + 604800000, // 1 week from now
    cefrLevel: "A1",
    theme: "Grammar",
    examples: ["Ich muss heute früh aufstehen. - I have to get up early today."]
  },
  {
    id: "init-7",
    german: "wunderbar",
    english: "wonderful",
    wordType: "adjective",
    level: 3,
    nextReview: Date.now() + 172800000,
    cefrLevel: "A1",
    theme: "Description",
    examples: ["Das Wetter heute ist wunderbar. - The weather today is wonderful."]
  },
  {
    id: "init-8",
    german: "wichtig",
    english: "important",
    wordType: "adjective",
    level: 1,
    nextReview: Date.now(),
    cefrLevel: "A1",
    theme: "Description",
    examples: ["Es ist wichtig, jeden Tag zu üben. - It is important to practice every day."]
  },
  {
    id: "init-9",
    german: "plötzlich",
    english: "suddenly",
    wordType: "adverb",
    level: 2,
    nextReview: Date.now() + 43200000,
    cefrLevel: "B1",
    theme: "Time",
    examples: ["Plötzlich fing es an zu regnen. - Suddenly it started to rain."]
  },
  {
    id: "init-10",
    german: "oft",
    english: "often",
    wordType: "adverb",
    level: 5,
    nextReview: Date.now() + 2592000000, // 30 days from now
    cefrLevel: "A1",
    theme: "Frequency",
    examples: ["Wir gehen oft im Wald spazieren. - We often go for walks in the forest."]
  },
  {
    id: "init-11",
    german: "mit",
    english: "with",
    wordType: "preposition",
    level: 4,
    nextReview: Date.now() + 604800000,
    cefrLevel: "A1",
    theme: "Grammar",
    examples: ["Ich trinke Kaffee am liebsten mit Milch. - I prefer to drink coffee with milk."]
  },
  {
    id: "init-12",
    german: "für",
    english: "for",
    wordType: "preposition",
    level: 3,
    nextReview: Date.now() + 172800000,
    cefrLevel: "A1",
    theme: "Grammar",
    examples: ["Dieses Geschenk ist für dich. - This gift is for you."]
  },
  {
    id: "init-13",
    german: "jemand",
    english: "someone / somebody",
    wordType: "pronoun",
    level: 2,
    nextReview: Date.now() + 43200000,
    cefrLevel: "A2",
    theme: "Grammar",
    examples: ["Hat jemand meinen Schlüssel gesehen? - Has anyone seen my key?"]
  },
  {
    id: "init-14",
    german: "etwas",
    english: "something / some",
    wordType: "pronoun",
    level: 4,
    nextReview: Date.now() + 604800000,
    cefrLevel: "A1",
    theme: "Grammar",
    examples: ["Möchtest du etwas essen? - Would you like something to eat?"]
  },
  {
    id: "init-15",
    german: "weil",
    english: "because",
    wordType: "conjunction",
    level: 3,
    nextReview: Date.now() + 172800000,
    cefrLevel: "A2",
    theme: "Grammar",
    examples: ["Ich lerne Deutsch, weil ich in Berlin arbeiten möchte. - I am learning German because I want to work in Berlin."]
  },
  {
    id: "init-16",
    german: "obwohl",
    english: "although / even though",
    wordType: "conjunction",
    level: 1,
    nextReview: Date.now(),
    cefrLevel: "B1",
    theme: "Grammar",
    examples: ["Er geht spazieren, obwohl es kalt ist. - He is going for a walk even though it is cold."]
  },
  {
    id: "init-17",
    german: "Guten Tag!",
    english: "Good day! / Hello!",
    wordType: "phrase",
    level: 5,
    nextReview: Date.now() + 2592000000,
    cefrLevel: "A1",
    theme: "Greeting",
    examples: ["Guten Tag, wie geht es Ihnen heute? - Good day, how are you doing today?"]
  },
  {
    id: "init-18",
    german: "Es tut mir leid.",
    english: "I am sorry.",
    wordType: "phrase",
    level: 4,
    nextReview: Date.now() + 604800000,
    cefrLevel: "A1",
    theme: "Politeness",
    examples: ["Es tut mir leid, dass ich zu spät bin. - I am sorry that I am late."]
  },
  {
    id: "init-19",
    german: "die Schwerkraft",
    english: "gravity",
    wordType: "noun",
    plural: "no plural",
    level: 1,
    nextReview: Date.now(),
    cefrLevel: "B2",
    theme: "Science",
    examples: ["Die Schwerkraft hält uns auf der Erde. - Gravity keeps us on the earth."]
  },
  {
    id: "init-20",
    german: "der Weltraum",
    english: "outer space",
    wordType: "noun",
    plural: "no plural",
    level: 2,
    nextReview: Date.now() + 43200000,
    cefrLevel: "B1",
    theme: "Science",
    examples: ["Es gibt viele Sterne im Weltraum. - There are many stars in outer space."]
  }
];
