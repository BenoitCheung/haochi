function showmenu()
{
    var x = document.getElementById('navbarCollapse');
    if (x.style.display == 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}

const triggerDivSi = document.getElementById('sichuan');
const targetDivSi = document.getElementById('sichuancontent');

triggerDivSi.addEventListener('mouseover', () => {
    targetDivSi.style.transform = 'translateX(0)';
});

triggerDivSi.addEventListener('mouseout', () => {
    targetDivSi.style.transform = 'translateX(100%)';
});

const triggerDivSi2 = document.getElementById('chongqing');
const targetDivSi2 = document.getElementById('sichuancontent');

triggerDivSi2.addEventListener('mouseover', () => {
    targetDivSi2.style.transform = 'translateX(0)';
});

triggerDivSi2.addEventListener('mouseout', () => {
    targetDivSi2.style.transform = 'translateX(100%)';
});


const triggerDivGd = document.getElementById('guangdong');
const targetDivGd = document.getElementById('guangdongcontent');

triggerDivGd.addEventListener('mouseover', () => {
    targetDivGd.style.transform = 'translateX(0)';
});

triggerDivGd.addEventListener('mouseout', () => {
    targetDivGd.style.transform = 'translateX(100%)';
});

const triggerDivJs = document.getElementById('jiangsu');
const targetDivJs = document.getElementById('jiangsucontent');

triggerDivJs.addEventListener('mouseover', () => {
    targetDivJs.style.transform = 'translateX(0)';
});

triggerDivJs.addEventListener('mouseout', () => {
    targetDivJs.style.transform = 'translateX(100%)';
});

const triggerDivFj = document.getElementById('fujian');
const targetDivFj = document.getElementById('fujiancontent');

triggerDivFj.addEventListener('mouseover', () => {
    targetDivFj.style.transform = 'translateX(0)';
});

triggerDivFj.addEventListener('mouseout', () => {
    targetDivFj.style.transform = 'translateX(100%)';
});

const triggerDivZj = document.getElementById('zhejiang');
const targetDivZj = document.getElementById('zhejiangcontent');

triggerDivZj.addEventListener('mouseover', () => {
    targetDivZj.style.transform = 'translateX(0)';
});

triggerDivZj.addEventListener('mouseout', () => {
    targetDivZj.style.transform = 'translateX(100%)';
});

const triggerDivSd = document.getElementById('shandong');
const targetDivSd = document.getElementById('shandongcontent');

triggerDivSd.addEventListener('mouseover', () => {
    targetDivSd.style.transform = 'translateX(0)';
});

triggerDivSd.addEventListener('mouseout', () => {
    targetDivSd.style.transform = 'translateX(100%)';
});

const triggerDivHn = document.getElementById('hunan');
const targetDivHn = document.getElementById('hunancontent');

triggerDivHn.addEventListener('mouseover', () => {
    targetDivHn.style.transform = 'translateX(0)';
});

triggerDivHn.addEventListener('mouseout', () => {
    targetDivHn.style.transform = 'translateX(100%)';
});

const triggerDivAh = document.getElementById('anhui');
const targetDivAh = document.getElementById('anhuicontent');

triggerDivAh.addEventListener('mouseover', () => {
    targetDivAh.style.transform = 'translateX(0)';
});

triggerDivAh.addEventListener('mouseout', () => {
    targetDivAh.style.transform = 'translateX(100%)';
});

const triggerDivYn = document.getElementById('yunnan');
const targetDivYn = document.getElementById('yunnancontent');

triggerDivYn.addEventListener('mouseover', () => {
    targetDivYn.style.transform = 'translateX(0)';
});

triggerDivYn.addEventListener('mouseout', () => {
    targetDivYn.style.transform = 'translateX(100%)';
});

const triggerDivXj = document.getElementById('xinjiang');
const targetDivXj = document.getElementById('xinjiangcontent');

triggerDivXj.addEventListener('mouseover', () => {
    targetDivXj.style.transform = 'translateX(0)';
});

triggerDivXj.addEventListener('mouseout', () => {
    targetDivXj.style.transform = 'translateX(100%)';
});