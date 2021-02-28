const items = [1, false, "Cat", 1.11]

function Iterator(items)
{
  this.items = items
  this.index = 0
}

Iterator.prototype = {
  hasNext: function()
  {
    return this.index < this.items.length
  },
  next: function()
  {
    return this.items[this.index++]
  }
}

const iter = new Iterator(items)

// Console log if there is a next item
// console.log(iter.hasNext())

while(iter.hasNext())
  console.log(iter.next())

// Console log if there isn't a next item
// console.log(iter.hasNext())