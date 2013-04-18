var devdom = null;
function createDevDomClass(){
        devdom = (function( $, undefined ){
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
                    var len = json["category"].length;
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
}
if(typeof jQuery !== 'undefined'){
    createDevDomClass();
}else{
    loadJqueryFile(function(status){
        switch (status){
            case 'ok':createDevDomClass();break;
            case 'error': alert("hubo un error cargando el archivo de Jquery");
        }
    });
}

function loadJqueryFile(callback){
    var isDone = false;
    var script = document.createElement('script');
    script.onload = onloadHandler;
    script.onreadystatechange = onReadyStateChangeHandler;
    script.onerror = onErrorHandler;
    script.type = "text/javascript";
    script.src = "http://code.jquery.com/jquery-1.9.1.min.js";
    document.getElementsByTagName('head')[0].appendChild(script);
 
    function onloadHandler(){
        if (!isDone) {
            isDone = true;
            callback("ok");
        }
    }
    function onReadyStateChangeHandler(){
        var state;
        if (!isDone) {
            state = script.readyState;
            if (state === "complete") {
                onloadHandler();
            }
        }
    }
    function onErrorHandler(){
        if (!isDone) {
            isDone = true;
            callback("error");
        }
    }
}