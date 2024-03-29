# Javascriptの誕生

- JavaScriptは、1995年にNetscape Communications社のプログラマーであるBrendan Eichによって開発されました。
- 1995年、最も人気の高いWebブラウザであったNetscape Navigator 2.0に初めて実装されました。
- JavaScriptの開発の背景として、当時のWebページが主に静的で動きがなく、動的なWebコンテンツを生成する技術が重く処理が遅いため普及していなかったことがあります。
- Brendan Eich氏は、軽量で手軽に扱えるような言語を作るためにJavaScriptの開発を開始しました。
- 1995年5月にJavaScriptのプロトタイプ版が作成され、翌年にはNetscape Navigatorのバージョン2.0に搭載されました。
- Microsoft社は、自社のブラウザであるInternet Explorerのシェア率を上げるためにJavaScriptを独自に作り出した「JScript」を開発しました。
- 最初のうちは互換性があったが、両社の争いが激化するにつれ、互換性がなくなり、書いたコードがNetscape Navigatorでは動くがInternet Explorerでは動かなくなる問題が発生しました。

# ECMAScriptの仕様策定プロセス
 
 - JavaScript の仕様は「Ecma International」という団体によって策定されている。
- ECMAScript を策定する委員会は「TC39（Technical Committee 39）」と呼ばれている。
- TC39のメンバーは主にブラウザ開発企業やECMAScriptに関心のある企業で構成され、毎年1回のリリースに向けてミーティングを行う。
- 仕様改訂のステージは「Strawman」「Proposal」「Draft」「Candidate」「Finished」の5つに分かれている。
- ステージ4に上がった提案は、毎年6月に新しいバージョンとしてリリースされ、バージョン名には西暦が付けられる。
- ステージ4に上がるためには、2つ以上のブラウザがその機能を実装していることが必要。
- 一部のブラウザでは正式なECMAScriptになる前に、その機能を先取りして実装していることがある。
- JavaScript コンパイラーの『Babel』を使うことで、正式なECMAScriptになる前の機能を試すことができる。

# Babel

- BabelはJavaScriptコンパイラーであり、ECMAScript 2015+コードを古いブラウザや環境で実行できる下位互換バージョンのJavaScriptに変換するために使用される。
- ECMAScriptの新しいバージョンがリリースされても、全てのブラウザですぐに実装されるわけではなく、Babelを使って新しい構文を古い構文に変換することができる。
- Babelは元々「6to5」と呼ばれ、ES6のコードをES5に変換するために開発された。
- BabelはES6に限らず、最新のECMAScriptの構文やJSXなどもサポートしており、古いブラウザに対応しつつも新しい構文を自由に使うことができる。

# モジュール

- モジュールとは、ある特定の機能を実現するためのプログラムの塊のことを指す。
- Webアプリケーションの開発においては、プログラムを適切な単位に分割することが一般的であり、この分割された1つ1つのプログラムの塊を「モジュール」と呼ぶ。
- 多くのプログラミング言語には、モジュールを扱うための仕組みや構文があらかじめ用意されている。
- JavaScriptには、最近まで言語レベルのモジュール構文は存在していなかったが、2015年からimport/export構文が標準でサポートされるようになった。
- JavaScriptのモジュール構文がサポートされる前は、他の方法でモジュールを実現していた。この方法については、この章で詳しく解説する。


## モジュールの歴史

- JavaScriptは、1995年にWebページに対して対話的な機能を追加するために誕生した。
- 初期のJavaScriptは小規模で、主にWebページに対して対話的な機能を追加する独立したスクリプト処理であった。
- 当時のWebは、静的なページがほとんどであり、動きのあるWebページはプログラミングの知識が必要であった。
- このようなプログラミングの知識が必要な状況に対して、JavaScriptが開発された。
- JavaScriptは、手軽で習得しやすいことを重視して開発されたため、本格的なWebアプリケーションで利用されることは想定されていなかった。
- 最初はモジュールシステムがなく、複数のJavaScriptファイルを読み込むには、HTMLファイル内に複数のscriptタグを埋め込む必要があった。
- この方法では、依存関係を自分で解決する必要があるため、特に複数のJavaScriptファイルを読み込む場合には深刻な問題がある。

## CommonJs

- CommonJSは2009年に登場したプロジェクトで、JavaScriptの仕様に関するもの。
- 最初はServerJSという名前でしたが、後にCommonJSに改称され、サーバーサイドよりも広い範囲で仕様を定めることを目標としました。
- CommonJSは主にモジュールに関する仕様を定めたもので、Node.jsがその仕様に基づいて作られました。
- Node.jsを使用することで、JavaScriptで他の言語と同じようにモジュールの読み込み/公開ができるようになりました。
- ブラウザで同じように動かすためには、当時はBrowserifyというモジュールバンドラーが使用されました。

