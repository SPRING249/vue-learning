let element=document.getElementById("some_element");
let myObject={};
myObject.element = element;
element.someObject = myObject;
//DOM元素的内存永远不会被回收
// 切断原生 JavaScript 对象与 DOM 元素之 间的连接
myObject.element=null;
element.someObject=null;