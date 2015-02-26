var food = Backbone.Model.extend({
    urlRoot: "http://tiy-fee-rest.herokuapp.com/collections/praterBackbone",
    idAttributes: '_id',
    defaults: {
        "restaurant": "Masons BBQ",
        "entree": "BBQ",
        "dessert": "banana pudding"

    },

    initialize: function (){
        console.log('food model is created');
    }

});

var pizza = Backbone.Model.extend({
    eat: function(){
        console.log("its good");
}
});

var Person = pizza.extend({
    eat: function(){
        pizza.prototype.eat.apply(this);
    }
});
var person = new Person();
person.eat();

var food1 = new food({restaurant: 'PizzaHut', entree: 'Pizza', dessert: 'donuts'})



Backbone.history.start();
