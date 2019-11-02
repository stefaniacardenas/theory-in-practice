// TASK:
// 1. Describe what JSON format is.

// JSON(JavaScript Object Notation) is a lightweight format for easily transferring data.
// It can be easily understood by humans and different applications.
// It's easy to understand from developers from defferent language backgrounds.
// It's one of the most common ways of exchanging data between APIs.
// JSON is built on two structures:
// A collection of name/value pairs. In various languages, this is realized as an object, record, struct, dictionary, hash table, keyed list, or associative array.
// An ordered list of values. In most languages, this is realized as an array, vector, list, or sequence.
// It accepts all the properties below apart from undefined values and functions
// JSON cannot include functions because it's not a programming language. It's just a way of exchanging data
// Everything must be wrapped in double quotes, even keys

const myJsonObj = {
  "myString": "some string",
  "myNumber": 123,
  "myNull": null,
  "myBoolean": true,
  "myArray": ["some", "array"],
  "myObject": {"some": "object"}
};
