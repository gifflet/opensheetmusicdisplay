import { LyricWord } from "./LyricsWord";
import { VoiceEntry } from "../VoiceEntry";
import { FontStyles } from "../../../Common/Enums/FontStyles";
export declare class LyricsEntry {
    constructor(text: string, verseNumber: string, word: LyricWord, parent: VoiceEntry, syllableNumber?: number);
    private text;
    private word;
    private parent;
    private verseNumber;
    private syllableIndex;
    extend: boolean;
    /** The syllabic value read from the XML (single/begin/middle/end).
     *  Kept to allow re-linking word chains across voices after reading. */
    syllabic: string;
    get Text(): string;
    set Text(value: string);
    get Word(): LyricWord;
    set Word(value: LyricWord);
    get Parent(): VoiceEntry;
    set Parent(value: VoiceEntry);
    get VerseNumber(): string;
    get SyllableIndex(): number;
    set SyllableIndex(value: number);
    get IsTranslation(): boolean;
    get IsChorus(): boolean;
    get FontStyle(): FontStyles;
}
