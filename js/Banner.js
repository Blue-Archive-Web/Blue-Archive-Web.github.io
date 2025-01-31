// 动态引入 CSS
// 废弃，由于 DOM 有隔离机制，所以此代码无效
// const link = document.createElement('link');
// link.rel = 'stylesheet';
// link.href = './css/top-banner-fix.css';
// document.head.appendChild(link); // 将 link 标签添加到 head 部分

// 定义自定义元素
class Banner_Element extends HTMLElement {
    constructor() {
        super();
        // 创建一个 shadow DOM
        const shadow = this.attachShadow({ mode: 'open' });

        // 动态将外部 CSS 引入到 Shadow DOM
        const style = document.createElement('style');
        // style.textContent = `
        style.textContent += `
            @import url('https://unpkg.com/mdui@1.0.2/dist/css/mdui.min.css');

            @import url('./css/top-banner-fix.css');
        `;
        shadow.appendChild(style);

        // 将多个 HTML 元素插入 shadow DOM 中
        // shadow.innerHTML = `
        shadow.innerHTML += `
                <div class="header-top text-center text-white bg-blue py-5">
                    <div class="mdui-typo">
                        <p mdui-tooltip="{content: '国服新闻'}">🎉《蔚蓝档案》国服 Final. 一切奇迹的起点篇 第 1 章 “沙勒夺回战” 现已更新！
                            <a href="https://bluearchive-cn.com/news/1176" target="_blank" style="color: white;">点击查看</a>
                        </p>
                    </div>
                </div>
                `;
    }
}

// 注册自定义元素
customElements.define('banner-element', Banner_Element);


// <!-- ver 1.0 -->
// <div class="header-top text-center text-white bg-blue py-5">
//     <div class="container rel z-1">
//         <p>Banner Text</p>
//     </div>
// </div>

// <!-- ver 1.1 -->
// <div class="header-top text-center text-white bg-blue py-5">
//     <p title="Tooltip Text">Banner Text
//         <a href="javascript:;" target="_blank">点击查看</a>
//     </p>
// </div>

// <div class="header-top text-center text-white bg-blue py-5">
//     <div class="mdui-typo">
//         <p mdui-tooltip="{content: '国服新闻'}">🎉《蔚蓝档案》国服 发条之花的帕凡舞曲篇 第 2 章“友情、勇气与光的浪漫” 现已更新！
//             <a href="https://bluearchive-cn.com/news/1008" target="_blank">点击查看</a>
//         </p>
//     </div>
// </div>

// <div class="header-top text-center text-white bg-blue py-5">
//     <div class="mdui-typo">
//         <p mdui-tooltip="{content: '国服新闻'}">🎉《蔚蓝档案》国服 Final. 一切奇迹的起点篇 第 1 章 “沙勒夺回战” 现已更新！
//             <a href="https://bluearchive-cn.com/news/1176" target="_blank" style="color: white;">点击查看</a>
//         </p>
//     </div>
// </div>