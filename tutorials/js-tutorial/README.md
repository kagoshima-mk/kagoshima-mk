# JavaScript 入門

MDN のチュートリアルを元に作成しています

https://developer.mozilla.org/ja/docs/Learn/Getting_started_with_the_web/JavaScript_basics

### 注意事項

- 当イベントで解説する内容は、暗記する必要はありません。
  - 「**はーん・・・こんなものがあるんだなー**」くらいで知っていただき、実践していく中で「**ふーん、ここでこれを書くのねー・・・で、これって何だったっけ？**」くらいで体験するだけで結構です
  - 最終的に「**なんかよく分からんけど動くやん！！！**」と楽しくなっていただくためのイベントです


## Javascriptとは？

https://developer.mozilla.org/ja/docs/Learn/JavaScript/First_steps/What_is_JavaScript#%E9%AB%98%E6%B0%B4%E6%BA%96%E3%81%AE%E5%AE%9A%E7%BE%A9


## 体験

### ＃１：　ウインドウっぽいものを表示しよう！

表示をすると `alert` を表示される画面を作りましょう。

`samples` 内にある `index.html` をみてください。
その中に`<body>`と`</body>`を探して、その間に以下を書いてみましょう。

```html
<script>
  alert('Hello, world!!!');
</script>
```

以下の画像が出ることを確認してください。

![img](./%231_image.png)

### #2: 場所を確認しよう

#1 で追加した `<script>` と `</script>` を消してブラウザを更新してみましょう。

どうなったでしょうか？

### #3：　ファイルを分けてみましょう

1. #1でindex.htmlに追加したものを消しましょう。
2. 次に`main.js`というファイルを作ります。
3. `index.html`の `<head>` と `<head>` の中に次を書き入れます。
  (`</head>`の上の行に挿入してください。)

  ```html
  <script defer src="./main.js"></script>
  ```
4. 2で作った`main.js`に以下を書き加えてください。

```js
alert('Hello, world!!!');
```

#1の課題と同じものができることを確認してみましょう。

確認が終わったら、追加したコードは削除しておいてください。

今回の`main.js`で足されたコードがJavaScriptです。
JavaScriptには、いろいろな機能があります。

### #4: タイトルの表示変更します

#3で作った `main.js` に以下を追加してください。

```js
const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
```

### #5: 画像を入れ替えてみよう

画面をクリックして画像の入れ替わりを体験します。

まずは、好きな画像を探しましょう。
探した画像を`images`フォルダに保存してください。

保存した後に `main.js` に以下のコードを書いてください。

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

1. `index.html`の`</body>`の上の行に
  ```html
  <button>click</button>
  ```
2. `main.js`に以下を追加します
  ```js
  let myButton = document.querySelector('button');
  let myHeading = document.querySelector('h1');

  // タイトルを変更します
  function setUserName() {
    let myName = prompt('名前を入力してください。');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = myName + 'さん、鹿児島.mkへようこそ！';
    }
  }

  // 名前の入力を一度でもしてたときは、その名前をタイトルに入力します。
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = storedName + 'さん、鹿児島.mkへようこそ！';
  }

  // クリックボタンを押したときに名前の入力を聞くウィンドウが開きます。
  myButton.onclick = function() {
    setUserName();
  }
  ```

画面を確認してください。どのような動きになっているでしょうか？

今回のJapascript入門は体験会ということで、Javascriptの詳しい機能については省かせていただきませた。
この体験会でJavascriptに興味を持っていただけたのであれば、MDNのページを参照してください。
https://developer.mozilla.org/ja/docs/Learn/Getting_started_with_the_web

もっと詳しいJavascriptを学ぶことができます。

## 発展編

### #7: ダークモードの切替ボタンを実装してみよう
