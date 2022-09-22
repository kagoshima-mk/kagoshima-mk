# チュートリアル

## ①テンプレートを用意しよう

ダウンロードorクローンした
以下のフォルダを開きましょう。

`kagoshima-mk/tutorials/web-page-for-beginer/samples/1st/`

フォルダ名は「1st」です。間違えないようにしましょう。

以下のようなファイルがあるはずです。

* index.html
* index.css

## ②まずは初期状態を確認してみよう

index.htmlをダブルクリックして、今回用意した初期状態のページがどんなものか確認してみましょう。

## ③HTMLをいじってみよう

index.htmlの以下の箇所を

```
  <h1 class="btn btn-ghost normal-case title"><!--ここにページのタイトルを追加--></h1>
```

こちらに置き換えて見ましょう。

```
  <h1 class="btn btn-ghost normal-case title">hayapi</h1>
```

## ④ブラウザで確認してみよう

index.htmlをダブルクリックして、タイトルが追加されたか確認してみましょう。

## ⑤CSSを追加してみよう

index.htmlの以下の箇所を

```
  <!-- ここにCSSの参照を追加 -->
```

こちらに置き換えて見ましょう。

```
  <link rel="stylesheet" href="index.css" />
```

## ⑥文字の色を変えてみよう

index.cssの以下の箇所を

```
.title{
  font-size: 100px;
  font-family: "Hiragino Sans","Helvetica Black","Arial Black", "sans-serif";;
  font-weight: 900;
  /* ここに色を追加 */
}
```

こちらに置き換えて見ましょう。

```
.title{
  font-size: 100px;
  font-family: "Hiragino Sans","Helvetica Black","Arial Black", "sans-serif";;
  font-weight: 900;
  color: red;
}
```

## ⑦画像を差し替えてみよう

自分の好きな画像をindex.htmlと同じフォルダに配置して、

```
  <img src="" />
```

この箇所を新しい画像ファイルに置き換えてみましょう。


## ⑧自己紹介を追加しよう

index.htmlの以下の箇所を

```
<!-- ここに自己紹介を追加-->
```

こちらに置き換えて見ましょう。
文章はみなさん自分なりに考えてみてください。

```
<div class="grid card bg-base-100 mb-8">
  <div class="card-body text-left">
    <h2 class="card-title">自己紹介</h2>
    <p>私がはやぴ @hayapi_ppb です</p>
  </div>
</div>
<div class="grid card bg-base-100 mb-8">
  <div class="card-body text-left">
    <h2 class="card-title">所属</h2>
    <p>GMOペパボ株式会社</p>
    <p>CTO室 鹿児島エンジニアリングチーム</p>
  </div>
</div>
```


## ⑨CSSフレームワークを使ってみよう

index.htmlの以下の箇所を

```
  <!-- ここにCSSフレームワークの参照を追加 -->
```

こちらに置き換えて見ましょう。

```
  <link href="https://cdn.jsdelivr.net/npm/daisyui@2.24.0/dist/full.css" rel="stylesheet" type="text/css" />
  <script src="https://cdn.tailwindcss.com"></script>
```

### Daisy UIとは

今回利用するCSSフレームワークDaisy UIは、classに特定のキーワードを付加するだけでかんたんにデザインを変えられる便利なフレームワークです。

たとえばdiv要素に`<div class="grid card">`のように指定すると、簡単にカード型のUIを実現できます。


## ⑩ソーシャルアイコンを差し替えてみよう

index.htmlの以下の箇所を

```
        <!-- ここにソーシャルアイコンを追加-->
```

こちらに置き換えて見ましょう。

```
<div class="btn-group h-20 mb-8">
  <a href="【ツイッターアカウント】" class="btn btn-ghost h-20 w-1/3">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current">
      <path
        d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z">
      </path>
    </svg>
  </a>
  <a href="【Youtubeアカウント】" class="btn btn-ghost h-20 w-1/3">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current">
      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
    </svg>
  </a>
  <a href="【facebookアカウント】" class="btn btn-ghost h-20 w-1/3">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current">
      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
    </svg>
  </a>
</div>
```

### svgとは
パラメータの文字列で図形がかける画像形式です。
どんなに拡大しても画像が荒くならないのが特徴です。


## これでひととおり完成です

おめでとうございます！
