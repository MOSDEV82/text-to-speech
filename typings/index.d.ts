/**
 * A class to work with [`window.speechSynthesis`](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis).
 */
export default class TextToSpeech {
    /** The syntesis object. */
    speaker: SpeechSynthesis;
    /** The language to speak in. */
    language: string;
    /** The pitch to use when speaking. */
    pitch: number;
    /** The rate to use when speaking. */
    rate: number;
    /** The volume to speak in. */
    volume: number;
    /**
     * Initiate the text to speech object.
     * @param options The options to apply to new [`SpeechSynthesisUtterance`(s)](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance).
     */
    constructor(options: {
        language?: string;
        pitch?: number;
        rate?: number;
        volume?: number;
    });
    /**
     * Say something.
     * @param text The text to speak.
     * @param cb A function used to override utterance options and to attach events to this specific message.
     */
    say(text: string, cb?: (utterance: SpeechSynthesisUtterance) => void): void;
}
