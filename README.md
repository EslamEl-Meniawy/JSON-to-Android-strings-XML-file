# JSON to Android strings XML file
`Node.js` application for converting `JSON` data to `Android` strings file.

Only `strings` will work.

`String arrays` won't work.

### Input
The input is written in `input.json` file before the application runs.

Input must be a `JSON array` with structure:
```javascript
[
  {
    "key":"some_key",
    "value":"some value"
  },
  {
    "key":"some_other_key",
    "value":"some other value"
  }
]
```

### Prerequisites
`Node.js` must be installed and running on the system.

### Running the application
Open command prompt and `cd` to the project folder then run the command:
```
node app.js
```

### Output
Output will be available in `output.xml` file.
