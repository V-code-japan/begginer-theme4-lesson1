# LESSON3 家のかべを作ってみよう
```block
player.onChat("run", function () {
    agent.teleport(world(-7, -21, 0), SOUTH);

    for (let i = 0; i < 4; i++) {
        for (let index = 0; index < 4; index++) {
            agent.fillBlockInLine(Block.PlanksBirch, SideDirection.Left, 7);
            agent.toNextPosition(SideDirection.Right, 7);
        }

        agent.move(DOWN, 4);
        agent.move(LEFT, 8);
        agent.move(FORWARD, 1);
        agent.turn(RIGHT_TURN):
    }
});
```

```template
player.onChat("run", function () {
    agent.teleport(world(11, -21, 20), SOUTH)
    for (let index = 0; index < 5; index++) {
        agent.fillBlockInLine(Block.PlanksBirch, SideDirection.Left, 6);
        agent.toNextPosition(SideDirection.Right, 6);
    }
})
```

## 目標
<p>先ほど作ったプログラムを改造（かいぞう）して、かべを**4枚**作るようにしよう！</p>
<p>・チャットで「run」と入力したら、家のかべを作るようにプログラミングをする</p>
<p>・エージェントは初めに**ワールド-7 -21 0、南(zのプラス方向)**にテレポートする</p>
<p>・ブロックをおく➡左に１ブロック動く を７回くりかえしたあとに、次のブロックをおく場所にエージェントを動かす</p>
<p>・かべはアカシアの板材（いたざい）でたて・横８ブロック、高さ４ブロックの大きさにする</p>
<p><img style="width:100%" src="https://vcode-esia.com/images_for_world_data/Basic/Theme1/Lesson4/L4_complete3.png"></p>

## 長さが８ブロックのかべを４つ作るには？
<p>エージェントに正方形にかべを作らせるにはどうのようなプログラムにすればいいか考えてみましょう</p>
<p>正方形は４つの同じ長さの棒（ぼう）の組み合わせになっています</p>
<p>横に8ブロックの正方形をつくるために、**1本の棒（ぼう）の長さは何ブロックになっているか**かくにんしましょう！</p>
<p><img style="width:100%" src="https://vcode-esia.com/images_for_world_data/Basic/Theme1/Lesson4/L4_square3.gif"></p>

## ４つのかべを作るには？
<p>エージェントにも同じようにブロックをおかせることができます</p>
<p><img style="width:100%" src="https://vcode-esia.com/images_for_world_data/Basic/Theme1/Lesson4/L4_manage_4_lines3.gif"></p>
<p>**エージェントに横７ブロックのかべを作らせてから、次にブロックをおきはじめる場所に動かす**というプログラミングをして家のかべを作りましょう</p>

## かべを１面だけ作ったプログラムを使おう
<p>まずはかべを１面だけ作ったプログラムを使って、４つのかべの内、１つだけを作らせましょう</p>
<p><img style="width:100%" src="https://vcode-esia.com/images_for_world_data/Basic/Theme1/Lesson4/L4_single_wall3.gif"></p>

## 1.横7ブロック、高さ4ブロックのかべを作る
<p>さきほど作ったプログラムをしゅうせいして、**横7ブロック、高さ4ブロックの、アカシアの板材（いたざい）のかべ**を作るようにしましょう！</p>
<p>`||blocks.シラカバの板材||`をクリックして`||blocks.アカシアの板材||`にしましょう</p>
<p>横に6ブロックうごくようになっているところを、7ブロックにかえましょう</p>
<p>5回くりかえすところを、4回くりかえすようにしましょう</p>

## 次のかべを作る場所にエージェントを動かしましょう
<p>これで１つだけかべをつくることができました！</p>
<p>次のかべを作るための場所にエージェントを動かしましょう</p>
<p>次のページにいく前に、下の赤いわくにエージェントを動かすには下に何ブロック、左に何ブロック、前に何ブロック動かして、どのような向きにすればいいか考えてみましょう</p>
<p><img style="width:100%" src="https://vcode-esia.com/images_for_world_data/Basic/Theme1/Lesson4/L4_move_to_next_pos3.png"></p>
<p><img style="width:100%" src="https://vcode-esia.com/images_for_world_data/Basic/Theme1/Lesson4/L4_move_down_left3.gif"></p>

## 2.エージェントを下に動かしましょう

<p>エージェントを下に４ブロック、左に８ブロック、前に１ブロック、そして右を向かせればいいことがわかりましたか？</br>
さっそくそのプログラムを作りましょう</p>
<p>`||agent.エージェント||`ボタンをクリックしてその中の`||agent.エージェントを前に１ブロック移動させる||`と書いてあるブロックを`||loops.くりかえし４回||`の下にドラックしてみましょう</p>
<p>`||agent.エージェントを前に１ブロック移動させる||`の`||agent.前▼||`をクリックして`||agent.下▼||`に変更しましょう</p>
<p>`||functions.１ブロック||`を`||functions.４ブロック||`にしましょう</p>

## 3.エージェントを左に動かしましょう
<p>`||agent.エージェント||`ボタンをクリックしてその中の`||agent.エージェントを前に１ブロック移動させる||`と書いてあるブロックを`||agent.エージェントを下に４ブロック移動させる||`の下にドラックしてみましょう</p>
<p>`||agent.エージェントを前に１ブロック移動させる||`の`||agent.前▼||`をクリックして`||agent.左▼||`に変更しましょう</p>
<p>`||functions.１ブロック||`を`||functions.８ブロック||`にしましょう</p>

## 4.エージェントを前に動かして右を向かせましょう
<p>`||agent.エージェント||`ボタンをクリックしてその中の`||agent.エージェントを前に１ブロック移動させる||`と書いてあるブロックを`||agent.エージェントを左に８ブロック移動させる||`の下にドラックしてみましょう</p>
<p>次に`||agent.エージェントの向きを左▼に変える||`を`||agent.エージェントを前に１ブロック移動させる||`の下に入れましょう</p>
<p>`||左▼||`をクリックして`||右▼||`にしましょう</p>

## かべを４つ作るためにくりかえさせましょう
<p>これで**かべを1まい作る⇒次に壁を作りはじめる場所に移動する**というプログラムができました</p>
<p>さいごに、かべを**４つ**作るために今までのプログラムを**４回**くりかえしましょう</p>
<p><img style="width:100%" src="https://vcode-esia.com/images_for_world_data/Basic/Theme1/Lesson4/l4-q2-13.gif"></p>

## 7.くりかえしを入れてみましょう
<p>`||loops.ループ||`ボタンをクリックしてその中の`||loops.くりかえし４回||`と書いてあるブロックで`||agent.エージェントを…テレポートさせる||`より下のプログラムをはさみましょう</p>

## エージェントをかべを作りはじめる場所にテレポート
<p>さいごにエージェントをかべを作りはじめる場所にテレポートさせましょう</p>

## 8.座標を入力してみましょう
<p>`||positions.ワールド11 -21 20||`を`||positions.ワールド-7 -21 0||`と入力しましょう</p>

## 9.『実行』ボタンをクリックしましょう
画面右下にある緑の『▶』ボタンをクリックして作ったプログラムを実行し、チャットコマンドで`||player.run||`と入力してみましょう