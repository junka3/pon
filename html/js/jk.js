/*******
* JKAPP
* version 20121211_1630
*/
if (!('console' in window)) {

    window.console = {};
    window.console.log = function(str){
        return str;
    };
}
var JKAPP = JKAPP || {};
$(function(){
    
    JKAPP.namespace = function (ns_string) {
        var parts = ns_string.split('.'),
            parent = JKAPP,
            i;
        if(parts[0] === JKAPP) {
            parts = parts.slice(1);
        }
        for(i = 0; i < parts.length; i += 1) {
            if(typeof parent[parts[i]] === 'undefined') {
                parent[parts[i]] = {};
            }
            parent = parent[parts[i]];
        }
        return parent;
    };

    JKAPP.namespace('debug');
    JKAPP.debug.trace = function() {
        var my_domain = location.href.split('/')[2];
        if(my_domain.indexOf('shinobi.vpn') >= 0) {
            var i = 0;
            for(i; i < arguments.length; i++) {
                console.log(arguments[i]);
            }
        }
    };
    
    JKAPP.namespace('ui.button');
    JKAPP.ui.button.initFlexBt = function(ele) {
        var target = ele || $('body');
        $('.bt-flex', target).each(function(index) {
            if($(this).find('.center').length <= 0) {
                var center = $('<span class="center"></span>');
                center.append($(this).html());
                
                $(this).empty();
                $(this).append(center);
                
                var before = $('<span class="before"></span>');
                $(this).prepend(before);
                
                var after = $('<span class="after"></span>');
                $(this).append(after);
                
                $(this).mouseover(function(e) {
                    $('.before, .center, .after', $(this)).css('background-position','left bottom');
                });
                $(this).mouseout(function(e) {
                    $('.before, .center, .after', $(this)).css('background-position','left top');
                });
            }
        });
    };
    
    JKAPP.namespace('common');
    JKAPP.common.isImagePath = function(t) {
        var suffix = t.split('.').pop().toString().toLowerCase();
        switch(suffix) {
            case 'jpg' :
            case 'jpeg' :
            case 'png' :
            case 'gif' :
                return true;
                break;
            default :
                return false;
                break;
        }
    };
    JKAPP.common.getUserAgent = function() {
        var userAgent = window.navigator.userAgent.toLowerCase();
    
        if (userAgent.indexOf('opera') != -1) {
          return 'opera';
        } else if (userAgent.indexOf('msie') != -1) {
          return 'ie';
        } else if (userAgent.indexOf('chrome') != -1) {
          return 'chrome';
        } else if (userAgent.indexOf('safari') != -1) {
          return 'safari';
        } else if (userAgent.indexOf('gecko') != -1) {
          return 'gecko';
        } else {
          return false;
        }
    };
    
    JKAPP.common.timeStamp = function() {
        this.time = new Date();
    }
    JKAPP.common.timeStamp.prototype.getTimestamp = function() {
        return this.time.getTime();
    };
    
    JKAPP.common.sortNumeric = function(a,b){
    	if( a.key < b.key ) return -1;
        if( a.key > b.key ) return 1;
        return 0;
    };
    JKAPP.common.shuffleArray = function(arr) {
        var shArr = [];
        var i;
        for (i = 0; i < arr.length; i++) {
            var tempObj = {};
            tempObj.val = arr[i];
            tempObj.key = Math.random();
            shArr.push(tempObj);
            tempObj = null;
        }
        shArr.sort(JKAPP.common.sortNumeric);
       
        var retArr = [];
        for (i = 0; i < shArr.length; i++) {
             retArr.push(shArr[i].val);
        }
       
        return retArr;
    };
    
    JKAPP.namespace('jquery');
    JKAPP.jquery.template = function(tmpl, data) {
        var template = $.template(null, tmpl);
        var append_element = $.tmpl(template, data);
        return append_element;
    };
    JKAPP.jquery.loadAndAppendTmpl = function(url, ele, data, functions) {
        //console.log(url, objid, data, func, func2);
        var ts = new JKAPP.common.timeStamp();
        ele.load(url + '?' + ts.getTimestamp(), function(loadedData) {
            $(this).html('');
            var append_element = JKAPP.jquery.template(template, data);
            ele.append(append_element);
            //append_element.appendTo(objid);
            var i;
            for(i = 0; i < functions.length; i++) {
                if(!!functions[i]) functions[i]();
            }
        });
    };
    
    JKAPP.namespace('blog');
    JKAPP.blog.getObj = function(ele) {
        var obj = {};
        ele.children().each(function() {
            var key = $(this).get(0).tagName.toLowerCase();
            obj[key] = $(this).html();
        });
        return obj;
    };
    
    JKAPP.blog.buildObj = function(ele) {
        var obj = {};
        ele.children().each(function(e) {
            var key = $(this).get(0).tagName.toLowerCase();
            switch(key) {
                case 'entries':
                case 'comments':
                case 'trackbacks':
                    obj[key] = [];
                    $(this).find('node').each(function() {
                        var nodeobj = JKAPP.blog.getObj($(this));
                        obj[key].push(nodeobj);
                    });
                    break;
                case 'plugins':
                    obj[key] = {};
                    $(this).children().each(function() {
                        var plugin_key = $(this).get(0).tagName.toLowerCase();
                        if(plugin_key == 'plugin_profile') {
                            obj[key][plugin_key] = JKAPP.blog.getObj($(this));
                        } else {
                            obj[key][plugin_key] = [];
                            $(this).find('node').each(function() {
                                var nodeobj = JKAPP.blog.getObj($(this));
                                obj[key][plugin_key].push(nodeobj);
                            });
                        }
                    });
                    break;
                case 'pagelink_10':
                    if(!obj[key]) obj[key] = [];
                    obj[key].push(JKAPP.blog.getObj($(this)));
                    break;
                default:
                    obj[key] = JKAPP.blog.getObj($(this));
                break;
            }
        });
        return obj;
    };
    
    JKAPP.blog.element = function(element) {
        this.width;
        this.top;
        this.left;
        this.position;
        this.ele = element;
    };
    JKAPP.blog.element.prototype.setPosition = function(w,t,l,p) {
        if (!!w) this.width = w;
        if(!!t) this.top = t;
        if(!!l) this.left = l;
        if(!!p) this.position = p;
        this.ele.css({'top': this.top, 'left': this.left, 'width': this.width, 'position': this.position});
    };
    JKAPP.blog.element.prototype.append = function(ele) {
        this.ele.append(ele);
    };
    
});