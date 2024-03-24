import LinkedList from "./LinkedList.js";
import Node from "./Node.js";

const linkList = new LinkedList();

// Test append and prepend
console.log("Testing append, prepend and toString");
linkList.append(3);
linkList.append(4);
linkList.append(5);
linkList.prepend(2);
linkList.prepend(1);
linkList.prepend(0);
linkList.toString();

// Test size
console.log();
console.log(`Size of the list should be 6, and is ${linkList.size()}`, "\n");

// Test head and tail
const head = linkList.head;
console.log(`Head value should be 0, and is ${head.value}`);
const tail = linkList.tail();
console.log(`Tail value should be 5, and is ${tail.value}`, "\n");

// Test at(index)
console.log(
  `linkList.at(3).value should be 3, and is ${linkList.at(3).value}`,
  "\n"
);

// Test pop

const linkListEmpty = new LinkedList();
console.log("Empty list, attempted pop:");
linkListEmpty.pop();

const linkListHeadOnly = new LinkedList();
linkListHeadOnly.append(0);
console.log("Head only, Before pop");
linkListHeadOnly.toString();
linkListHeadOnly.pop();
console.log("Head only, After pop");
linkListHeadOnly.toString();

console.log("Full list, Before pop");
linkList.toString();
linkList.pop();
console.log("Full list, After pop");
linkList.toString();

//test contains
console.log(
  `linkList.contains(3) should be true, and is ${linkList.contains(3)}`
);
console.log(
  `linkList.contains(8) should be false, and is ${linkList.contains(8)}`
);
