<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <title>ずばポン</title>
        <meta name="description" content="優柔不断解決ツール『ずばポン』- ポン様が全て0.5秒で決めます。" />
        <meta name="keywords" content="決断,選択,優柔不断,ルーレット,罰ゲーム,おみくじ" />
        <meta name="twitter:card" content="summary">
        <meta name="twitter:site" content="@_junka">
        <meta property="og:title" content="『ずばポン』優柔不断解決ツール" />
        <meta property="og:description" content="ポン様が全て0.5秒で決めます。" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="http://pon.junka.net/img/ogp.jpg" />
        <meta property="og:url" content="http://pon.junka.net/" />
        <!--[if IE]>
        <link href="./css/ie.css" media="screen, projection" rel="stylesheet" type="text/css" />
        <![endif]-->
        <link href="./css/print.css" media="print" rel="stylesheet" type="text/css" />
        <link href="./css/screen.css" media="screen, projection" rel="stylesheet" type="text/css" />
        <link rel="stylesheet" media="screen" href="./css/index.css?<?php echo filemtime('./css/index.css'); ?>" />
        <link rel="apple-touch-icon" sizes="57x57" href="./img/apple-touch-icon-57x57.png">
        <link rel="apple-touch-icon" sizes="72x72" href="./img/apple-touch-icon-72x72.png">
        <link rel="apple-touch-icon" sizes="114x114" href="./img/apple-touch-icon-114x114.png">
        <link rel="apple-touch-icon" sizes="144x144" href="./img/apple-touch-icon-144x144.png">
        <link rel="apple-touch-icon" href="./img/apple-touch-icon.png">
        
        <meta name="viewport" content="width=device-width, user-scalable=yes, initial-scale=1, minimum-scale=0.5 , maximum-scale=1">
        
        <script src="http://codeorigin.jquery.com/jquery-1.6.4.min.js"></script>
        <script src="./js/jquery-ui-1.9.2.custom.min.js"></script>
        
        <!--[if IE]> 
        <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
        <![endif]-->
    
        <script src="/js/jk.js"></script>
        <script src="./js/pon.js?<?php echo filemtime('./js/pon.js'); ?>"></script>
        <script type="text/javascript">

            var _gaq = _gaq || [];
            _gaq.push(['_setAccount', 'UA-39211772-1']);
            _gaq.push(['_trackPageview']);
            
            (function() {
              var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
              ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
              var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
            })();
        
        </script>
    </head> 
    <body>
        <div id="msie">
            <p>申し訳ありませんが、IE8以下のブラウザには対応しておりません。</p>
            <p>最新版へアップグレードするか、Firefox、Chrome、Safariなどのモダンブラウザをご利用ください。</p>
        </div>
        <div id="container">
            <form id="pon_function" action="javascript:void(0);">
            <div class="content">
                <h1>ずばポン</h1>
                <p>ポン様が全て0.5秒で決めます。</p>
                <p class="menu">｜<a href="#howto">使い方</a>｜<a href="#example">使用例</a>｜<a href="#history">更新履歴</a>｜</p>
            </div>
            <div class="pon_display">
                <div class="block">
                    <textarea class="pon_input"></textarea>
                </div>
                <div class="block">モード：
                    <label><input type="radio" name="pon_type" value="select" checked><span>ひとつ選ぶ</span></label>
                    <label><input type="radio" name="pon_type" value="order"><span>並べ替える</span></label>
                </div>
                <div class="block">
                    <input type="submit" class="pon_button" value="↓ポン↓" />
                </div>
                <div class="block">
                    <div class="pon_window">
                        <div class="pon_column">
                            <div class="pon_item"><span> </span></div>
                        </div>
                    </div>
                </div>
            </div>
            </form>
            <div class="content">
<div class="ninja_onebutton">
    <script type="text/javascript">
//<![CDATA[
(function(d){
if(typeof(window.NINJA_CO_JP_ONETAG_BUTTON_9f19a4a55618abd4ad2f954b7c49df18)=='undefined'){
    document.write("<sc"+"ript type='text\/javascript' src='http:\/\/omt.shinobi.jp\/b\/9f19a4a55618abd4ad2f954b7c49df18'><\/sc"+"ript>");
}else{
    window.NINJA_CO_JP_ONETAG_BUTTON_9f19a4a55618abd4ad2f954b7c49df18.ONETAGButton_Load();}
})(document);
//]]>
    </script><span class="ninja_onebutton_hidden" style="display:none;"></span><span style="display:none;" class="ninja_onebutton_hidden"></span>
</div>
                <a name="howto"></a>
                <h2>使い方</h2>
                <ol>
                    <li>白い枠の中に決めたいことを記入。１行に１個ずつ書いてね。</li>
                    <li>モードを選択</li>
                    <li>青いボタンをぽちっ</li>
                    <li>ずばポーン！</li>
                </ol>
                <a name="example"></a>
                <h2>使用例</h2>
                <ul>
                    <li>今日の夕飯が決まらない時に。</li>
                    <li>プレゼンの順番を決める時に。</li>
                    <li>最初の1杯を決められない時に。</li>
                    <li>今日の運勢を知りたい時に。</li>
                    <li>気になるあの人を誘うかどうか迷った時に。</li>
                    <li>新発売のアレを買うかどうか悩んだ時に。</li>
                    <li>パシリを決めたい時に。</li>
                    <li>罰ゲームに。</li>
                </ul>
                <p>使い方はあなた次第。<br />
                スマフォのホーム画面に追加しておくと、いつでも使えるので便利ですよ。</p>
                <a name="history"></a>
                <h2>更新履歴</h2>
                <p><span class="date">2018.02.27</span><br />並べ替え機能を追加</p>
                <p><span class="date">2012.12.13</span><br />ねんがんのスマフォ対応。脱Flash!</p>
                <p><span class="date">2011.12.29</span><br />機能を超シンプルにして『ずばポン』公開</p>
                <p><span class="date">2011.12.xx</span><br />閉鎖(谷;)</p>
                <p><span class="date">20xx.xx.xx</span><br />会社のサービスとして公開</p>
                <p><span class="date">2009.11.7</span><br />『ぐるぐるポン2』公開</p>
                <h2>開発者</h2>
                <p><a href="https://twitter.com/_junka?ref_src=twsrc%5Etfw" class="twitter-follow-button" data-size="large" data-show-count="false">Follow @_junka</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script></p>
            </div>
            <div class="content">
                <p class="copyright">&copy; <a href="http://junka.net/">順加</a></p>
            </div>
        </div>
    </body> 
</html>
