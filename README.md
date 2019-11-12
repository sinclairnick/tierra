# tierra

### automatically create client-friendly aliases for errors

#### e.g

`new Error("hello")` --> `QaOS3mKU`

## Setup

```
npm i --save tierra
```

```javascript
// ES5
const Tierra = require("tierra").default;

// ES6
import Tierra from "tierra";

const tierra = Tierra(/*seed*/);
```

The `Tierra()` function accepts an optional seed argument for code generation.

## Usage

Tierra is kept simple and only has two methods.

#### Return alias for an error:

```javascript
tierra.get(new Error("Some error"));
// 'h10j2WGO'
```

#### Return table of aliases and values

```javascript
tierra.table();
// { h10j2WGO: 'Error: Some error' }
```

By remaining simple, Tierra is unopinionated and lightweight.
