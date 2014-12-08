# Welcom to the SECCON 2014 online CTF.

## 公式サイト
 - [SECCON2014](http://2014.seccon.jp/)

## 概要
 - オンラインでCTF予選に参加出来るのを知った
 - 7月の予選(日本語)は忘れていて気付いた時には終了してた
 - なので今回(予選(英語))、CTF初参戦
 - チームには所属せず1人のみ

## CTF

### #1 Welcome to SECCON(Start 100)

> Question text

```sh
  The answer is "SECCON{20141206}".
```

> 感想

```sh
  解答方法の練習問題
```

### #2 Easy Cipher(Crypto 100)

> Question text

```sh
  87 101 108 1100011 0157 6d 0145 040 116 0157 100000 0164 104 1100101 32 0123 69 67 0103 1001111 1001110 040 062 060 49 064 100000 0157 110 6c 0151 1101110 101 040 0103 1010100 70 101110 0124 1101000 101 100000 1010011 1000101 67 0103 4f 4e 100000 105 1110011 040 116 1101000 0145 040 1100010 0151 103 103 0145 1110011 0164 100000 1101000 0141 99 6b 1100101 0162 32 0143 111 1101110 1110100 101 0163 0164 040 0151 0156 040 74 0141 1110000 1100001 0156 056 4f 0157 0160 115 44 040 0171 1101111 117 100000 1110111 0141 0156 1110100 32 0164 6f 32 6b 1101110 1101111 1110111 100000 0164 1101000 0145 040 0146 6c 97 1100111 2c 100000 0144 111 110 100111 116 100000 1111001 6f 117 63 0110 1100101 0162 0145 100000 1111001 111 117 100000 97 114 0145 46 1010011 0105 0103 67 79 1001110 123 87 110011 110001 67 110000 1001101 32 55 060 100000 110111 0110 110011 32 53 51 0103 0103 060 0116 040 5a 0117 73 0101 7d 1001000 0141 1110110 1100101 100000 102 0165 0156 33
```

> 感想

```sh
  - 5桁以上(/[0-1]{5,7}/)：2進数
  - 0始まり(/^[0]/)：8進数
  - 英字あり(/[0-9a-f]{2}/):16進数
  - 数字2桁：10進数
  正規表現で条件を指定して、String.parseInt()と、String.fromCharCode()でASCII文字変換
```

### #3 Decrypt it (Easy)(Crypto 200)

> Question text

```sh
  crypt1.zip
```

> 感想

```sh
```

### #4 Decrypt it (Hard)(Crypto 300)

> Question text

```sh
  g^k=69219086192344
  20<k<20000
```

> 感想

```sh
```

### #5 Ms.Fortune? Misfortune. : 4096-bit RSA(Crypto 400)

> Question text

```sh
  encrypted.gpg is encrypted by 4096-bit RSA algorithm. But I'm sure you can decrypt it. 

    problem.tar.xz 

  ------------------------------------------------------------------------------------------

  encrypted.gpgは実際に4096-bit RSAで暗号化されている。 でも、君ならきっと復号できるはずだ。
```

> 感想

```sh
```

### #6 Shuffle(Binary 100)

> Question text

```sh
  find the string before randomizing.
```

> 感想

```sh
  shuffleを実行するとランダムにflag文字列を表示
　何度か実行して、#2の問題を参考に推測した
　SECCON{Welcome to the SECCON 2014 CTF !}　correctしない…
```

### #7 Reverse it(Binary 100)

> Question text

```sh
  Reverseit
```

> 感想

```sh
```

### #8 Let's disassemble(Binary 200)

> Question text

```sh
  nc disassemble.quals.seccon.jp 23168
```

> 感想

```sh
```

### #9 Advanced RISC Machine(Exploit 300)

> Question text

```sh
  Read flag.txt
  http://micro.pwn.seccon.jp/arm/
```

> 感想

```sh
```

### #10 ROP: Impossible(Exploit 500)

> Question text

```sh
  ropi.pwn.seccon.jp:10000

  Read "/flag" and write the content to stdout, such as the following pseudo code.

  open("/flag", 0);
  read(3, buf, 32);
  write(1, buf, 32);

   Notice that the "vuln" executable is protected by an Intel Pin tool, the source code of which is "norop.cpp".

  vuln
  norop.cpp
  norop_conf

  --------------------------------------------------------------------------------------------------------------

  ropi.pwn.seccon.jp:10000

  以下の擬似コードのように、"/flag"を読み込んでその内容をstdoutに出力せよ

  open("/flag", 0);
  read(3, buf, 32);
  write(1, buf, 32);

  【注】実行ファイル"vuln"はIntel Pin tool（ソースコードはnorop.cpp）で守られています。

  vuln
  norop.cpp
  norop_conf
```

> 感想

```sh
```

### #11 Holy shellcode(Exploit 400)

> Question text

```sh
  Get the keyword.txt from hebrew.pwn.seccon.jp:10016.
  ?Holy shellcode using Hebrew characters in UTF-16LE
  http://hebrew.pwn.seccon.jp/nikud/hebrew-utf16le.html

  Server files:
  1.stage16
  2.stage16_conf

  for example:
  $ vi holy.nasm
  BITS 32
  db 0x24,0xFB,0x34,0xFB,0x1E,0xFB,0x1F,0xFB
  db 0x0a
  $ nasm -f bin holy.nasm -o holy
  $ cat holy | nc hebrew.pwn.seccon.jp 10016

  Bless you!

  -------------------------------------------------------------------

  サーバ hebrew.pwn.seccon.jp:10016 から keyword.txt をゲットしよう。
  ?UTF-16LEのヘブライ文字だけで書かれた聖なるシェルコード
  http://hebrew.pwn.seccon.jp/nikud/hebrew-utf16le.html

  サーバファイル:
  1.stage16
  2.stage16_conf

  例:
  $ vi holy.nasm
  BITS 32
  db 0x24,0xFB,0x34,0xFB,0x1E,0xFB,0x1F,0xFB
  db 0x0a
  $ nasm -f bin holy.nasm -o holy
  $ cat holy | nc hebrew.pwn.seccon.jp 10016

  ご加護を！
```

> 感想

```sh
```

### #12 Japanese super micro-controller(Exploit 500)

> Question text

```sh
  Read flag.txt 
  http://micro.pwn.seccon.jp/sh/
```

> 感想

```sh
```

### #13 jspuzzle(Web 100)

> Question text

```sh
  jspuzzle.zip
  You need to fill in all blanks!
```

> 感想

```sh
  
```

### #14 REA-JUU WATCH(Web 200)

> Question text

```sh
  http://reajuu.pwn.seccon.jp/
```

> 感想

```js
  適当に試しながら、ページのソースコードを見てたら最後のページで

  function finishpoint(){
    $.getJSON("/users/chk/14513", null, function(data){
      point = data.point;
      $("#finishpoint").text("あなたのポイントは" + point + "です。");
    });
  }

  があったので、http://reajuu.pwn.seccon.jp/users/chk/14513にアクセスしてみた。
  {"username":"qhojvxrh","password":"avwgx4fw","point":-179}
  ユーザ名とパスワード…
  http://reajuu.pwn.seccon.jp/users/chk/にアクセスしてみた。
  Not Found…

  最後の番号を適当に変えてもアクセス出来た。
  正解の"1"は試してなかった…ここらへんは慣れかな。
```

### #15 Bleeding "Heartbleed" Test Web(Web 300)

> Question text

```sh
  http://bleeding.pwn.seccon.jp/
```

> 感想

```sh
```

### #16 Binary Karuta(Web 400)

> Question text

```sh
  http://binkaruta.pwn.seccon.jp/binkaruta/

  Karuta is a Japanese card game where you need to quickly grab a card!

  What is Karuta?
   In Binary Karuta, the point is to correctly identify the CPU architecture of the binary hex dump displayed.
   If you wait over 60 seconds, it will time out and you will have to start again.
   You need to guess the correct CPU architecture 100 times in order to get the flag.
   There are no tricks to this. This game is to determine how well you are are reading binary hex with your eyes!
   There are around 35 different architectures being used for this so it will be good practice for you to get familiar with exotic binary. 

  You will need to know some Japanese:
   正解： Correct
   不正解： Incorrect
   時間切れ：Timeout

  Good Luck! 頑張って下さい！ 

  -----------------------------------------------------------------------------------------------------------------------------------------

  http://binkaruta.pwn.seccon.jp/binkaruta/ 
  約35種類のarchからダンプが表示されます。正解を選択してください。
  100回連続で解いてください。
  60秒でタイムアウトされます。また間違うと60秒のペナルティがあります。
```

> 感想

```sh
```

### #17 XSS Bonsai (aka. Hakoniwa XSS Reloaded)(Web 500)

> Question text

```sh
  bonsaiXSS.zip 

  * This challenge have 2 answers (2 steps).
  If you collect 2 answers, you can get full point (500pts). 

  [#9 About "XSS Bonsai" Runtime Environment]
  There is a problem when running Bonsai XSS, in that you can run the program but it will not correctly proceed past the first stage.
  However, it should work if you install Visual Studio Express 2013 Web (evaluation) or other versions of Visual Studio.
  We are sorry for the inconvenience but please install Visual Studio to fix this. You can test it by putting 

  ";alert('XSS');// 

  in stage 1. If you get a “Congratulation” alert box and pass to stage 2 then your environment is working. Good Luck!

  [#10 About "XSS Bonsai" Runtime Environment 2]
  If you press send button , not work anything ,please check and change IE Security Settings - InternetZone as below image.
  http://files.quals.seccon.jp/bonsai_ie_settings.png 

  -----------------------------------------------------------------------------------------------------------------------------------

  [#9 "XSS Bonsai" 動作環境について]
  Bonsai XSS の問題が上手く動作しない場合は Visual Studio Express 2013 Web (evaluation) か
  別のバージョンの Visual Studioのインストールした環境で試してみてください。

  テストはstage1 で以下を入力してみてください。

  ";alert('XSS');// 

  “Congratulation” のアラートウィンドウが表示されステージ2に進めば正常に動作しています。お手数をおかけします。

  [#10 "XSS Bonsai" 動作環境について2]
  「send」 ボタンを押しても何も動作がしない場合には、IEのセキュリティセッティングのインターネットゾーンの設定を以下の画像のように変更をしてみてください。
  http://files.quals.seccon.jp/bonsai_ie_settings.png 
```

> 感想

```sh
```

### #18 QR (Easy)(QR 200)

> Question text

```sh
  Funniest joke in the world(?):
   "Last night, I had a dream I was eating QR cakes.... 
   but when I woke up, half my QR code was gone!"

  ------------------------------------------------------

  世界一面白いジョーク：
   昨晩フランネルケーキを食べる夢を見たんだけど、
   朝起きたらQRコードが半分なくなってたんだ！
```

> 感想

```sh
```

### #19 SECCON Wars: The Flag Awakens(QR 300)

> Question text

```sh
  http://youtu.be/1pC56S17-_A

   # Not need Japanese text to solve this task.
   # If you need it ? see below :)
  http://pastebin.com/uXByBZv5
```

> 感想

```sh
```

### #20 BBQR(QR 400)

> Question text

```sh
  Let's enjoy BBQR!
```

> 感想

```sh
```

### #21 Get the key.txt(Forensics 100)

> Question text

```sh
  forensic100.zip
```

> 感想

```sh
  wget
  unzip forensic100.zip
  file forensic100
  mkdir forensic
  mount -t ext2 forensic100 forensic
  cd forensic
  ls -a
  zcat 1
```

### #22 Read it(Forensics 300)

> Question text

```sh
  Readit
```

> 感想

```sh
```

### #23 UnknownFS(Forensics 400)

> Question text

```sh
  This image formatted unknown file system.
  I guessed this file system like FAT file system same but different. 

  https://seccon2014.b.storage.sakura.ad.jp/unknownfs.zip 

  ---------------------------------------------------------------------

  このイメージは名状しがたいファイルシステムでフォーマットされています。
  私が思うに、このファイルシステムはFATファイルシステムと似ていますが、
  実際のところ分かりません。解析して、隠されたキーを探しましょう。
```

> 感想

```sh
```

### #24 Confused analyte(Forensics 500)

> Question text

```sh
  Fill correct string in blackbox in IOC.
  (Input format is SECCON{string})

  hoge.zip (pass:infected) 

  -------------------------------------------------------------------------

  次のIOC（hoge.jpg）のブラックボックスに当てはまる文字列を入れてください。
  (解答形式 SECCON{string}) 
```

> 感想

```sh
```

### #25 Choose the number(Programming 100)

> Question text

```sh
  nc number.quals.seccon.jp 31337

  sorry fixed URL
```

> 感想

```sh
```

### #26 The Golden Gate(Programming 400)

> Question text

```sh
  We've found an encoder board along with cipher text. Please help us to decrypt it. 

  The cipher text: BQDykmgZ0I6SaQnq4o/iEONudetXdPJdpl1UVSlU69oZOtvqnHfinOpcEfIjXy9okkVpsuw2kpKS== 
   Main: encoder board photos(GooleDrive)
   Mirror: https://seccon2014-online.b.storage.sakura.ad.jp/encoder_board_photos.zip 

  ------------------------------------------------------------------------------------------------

  暗号文と一緒にエンコーダーボードを見つけた。解読を助けて欲しい！

  The cipher text: BQDykmgZ0I6SaQnq4o/iEONudetXdPJdpl1UVSlU69oZOtvqnHfinOpcEfIjXy9okkVpsuw2kpKS==
   Main: エンコーダーボード写真(GooleDrive)
   Mirror: https://seccon2014-online.b.storage.sakura.ad.jp/encoder_board_photos.zip
```

> 感想

```sh
```

### #27 Get the key(Network 100)

> Question text

```sh
  nw100.pcap
```

> 感想

```sh
  Wiresharkでパケット解析
```

### #28 Get from curious "FTP" server(Network 300)

> Question text

```sh
  ftp://ftpsv.quals.seccon.jp/
```

> 感想

```sh
```

### #29 version2(Network 200)

> Question text

```sh
  are you ready for upcoming version 2? 
  srv h2o.pwn.seccon.jp. 

  ----------------------------------------------

  もうすぐ version 2 が来るけど準備はいいかい？ 
  srv h2o.pwn.seccon.jp. 
```

> 感想

```sh
  srv…DNS SRVレコード
```
