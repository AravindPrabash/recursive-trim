# recursive-trim

[![npm](https://img.shields.io/npm/v/recursive-trim)](https://www.npmjs.com/package/recursive-trim)
![npm](https://img.shields.io/npm/dt/recursive-trim)
![License](https://img.shields.io/badge/license-MIT-blue)

Recursively trims whitespace from **strings** inside objects, arrays, or deeply nested structures.  
Supports **TypeScript** and works with JSON-like data.

Great for sanitizing deeply nested input data before saving or sending to an API.

---

## ✨ Features

- Recursively cleans **deeply nested objects/arrays**
- Works with **objects, arrays, and nested data**
- Leaves **non-string values untouched**
- Safe for `null` and `undefined`
- Zero dependencies
- ESM + TypeScript support

---

## 🚀 Installation

```bash
npm install recursive-trim
```

or

```bash
yarn add recursive-trim
```

---

## 📦 Usage

```ts
import recursiveTrim from "recursive-trim";

const data = {
  name: "  John Doe  ",
  address: {
    city: "  New York ",
    streets: ["  Main Street  ", "  5th Avenue "],
  },
  tags: ["  apple ", " banana  "],
};

const cleaned = recursiveTrim(data);

console.log(cleaned);
/*
{
  name: "John Doe",
  address: {
    city: "New York",
    streets: ["Main Street", "5th Avenue"]
  },
  tags: ["apple", "banana"]
}
*/
```

---

## 💡 Use Cases

- 🧼 Cleaning user input before saving to a database
- 📤 Sanitizing API payloads
- 🗄 Preparing data before comparing or storing

---

## 📄 License

MIT © [Aravind Prabash](https://github.com/AravindPrabash)
