# JavaScript 入門

MDN のチュートリアルを元に作成しています

https://developer.mozilla.org/ja/docs/Learn/Getting_started_with_the_web/JavaScript_basics

### 注意事項

- 当イベントで解説する内容は、暗記する必要はありません。
  - 「**はーん・・・こんなものがあるんだなー**」くらいで知っていただき、実践していく中で「**ふーん、ここでこれを書くのねー・・・で、これって何だったっけ？**」くらいで体験するだけで結構です
  - 最終的に「**なんかよく分からんけど動くやん！！！**」と楽しくなっていただくためのイベントです


## JavaScriptとは？

https://developer.mozilla.org/ja/docs/Learn/JavaScript/First_steps/What_is_JavaScript#%E9%AB%98%E6%B0%B4%E6%BA%96%E3%81%AE%E5%AE%9A%E7%BE%A9


## 体験

#### 実行方法について
`samples/trial/` 内にある `index.html` をブラウザにドラッグアンドドロップして作成したHTMLとJavaScriptを実行してください。

### ＃１：　アラートを表示しよう！

ページを開くと `alert` が自動表示される画面を作りましょう。

`samples/trial/` 内にある `index.html` をエディタで開いてください。
その中 `samples/trial/index.html` にある `<body>` と `</body>` を探して、その間に以下を書き入れてみましょう。

```html
<script>
  alert('Hello, world!!!');
</script>
```


以下のアラートが出ることを確認してください。

![img](./images/%231_image.png)

この `<script>` タグで囲まれたコードが JavaScript です。
JavaScriptには、いろいろな機能があります。

### #2: 場所を確認しよう

#1 で追加した `<script>` と `</script>` を消してページを更新 (F5 ボタンを押下) してみましょう。

どうなったでしょうか？

### #3：　ファイルを分けてみましょう

1. #1で index.html に追加したものを消しましょう。
2. 次に `main.js` というファイルを作ります。
3. `index.html` の `<head>` と `</head>` の中に次を書き入れます。
  (`</head>` の上の行に挿入してください)

  ```html
  <script defer src="./main.js"></script>
  ```
4. 2で作った`main.js`に以下を書き加えてください。

```js
alert('Hello, world!!!');
```

#1 の課題と同じ動きになることを確認してください。

確認が終わったら、追加したコードは削除しておいてください。

このように、JavaScript は HTML と別ファイルにも記述できます。HTML とは別ファイルに記述した場合、そのファイルを読み込むためのタグを HTML に埋め込む必要があります `<script defer src="./main.js"></script>`

### #4: タイトルの表示変更します

#3で作った `samples/trial/main.js` に以下を追加してください。

```js
const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
```

ブラウザを更新すると`index.html`に書かれている「Welcome 鹿児島.mk」が変更されています。

### #5: 画像を入れ替えてみよう

画面をクリックすることで画像が切り替わる機能を実装します。

まずは、好きな画像を探しましょう。
探した画像を `samples/trial/images` フォルダに保存してください。

保存した後に `samples/trial/main.js` に以下のコードを書いてください。

```js
const myImage = document.querySelector('img');

myImage.onclick = () => {
  const mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/kagoshima-mk-image.png') {
    myImage.setAttribute('src','images/＜画像の名前＞');
  } else {
    myImage.setAttribute('src','images/kagoshima-mk-image.png');
  }
}
```

### #6: ボタンを押して動作するイベントを作ろう

1. `index.html`の`</body>`の上の行にボタンタグを追加します
  ```html
  <button>click</button>
  ```
1. `main.js`に以下を追加します
  ```js
  // タイトルを変更します
  function setUserName() {
    const myName = prompt('名前を入力してください。');
    if(!myName) {
      setUserName();
    } else {
      myHeading.textContent = myName + 'さん、鹿児島.mkへようこそ！';
    }
  }

  // クリックボタンを押したときに名前の入力を聞くウィンドウが開きます。
  myButton.onclick = function() {
    setUserName();
  }
  ```

画面を更新してボタンをクリックしてください。どのような動きになっているでしょうか？

### JavaScript についてさらに勉強をしたい場合

今回の JavaScript 入門は体験会ということで、JavaScript の詳しい説明については省かせていただきませた。

この体験会で JavaScript に興味を持っていただけたのであれば、MDNのページを参照してください。詳しく JavaScript を学ぶことができます。
[MDNについて](https://developer.mozilla.org/ja/docs/MDN)

- https://developer.mozilla.org/ja/docs/Learn/JavaScript
- https://developer.mozilla.org/ja/docs/Learn/Getting_started_with_the_web


## 発展編

### #7: ダークモードの切替ボタンを実装してみよう

[daisyUI](https://daisyui.com/) を使ってダークモードを実装してみましょう！

|ライトモード|ダークモード
|---|---
|![ライトモードスクショ](./images/%237_light_mode.png)|![ダークモードスクショ](./images/%237_dark_mode.png)

daisyUI は、[CSSフレームワーク TailwindCSS](https://tailwindcss.com/) を使った CSS コンポーネントライブラリです。「良い感じにスタイリングしてくれる君」と考えてもらったら、大きな間違いはありません。

daisyUI には、[テーマ機能](https://daisyui.com/docs/themes/)というがあり、今回はそれを使ってダークモードを実装します。具体的には、ライトモードとダークモードのテーマを指定しておき、切替ボタンを押すとテーマを切り替える機能です。

1. [JavaScript 入門 発展編](./samples/appendix/) の `samples/appendix/index.html` を開いてください
2. [ダークモードの切替処理を実装しているJS](./samples/appendix/main.js) `samples/appendix/main.js` を開いて、どんな処理をしているのかを確認してください
3. [daisyUI のテーマ機能](https://daisyui.com/docs/themes/)を見ながら、ライトテーマとダークテーマを好きなテーマに変更してみましょう！
4. ダークモードの切替ボタンを、「鹿児島.mkとは」のセクションに追加してください
   - フッター (画面下部) の実装が参考になると思います
5. `samples/appendix/main.js` の中身を全て (または一部) 消去してみて、自分で実装してみましょう
