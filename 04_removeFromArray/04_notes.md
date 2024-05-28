```js
removeFromArray([1, 2, 3, 4], 3); // should remove 3 and return [1,2,4]
```
takes two arguments
1) array
2) element to be removed
- if element to be removed not in array, ignore
- if multiple values of same number, remove all
- can remove all values
- works with strings and ints
- only removes same type; shouldn't do automatic type conversion

<br>

---

- Input = array & elements to be removed
- Algorithm
- Output = cleaned array

---

- for each value in array
  - if value is not present in elements to be removed
    - append value to newArray