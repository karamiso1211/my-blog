---
title: "Next.js Blog Starter Kitを使ったサイト構築1"
excerpt: "自身の備忘録と、同じエラーでハマった誰かのために開発ログを残します。また、実際に使って良かったガジェットの紹介も発信していきます。"
coverImage: "/assets/blog/hello-world/cover.jpg"
date: "2026-01-26"
author:
  name: "あなたの名前"
ogImage:
  url: "/assets/blog/hello-world/cover.jpg"
---

Next.js Blog Starter Kit 導入ガイド (Node.js v24対応版)Node.js v24.11.1 環境下で、Next.js公式の「Blog Starter Kit」を使用してブログを構築する手順です。1. プロジェクトの作成Node.jsは最新版が準備できているため、すぐにセットアップコマンドを実行できます。プロジェクト作成コマンドブログのフォルダを作成したい場所で、ターミナル（コマンドプロンプト/PowerShell）を開き、以下を実行してください。Bashnpx create-next-app@latest my-blog --example blog-starter
my-blog: 作成されるフォルダ名です。好きな名前に変更可能です（例: tech-blog など）。実行時の注意:途中 Ok to proceed? (y) と聞かれた場合は y を押してEnterキーを押してください。初回は少し時間がかかりますが Success! と表示されれば完了です。2. 開発サーバーの起動作成されたフォルダに入り、サーバーを立ち上げます。Bash# 1. 作成したフォルダへ移動
cd my-blog

# 2. 開発サーバーを起動
npm run dev
確認方法: ブラウザを開き、アドレスバーに http://localhost:3000 と入力します。停止方法: ターミナルで Ctrl + C を押すとサーバーが止まります。3. 記事の書き方（Markdown）記事は _posts フォルダ内のファイルを編集して管理します。場所: プロジェクト内の _posts フォルダ作成: 既存の .md ファイルをコピーするか、新規作成します。記述ルール:ファイルの先頭には必ずメタデータ（Frontmatter）を記述してください。Markdown---
title: '記事のタイトル'
excerpt: '記事の抜粋（一覧ページ用）'
coverImage: '/assets/blog/preview/cover.jpg'
date: '2026-01-26T15:00:00.000Z'
author:
  name: 'あなたの名前'
  picture: '/assets/blog/authors/icon.jpeg'
ogImage:
  url: '/assets/blog/preview/cover.jpg'
---

## 見出し
ここに本文を書きます。
Markdown記法（**太字**、[リンク](https://example.com)など）が使えます。
4. フォルダ構成と役割v24環境でもフォルダ構成は変わりません。よく使うフォルダは以下の通りです。📝 記事・画像（ここを編集します）フォルダ名役割_posts記事データブログの中身となるMarkdownファイル置き場。public画像ファイル記事内で使う画像は public/assets/... に入れます。記事内での指定パスは /assets/... から書き始めます。⚙️ デザイン・システム（慣れたら編集）フォルダ名役割components部品ファイルヘッダー、フッター、記事レイアウトなどのデザインパーツ。pagesページ構造index.tsx（トップページ）など、URLに対応するファイル。stylesデザインサイト全体のCSS設定ファイル。トラブルシューティングもし npm run dev でエラーが出る場合は、以下のコマンドで依存関係（ライブラリ）を再インストールしてみてください。Bash# 念のためのキャッシュクリアと再インストール
rm -rf node_modules package-lock.json
npm install
npm run dev
※ Windowsの場合は rm -rf ... の代わりに、エクスプローラーで該当フォルダ/ファイルを削除してください。