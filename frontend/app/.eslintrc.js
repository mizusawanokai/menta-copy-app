module.exports = {
  root: true, // 設定ファイルの探索をこれ以上遡らなくする
  parser: "@typescript-eslint/parser", // 構文を解析するパーサー。この指定がないと、ESLintはTypeScriptを解釈できず、エラーが発生する
  plugins: ["@typescript-eslint"], // TypeScript ESLint独自のルール
  env: { // グローバル変数を認識させる
    browser: true, // windowやalertのグローバル変数を認識させる
    es2021: true, // ES2021までに導入されたグローバル変数を認識させる
  },
  parserOptions: {
    ecmaVersion: "latest", 
    sourceType: "module", // モジュールモードではimport文やexport文といった追加の構文がサポートされる
    // 以下２つはTypeScript ESLint独自のオプション
    project: "./tsconfig.eslint.json", // ESLint実行時に使うコンパイラ設定ファイルをtsconfigRootDirからの相対パスで指定
    tsconfigRootDir: __dirname, // プロジェクトルートの絶対パス
  },
  ignorePatterns: ["dist"],
  extends: [
    "airbnb-base", // airbのルールを使う。①
    "airbnb-typescript/base", // ②
    "plugin:@typescript-eslint/recommended-requiring-type-checking", // ③
  ],
  // extendsはshareable configを使うための設定。
  // ①は、JavaScript向けのルール。これを拡張してTypeScript ESLintのルールにも範囲を広げたのが②。
  // ①と②は上の順番でないと正しく設定されない
  rules: { // shareable configで有効化されたルールを上書きするのに用いている
    "import/prefer-default-export": "off",
    "@typescript-eslint/quotes": ["error", "double"],
  },
};