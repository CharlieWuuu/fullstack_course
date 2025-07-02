function Snake() {
    return (
        <div>
            <canvas id="myCanvas" width="320" height="320" style={{ backgroundColor: 'black' }}></canvas>
            <p id="myScore"></p>
            <p id="myScore2"></p>
            <button type="button" id="Start" onClick={() => window.location.reload()}>
                開始新遊戲
            </button>
        </div>
    );
}

export default Snake;
