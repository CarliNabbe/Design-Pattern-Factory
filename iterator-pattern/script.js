function Iterator(animals)
{
  this.animals = animals
  this.index = 0
}

Iterator.prototype = {
  hasNext: function()
  {
    return this.index < this.animals.length
  },
  next: function()
  {
    return this.animals[this.index++]
  }
}

const iter = new Iterator(animals)

// Console log if there is a next item
// console.log(iter.hasNext())

while(iter.hasNext())
  console.log(iter.next())

// Console log if there isn't a next item
// console.log(iter.hasNext())