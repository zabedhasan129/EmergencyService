1.document.getElementByid("id") select a uniqye element from the document.
document.getElementsByClassName("className")select all elements with the given class name.
document.querySelector its basically meanig asking like selects first element thats match css selector.and also return a nodelist
document.querySelectorAll: its basically meanig asking like selects all element thats match css selector.and also return a nodelist

2.To create and insert a new element into th dom follow 3 steps create the element add content or attribute insert into the dom.


3.Event bubbling mean an event just like click and then work where the target element then go the upper stage step by step


4.event delegation is a technique where lots of child element and we did not take for ebvery child a event listener on the other hand we take a parent element.


5.event.PreventDefault()s first work is stop the default work or default behabior and just like stop the button as like submit behabior 

and event.stopPropagation is theat stop bubbling its mean that event dont go to the parent but do not stop default action and result is that if i ckilcked a button then this time not clicked the parent