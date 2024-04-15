/*****
 *pon.js
*/
$(function(){
    var ready = function() {
        var SCROLL_SPEED = 200;
        var PON_SPEED = 500;
        var PON_MIN_LENGTH = 10;
        
        $("a[href^=#]").click(function(){
            var Hash = $(this).attr('href').split('#')[1];
            var HashOffset = $('a[name=' + Hash + ']').offset().top;
            $("html,body").animate({scrollTop: HashOffset + 'px'}, SCROLL_SPEED);
            return false;
        });
        
        var origin_pon_column = $('.pon_column', $('#container'));
        var pon_window = $('.pon_window', $('#container'));
        $('#pon_function').submit(function() {
            var pon_type = $('input[name=pon_type]:checked', $(this)).val();
            var i;
            
            var data_input = $('.pon_input', $(this)).val();
            data_input = data_input.replace(/\r\n/g, "\n");

            var data_arr = data_input.split('\n');
            
            //空白を削除
            i = data_arr.length - 1;
            for(i; i >= 0; i--) {
                if(data_arr[i] == '') {
                    data_arr.splice(i, 1);
                }
            }
            if(data_arr.length <= 0) return;//何もなければしない
            
            var pon_top = $('.pon_display').offset().top;
            $('html,body').animate({scrollTop: pon_top + 'px'}, SCROLL_SPEED);
            
            var shuffled_arr = [];
            switch(pon_type){
                case 'select':
                    //シャッフル
                    shuffled_arr = [];
                    while(shuffled_arr.length < PON_MIN_LENGTH) {//ある程度の長さにします
                        shuffled_arr = shuffled_arr.concat(JKAPP.common.shuffleArray(data_arr));
                    }
                    //console.log(shuffled_arr);
                    
                    //表示とアニメーション
                    pon_window.css('height', '50px');
                    var pon_column = origin_pon_column.clone();
                    pon_window.empty();
                    pon_window.append(pon_column);
                    pon_column.empty();
                    for(i = 0; i < shuffled_arr.length; i++) {
                        var pon_item = $('<div class="pon_item"><span>' + shuffled_arr[i] + '</span></div>');
                        pon_column.append(pon_item);
                    }
                    var pon_height = pon_item.height();
                    pon_column.css('top', (-pon_height * (shuffled_arr.length - 1)).toString() + 'px');
                    pon_column.animate({'top': '0px'}, PON_SPEED, 'easeOutElastic');
                    break;

                case 'order':
                    //シャッフル
                    shuffled_arr = shuffled_arr.concat(JKAPP.common.shuffleArray(data_arr));
                    //表示とアニメーション
                    pon_window.css('height', 'auto');
                    var pon_column_group = [];
                    pon_window.empty();
                    for(i = 0; i < shuffled_arr.length; i++) {
                        pon_column_group.push(origin_pon_column.clone());
                        pon_window.append(pon_column_group[i]);
                        $('span', pon_column_group[i]).append(shuffled_arr[i]);
                        var pon_item = $('.pon_item', pon_column_group[i]);
                        var pon_height = pon_item.height();
                        pon_column_group[i].css('top', (-pon_height * (shuffled_arr.length - 1)).toString() + 'px');
                        pon_column_group[i].animate({'top': '0px'}, PON_SPEED, 'easeOutElastic');
                    }
                    break;
                default:
                    break;
            }
            
        });
        
        var demo_list = 'ここに\n決めたいことを\n1行に1つずつ\n書いてください';
        $('.pon_input').val(demo_list);
        $('.pon_input').focus(function(){
            $(this).val('');
            $(this).unbind('focus');
        });
    };
    
    var msie=navigator.appVersion.toLowerCase();
    msie=(msie.indexOf('msie')>-1)?parseInt(msie.replace(/.*msie[ ]/,'').match(/^[0-9]+/)):0;
    
    if(msie != 0 && msie != 9) {
        $('#container').hide();
        $('#msie').show();
    } else {
        ready();
    }
    
    function ss(){
        var pon_display = document.getElementsByClassName('pon_display')[0];
        /*
        html2canvas(pon_display,{
            onrendered; function(canvas){
                console.log(canvas.toDataURL("image/png");
            }
        });
        */
    }
});
