// daisyUI の使いたいテーマを定義する
// 参考ドキュメント: https://daisyui.com/docs/themes/
const mode = {
  light: "cupcake",
  dark: "dark",
}

// ダークモード切替ボタンが押下されたときに実行する関数
const toggleMode = () => {
  // 現在がダークモードかを確認する
  if (document.documentElement.dataset.theme === mode.dark) {
    // 現在がダークモードなら、明るいテーマを指定する
    document.documentElement.dataset.theme = mode.light;
  } else {
    // 現在がダークモードでないなら、ダークモードのテーマを指定する
    document.documentElement.dataset.theme = mode.dark;
  };
};
// この関数は次のようにも書ける
// function toggleMode() {
//   document.documentElement.dataset.theme === mode.dark
//     ? document.documentElement.dataset.theme = mode.light
//     : document.documentElement.dataset.theme = mode.dark;
// };

// class="toggle-mode" が指定されているHTMLタグを全て取得する
const toggleModeButtons = document.querySelectorAll(".toggle-mode");
// class="toggle-mode" が指定されている全てHTMLタグに、繰り返し実行する
toggleModeButtons.forEach((button) => {
  // HTMLタグがクリックされたときに、#toggleMode を実行する
  button.addEventListener("click", toggleMode);
});
