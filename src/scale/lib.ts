import { IScale } from "./interfaces";

export const SCALES_LIB: IScale[] = [
  {
    name: "Major",
    formula: ["1P", "2M", "3M", "4P", "5P", "6M", "7M"],
    altNames: [
      "Bilaval theta",
      "Ethiopian (A raray)",
      "Ionian",
      "Mela Dhirasankarabharana (29)",
    ],
  },
  {
    name: "Pentatonic major",
    formula: ["1P", "2M", "3M", "5P", "6M"],
    altNames: ["Chinese mongolian", "Diatonic"],
  },
  {
    name: "Minor (natural, pure)",
    formula: ["1P", "2M", "3m", "4P", "5P", "6m", "7m"],
    altNames: [
      "Aeolian",
      "Asavari theta",
      "Ethiopian (Geez & ezel)",
      "Mela Natabhairavi (20)",
    ],
  },
  {
    name: "Pentatonic minor",
    formula: ["1P", "3m", "4P", "5P", "7m"],
    altNames: ["Vietnamese 2"],
  },
  {
    name: "Harmonic minor",
    formula: ["1P", "2M", "3m", "4P", "5P", "6m", "7M"],
    altNames: ["Mela Kiravani (21)", "Mohammedan"],
  },
  {
    name: "Melodic minor",
    formula: ["1P", "2M", "3m", "4P", "5P", "6M", "7M"],
    altNames: ["Hawaiian", "Mela Gaurimanohari (23)"],
  },
  {
    name: "Major blues",
    formula: ["1P", "2M", "3m", "3M", "5P", "6M"],
  },
  {
    name: "Minor blues",
    formula: ["1P", "3m", "4P", "5d", "5P", "7m"],
  },
  {
    name: "Harmonic major",
    formula: ["1P", "2M", "3M", "4P", "5P", "6m", "7M"],
    altNames: ["Mela Sarasangi (27)"],
  },
  {
    name: "Augmented",
    formula: ["1P", "2A", "3M", "5P", "6m", "7M"],
  },
  {
    name: "Diminished",
    formula: ["1P", "2M", "3m", "4P", "4A", "5A", "6M", "7M"],
    altNames: [
      "Arabian (A)",
      "Auxiliary diminished",
      "Diminished (wholetone - halftone)",
    ],
  },
  {
    name: "Double harmonic",
    formula: ["1P", "2m", "3M", "4P", "5P", "6m", "7M"],
    altNames: [
      "Bhairav theta",
      "Byzantine",
      "Hungarian gypsy persian",
      "Mela Mayamalavagaula (15)",
    ],
  },
  {
    name: "Diminished (halftone - wholetone)",
    formula: ["1P", "2m", "3m", "4d", "5d", "5P", "6M", "7m"],
    altNames: ["Auxiliary diminished blues", "Dominant diminished"],
  },
  {
    name: "Whole tone",
    formula: ["1P", "2M", "3M", "4A", "5A", "7m"],
    altNames: ["Auxiliary augmented"],
  },
  {
    name: "Leading whole tone",
    formula: ["1P", "2M", "3M", "4A", "5A", "6A", "7M"],
  },
  {
    name: "Six tone symmetrical",
    formula: ["1P", "2m", "3M", "4P", "5A", "6M"],
  },
  {
    name: "Nine tone scale",
    formula: ["1P", "2M", "2A", "3M", "4A", "5P", "5A", "6M", "7M"],
  },
  {
    name: "b3 pentatonic",
    formula: ["1P", "2M", "3m", "5P", "6M"],
    altNames: ["Kumoi"],
  },
  {
    name: "Bebop",
    formula: ["1P", "2M", "3M", "4P", "5P", "6M", "7m", "7M"],
  },
  {
    name: "Bebop major",
    formula: ["1P", "2M", "3M", "4P", "5P", "5A", "6M", "7M"],
  },
  {
    name: "Bebop locrian",
    formula: ["1P", "2m", "3m", "4P", "5d", "5P", "6m", "7m"],
  },
  {
    name: "Bebop minor",
    formula: ["1P", "2M", "3m", "3M", "4P", "5P", "6M", "7m"],
  },
  {
    name: "Bebop harmonic minor",
    formula: ["1P", "2M", "3m", "4P", "5P", "6m", "7m", "7M"],
  },
  {
    name: "Augmented ionian",
    formula: ["1P", "2M", "3M", "4P", "5A", "6M", "7M"],
    altNames: ["Major augmented", "Major #5", "Ionian augmented", "Ionian #5"],
  },
  {
    name: "Ionian pentatonic",
    formula: ["1P", "3M", "4P", "5P", "7M"],
  },
  {
    name: "Dorian",
    formula: ["1P", "2M", "3m", "4P", "5P", "6M", "7m"],
    altNames: ["Kafi theta", "Mela Kharaharapriya (22)"],
  },
  {
    name: "Phrygian",
    formula: ["1P", "2m", "3m", "4P", "5P", "6m", "7m"],
    altNames: ["Bhairavi theta", "Mela Hanumattodi (8)", "Neopolitan minor"],
  },
  {
    name: "Phrygian major",
    formula: ["1P", "2m", "3M", "4P", "5P", "6m", "7m"],
    altNames: [
      "Jewish (Ahaba Rabba)",
      "Mela Vakulabharanam (14)",
      "Spanish gypsy",
      "Flamenco",
      "Phrygian dominant",
    ],
  },
  {
    name: "Lydian",
    formula: ["1P", "2M", "3M", "4A", "5P", "6M", "7M"],
    altNames: ["Kalyan theta", "Mela Mechakalyani (65)"],
  },
  {
    name: "Lydian minor",
    formula: ["1P", "2M", "3M", "4A", "5P", "6m", "7m"],
    altNames: ["Mela Risabhapriya (62)"],
  },
  {
    name: "Lydian augmented",
    formula: ["1P", "2M", "3M", "4A", "5A", "6M", "7M"],
  },
  {
    name: "Lydian diminished",
    formula: ["1P", "2M", "3m", "4A", "5P", "6M", "7M"],
    altNames: ["Mela Dharmavati (59)"],
  },
  {
    name: "Lydian b7",
    formula: ["1P", "2M", "3M", "4A", "5P", "6M", "7m"],
    altNames: [
      "Lydian dominant",
      "Overtone dominant",
      "Overtone",
      "Mela Vaschaspati (64)",
    ],
  },
  {
    name: "lydian #9",
    formula: ["1P", "2A", "3M", "4A", "5P", "6M", "7M"],
    altNames: ["Mela Kosalam (71)"],
  },
  {
    name: "Lydian #5P pentatonic",
    formula: ["1P", "3M", "4A", "5A", "7M"],
  },
  {
    name: "Lydian dominant pentatonic",
    formula: ["1P", "3M", "4A", "5P", "7m"],
  },
  {
    name: "Mixolydian",
    formula: ["1P", "2M", "3M", "4P", "5P", "6M", "7m"],
    altNames: ["Dominant 7th", "Khamaj theta", "Mela Harikambhoji (28)"],
  },
  {
    name: "Aeolian dominant",
    formula: ["1P", "2M", "3M", "4P", "5P", "6m", "7m"],
    altNames: [
      "Mixolydian b6",
      "Hindu",
      "Hindustan",
      "Mela Charukesi (26)",
      "Melodic minor mode 5",
    ],
  },
  {
    name: "Mixolydian pentatonic",
    formula: ["1P", "3M", "4P", "5P", "7m"],
    altNames: ["Indian"],
  },
  {
    name: "Locrian",
    formula: ["1P", "2m", "3m", "4P", "5d", "6m", "7m"],
    altNames: ["Half diminished"],
  },
  {
    name: "Locrian #2",
    formula: ["1P", "2M", "3m", "4P", "5d", "6m", "7m"],
    altNames: ["Half Diminished #2", "Aeolian b5"],
  },
  {
    name: "Locrian major",
    formula: ["1P", "2M", "3M", "4P", "4A", "5A", "7m"],
    altNames: ["Arabian (B)"],
  },
  {
    name: "Locrian 6",
    formula: ["1P", "2m", "3m", "4P", "5d", "6M", "7m"],
  },
  {
    name: "Super locrian",
    formula: ["1P", "2m", "2A", "3M", "4A", "5A", "7m"],
    altNames: ["Diminished whole tone", "Altered", "Pomeroy"],
  },
  {
    name: "Altered bb7",
    formula: ["1P", "2m", "3m", "4d", "5d", "6m", "7d"],
    altNames: ["Ultralocrian", "Super locrian bb7", "Super locrian diminished"],
  },
  {
    name: "Locrian pentatonic",
    formula: ["1P", "3m", "4P", "5d", "7m"],
  },
  {
    name: "Super locrian pentatonic",
    formula: ["1P", "3m", "4d", "5d", "7m"],
  },
  {
    name: "Eight tone spanish",
    formula: ["1P", "2m", "2A", "3M", "4P", "5d", "6m", "7m"],
  },
  {
    name: "Minor six pentatonic",
    formula: ["1P", "3m", "4P", "5P", "6M"],
  },
  {
    name: "Flat six pentatonic",
    formula: ["1P", "2M", "3M", "5P", "6m"],
  },
  {
    name: "Whole tone pentatonic",
    formula: ["1P", "3M", "5d", "6m", "7m"],
  },
  {
    name: "Minor #7M pentatonic",
    formula: ["1P", "3m", "4P", "5P", "7M"],
  },
  {
    name: "Minor hexatonic",
    formula: ["1P", "2M", "3m", "4P", "5P", "7M"],
  },
  {
    name: "Minor six diminished",
    formula: ["1P", "2M", "3m", "4P", "5P", "6m", "6M", "7M"],
  },
  {
    name: "Composite blues",
    formula: ["1P", "2M", "3m", "3M", "4P", "5d", "5P", "6M", "7m"],
  },
  {
    name: "Chromatic",
    formula: [
      "1P",
      "2m",
      "2M",
      "3m",
      "3M",
      "4P",
      "5d",
      "5P",
      "6m",
      "6M",
      "7m",
      "7M",
    ],
  },
  {
    name: "Algerian",
    formula: ["1P", "2M", "3m", "4P", "4A", "5P", "6m", "7M"],
  },
  {
    name: "Balinese (Pelog)",
    formula: ["1P", "2m", "3m", "5P", "6m"],
  },
  {
    name: "Chinese",
    formula: ["1P", "3M", "4A", "5P", "7M"],
  },
  {
    name: "Egyptian",
    formula: ["1P", "2M", "4P", "5P", "7m"],
  },
  {
    name: "Enigmatic",
    formula: ["1P", "2m", "3M", "4A", "5A", "6A", "7M"],
  },
  {
    name: "Hirajoshi",
    formula: ["1P", "2M", "3m", "5P", "6m"],
  },
  {
    name: "Hungarian major",
    formula: ["1P", "2A", "3M", "4A", "5P", "6M", "7m"],
    altNames: ["Mela Nasikabhusani (70)"],
  },
  {
    name: "Hungarian Minor (Gypsy)",
    formula: ["1P", "2M", "3m", "4A", "5P", "6m", "7M"],
    altNames: ["Mela Simhendramadhyama (57)"],
  },
  {
    name: "In sen",
    formula: ["1P", "2m", "4P", "5P", "7m"],
  },
  {
    name: "Iwato",
    formula: ["1P", "2m", "4P", "5d", "7m"],
  },
  {
    name: "Japanese (A)",
    formula: ["1P", "2m", "4P", "5P", "6m"],
    altNames: ["Kumoi joshi"],
  },
  {
    name: "Japanese (B)",
    formula: ["1P", "2M", "4P", "5P", "6m"],
  },
  {
    name: "Japanese (Ichikosucho)",
    formula: ["1P", "2M", "3M", "4P", "4A", "5P", "6M", "7M"],
  },
  {
    name: "Japanese (Taishikicho)",
    formula: ["1P", "2M", "3M", "4P", "4A", "5P", "6M", "6A", "7M"],
  },
  {
    name: "Javanese (Pelog)",
    formula: ["1P", "2m", "3m", "4P", "5P", "6M", "7m"],
    altNames: [
      "Mela Natakapriya (10)",
      "Dorian b2",
      "Phrygian #6",
      "Melodic minor mode 2",
    ],
  },
  {
    name: "Jewish (Adonai Malakh)",
    formula: ["1P", "2m", "2M", "3m", "4P", "5P", "6M", "7m"],
  },
  {
    name: "Jewish (Magen Abot)",
    formula: ["1P", "2m", "2A", "3M", "4A", "5A", "6M", "7M"],
  },
  {
    name: "Kafi raga",
    formula: ["1P", "3m", "3M", "4P", "5P", "6M", "7m", "7M"],
  },
  {
    name: "Malkos raga",
    formula: ["1P", "3m", "4P", "6m", "7m"],
  },
  {
    name: "Marva theta",
    formula: ["1P", "2m", "3M", "4A", "5P", "6M", "7M"],
    altNames: ["Mela Gamanasrama (53)"],
  },
  {
    name: "mystery #1",
    formula: ["1P", "2m", "3M", "5d", "6m", "7m"],
  },
  {
    name: "Neopolitan",
    formula: ["1P", "2m", "3m", "4P", "5P", "6m", "7M"],
    altNames: ["Mela Dhenuka (9)"],
  },
  {
    name: "Neopolitan major",
    formula: ["1P", "2m", "3m", "4P", "5P", "6M", "7M"],
    altNames: ["Mela Kokilapriya (11)"],
  },
  {
    name: "Neopolitan major pentatonic",
    formula: ["1P", "3M", "4P", "5d", "7m"],
  },
  {
    name: "Oriental (A)",
    formula: ["1P", "2m", "3M", "4P", "5d", "6m", "7m"],
  },
  {
    name: "Oriental (B)",
    formula: ["1P", "2m", "3M", "4P", "5d", "6M", "7m"],
  },
  {
    name: "Persian",
    formula: ["1P", "2m", "3M", "4P", "5d", "6m", "7M"],
  },
  {
    name: "Piongio",
    formula: ["1P", "2M", "4P", "5P", "6M", "7m"],
  },
  {
    name: "Prometheus",
    formula: ["1P", "2M", "3M", "5d", "6M", "7m"],
  },
  {
    name: "Prometheus neopolitan",
    formula: ["1P", "2m", "3M", "5d", "6M", "7m"],
  },
  {
    name: "Purvi raga",
    formula: ["1P", "2m", "3M", "4P", "4A", "5P", "6m", "7M"],
  },
  {
    name: "Ritusen",
    formula: ["1P", "2M", "4P", "5P", "6M"],
  },
  {
    name: "Romanian minor",
    formula: ["1P", "2M", "3m", "4A", "5P", "6M", "7m"],
    altNames: ["Mela Hemavati (58)", "Dorian #4"],
  },
  {
    name: "Scriabin",
    formula: ["1P", "2m", "3M", "5P", "6M"],
  },
  {
    name: "Spanish heptatonic",
    formula: ["1P", "2m", "3m", "3M", "4P", "5P", "6m", "7m"],
  },
  {
    name: "Vietnamese 1",
    formula: ["1P", "3m", "4P", "5P", "6m"],
  },
  {
    name: "Mela Kanakangi (1)",
    formula: ["1P", "2m", "2M", "4P", "5P", "5A", "6M"],
  },
  {
    name: "Mela Ratnangi (2)",
    formula: ["1P", "2m", "2M", "4P", "5P", "6m", "7m"],
  },
  {
    name: "Mela Ganamurti (3)",
    formula: ["1P", "2m", "2M", "4P", "5P", "6m", "7M"],
  },
  {
    name: "Mela Vanaspati (4)",
    formula: ["1P", "2m", "2M", "4P", "5P", "6M", "7m"],
  },
  {
    name: "Mela Manavati (5)",
    formula: ["1P", "2m", "2M", "4P", "5P", "6M", "7M"],
  },
  {
    name: "Mela Tanarupi (6)",
    formula: ["1P", "2m", "2M", "4P", "5P", "6A", "7M"],
  },
  {
    name: "Mela Senavati (7)",
    formula: ["1P", "2m", "3m", "4P", "5P", "5A", "6M"],
  },
  {
    name: "Mela Rupavati (12)",
    formula: ["1P", "2m", "3m", "4P", "5P", "6A", "7M"],
  },
  {
    name: "Mela Gayakapriya (13)",
    formula: ["1P", "2m", "3M", "4P", "5P", "5A", "6M"],
  },
  {
    name: "Mela Chakravakam (16)",
    formula: ["1P", "2m", "3M", "4P", "5P", "6M", "7m"],
  },
  {
    name: "Mela Suryakantam (17)",
    formula: ["1P", "2m", "3M", "4P", "5P", "6M", "7M"],
  },
  {
    name: "Mela Hatakambari (18)",
    formula: ["1P", "2m", "3M", "4P", "5P", "6A", "7M"],
  },
  {
    name: "Mela Jhankaradhvani (19)",
    formula: ["1P", "2M", "3m", "4P", "5P", "6m", "6M"],
  },
  {
    name: "Mela Varunapriya (24)",
    formula: ["1P", "2M", "3m", "4P", "5P", "6A", "7M"],
  },
  {
    name: "Mela Mararanjani (25)",
    formula: ["1P", "2M", "3M", "4P", "5P", "5A", "6M"],
  },
  {
    name: "Mela Naganandini (30)",
    formula: ["1P", "2M", "3M", "4P", "5P", "6A", "7M"],
  },
  {
    name: "Mela Yagapriya (31)",
    formula: ["1P", "2A", "3M", "4P", "5P", "5A", "6M"],
  },
  {
    name: "Mela Ragavardhani (32)",
    formula: ["1P", "2A", "3M", "4P", "5P", "6m", "7m"],
  },
  {
    name: "Mela Gangeyabhusani (33)",
    formula: ["1P", "2A", "3M", "4P", "5P", "6m", "7M"],
    altNames: ["Augmented heptatonic"],
  },
  {
    name: "Mela Vagadhisvari (34)",
    formula: ["1P", "2A", "3M", "4P", "5P", "6M", "7m"],
  },
  {
    name: "Mela Sulini (35)",
    formula: ["1P", "2A", "3M", "4P", "5P", "6M", "7M"],
  },
  {
    name: "Mela Chalanata (36)",
    formula: ["1P", "2A", "3M", "4P", "5P", "6A", "7M"],
  },
  {
    name: "Mela Salagam (37)",
    formula: ["1P", "2m", "2M", "4A", "5P", "5A", "6M"],
  },
  {
    name: "Mela Jalarnavam (38)",
    formula: ["1P", "2m", "2M", "4A", "5P", "6m", "7m"],
  },
  {
    name: "Mela Jhalavarali (39)",
    formula: ["1P", "2m", "2M", "4A", "5P", "6m", "7M"],
  },
  {
    name: "Mela Navanitam (40)",
    formula: ["1P", "2m", "2M", "4A", "5P", "6M", "7m"],
  },
  {
    name: "Mela Pavani (41)",
    formula: ["1P", "2m", "2M", "4A", "5P", "6M", "7M"],
  },
  {
    name: "Mela Raghupriya (42)",
    formula: ["1P", "2m", "2M", "4A", "5P", "6A", "7M"],
  },
  {
    name: "Mela Gavambodhi (43)",
    formula: ["1P", "2m", "3m", "4A", "5P", "5A", "6M"],
  },
  {
    name: "Mela Bhavapriya (44)",
    formula: ["1P", "2m", "3m", "4A", "5P", "6m", "7m"],
  },
  {
    name: "Mela Subhapantuvarali (45)",
    formula: ["1P", "2m", "3m", "4A", "5P", "6m", "7M"],
    altNames: ["Todi theta"],
  },
  {
    name: "Mela Sadvidhamargini (46)",
    formula: ["1P", "2m", "3m", "4A", "5P", "6M", "7m"],
  },
  {
    name: "Mela Suvarnangi (47)",
    formula: ["1P", "2m", "3m", "4A", "5P", "6M", "7M"],
  },
  {
    name: "Mela Divyamani (48)",
    formula: ["1P", "2m", "3m", "4A", "5P", "6A", "7M"],
  },
  {
    name: "Mela Dhavalambari (49)",
    formula: ["1P", "2m", "3M", "4A", "5P", "5A", "6M"],
  },
  {
    name: "Mela Namanarayani (50)",
    formula: ["1P", "2m", "3M", "4A", "5P", "6m", "7m"],
  },
  {
    name: "Mela Kamavarardhani (51)",
    formula: ["1P", "2m", "3M", "4A", "5P", "6m", "7M"],
    altNames: ["Purvi theta"],
  },
  {
    name: "Mela Ramapriya (52)",
    formula: ["1P", "2m", "3M", "4A", "5P", "6M", "7m"],
  },
  {
    name: "Mela Visvambari (54)",
    formula: ["1P", "2m", "3M", "4A", "5P", "6A", "7M"],
  },
  {
    name: "Mela Syamalangi (55)",
    formula: ["1P", "2M", "3m", "4A", "5P", "5A", "6M"],
  },
  {
    name: "Mela Sanmukhapriya (56)",
    formula: ["1P", "2M", "3m", "4A", "5P", "6m", "7m"],
  },
  {
    name: "Mela Nitimati (60)",
    formula: ["1P", "2M", "3m", "4A", "5P", "6A", "7M"],
  },
  {
    name: "Mela Kantamani (61)",
    formula: ["1P", "2M", "3M", "4A", "5P", "5A", "6M"],
  },
  {
    name: "Mela Latangi (63)",
    formula: ["1P", "2M", "3M", "4A", "5P", "6m", "7M"],
  },
  {
    name: "Mela Chitrambari (66)",
    formula: ["1P", "2M", "3M", "4A", "5P", "6A", "7M"],
  },
  {
    name: "Mela Sucharitra (67)",
    formula: ["1P", "2A", "3M", "4A", "5P", "5A", "6M"],
  },
  {
    name: "Mela Jyotisvarupini (68)",
    formula: ["1P", "2A", "3M", "4A", "5P", "6m", "7m"],
  },
  {
    name: "Mela Dhatuvardhani (69)",
    formula: ["1P", "2A", "3M", "4A", "5P", "6m", "7M"],
  },
  {
    name: "Mela Rasikapriya (72)",
    formula: ["1P", "2A", "3M", "4A", "5P", "6A", "7M"],
  },
];
