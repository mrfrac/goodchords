export enum NotesEnum {
    A = "A",
    Bb = "Bb",
    B = "B",
    C = "C",
    Db = "Db",
    D = "D",
    Eb = "Eb",
    E = "E",
    F = "F",
    Gb = "Gb",
    G = "G",
    Ab = "Ab",
}

export type Note = keyof typeof NotesEnum;
