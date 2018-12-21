## Nuxt + netlify + GASで
## サーバーレスな登録サイトを作ってみた話



---

### 自己紹介

--- 

### 今回は Nuxt + Netlify + GASで
### 登録機能付きのLPを作ったときの話をしたいと思います

---

### そもそもなんでこんなことしようとしたかというと。。。

---

### システムはまだ作っている途中で環境もないけどユーザー事前登録サイト作りたい！！

---

### 要件は

- 事前登録したユーザーのデータを一箇所に集めたい
- 登録があったユーザーに対してthanksメールを送りたい
- 少しjsさんの仕事が必要な動きがある

---
### サーバー立てるのめんどくさい... |
### jquery使いたくない... |

---

### Nuxt使っちゃおう!!

---

### なんで静的サイトなのにわざわざNuxt!?

---

### Nuxtを使うことで

- htmlをcomponentに分割できる |
- 簡単にsass環境が整う |
- 簡単にlint環境が整う |
- Vueが使える!!!! |

---

### 早速つくってみよう

---

#### nuxtのstarterTemplateを使って対話形式で
#### プロジェクト名や使用するモジュールを決めていく
```
# yarn create nuxt-app nuxt_gas

? Project name nuxt_gas
? Project description nuxt_gas
? Use a custom server framework none
? Use a custom UI framework none
? Choose rendering mode Single Page App
? Use axios module no
? Use eslint yes
? Use prettier yes
? Author name nuxt_gas
```
---

#### sassを使える用にする
```
yarn add -D node-sass sass-loader
```

---

### GoogleAppScriptでAPIサーバーを作る

- 登録されたデータを保存するためにGoogleスプレッドシートを作成します |
- スプレットシート書き込む機能とメールを自動送信するAPIをGASで作成します |

---?code=gas.js

---

### Form送信部分

データ送信後にgoogleの完了サイトのようなページに飛んでしまうので
以下の用にdisplay:noneのiframeをtargetを指定します

```
<form method="post" target="dummyIframe">
<iframe name="dummyIframe" style="display:none;"/>
```

---

### nuxt Generateでstaticファイルとして出力する

```
yarn generate
```
---

### netlifyでデプロイする
- gitHubのブランチ名
- buildコマンド(今回は `yarn generate`)
- 対象のディレクトリ (デフォルトだと `dist`)

#### OR

- ローカルでgenerateして生成されたdistディレクトリをDrag&Drop でもbuildできます

---

### 以上になります

---

### メリット
- 登録データ管理をスプレットシートにしたのでビジネスサイドとの親和性が高かった
- コンポーネントに分割でき、cssをscopeでかけるので命名規則をそこまで気にする必要がなかった
- lintがデフォで実行できるのでコードが統一された

---

### デメリット
- GoogleTagScriptやmetaタグ系はnuxt.config.jsに記述しないといけないので少しめんどくさかった

---



