module.exports = {
  root: true, // 設定ファイルの探索をこれ以上遡らなくする
  env: { // グローバル変数を認識させる
    browser: true, // windowやalertのグローバル変数を認識させる
    es2021: true, // ES2021までに導入されたグローバル変数を認識させる
  },
  parserOptions: {
    ecmaVersion: "latest", 
    sourceType: "module", // モジュールモードではimport文やexport文といった追加の構文がサポートされる
  },
  extends: ["airbnb-base"],
};