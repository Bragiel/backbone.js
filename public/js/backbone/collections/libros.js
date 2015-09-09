var LibrosCollection = Backbone.Collection.extend({
    model : Libro,
    url:'/libros'
});

var appLibros = new LibrosCollection();
