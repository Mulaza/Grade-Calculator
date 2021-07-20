
# Grade Calculator

A single javascript object that lets you quickly calculate your final grade from various subject grades and weights.

## How to use

Link the main script to your HTML document.
```html
<script defer src="./src/js/main.js"></script>
```
To use the object you need to pass in the desired grades and weights in dictionaries.
The weight values have to add up to `100` exactly.
```javascript
const values = [
    {   
        // Homework
        weight: 20,
        grade: 80
    },
    {
        // Midterm
        weight: 30,
        grade: 72
    },
    {
        // Final Exam
        weight: 50,
        grade: 60
    }

];
```

Create an instance of the `GradeCalculator` class and pass in an object with `weight` and `grade` properties.
```javascript
const myGrade = new GradeCalculator(values); 
obj.finalGrade(); // 67.6
```
