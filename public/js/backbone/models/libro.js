var app = app || {};

app.Libro = Backbone.Model.extend({
    // initialize: function(){
    //     console.log('HElllllooooou');
    //
    //     this.on('change', function(){
    //         console.log('Model Has been Changed');
    //     });
    // },
    // defaults: {
    //     autor: 'Desconocido',
    // }

    urlRoot:'/libros',

    validate:function(atributos){
        if(!atributos.titulo){
            console.log('Must have a title.');
            return 'Must have a title';
        }
    }
});
