var foods = Backbone.Collection.extend({
    url: 'http://tiy-fee-rest.herokuapp.com/collections/praterBackbone',
    Model: food,
})
var pizzas = Backbone.Collection.extend({
    url: 'http://tiy-fee-rest.herokuapp.com/collections/praterBackbone',
    Model: pizza
})
