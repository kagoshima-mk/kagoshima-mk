# APIの基礎知識

## 課金の仕組み

OpenAIのAPIは最初だけ一定量 無料で使えます。

その後クレカ登録すれば従量課金で継続して利用することができます。

あらかじめ決められた金額以上は課金されない仕組みなので、APIを無限ループさせてしまっても破産することはありません。月120ドル以上使いたい場合は別途OpenAIに申請する必要があります。

## トークンとは

OpenAIのAPIはトークン量で課金されます。

利用する言語(英語は安い・日本語は高い)や、利用するモデルによって1文字あたりのトークン量が変わります。

下のサイトにテキストを貼り付ければトークン量を測定することができます。

おおむね日本語1文字＝1〜2トークンくらいです。

一番コスパの良い(そして性能も良い)`gpt-3.5-turbo`では1000トークン0.002ドル(0.3円くらい?)です。