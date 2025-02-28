document.addEventListener('DOMContentLoaded', () => {
    const infoButton = document.getElementById('infoButton');
    const licenseButton = document.getElementById('licenseButton');
    const statusMessage = document.getElementById('statusMessage');
    const tokenInput = document.getElementById('tokenInput');

    infoButton.addEventListener('click', () => {
        alert('wangluofanzuo@outlook.com');
    });

    licenseButton.addEventListener('click', () => {
        statusMessage.textContent = '正在从服务器请求';
        setTimeout(() => {
            statusMessage.textContent = '已获取，请查阅';
            tokenInput.value = 'token_code:2398'; // 禁用状态下显示文本
            tokenInput.removeAttribute('disabled'); // 仅为了展示效果，实际上不需要启用输入框
            alert('token_code:2398');
        }, 500);
    });
});
