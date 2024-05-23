# JavaScript Object Lab1

- Create an object named `User`.

- Add 6 properties:
  - `name`
  - `email`
  - `id`
  - `available` (boolean, initially set to `false`)
  - `checkAvailability` (function that checks if the user is available for work)
  - `address`
  - `skills`

- The `address` property should be a nested object containing 3 keys.

- One of the keys inside `address` should be an object `city` with 2 keys.

- The `skills` property should be an array containing 3 elements.

---

## The Output:

- Print the object `User`.
- Print the property `name`.
- Modify the value of property `id` and print it.
- Delete the property `email` and print the object.
- Test your function by changing the value of `available` to `true`, then print the result of the function.
- Print the `address` object.
- Print one of the keys inside the `city` object.
- Print the second element in the `skills` array.
- Print the `skills` array elements without the brackets `[]` and separate them with commas `,`.





## Activity Lab 2

Given the following array of characters:

```javascript
const characters = [
  {
    name: "Luke Skywalker",
    height: 177,
    gender: "male",
    mass: 77,
    eye_color: "brown",
  },
  {
    name: "Leia Organa",
    height: 160,
    gender: "female",
    mass: 56,
    eye_color: "blue",
  },
  {
    name: "Han Solo",
    height: 180,
    gender: "male",
    mass: 80,
    eye_color: "brown",
  },
  {
    name: "Chewie",
    height: 222,
    gender: "male",
    mass: 190,
    eye_color: "black",
  },
  {
    name: "kevien",
    height: 106,
    gender: "male",
    mass: 32.2,
    eye_color: "red",
  },
];

```

From the array, answer the following questions:

1. Get the first name that has blue eyes.
2. Get the first gender of a character whose mass is over 50.
3. Get characters with height less than 200.
4. Get all male characters.
5. Get an array of all names only.
6. Get an array of all heights only.
7. Sort by mass (low to high).
8. Sort by height (high to low).
9. Does every character have a mass more than 40?
10. Is every character shorter than 200?
11. Is there at least one character with blue eyes?
12. Is there at least one character taller than 210?
