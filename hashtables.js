1. 
Q. What is a hash table?

A. Hash tables are type of data structure that stores each value by linking it to a key,
forming key-value pairs.

2. 
Q. What is hashing?
A. A process of converting arbitrary data into a fixed-length hash code using a hashing function.

3.
Q. How does a hash table store data?

A. Hash tables store data by placing them at a particular location in an 
array maintained internally in the hash table.

4.
Q. How are hash tables and objects different?

A. While Objects holds static number of distinct value of different types,
hash tables holds variable number of consistently formatted values. 

5. 
Q. Determine whether you would use a hash table or an object to store each
of the following pieces of data:

A list of pets and their unique names.=>Object
The name, age, and the birthday of your best friend.=>Object
The name and location of every company in a given city.=>Hash table
All of the books checked out from a library by a particular individual.=>Object
The primary and secondary phone numbers for a contact.=>Hash table

Programming Questions

1.
var hash = (string, max) => {
    var hash = 0;
    for (var i = 0; i < string.length; i++) {
      hash += string.charCodeAt(i);
    }
    return hash % max;
  };
  
  let HashTable = function() {
  
    let storage = [];
    const storageLimit = 14;
    
    this.print = function() {
      console.log(storage)
    }
  
    this.add = function(phonenum, name, address) {
      var index = hash(phonenum, storageLimit);
      if (storage[index] === undefined) {
        storage[index] = [
          [phonenum, name, address]
        ];
      } else {
        var inserted = false;
        for (var i = 0; i < storage[index].length; i++) {
          if (storage[index][i][0] === phonenum) {
            storage[index][i][1] = name;
            storage[index][i][2] = address;
            inserted = true;
          }
        }
        if (inserted === false) {
          storage[index].push([phonenum, name, address]);
        }
      }
    };
  
  
    this.lookup = function(phonenum) {
      var index = hash(phonenum, storageLimit);
      if (storage[index] === undefined) {
        return undefined;
      } else {
        for (var i = 0; i < storage[index].length; i++) {
          if (storage[index][i][0] === phonenum) {
            return "name: " + storage[index][i][1] + " address: " + storage[index][i][2];
          }
        }
      }
    };
  
  };
  
  let ht = new HashTable();
  ht.add('123456789', 'Daisuke', 'Japan');
  console.log(ht.lookup('123456789'))

  2.
  var hash = (string, max) => {
    var hash = 0;
    for (var i = 0; i < string.length; i++) {
      hash += string.charCodeAt(i);
    }
    return hash % max;
  };
  
  let HashTable = function() {
  
    let storage = [];
    const storageLimit = 14;
    
    this.print = function() {
      console.log(storage)
    }
  
    this.add = function(itemname, qty) {
      var index = hash(itemname, storageLimit);
      if (storage[index] === undefined) {
        storage[index] = [
          [itemname, qty]
        ];
      } else {
        var inserted = false;
        for (var i = 0; i < storage[index].length; i++) {
          if (storage[index][i][0] === itemname) {
            storage[index][i][1] = qty;
            inserted = true;
          }
        }
        if (inserted === false) {
          storage[index].push([itemname, qty]);
        }
      }
    };
  
  
    this.lookup = function(itemname) {
      var index = hash(itemname, storageLimit);
      if (storage[index] === undefined) {
        return undefined;
      } else {
        for (var i = 0; i < storage[index].length; i++) {
          if (storage[index][i][0] === itemname) {
            return "Inventory of " + storage[index][i][0] + " is " + storage[index][i][1];
          }
        }
      }
    };
  
  };
  
  let ht = new HashTable();
  ht.add('Bloc T-shirts', 10);
  console.log(ht.lookup('Bloc T-shirts'))

3. 
var hash = (string, max) => {
    var hash = 0;
    for (var i = 0; i < string.length; i++) {
      hash += string.charCodeAt(i);
    }
    return hash % max;
  };
  
  let HashTable = function() {
  
    let storage = [];
    const storageLimit = 14;
    
    this.print = function() {
      console.log(storage)
    }
  
    this.add = function(publisher, date, content) {
      var index = hash(publisher, storageLimit);
      if (storage[index] === undefined) {
        storage[index] = [
          [publisher, date, content]
        ];
      } else {
        var inserted = false;
        for (var i = 0; i < storage[index].length; i++) {
          if (storage[index][i][0] === publisher) {
            storage[index][i][1] = date;
            storage[index][i][2] = content;
            inserted = true;
          }
        }
        if (inserted === false) {
          storage[index].push([publisher, date, content]);
        }
      }
    };
  
  
    this.lookup = function(publisher, date) {
      var index = hash(publisher, storageLimit);
      if (storage[index] === undefined) {
        return undefined;
      } else {
        for (var i = 0; i < storage[index].length; i++) {
          if (storage[index][i][0] === publisher && storage[index][i][1] === date) {
            return "Publisher: " + storage[index][i][0] + " Date: " + storage[index][i][1] + " Content: " + storage[index][i][2];
          }
        }
      }
    };
  
  };
  
  let ht = new HashTable();
  ht.add('WSJ', 04072019, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
  console.log(ht.lookup('WSJ', 04072019))
