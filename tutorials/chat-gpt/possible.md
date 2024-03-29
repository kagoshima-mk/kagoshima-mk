＃ OpenAIのAPIでできること

## テキストの生成

ChatGPTの機能をAPIから呼び出すことができます。

Webインターフェイスの機能に加えて、API版ではroleを指定してより明確に指示を与えたり、ランダム度をコントロールすることができます。

## コードの生成

プログラムの生成に特化したCodexシリーズというモデルも用意されています。

Github CopilotもOpenAIの技術が利用されています。

## 画像の生成

テキストをもとに画像を生成するAIもあります。

去年から流行りだしたDALL・E2がこれです。

ただAPIから利用できる機能は出来がなんか微妙な気がします。

## AIの学習(****Fine-tuning)****

AIに大量の学習データを喰わせて独自のAIを作ることも可能です。

ただ現在学習の元となるモデルは限られており、ChatGPTに比べてだいぶ会話能力が劣ります。

テキストからラベルを予測するような単純な処理に向いてそうです。

## テキストのベクトル化

テキストをベクトル化すると、テキストの類似度を測ることができるようになります。

![](./Embedded1.png)
![](./Embedded2.png)
![](./Embedded3.png)
![](./Embedded4.png)

つまりドキュメント検索エンジンのようなものが作れます。一度ベクトル化すれば類似度の測定にはOpenAIのAPIを叩く必要はありません。

この機能を利用すれば大規模なQ&A集を元にしたQ&Aボットを作ることができるようになります。しかもそのQ&Aボットは出典を明らかにすることができるので、ある程度信頼性を持って利用できます。


## 音声データからの文字起こし

音声から文字起こしすることもできます。

## コンテンツフィルタリング

ヘイトスピーチや性的・暴力的な表現をフィルタリングする機能も提供されています。
