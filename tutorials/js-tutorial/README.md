# JavaScript 入門

MDN のチュートリアルを元に作成しています

https://developer.mozilla.org/ja/docs/Learn/Getting_started_with_the_web/JavaScript_basics

### 注意事項

- 当イベントで解説する内容は、暗記する必要はありません。
  - 「**はーん・・・こんなものがあるんだなー**」くらいで知っていただき、実践していく中で「**ふーん、ここでこれを書くのねー・・・で、これって何だったっけ？**」くらいで体験するだけで結構です
  - 最終的に「**なんかよく分からんけど動くやん！！！**」と楽しくなっていただくためのイベントです


## Javascriptとは？


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

  ```html
  <script defer src="./main.js"></script>
  ```
4. 2で作った`main.js`に以下を書き加えてください。

```js
alert('Hello, world!!!');
```

#1の課題と同じものができることを確認してみましょう。

つまり、今回の`main.js`で足されたコードがJavaScriptということです。
JavaScriptには、いろいろな機能があります。

詳しく知りたい方はここを参照してください。

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
  <button> click</button>
  ```
2. `main.js`に以下を追加します
  ```js
  let myButton = document.querySelector('button');
  let myHeading = document.querySelector('h1');

  function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = myName + 'さん、鹿児島.mkへようこそ！';
    }
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.innerHTML = storedName + 'さん、鹿児島.mkへようこそ！';
  }

  myButton.onclick = function() {
    setUserName();
  }
  ```

画面を確認してください。どのような動きになっているでしょうか？

## 発展編

### #7: ダークモードの切替ボタンを実装してみよう
