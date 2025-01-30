const WIDTH = 25;
const HEIGHT = 25;

const town = document.getElementById("town");

let playerPosition = { x: 0, y: 0 };

// マップの初期化
const townMap = [];
for (let i = 0; i < HEIGHT; i++) {
    const row = [];
    for (let j = 0; j < WIDTH; j++) {
        const blockType = Math.random() > 0.8 ? 'wall' : 'path'; // 壁をランダムで配置
        row.push(blockType);
    }
    townMap.push(row);
}

// キャラクターの表示
function drawTown() {
    town.innerHTML = ''; // 町を再描画
    for (let i = 0; i < HEIGHT; i++) {
        for (let j = 0; j < WIDTH; j++) {
            const block = document.createElement('div');
            block.classList.add('block', townMap[i][j]);
            if (i === playerPosition.y && j === playerPosition.x) {
                block.classList.add('hero');
            }
            town.appendChild(block);
        }
    }
}

// プレイヤーの移動
function movePlayer(dx, dy) {
    const newX = playerPosition.x + dx;
    const newY = playerPosition.y + dy;

    if (newX >= 0 && newX < WIDTH && newY >= 0 && newY < HEIGHT && townMap[newY][newX] !== 'wall') {
        playerPosition.x = newX;
        playerPosition.y = newY;
    }

    drawTown();
}

// キー操作の処理
document.addEventListener('keydown', (e) => {
    if (e.key === 'w') movePlayer(0, -1); // 上
    if (e.key === 's') movePlayer(0, 1);  // 下
    if (e.key === 'a') movePlayer(-1, 0); // 左
    if (e.key === 'd') movePlayer(1, 0);  // 右
});

// 初期描画
drawTown();
