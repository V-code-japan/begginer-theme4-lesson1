enum SideDirection {
    //% block="左"
    Left = 2,
    //% block="右"
    Right = 3,
}

namespace agent {

    // block="エージェントに $blockType を $sideDirection 向きに $amount ブロック分並べさせる"
    //% blockType.fieldEditor="gridpicker"
    //% blockType.fieldOptions.width=220
    //% blockType.fieldOptions.maxRows=10
    //% blockType.fieldOptions.columns=8
    //% blockType.fieldOptions.hasSearchBar=true
    //% amount.defl=1
    export function fillBlockInLine(
        blockType: Block,
        sideDirection: SideDirection,
        amount: number
        ) {
            let direction: FourDirection;
            if (sideDirection === SideDirection.Left) {
                direction = FourDirection.Left;
            } else {
                direction = FourDirection.Right;
            }

            for (let i = 0; i < amount; i++) {
                agent.setItem(blockType, 1, 1);
                agent.place(FourDirection.Forward);
                agent.move(direction, 1);
            }
        }
}
