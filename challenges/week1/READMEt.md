## Tuesday

**1. Ensure question**

Given a string, write a function that returns the string with a question mark ("?") appends to the end, unless the original string ends with a question mark, in which case, returns the original string.

**Example:**

```
"Yes" --> "Yes?"
"No?" --> "No?"
```

**Solution:**

```javascript
function ensureQuestion(s) {
  if (!s) return "?";
  return /\?$/.test(s) ? s : s + "?";
}
```

<br>
<hr>

**2. Reversed Words**

Complete the solution so that it reverses all of the words within the string passed in.

**Example:**

```
"The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"
```

**Solution:**

```javascript
function reverseWords(str) {
  return str.split(" ").reverse().join(" ");
}
```

<br>
<hr>

**_[<-- Go Back](../week1/)_**
