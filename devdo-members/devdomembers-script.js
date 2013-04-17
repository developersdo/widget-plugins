var devdom = (function( $, undefined ){
    var skills = {};
    skills.profile = {};
    skills.menuLeft = '';
    skills.category = {
        load : function(callback){
            $.ajax({
            url: "http://174.129.3.153:8080/devdomskillsapp/category",
            type: "get",
            dataType: "jsonp",
            data: "",
            success: function(response, textStatus, jqXHR){
                callback(response);
            },
            error: function(jqXHR, textStatus, errorThrown){
                alert("error:"+textStatus);
                callback(null);
            }
        });
        },
        show : function(){
            this.load(function(json){
                var len = json.length;
                alert(len);
            });
        }
    };
    skills.init = function() {
        skills.category.show();
    };
    return skills;
}( jQuery ));

$(document).ready(function() {
    devdom.init();
});