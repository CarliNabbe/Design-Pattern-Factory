abstract class Animals {

    private name: string

    public getName() {
        return this.name
    }

    public setName(name: string) {
        name = this.name
    }

    public fly () {
        console.log(this.name + " is flying")
    }
}