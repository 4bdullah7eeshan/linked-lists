import linkedList from "./linkedList";
// I don't think I will need to import node.js. If needed include that here too!

const list = new linkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());