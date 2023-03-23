# OpenAIのAPIをより便利に使う周辺ツール

## [LangChain](https://github.com/hwchase17/langchain)

LangChainはOpenAI(など)のAPIを別のデータソースに接続させたり、AIに検索や電卓などの道具を利用させることができるツールです。
これを利用すればbingのようにインターネットの最新の情報をもとに回答させることも可能です。


## [Llama Index](https://github.com/jerryjliu/gpt_index)

ChatGPTのAPは一度に4000トークンのプロンプト(+回答)しか扱うことができません。

そのためそのままでは大規模なQ&Aボットを作ることはできません。

Llama Indexはベクトル化の仕組みを使い、ローカルの大量データの知識を突き合わせてChatGPTに問い合わせることを実現します。
