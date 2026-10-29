# Greeting Builder CLI

A modular, lightweight JavaScript utility designed to validate the time of day, format names cleanly, and generate structured greetings based on user parameters.

- **Project URL:** https://roadmap.sh/projects/js-greeting-builder

---

## Features

- **Input Validation Sanitization:** Rejects unsupported execution states using logical AND operations rather than broad short-circuit flags.
- **Modern Syntax Adaptations:** Leverages implicit return arrow-expressions and variable interpolations to strip out classic concatenation block overhead.
- **Modular Framework Architecture:** Divides data processing cleanly across individual functional blocks.

---

## Usage

```javascript
createGreeting('Ava', 'Stone', 'morning'); 
// Yields: "Good morning, Ava Stone"
```

## System Constraints

* Parameter tags passed to the runner engine accept explicitly string data profiles matching exactly `"morning"`, `"afternoon"`, or `"evening"`.
* Mismatched contexts yield a graceful system break response string: `"not a valid time of day"`.
