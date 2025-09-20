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

// 实现渐进式变暗效果
function darkenColor(color, percent) {
    const rgb = color.match(/\d+/g).map(Number);
    const newRgb = rgb.map(val => Math.max(val - (val * percent / 100), 0));
    return `rgb(${newRgb[0]},${newRgb[1]},${newRgb[2]})`;
}

// 修改悬停事件以添加随机颜色和渐进式变暗
document.addEventListener("mouseover", (event) => {
    const target = event.target;
    if (target.classList.contains("grid-item")) {
        let currentColor = window.getComputedStyle(target, null).getPropertyValue("background-color");
        if (currentColor === 'rgba(0, 0, 0, 0)') { // 如果当前颜色是透明的，这意味着这是一个新的方块
            currentColor = getRandomColor();
            target.style.backgroundColor = currentColor;
        } else {
            currentColor = darkenColor(currentColor, 10);
            target.style.backgroundColor = currentColor;
        }
    }
});