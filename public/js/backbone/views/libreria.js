var Libreria = Backbone.View.extend({
    // el:'.vista',

    // initialize: function(){
    //     this.render();
    // },

    // render: function(){
    //     this.$el.html('<p>El método render en acción.</p>');
    // },

    // events: {
    //     'click .cambiarColor': 'cambiarColor'
    // },
    //
    // cambiarColor: function(){
    //     this.$el.css('color', 'red');
    //     this.$el.css('background', 'blue');
    // }

    el: '#app',
    initialize: function(){
        appLibros.on('add', this.mostrarLibro);

        appLibros.fetch();
    },

    mostrarLibro: function(modelo){
        var vista = new MostrarLibroView({model:modelo});
        $('.libros').append(vista.render().$el);
        console.log(modelo.toJSON());
    }
});

var MostrarLibroView = Backbone.View.extend({
    template: _.template($('#tplMostrarLibro').html()),

    render: function(){
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }
});
var appView = new Libreria();
