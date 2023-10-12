function getElementWidth(content, padding, border) {
    let namberContent = Number.parseFloat(content);
    let namberPadding = Number.parseFloat(padding);
    let namberBorder = Number.parseFloat(border);
    let elementWidth = namberContent + (namberPadding * 2) + (namberBorder * 2);
    return elementWidth;
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200