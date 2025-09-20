// 初始化网格
let gridSize = 16;
createGrid(gridSize);

// 生成指定大小的新网格
function createGrid(size) {
    const container = document.getElementById("container");
    container.innerHTML = ''; // 清空容器
    const itemWidth = (960 / size) - 2; // 减去2像素以适应边框和间距
    document.querySelectorAll('.grid-item').forEach(item => {
        item.style.width = itemWidth + 'px';
        item.style.height = itemWidth + 'px';
    });

    for (let i = 0; i < size * size; i++) {
        const gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");
        gridItem.addEventListener("mouseenter", () => {
            gridItem.style.backgroundColor = getRandomColor();
            gridItem.classList.add("hovered");
        });
        gridItem.addEventListener("mouseleave", () => {
            gridItem.classList.remove("hovered");
        });
        container.appendChild(gridItem);
    }
}

// 生成随机颜色
function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}
