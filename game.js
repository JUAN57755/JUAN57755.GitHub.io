document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("game-container");
    const player = document.querySelector(".player");

    const blockSize = 40;
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;
    const numBlocksX = Math.floor(containerWidth / blockSize);
    const numBlocksY = Math.floor(containerHeight / blockSize);

    // Create blocks grid
    for (let y = 0; y < numBlocksY; y++) {
        for (let x = 0; x < numBlocksX; x++) {
            const block = document.createElement("div");
            block.classList.add("block");
            block.style.left = (x * blockSize) + "px";
            block.style.top = (y * blockSize) + "px";
            container.appendChild(block);
        }
    }

    // Player movement
    document.addEventListener("keydown", function(event) {
        const key = event.key.toLowerCase();
        let leftPos = parseInt(player.style.left) || 0;
        let topPos = parseInt(player.style.top) || 0;

        if (key === "arrowup" && topPos > 0) {
            player.style.top = (topPos - blockSize) + "px";
        } else if (key === "arrowdown" && topPos < containerHeight - blockSize) {
            player.style.top = (topPos + blockSize) + "px";
        } else if (key === "arrowleft" && leftPos > 0) {
            player.style.left = (leftPos - blockSize) + "px";
        } else if (key === "arrowright" && leftPos < containerWidth - blockSize) {
            player.style.left = (leftPos + blockSize) + "px";
        }
    });
});
