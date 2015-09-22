var app = app || {};
var appRoutes = Backbone.Router.extend({
    routes: {
        '': 'cursos',
        'libros': 'book',
        'libros/:id': 'detalle',
    },

    detalle: function(id){
        console.log(id);
    },

    cursos: function(){
        window.libroID = id;
        window.stade = 'detalle';
    },

    book: function(){
        window.stade = 'libro';
    }
});


var route = new appRoutes();


