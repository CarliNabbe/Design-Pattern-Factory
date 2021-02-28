function Cat(action)
{
  this.action = action
  this.type = "cat"
}

function Dog(action)
{
  this.action = action
  this.type = "dog"
}

function AnimalFactory()
{
  this.create = (action, type) => {
    switch(type)
    {
      case 1:
        return new Cat(action);
      case 2:
        return new Dog(action)
    }
    
  }
}

function say()
{
  console.log("I am a " + this.type + " and I " + this.action)
}

const animalFactory = new AnimalFactory()
const animals = []

animals.push(animalFactory.create("meow", 1))
animals.push(animalFactory.create("bark", 2))
animals.push(animalFactory.create("eat", 1))
animals.push(animalFactory.create("drink", 1))
animals.push(animalFactory.create("sleep", 2))

animals.forEach( emp => {
  say.call(emp)
})