# recursive-trim

Recursively trims all string values in any object or array.

## 💾 Install

```bash
npm install recursive-trim
```

## 💻 Usage

```javascript
import recursiveTrim from "recursive-trim";

const data = {
  name: "  Aravind  ",
  address: {
    city: "  Colombo ",
    tags: ["  clean ", " trim  "],
  },
};

const clean = recursiveTrim(data);

// Result:
// {
//   name: 'Aravind',
//   address: {
//     city: 'Colombo',
//     tags: ['clean', 'trim']
//   }
// }
```
