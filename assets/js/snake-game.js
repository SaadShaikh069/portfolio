$(document).ready(function () {
    const gridSize = 10;
    const tileSize = 10;
    let snake = [{ x: 10, y: 10 }];
    let direction = { x: 0, y: 0 };
    let food;
    let gameInterval;
    let gameStarted = false;
    let gameOverFlag = false;
    let score = 0;

    function drawSnake() {
        $('.snakeGame .player').find('.snake-part').remove();
        snake.forEach((part, index) => {
            const color = `rgba(67, 217, 173, ${(snake.length - index) / snake.length})`;
            $('.snakeGame .player').append(
                `<div class="snake-part" style="position: absolute; left: ${part.x * tileSize}px; top: ${part.y * tileSize}px; width: ${tileSize}px; height: ${tileSize}px; background-color: ${color}; ${(index === 0) ? 'border-radius: 50%;' : ''}"></div>`
            );
        });
    }

    function getRandomFoodPosition() {
        let newPosition;
        let occupied = true;

        while (occupied) {
            newPosition = {
                x: Math.floor(Math.random() * gridSize),
                y: Math.floor(Math.random() * gridSize)
            };
            occupied = snake.some(part => part.x === newPosition.x && part.y === newPosition.y);
        }

        return newPosition;
    }

    function drawFood() {
        food = getRandomFoodPosition();
        $('.snakeGame .player').find('.food').remove();
        $('.snakeGame .player').append(`<div class="food" style="position: absolute; left: ${food.x * tileSize}px; top: ${food.y * tileSize}px; width: ${tileSize}px; height: ${tileSize}px;"></div>`);
    }

    function moveSnake() {
        const head = { x: snake[0].x + direction.x, y: snake[0].y + direction.y };
        snake.unshift(head);

        if (head.x === food.x && head.y === food.y) {
            drawFood();
            score++;
            updateScore();
        } else {
            snake.pop();
        }

        if (snakeCollision()) {
            clearInterval(gameInterval);
            gameOver();
        }
    }

    function snakeCollision() {
        return snake.slice(1).some(part => part.x === snake[0].x && part.y === snake[0].y);
    }

    function gameOver() {
        gameOverFlag = true;
        $('.snakeGame .player .game-status').html('Game Over! Final Score: ' + score);
        $('#startGame').text('Restart Game').show();
    }
    function updateScore() {
        $('.snakeGame .player .game-status').html('Score: ' + score); // Display score in the status
    }

    function gameLoop() {
        if (!gameOverFlag) {
            moveSnake();
            drawSnake();
        }
        if (!gameStarted && !gameOverFlag) {
            $('.snakeGame .player .game-status').html("Snake can travel outside");
            gameStarted = true;
        }
    }

    $('#startGame').click(function () {
        snake = [{ x: 10, y: 10 }];
        direction = { x: 0, y: 0 };
        gameStarted = false;
        gameOverFlag = false;
        score = 0;
        $('.game-over').remove();
        $(this).hide();
        clearInterval(gameInterval);
        drawFood();
        gameInterval = setInterval(gameLoop, 200);
    });

    $(document).keydown(function (e) {
        switch (e.which) {
            case 37:
                if (direction.x === 0) direction = { x: -1, y: 0 };
                break;
            case 38:
                if (direction.y === 0) direction = { x: 0, y: -1 };
                break;
            case 39:
                if (direction.x === 0) direction = { x: 1, y: 0 };
                break;
            case 40:
                if (direction.y === 0) direction = { x: 0, y: 1 };
                break;
        }
    });

    $('.up').click(() => { if (direction.y === 0) direction = { x: 0, y: -1 }; });
    $('.left').click(() => { if (direction.x === 0) direction = { x: -1, y: 0 }; });
    $('.down').click(() => { if (direction.y === 0) direction = { x: 0, y: 1 }; });
    $('.right').click(() => { if (direction.x === 0) direction = { x: 1, y: 0 }; });
});
