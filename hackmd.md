# CSSゲームのススメ





## What is この記事?
- これは[みす55代非公式アドベントカレンダー](https://adventar.org/calendars/5408)22日目の記事となります。*イケイケwriter* がいっぱいるので是非ともご覧あれ〜〜
- この記事ではCSSでゲームを作ることについてあれこれ話します。





## Begin with 〜はじめに〜
- こんにちは、こんばんは、misw55代のヘビです。普段はunityを使ってゲーム作ることがしばしばです。
- 本記事では「~htmlと~cssだけでゲームを作るぞ！！」という決意の元
*<span style="color:red; font-size:48px;">WITHOUT JAVASCRIPT!!</span>*
でゲームを作成するという~~馬鹿な~~楽しい挑戦についてあれこれ話します。

## what is CSS?
- [CSS](http://www.htmq.com/csskihon/001.shtml)（Cascading Style Sheets、カスケーディング・スタイル・シート) とは、webページのスタイル（見た目）を整えるために使われる言語のことです。「文字の色を指定する」「文字にアニメーションをつける」「画像の表示位置や大きさを指定する」などは全てCSSによって設定することができます。
- 例えば上の
*<span style="color:red; font-size:48px;">WITHOUT JAVASCRIPT!!</span>*
もcssを使って書いています。

## Why CSS?
- 通常webページにおいて、ゲームはjavascriptというプログラミング言語を実行することでプレイすることができます。
- しかし、javascriptはプログラミング言語であるがために[アラートループ事件](https://ja.wikipedia.org/wiki/%E3%82%A2%E3%83%A9%E3%83%BC%E3%83%88%E3%83%AB%E3%83%BC%E3%83%97%E4%BA%8B%E4%BB%B6)などの不正動作を起こす可能性があります。
- これが嫌で、ブラウザの設定でjavascriptをオフにしている人も多いでしょう。そんな人は、javascriptによって作成されたゲームで遊ぶことができません。~悲しい...~
- **しか〜し！cssのゲームであれば！！ほとんど全ての人間がプレイできます！！ 嬉しい！！！！** 
- ~~まぁ、今時javascriptをオフにしている人なんてほとんどいないので**意味は特にない**んですけど、、~~
- **だけど！！！**
- **だけれども！！！**

　<strong>　　　　　　
　＼＿（**）＿／　　　／　意味なんて！
　　　　｜　　　　　／　求めないのが！！
    　　　　｜　　　　　＼　　<span style="font-size:32px;color:red;">浪漫</span> 
　　　／　＼　　　　　＼　じゃないのか！！！
　</strong>

 Q: 我々は何故山に登る？　
　A: そこに山があるから

 **Q: 我は何故cssでゲームを作る？
A: そこに！cssがあるならば..！！やらずにはいられないのが<span style="font-size:32px;">漢のヘビ</span>ってもんだろう...！！！**
　　　　　　　　　＿
　　　　　　　　／　-＼　　／ そこに
＿＿ヘビ＿＿＿／　／￣　／　CSSが
＼＿＿＿＿＿＿＿／　　　　＼　あるから　　　
　　　　　　　　　　　　　　＼ 🐍（キリッ）

- **（現在時刻： AM 02:57）**
- **圧倒的！　⭐️深夜テンション⭐️**
- まぁ　そんな感じで やってみた　Yo〜　（理由のこじつけ終了）
- さぁさぁLet's go~~

## How to ゲーム作る？
### Rule 1: 
- 画像は一切使いません！キャラクターはhtml&cssで描画します！！
- やり方
    - ①htmlのdom要素をいい感じに置きます
    - ② ①のdom要素をcssによって<code>left,top,width,height,background-color</code>などをいい感じに設定します
    - ③やったね完成だ〜〜〜

構造例：
![](https://i.imgur.com/g2rdWoy.jpg)
結果例：
![](https://i.imgur.com/bE1rIqB.jpg)



### Rule 2:
- 動画は一切使いません！アニメーションはcssで描画します！！
- やり方
    - cssの<code>@keyframes</code>にアニメーションを登録する。
    - ~~css機能の正しい使い方のため~~ 簡単
    - 実装例：
    　<pre><code>
     /*右へ100px移動するアニメーション*/
     @keyframes animation-name{
         0%{
        tramsform:translateX(0px);
         }
         100%{
          tramsform:translateX(100px);
         }
     }
     </code></pre>
     

### Rule 3:
- cssでクリックイベントを実装しよう
- やり方：
    - cssにはクリックイベントを実行する機能がありません ~~（はい、お疲れ様でした）~~
        - <code>:active（マウスダウンしてる『間だけ』スタイル適用）</code>や<code>:hover（マウスがのってる『間だけ』スタイル適用）</code>は存在するが、クリックで動作を発火させる、というものは存在しない
    - 擬似クリックボタンを作るんだ！！！
        - cssは「スタイルを適用する」という考え。
        - ①<code>要素A: <label for="{id_name}"></label> </code>によって、クリックした時に <code>要素B: id="{id_name}"</code>のcheckbox<input type="checkbox">にチェックが入るようにする。
        - ②<code>要素B:checked ~  要素C</code>によって、『チェックが入った』要素Bから相対的に指定した要素Cへ当てはめるスタイルを指定する。
        - 以上①,②によって、<code>要素A</code>をクリックした時に<code>要素B</code>へチェックが入り、<code>要素B:checked</code>から<code>要素C</code>への相対パスが通るようになり、<code>要素C</code>へスタイルが適用される、という流れを作ることによって、クリックイベントを実装する。　
     - 実装例：
```
<input type="checkbox" id="id-name">
<label for="id-name>Click!</label>
<div id="contents">
<p>change this color</p>
</div>

<style>
#contents>p{
color:black;
}
#id-name:checked ~ #contents>p{
color:red;
}
</style>
```
click前
![](https://i.imgur.com/fT0TITK.jpg)
click後
![](https://i.imgur.com/c9Ia5ZA.jpg)



### Rule 3:
- 点数を数える。cssで足し算しようze！
- やり方：
    - counterを使うんだ...このやり方を見つけるのは若干苦労したのだ、、、
        - ①前述のように、何か動作を行った時にチェックボックスにチェックがつくようにする。
        - ②```要素A{counter-reset: counter-name}```によって、要素Aでカウンター「counter-name」の値を0にセットする。（初期値0なので一度目は必要ない）
        - ③```要素B:checked{counter-increment:counter-name 1}```によって、要素Bが登場する度にカウンター「counter-name」の値を+1する。
        - ④```要素C::before{countent:counter(counter-name);}```によって、要素Cにカウンター「counter-name」の値を設定する。
     - 実装例
```
<input type="checkbox" class="class-name">
<input type="checkbox" class="class-name">
<input type="checkbox" class="class-name">

<p id="ShowCounter"></p>

<style>
.class-name:checked{ /*class="class-name"のものがチャックされる度にcounterの値を+1*/
    counter-increment: score-counter 1;
}
#ShowCounter::before{
    content: counter(score-counter);
}
</style>
```
check前
![](https://i.imgur.com/A9F6rE9.jpg)
check後
![](https://i.imgur.com/gAkNP1C.jpg)

### Rule 4: 

- cssで当たり判定を~~行う~~**行えねーよ！！**
    - cssでは『スタイル』を記述できます（n回目）
    - この状況になったらこのイベントを発火する、という事はできません。
- アニメーションの実行タイミング(delay)を指定することで、状況に応じたアニメーションを実行させよう。 

- やり方 
    -  「？秒後にこのアニメーションを実行する 」指定する。
        -  そのままアニメーションが実行される。
            -  例）地面の穴が3秒後に現れるように現れる場合、３秒後に落下するアニメーションを指定することで、穴に落ちたかのように見える
        -  別の「？秒後にこのアニメーションを実行する」を指定することでそれまでのアニメーションを上書きする。
            -  例）地面の穴が3秒後、8秒後にそれぞれ現れ、キャラクターが3秒後に落下するようアニメーションを設定している場合を考える。ジャンプボタンが2.5秒後~3秒後の間表示するようアニメーションを指定する。ジャンプボタンを押すことでcheckboxAにチェックが入る(Rule 2)。checkboxAにチェックが入っている時におけるキャラクターのアニメーションを「５秒後に落下する」とすることでアニメーションを上書きし、一つ目の穴では落下せず、二つ目の穴が現れる時に落下するようにする。これを繰り返すことで、タイミングよくボタンを押せばステージの先へ行けるが、押さなければ落下する、というゲームを作ることができる。
            
イメージ
![](https://i.imgur.com/jYCYNkt.jpg)
ゲームの裏でのcheckboxの状況
![](https://i.imgur.com/5n7FT2t.jpg)

### Rule 5:
- Rule 1 〜 Rule 4を<span style="color:red">いい感じになるよう頑張って組み合わせて</span>ゲームを作る。頑張れ、、、

## 完成品...（pc&chromeを推奨。）
[github pages](https://snakesneaks.github.io/css-game/platform-game-snake/)

[github repository](https://github.com/SnakeSneakS/css-game)　（これのindex.html及び参照しているcssがゲームのコードとなっています）

iframe: ↓ 

<iframe src="https://snakesneaks.github.io/css-game/platform-game-snake/" width="850px" height="550px"></iframe>

****プレイありがとうございました！！****



## Conclusion 〜結論〜
- cssでもゲームっぽいものは作れはする
- が...**大変辛い、、！！！**
    - cssは所詮スタイル（見た目）を整えるための言語な訳で、
    - 分岐処理や配列などの機能が一切使えないわけで、、
    - cssゲーム制作用のライブラリなんていうのも（恐らく）ないわけで、
    - 無駄に大量の時間が浪費されるわけで、
    - cssだけっていう縛りプレイも意味は特にないわけで、

<strong style="color:red; font-size:32px;"> 結論）人類はプログラミング言語を使うべきである </strong>
    - ```演算```機能、```Setinterval(一定時間ごとに実行)```機能、```function（関数）```機能、など~~当たり前の~~優れた機能を人類は使うべきだ、、、

~いい経験にはなりました。。。~



## ふり返り
---
- **ふりかえり①**
　<strong>　　　　　　
　＼＿（**）＿／　　　／　意味なんて！
　　　　｜　　　　　／　求めないのが！！
    　　　　｜　　　　　＼　　<span style="font-size:32px;color:red;">浪漫</span> 
　　　／　＼　　　　　＼　じゃないのか！！！
　</strong>
 
 <strong style="color:red; font-size:12px;"> ？？？　</strong>

---

- **ふりかえり②**
　　　　　　　　　＿
　　　　　　　　／　-＼　　／ そこに
＿＿ヘビ＿＿＿／　／￣　／　CSSが
＼＿＿＿＿＿＿＿／　　　　＼　あるから　　　
　　　　　　　　　　　　　　＼ 🐍（キリッ）
              
<strong style="color:red; font-size:28px;"> そこにJavascriptもありますね ニッコリ :) </strong>

---

- **ふりかえり③**
*<span style="color:red; font-size:48px;">~~WITHOUT JAVASCRIPT!!~~</span>*
*<span style="color:red; font-size:80px; background-color:yellow;">USE JAVASCRIPT!!</span>*

---

## 〜〜　おしまい　〜〜
- ありがとうございました！
- cssは見た目を整える上でとってもexcellentな言語ですが、プログラミング言語ではなくスタイルシート言語です！！

<p id="thanks" style="color:red; font-size:32px">Thank You! </p>

<div class="scene">
        <div class="box">
            <div>Made</div>
            <div>By</div>
            <div>CSS</div>
            <div>Cube</div>
            <div></div>
            <div></div>
        </div>
        <div class="box">
            <div class="t">misw　55代　ヘビ</div>
            <div class="t">感謝</div>
            <div class="t">css possible</div>
            <div class="t">Enjoy</div>
            <div class="t">use javascript</div>
            <div class="t">HTML</div>
        </div>
    </div>
<style>
.scene{
position:relative;
width:800px;
height:100px;
top:auto;
left:auto;
}
.box{
    perspective: 2048px;
    position: absolute;
    transform-origin:30px 30px 0;
    transform-style:preserve-3d;
}
.box>div{
    opacity: 0.9;
    position: absolute;
    width:60px;
    height:60px;
    border:1px solid black;
    background-color: gray;
    transform-origin:30px 30px;
}
/*box*/
.box>div:hover{
    background-color: lightblue;
}
.box>div:nth-child(1){
    transform:rotateY(0deg) translate3d(0,0,30px);
}
.box>div:nth-child(2){
    transform:rotateY(90deg) translate3d(0,0,30px);
}
.box>div:nth-child(3){
    transform:rotateY(180deg) translate3d(0,0,30px);
}
.box>div:nth-child(4){
    transform:rotateY(-90deg) translate3d(0,0,30px);
}
.box>div:nth-child(5){
    transform:rotateX(90deg) translate3d(0,0,30px);
}
.box>div:nth-child(6){
    transform:rotateX(-90deg) translate3d(0,0,30px);
}
.box:nth-of-type(1){
    left:50px;
    top:150px;
    transform:rotate3d(1,2,3,30deg);
    animation: Anime-bound 180s linear infinite;
}
.box:nth-of-type(2){
    position:relative;
    left:500px;
    top:0px;
    transform:rotate3d(1,2,3,30deg);
    animation: Anime-rotate 10s linear infinite;
}
#thanks{
    position:absolute;
    animation: Vibrate 5s linear infinite;
}
@keyframes Anime-rotate{
    0%{
        transform:rotate3d(-1,0,-3,-360deg);
    }50%{
        transform:rotate3d(1,3,1,0deg);
    }100%{
        transform:rotate3d(-1,1,0,360deg);
    }
}
@keyframes Anime-bound{
    0%{
        transform:translateY(0px) rotateY(0deg) scaleY(1);
    }
    49%{
        transform:translateY(-10000px) rotateY(-1800deg) scaleY(1);
    }
    50%{
        transform:translateY(-10020px) rotateY(-1800deg) scaleY(0.2);
    }
    51%{
        transform:translateY(-10000px) rotateY(-1800deg) scaleY(1);
    }
    100%{
        transform:translateY(0px) rotateY(-3600deg) scaleY(1);
    }
}
@keyframes Vibrate{
    0%{
        opacity:0;
    }
    30%{
        opacity:1.0;
    }
    30%{
    transform:translateX(0px);
    }
    31%{
    transform:translateX(10px);
    }
    32%{
    transform:translateX(0px);
    }
    33%{
    transform:translateX(-10px);
    }
    34%{
    transform:translateX(0px);
    }
    35%{
    transform:translateX(0px);
    }
    36%{
    transform:translateX(10px);
    }
    37%{
    transform:translateX(0px);
    }
    /*40%{
    transform:translateX(0px) scane(1,1);
    }
    45%{
    transform:translateX(200px) scale(3,3);
    }
    75%{
    transform:translateX(200px) scale(3,3);
    }
    80%{
    transform:translateX(0px) scale(1,1);
    }
    100%{
    transform:translateX(0px);
    }*/
}
.t{
opacity:1.0;
color:lightgreen;
font-size:14px;
overflow-wrap:break-word;
}
</style>