## モジュールバンドラーの登場

- Browserifyは、2011年にsubstack氏によって作られたモジュールバンドラー。
- モジュールバンドラーは、JavaScriptのモジュール依存関係を解決し、複数のモジュールを1つのJavaScriptファイルに結合するツール。
- ブラウザ上ではCommonJS形式のモジュールがサポートされていないため、あらかじめ複数のJavaScriptファイルを結合（バンドル）し、ブラウザが解釈可能な1枚のJavaScriptファイルを作成することが必要。
- モジュールバンドラーは、ファイル同士を適切な順序で結合して1つのJavaScriptファイルを作り出すことで、各ファイルで使われているrequireを含めないJavaScriptファイルを生成する。
- 生成されたJavaScriptファイルは、HTML内で利用することができる。そうすることで、CommonJS形式で記述されたプログラムでもブラウザ上で自由に実行できるようになる。

## ESMの登場

- モジュールバンドラーによって、ブラウザ上でも CommonJS 形式のモジュールが利用できるようになった。
- CommonJS は独自の仕様であり、標準的なモジュールシステムを求めるニーズがあった。
- ECMAScript Modules（ESM）は2015年に策定されたモジュールシステムで、ブラウザでもより直感的にモジュールの読み込み / 公開ができるようになった。
- ESM を使うと、デフォルトで Strict モードがONになり、トップレベルで await が使用でき、静的解析が可能になる。
- ESM の登場によって、モジュールバンドラーが不要になると思われるが、まだまだ必要とされている。
- モジュールバンドラーは、複数のモジュールを 1 つのファイルにまとめることで、パフォーマンスを向上させたり、様々なモジュール形式を扱えるため、今でも多くの現場で活躍している。

## モジュールバンドラーが必要な理由

- モジュールバンドラーを使わない場合、ファイル読み込みのために往復回数が数百や数千にも及ぶ可能性がある。
- モジュールバンドラーは多数の細かいファイルを1つのファイルにバンドルしておくことで、1つのファイルだけをサーバーから取得することができ、通信時間を節約できる。
- ファイルを一つにバンドルする際は、バンドルサイズが大きすぎると初回読み込みに時間がかかるため、注意が必要。

# DOM

- DOMはDocument Object Modelの略で、HTMLやXMLなどの文書をJavaScriptのようなスクリプト言語から取り扱うためのプログラミングAPIである。
- ブラウザはHTMLファイルを受け取り、それを解析してメモリ上でツリー状のデータ構造に変換する。このとき作られる木構造のデータのことを「DOMツリー」と呼ぶ。
- DOMツリーの中では、HTMLのあらゆる部分が「ノード」という単位で区切られる。
- ノードにはいくつかの種類があり、DOMツリーの構造はWebページに表示されているコンテンツと密接に結びついている。
- JavaScriptを使用すると、DOMツリーから任意のノードを取り出して、編集・削除・追加などの操作をすることができる。
- 実際のWebページに表示されているコンテンツを動的に変更するために、DOMツリーのノードを操作する作業のことを「DOM操作」と呼ぶ。

# SPA

- SPAとは、Single Page Applicationの略で、単一のHTMLページを読み込んで、ユーザーのアプリケーション操作に合わせてページを動的に更新するWebアプリケーションのこと。
- 従来のWebアプリケーションでは、クライアント側からリクエストが送信されるたびに、適切なWebページの情報をサーバー側から受信し、Webページの内容を毎回まるごと書き換えていた。
- SPAでは、単一のWebページで構成されるWebアプリケーションで、CSRと呼ばれるクライアント側でのレンダリング技術を使って、Webページのコンテンツの一部を動的に書き換える。
- CSRの流れは以下のようになる：初回のリクエストを送信、サーバー側はWebページの情報をレスポンス、クライアント側でHTMLを描画、APIサーバーに必要なデータをリクエスト、クライアント側に必要なデータをレスポンス、JavaScriptのDOM操作で差分を更新。
- CSRでは、ヘッダーやフッターなどの全ページ共通のパーツがある場合、これらのパーツは書き換えられずにそのまま保持される。
- CSRには初回ページの表示速度が遅いという問題がある。初回リクエスト時に、まずHTMLファイルをダウンロードするが、このHTMLの中身はほとんど空っぽであるため、初期表示では何も表示されない。

# Reactの誕生

- Facebook AdsのUIが複雑になり保守が困難になったため、Jordan Walke氏がFaxJSというReactのプロトタイプを開発し導入した。
- FaxJSでは関数にデータを与えることでUIを生成するという発想が取り入れられていた。
- FaxJSはReactに名前を変え、OSS化が進められた。
- 2013年3月にReactが公に発表され、createClassAPIを使用する形式でコンポーネント宣言が行われた。
- Reactは発表を皮切りに世界中で広まっていくことになった。
