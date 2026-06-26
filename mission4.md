```template
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

# 学んだプログラムを使ってみよう

## プログラムを自由にくみかえよう
<p>今日、学んだプログラムを見てみましょう</p>
<p>見終わったら`||完了||`をクリックしてすべての使って自由にプログラミングをしてみましょう</p>
<p><img style="width:100%" src="https://vcode-esia.com/images_for_world_data/Basic/Theme1/Lesson4/L4_finished.gif"></p>