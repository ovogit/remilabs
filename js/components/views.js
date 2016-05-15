var Backbone = require('backbone');
var jQuery = require('jquery');
var $ = jQuery;
var _ = require('underscore');

var QODModel = Backbone.Model.extend();
var QODCollection = Backbone.Collection.extend({
    model:QODModel,
    url: 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=',
    parse: function(response, xhr){
        console.log(response);
        return response;
    },
    //sync: function(method, model, options) {
            //var that = this;
                //var params = _.extend({
                    //type: 'GET',
                    //dataType: 'jsonp',
                    //url: that.url,
                    //processData: false
                //}, options);

            //return $.ajax(params);
        //}
});
var QOD = Backbone.View.extend({
    initialize: function(){
        this.collection = new QODCollection;
        var that = this;
        this.collection.fetch({
            success:function(){
                that.render();
            }
        });
    },
    render: function(){
        console.log(this.collection);
        $('#slide-content').html(this.collection.models[0].attributes.content);
    }
});

new QOD;

module.exports = {QOD};
