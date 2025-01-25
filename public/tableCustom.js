window.onload = () => {
    const tables = document.querySelectorAll('table');
    console.log('Found tables:', tables); // 检查是否能获取到所有 table 元素

    tables.forEach(table => {
        const wrapper = document.createElement('div');
        wrapper.classList.add('custom-table-container');
        table.parentNode.insertBefore(wrapper, table);
        wrapper.appendChild(table);
    });
}
