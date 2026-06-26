# LESSON2 かべを作ってみよう
```block
player.onChat("run", function () {
    agent.teleport(world(11, -21, 20), SOUTH)
    for (let index = 0; index < 5; index++) {
        agent.fillBlockInLine(Block.PlanksBirch, SideDirection.Left, 6);
        agent.toNextPosition(SideDirection.Right, 6);
    }
})
```

```template
player.onChat("run", function () {

})
```



## 目標（もくひょう）
<p>エージェントがかべを作るようにしよう！</p>
<p>・チャットで「run」と入力したら、エージェントがかべを作るようにプログラミングをする</p>
<p>・エージェントは、はじめに**ワールド11 -21 20、南(zのプラス方向)**にテレポートする</p>
<p>・樺（かば）の板材（いたざい）をつかって、**たて５ブロック、横６ブロック**の大きさにする</p>
<p><img style="width:100%" src="https://vcode-esia.com/images_for_world_data/Basic/Theme1/Lesson4/L4_complete2.gif"></p>

## エージェントをテレポートさせよう
<p>`||agent.エージェント||`ボタンをクリックして、`||agent.エージェントを…へ西(xのマイナス方向)向きにテレポートさせる||`と書いてあるブロックを`||player.チャットコマンドrunを入力した時||`の上にドラックしてみましょう</p>
<p>・`||positions.ポジション||`ボタンをクリックしてその中の`||positions.ワールド(0 0 0)||`を`||agent.(~0 ~0 ~0)||`の上までドラッグします</p>
<p>・`||positions.ワールド(0 0 0)||`を`||positions.ワールド(11 -21 20)||`にしましょう</p>
<p>・`||agent.西(xのマイナス方向)▼||`をクリックして`||agent.南(zのプラス方向)▼||`にしましょう</p>
```block
player.onChat("run", function () {
    agent.teleport(world(11, -21, 20), SOUTH)
})
```

## エージェントがブロックをならべるうごきをかくにんしよう
<p>`||agent.エージェント||`には、下の２しゅるいのコードがはいっています。これをくみあわせて、エージェントにかべをならべさせましょう！</p>
<p>・`||agent.エージェントに～を～向きに～ブロック分並べさせる||`: えらんだブロックを、指定した長さだけエージェントがならべる</p>
<p><img style="width:100%" src="https://vcode-esia.com/images_for_world_data/Basic/Theme1/Lesson4/L4_make_row2.gif"></p>
<n></n>
<p>・`||agent.エージェントを～ブロック分～方向の次の位置に移動させる||`: 上に１ブロック、右か左に指定した長さだけエージェントが移動する</p>
<p><img style="width:100%" src="https://vcode-esia.com/images_for_world_data/Basic/Theme1/Lesson4/L4_move_to_next_pos2.gif"></p>

## ブロックを１列ならべよう
<p>`||agent.エージェント||`にある`||agent.エージェントに～を～向きに～ブロック分並べさせる||`をつかって、**樺（かば）の板材（いたざい）を６ブロックならべよう！**</p>
<p>・`||ブロックをおく.ブロックを1列ならべる||`を`||agent.エージェントをワールド(11 -21 20)へ南(zのプラス方向)向きにテレポートさせる||`の下にはめこむ</p>
<p>・ブロックのしゅるいを、**樺の板材**にする</p>
<p>・数字を６にかえる</p>
```block
player.onChat("run", function () {
    agent.teleport(world(11, -21, 20), SOUTH);
    agent.fillBlockInLine(Block.PlanksBirch, SideDirection.Left, 6);
})
```

## 次の位置に移動させよう
<p>ブロックをならべたあと、エージェントが次にブロックをならべはじめる位置に移動させよう！</p>
<p>`||agent.エージェント||`にある`||agent.エージェントを～ブロック分～方向の次の位置に移動させる||`をとりだして、`||agent.エージェントに～を～向きに～ブロック分並べさせる||`の下にはめこむ</p>
<p>次にブロックをならべはじめる位置に移動するには、**エージェントが何ブロック右に移動すれば良いか、自分で考えて数字をかえる**</p>
```block
player.onChat("run", function () {
    agent.teleport(world(11, -21, 20), SOUTH)
    agent.fillBlockInLine(Block.PlanksBirch, SideDirection.Left, 6);
    agent.toNextPosition(SideDirection.Right, 6);
})
```

## くりかえしかたを考えよう
<p>これで１列分のブロックをおいて、次のブロックをおく場所に動くプログラムができました！</p>
<p>このプログラムを**かべの高さの数だけくりかえす**ようにしましょう。</p>
<p>プログラムをくりかえすには、**くりかえしたい部分を**`||loops.ループ||`にある`||loops.くりかえし ○回||`**ではさむ**のでしたね！</p>
<p><img style="width:100%" src="https://vcode-esia.com/images_for_world_data/Basic/Theme1/Lesson4/L4_movement_set2.gif"></p>

## くりかえしを入れてみよう
<p>`||loops.ループ||`ボタンをクリックしてその中の`||loops.くりかえし４回||`と書いてあるブロックで`||agent.エージェントを…テレポートさせる||`より下のプログラムをはさみましょう。</p>
<p>そして`||functions.４回||`をくりかえしたい数にかえましょう！</p>
<p>何回くりかえせばよいか、**自分で考えてみましょう**</p>
<p><img style="width:100%" src="https://vcode-esia.com/images_for_world_data/Basic/Theme1/Lesson4/L4_complete2.gif"></p>
```block
player.onChat("run", function () {
    agent.teleport(world(11, -21, 20), SOUTH)
    for (let index = 0; index < 5; index++) {
        agent.fillBlockInLine(Block.PlanksBirch, SideDirection.Left, 6);
        agent.toNextPosition(SideDirection.Right, 6);
    }
})
```

## 8.『実行』ボタンをクリックしましょう
画面右下にある緑の『▶』ボタンをクリックして作ったプログラムを実行し、チャットコマンドで`||player.run||`と入力してみましょう