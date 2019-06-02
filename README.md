# text-to-speech

> Turn your strings into voice.

**Note**: A user interaction must be made on the webpage for the speech synthesis to work. That means the must trigger an event on the web page, e.g. a click event.

**Table of Contents**
- [text-to-speech](#text-to-speech)
	- [Installation](#installation)
	- [Documentation](#documentation)

```ts
// Imports
import TextToSpeech from "aiava-text-to-speech";

// Create a new speaker.
const speaker = new TextToSpeech();

// Add something to the utterance queue.
speaker.say("Hello World!");

// Or use a different language.
speaker.language = "nb-NO";
speaker.say("Hei Verden!"); // Hello World
```

## Installation

```sh
yarn add aiava-text-to-speech
```

Or with NPM

```sh
npm i -S aiava-text-to-speech
```

## Documentation

All the documentation is located on the [Text To Speech](https://aiava.github.io/) documentation site.
