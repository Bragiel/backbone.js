var app = app || {};
app.Libreria = Backbone.View.extend({
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
        app.libros.on('add', this.mostrarLibro);

        app.libros.fetch();
    },

    mostrarLibro: function(modelo){
        var vista = new app.MostrarLibroView({model:modelo});
        $('.libros').append(vista.render().$el);
        // console.log(modelo.toJSON());
    }
});

app.MostrarLibroView = Backbone.View.extend({
    template: _.template($('#tplMostrarLibro').html()),

    events: {
        'click .title': 'detalle'
    },

    render: function(){
        if(window.stade==='libro'){
            $('.detalle').hide();
            this.$el.html(this.template(this.model.toJSON()));
        }else if(window.stade==='detalle'){
            $('.detalle').show();
            if(this.model.get('id')===window.libroID){
                new app.DetalleLibroView({model:this.model});
            }
        }
        
        return this;
    },

    initialize: function(){
        var self = this;
        app.route.on('route:book', function(){
            self.render();
        });

        app.route.on('route:detalle', function(){
            self.render();
        });
    },

    detalle: function(){
        Backbone.history.navigate('libros/' + this.model.get('id'), {trigger:true})
    }
});

// var appView = new Libreria();

app.DetalleLibroView = Backbone.View.extend({
    el : '.detalle',
    template: _.template($('#tplDetalleLibro').html()),

    initialize: function(){
        this.render();
    },

    render:function(){
        this.$el.html(this.template(this.model.toJSON()));
    }
});
