### **What is the Temporal Dead Zone (TDZ) in JavaScript?**  

The **Temporal Dead Zone (TDZ)** refers to the time **between** the declaration of a `let` or `const` variable and its initialization. During this time, accessing the variable results in a **ReferenceError**.

---

## **1️⃣ Understanding TDZ with `let` and `const`**
```javascript
console.log(a); // ❌ ReferenceError: Cannot access 'a' before initialization
let a = 10;
console.log(a); // ✅ 10
```
### **Why does this happen?**
- `a` is **hoisted**, but unlike `var`, it **isn’t initialized**.
- **Before** line `let a = 10;` executes, `a` exists in the **TDZ**.
- Trying to access `a` **before initialization** results in an **error**.

---

## **2️⃣ No TDZ with `var`**
```javascript
console.log(b); // ✅ undefined
var b = 20;
console.log(b); // ✅ 20
```
- `var` **is hoisted and initialized** with `undefined`, so no TDZ.
- This is why `var` doesn’t throw an error but gives `undefined`.

---

## **3️⃣ TDZ in Functions**
### **Inside a Block**
```javascript
{
  console.log(x); // ❌ ReferenceError: Cannot access 'x' before initialization
  let x = 5;
  console.log(x); // ✅ 5
}
```
- `x` **exists** in the scope but is in TDZ until `let x = 5;` runs.

### **Inside a Function Parameter Default Value**
```javascript
function test(a = b, b = 2) {
  console.log(a, b);
}
test(); // ❌ ReferenceError: Cannot access 'b' before initialization
```
- `b` is **not initialized** when `a = b` executes.
- `b` is still in **TDZ** when trying to assign it to `a`.

---

## **4️⃣ TDZ with `const`**
```javascript
console.log(y); // ❌ ReferenceError: Cannot access 'y' before initialization
const y = 30;
console.log(y); // ✅ 30
```
- Just like `let`, `const` has a **TDZ**.
- But `const` **must also be initialized immediately**.

---

## **5️⃣ Example with `typeof`**
Normally, `typeof` doesn't throw an error if a variable isn't declared:
```javascript
console.log(typeof undeclaredVar); // ✅ "undefined"
```
But with `let` and `const`, it **does throw an error** inside TDZ:
```javascript
console.log(typeof z); // ❌ ReferenceError
let z = 50;
```

---

## **📝 Summary**
| Variable Type | Hoisted? | TDZ? | Default Value |
|--------------|---------|------|--------------|
| `var` | ✅ Yes | ❌ No | `undefined` |
| `let` | ✅ Yes | ✅ Yes | ❌ No default |
| `const` | ✅ Yes | ✅ Yes | ❌ Must initialize |

✅ **Avoid TDZ errors by declaring variables at the top of their scope**  
✅ **Use `let` and `const` only after defining them**  

Would you like an example showing real-world implications of TDZ? 🚀