### 1. 
What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Answer:The methods getElementById, getElementsByClassName, querySelector, and querySelectorAll in JavaScript are used to select elements from the Document Object Model (DOM), but they differ in their selection criteria, return types, and behavior regarding "liveness." Document.getElementById("id") finds one element only by its unique id attribute., document.getElementsByClassName("class") Finds all elements with the given class name, Selects the first element that matches a specified CSS selector (e.g., #id, .class, tag, attribute, or a combination). 

---
### 2.
How do you create and insert a new element into the DOM?
Answer: document.createElement(), then add content or classes using textContent or className, and finally insert it into the page using appendChild.Use the document.createElement() method to create a new HTML element node. This method takes the tag name of the element as a string argument.


---

### 3.
What is Event Bubbling and how does it work?

Answer: Event Bubbling is when an event (like a click) starts on the innermost element you clicked and then “bubbles up” to its parent elements, one by one, until it reaches the top of the DOM (usually the body).

a. You click a button inside a <div>.
b.  The click event first happens on the button.
c. Then the event moves up to the div containing it.
d. Then it moves up to the body, and so on.



---


### 4.

What is Event Delegation in JavaScript? Why is it useful?

Answer:Event Delegation is a technique where you attach a single event listener to a parent element instead of adding listeners to each child element. Then, when an event happens on a child, it “bubbles up” to the parent, and you can handle it there.

It's benefits are:

a. Less code: You don’t need to add listeners to every child element.
b. Dynamic elements: Works for elements added later, after the page loads.
c. Better performance: Fewer event listeners means less memory usage.



---


### 5.
What is the difference between preventDefault() and stopPropagation() methods?
Answer: PreventDefault() stops the default action of an element from happening and StopPropagation() stops the event from bubbling up to parent elements.