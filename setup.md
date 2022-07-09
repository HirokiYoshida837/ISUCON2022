
# zx各種スクリプト使い方


## 準備

### 1. 必要なファイルをscpで配置
```sh
scp -r package.json isuconXXXX:/home/isucon
scp -r zx-scripts isuconXXXX:/home/isucon
scp -r .gitignore isuconXXXX:/home/isucon
```

### 2. 初期化を実施

初期化を実施する
```sh
# sshでisuconXXXXに接続
cd ~
npm install
npm run setup
```

### 3. プライベートリポジトリにpushする

private リポジトリは作成済、手元で作成したdeploy用のキーをscpで配置

.ssh/configに以下を追加
```conf
Host github.com
     IdentityFile ~/.ssh/isugitXXXX
     User git
     HostName github.com
```

リポジトリの各種ファイルをgit addして、git push origin mainする。
```
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:{github_acccount_name}/{repository_name}.git
git push -u origin main
```

ここまでで初期設定は完了。

### 4. GitHub側からPullする

zx経由でやる
```sh
npm run gitpull
```

手動でやる
```
git pull origin main
git reset --hard origin/main
```


### 5. ベンチを回す

現時点のサーバーをビルドし直して配置する
```sh
npm run deploy
```


benchマークを実施する。（サーバーもビルドし直されるので注意）
```sh
npm run bench
```