
# No Mobile

A single javascript object that prevents the user from interacting on a page on mobile devices. This may come in handy when the user interface or navigation of a website isn't 'touch friendly'.



## How to use

Link the main script to your HTML document.

```html
<script defer src="./src/js/main.js"></script>
```

Create an instance of the `NoMobile` class.
```javascript
const obj = new NoMobile();
```

## API
The `NoMobile` class takes some optional parameters including `message` and `imgPath`.

```javascript
const obj = new NoMobile("Unsupported On Mobile","../path/image.jpg");
```
