# Webサイト制作体験会 (HTML/CSS入門)

## HTML
- HyperText Markup Language（ハイパーテキスト マークアップ ランゲージ）
- [https://ja.wikipedia.org/wiki/HyperText_Markup_Language](https://ja.wikipedia.org/wiki/HyperText_Markup_Language)

```html
<!DOCTYPE html>
<html lang="ja">
 <head>
  <meta charset="UTF-8">
  <link rel="author" href="mailto:mail@example.com">
  <title lang="en">HyperText Markup Language - Wikipedia</title>
  <link rel="stylesheet" href="sample.css" />
 </head>
 <body>
  <article>
   <h1 lang="en">HyperText Markup Language</h1>
   <p>HTMLは、<a href="http://ja.wikipedia.org/wiki/SGML">SGML</a>
      アプリケーションの一つで、ハイパーテキストを利用してワールド
      ワイドウェブ上で情報を発信するために作られ、
      ワールドワイドウェブの<strong>基幹的役割</strong>をなしている。
      情報を発信するための文書構造を定義するために使われ、
      ある程度機械が理解可能な言語で、
      写真の埋め込みや、フォームの作成、
      ハイパーテキストによるHTML間の連携が可能である。</p>
  </article>
 </body>
</html>
```
![image](https://user-images.githubusercontent.com/48468109/190323889-7abfe950-098b-47b2-9465-99058b640e3c.png)


## CSS
- Cascading Style Sheets（CSS、カスケーディング・スタイル・シート、カスケード・スタイル・シート）
- https://ja.wikipedia.org/wiki/Cascading_Style_Sheets
```css
h1 {
  color: #6594e0;/*文字色*/
  /*線の種類（点線）2px 線色*/
  border-bottom: dashed 2px #6594e0;
}

p {margin: 2rem auto;} /*外側の余白*/
p {padding: 1rem 2rem;} /*外側の余白*/
p {width: 90%;} /*幅*/
p {font-size: 1rem; } /*文字サイズ*/
p {color: #222; } /*文字色*/
p {background: #fafafa;} /*背景色*/
p {border: 3px solid #555;} /*枠*/
p {font-weight: normal;} /*文字の太さ*/
p {line-height: 1.6;} /*行間*/
p {letter-spacing: 0.01rem;} /*字間*/
p {text-align: left;} /*行揃え*/
p {text-indent: 1rem;} /*字下げ*/
```
![image](https://user-images.githubusercontent.com/48468109/190323972-4ce56519-d3a3-4861-9410-d6bd7001e11a.png)

### CSSフレームワークを使用する

- [https://daisyui.com/](https://daisyui.com/) を使ってサイトをおしゃれにする
- CDN について
    - https://www.cloud9works.net/web/how-to-use-cdn-for-css-js/
    ```html
    <link href="https://cdn.jsdelivr.net/npm/daisyui@2.27.0/dist/full.css" rel="stylesheet" type="text/css" />
    <script src="https://cdn.tailwindcss.com"></script>
    ```
    
- フレームワークを使用した場合の違い
    
    ```html
    <button>BUTTON</button>
    ```
    ![image](https://user-images.githubusercontent.com/48468109/190324862-a377f128-244f-44c9-a118-982e234086a9.png)

    - [https://daisyui.com/components/button/](https://daisyui.com/components/button/)
    ```html
    <button class="btn">Button</button>
    <button class="btn btn-primary">Button</button>
    <button class="btn btn-secondary">Button</button>
    <button class="btn btn-accent">Button</button>
    <button class="btn btn-ghost">Button</button>
    <button class="btn btn-link">Button</button>
    ```
    ![image](https://user-images.githubusercontent.com/48468109/190324993-789392ee-02b9-422a-8b4c-db513c8ccdd2.png)
    
## カリキュラム

1. [イベントの前準備](https://github.com/kagoshima-mk/kagoshima-mk#%E3%82%A4%E3%83%99%E3%83%B3%E3%83%88%E3%81%AE%E5%89%8D%E6%BA%96%E5%82%99)を行う
1. リポジトリをエディタ(VSCode)で開く
1. [チュートリアル](https://github.com/kagoshima-mk/kagoshima-mk/blob/main/tutorials/web-page-for-beginer/tutorial.md)を参考にWebサイトを作っていきます

## 自習編
- https://docs.github.com/ja/pages/getting-started-with-github-pages/creating-a-github-pages-site を参考に作ったページを公開してみる
    - https://github.com/hayasaki-shunsuke/hayasaki-shunsuke.github.io
    - https://hayasaki-shunsuke.github.io/ のようなURLで公開することができます。
    - 分からないことがあれば気軽に質問してください。


## チートシート
- HTMLチートシート
  - [HTML Living Standard ｜ HTML要素チートシート](https://htmlls.docs-share.com/)
  - [【チートシート付き】コーディングで頻出のHTMLタグをまとめました](https://pengi-n.co.jp/blog/html-tag/)
    
- CSSチートシート
  - [CSSセレクタのチートシート｜37パターンを一覧で解説](https://webliker.info/css-selector-cheat-sheet/)

## 便利リンク集

- [Installation: Play CDN - Tailwind CSS](https://tailwindcss.com/docs/installation/play-cdn)
    
- [daisyUI - Tailwind CSS Components](https://daisyui.com/)
    
- [ウェブ入門 - ウェブ開発を学ぶ | MDN](https://developer.mozilla.org/ja/docs/Learn/Getting_started_with_the_web)
