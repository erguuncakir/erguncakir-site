(function() {
    const htmlElem = document.documentElement;
    const themeToggle = document.getElementById('themeToggle');
    
    let currentTheme = localStorage.getItem('cvTheme') || 'auto';
    
    function getSystemTheme() {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    
    function applyTheme(theme) {
        if (theme === 'light') {
            htmlElem.setAttribute('data-theme', 'light');
        } else if (theme === 'dark') {
            htmlElem.setAttribute('data-theme', 'dark');
        } else if (theme === 'auto') {
            const systemTheme = getSystemTheme();
            htmlElem.setAttribute('data-theme', systemTheme);
        }
    }
    
    function updateThemeButton(theme) {
        themeToggle.setAttribute('data-theme-state', theme);
    }
    
    function setTheme(theme) {
        currentTheme = theme;
        localStorage.setItem('cvTheme', theme);
        applyTheme(theme);
        updateThemeButton(theme);
    }
    
    function cycleTheme() {
        if (currentTheme === 'light') {
            setTheme('dark');
        } else if (currentTheme === 'dark') {
            setTheme('auto');
        } else if (currentTheme === 'auto') {
            setTheme('light');
        }
    }
    
    function handleSystemThemeChange(e) {
        if (currentTheme === 'auto') {
            const newSystemTheme = e.matches ? 'dark' : 'light';
            htmlElem.setAttribute('data-theme', newSystemTheme);
        }
    }
    
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    darkModeMediaQuery.addEventListener('change', handleSystemThemeChange);
    
    setTheme(currentTheme);
    
    themeToggle.addEventListener('click', cycleTheme);
})();

(function() {
    const canvas = document.getElementById('phoneCanvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');

    const rawText = '+6fdadada0 sdasd19 wqeqweqw16czcszcsz3 fsefsffa105 jhjhjgjhgh0jjsjsjsj9';

    const cleanNumber = rawText
        .split('')
        .filter(char => char === '+' || char === ' ' || !isNaN(parseInt(char, 10)))
        .join('');

    const plusSign = cleanNumber.charAt(0);
    const restReversed = cleanNumber.slice(1).split('').reverse().join('');

    const displayText = plusSign + restReversed;

    function drawPhone() {
        const style = getComputedStyle(document.body);
        const textColor = style.getPropertyValue('--text-primary').trim() || '#000000';

const displayWidth = 160;
const displayHeight = 20;

const scale = window.devicePixelRatio || 3;

canvas.style.width = displayWidth + 'px';
canvas.style.height = displayHeight + 'px';
canvas.width = displayWidth * scale;
canvas.height = displayHeight * scale;

ctx.setTransform(1, 0, 0, 1, 0, 0);
ctx.scale(scale, scale);

ctx.font = '0.9rem "Inter", Arial, sans-serif';
ctx.fillStyle = textColor;
ctx.textBaseline = 'middle';
ctx.clearRect(0, 0, displayWidth, displayHeight);
ctx.fillText(displayText, 0, 10);
    }

    if (document.fonts?.ready) {
        document.fonts.ready.then(drawPhone);
    } else {
        setTimeout(drawPhone, 100);
    }

    new MutationObserver(drawPhone).observe(document.documentElement, { attributes: true });
})();

(function() {
    const canvas1 = document.getElementById('phoneCanvasRef1');
    if (canvas1) {
        const ctx1 = canvas1.getContext('2d');
        const rawText1 = '+20 43 068 705 09';
        const clean1 = rawText1.split('').filter(c => c === '+' || c === ' ' || !isNaN(parseInt(c, 10))).join('');
        const plus1 = clean1.charAt(0);
        const rest1 = clean1.slice(1).split('').reverse().join('');
        const display1 = plus1 + rest1;

        function draw1() {
            const style = getComputedStyle(document.body);
            const textColor = style.getPropertyValue('--text-primary').trim() || '#000000';
            const scale = window.devicePixelRatio || 3;
            canvas1.style.width = '160px';
            canvas1.style.height = '20px';
            canvas1.width = 160 * scale;
            canvas1.height = 20 * scale;
            ctx1.setTransform(1, 0, 0, 1, 0, 0);
            ctx1.scale(scale, scale);
            ctx1.font = '0.8rem "Inter", Arial, sans-serif';
            ctx1.fillStyle = textColor;
            ctx1.textBaseline = 'middle';
            ctx1.clearRect(0, 0, 160, 20);
            ctx1.fillText(display1, 0, 10);
        }

        if (document.fonts?.ready) document.fonts.ready.then(draw1);
        else setTimeout(draw1, 100);
        new MutationObserver(draw1).observe(document.documentElement, { attributes: true });
    }

    const canvas2 = document.getElementById('phoneCanvasRef2');
    if (canvas2) {
        const ctx2 = canvas2.getContext('2d');
        const rawText2 = '+15 93 955 735 09';
        const clean2 = rawText2.split('').filter(c => c === '+' || c === ' ' || !isNaN(parseInt(c, 10))).join('');
        const plus2 = clean2.charAt(0);
        const rest2 = clean2.slice(1).split('').reverse().join('');
        const display2 = plus2 + rest2;

        function draw2() {
            const style = getComputedStyle(document.body);
            const textColor = style.getPropertyValue('--text-primary').trim() || '#000000';
            const scale = window.devicePixelRatio || 3;
            canvas2.style.width = '160px';
            canvas2.style.height = '20px';
            canvas2.width = 160 * scale;
            canvas2.height = 20 * scale;
            ctx2.setTransform(1, 0, 0, 1, 0, 0);
            ctx2.scale(scale, scale);
            ctx2.font = '0.8rem "Inter", Arial, sans-serif';
            ctx2.fillStyle = textColor;
            ctx2.textBaseline = 'middle';
            ctx2.clearRect(0, 0, 160, 20);
            ctx2.fillText(display2, 0, 10);
        }

        if (document.fonts?.ready) document.fonts.ready.then(draw2);
        else setTimeout(draw2, 100);
        new MutationObserver(draw2).observe(document.documentElement, { attributes: true });
    }

    const canvas3 = document.getElementById('phoneCanvasRef3');
    if (canvas3) {
        const ctx3 = canvas3.getContext('2d');
        const rawText3 = '+3629 335 39 083';

        const clean3 = rawText3.split('').filter(c => c === '+' || c === ' ' || !isNaN(parseInt(c, 10))).join('');
        const plus3 = clean3.charAt(0);
        const rest3 = clean3.slice(1).split('').reverse().join('');
        const display3 = plus3 + rest3;

        function draw3() {
            const style = getComputedStyle(document.body);
            const textColor = style.getPropertyValue('--text-primary').trim() || '#000000';
            const scale = window.devicePixelRatio || 3;
            canvas3.style.width = '160px';
            canvas3.style.height = '20px';
            canvas3.width = 160 * scale;
            canvas3.height = 20 * scale;
            ctx3.setTransform(1, 0, 0, 1, 0, 0);
            ctx3.scale(scale, scale);
            ctx3.font = '0.8rem "Inter", Arial, sans-serif';
            ctx3.fillStyle = textColor;
            ctx3.textBaseline = 'middle';
            ctx3.clearRect(0, 0, 160, 20);
            ctx3.fillText(display3, 0, 10);
        }

        if (document.fonts?.ready) document.fonts.ready.then(draw3);
        else setTimeout(draw3, 100);
        new MutationObserver(draw3).observe(document.documentElement, { attributes: true });
    }
})();

(function() {
    const canvas1 = document.getElementById('nameCanvas1');
    if (canvas1) {
        const ctx1 = canvas1.getContext('2d');
        const rawText1 = 'usnaK nahutaB';
        
        const cleanText = rawText1
            .split('')
            .filter(char => char === ' ' || isNaN(parseInt(char, 10)))
            .join('');
        
        const reversed = cleanText.split('').reverse().join('');
        
        function draw1() {
            const style = getComputedStyle(document.body);
            const textColor = style.getPropertyValue('--text-primary').trim() || '#000000';
            const scale = window.devicePixelRatio || 3;
            
            canvas1.style.width = '200px';
            canvas1.style.height = '20px';
            canvas1.width = 200 * scale;
            canvas1.height = 20 * scale;
            
            ctx1.setTransform(1, 0, 0, 1, 0, 0);
            ctx1.scale(scale, scale);
            ctx1.font = 'bold 0.9rem "Inter", Arial, sans-serif';
            ctx1.fillStyle = textColor;
            ctx1.textBaseline = 'middle';
            ctx1.clearRect(0, 0, 200, 20);
            ctx1.fillText(reversed, 0, 10);
        }
        
        if (document.fonts?.ready) document.fonts.ready.then(draw1);
        else setTimeout(draw1, 100);
        new MutationObserver(draw1).observe(document.documentElement, { attributes: true });
    }

    const canvas2 = document.getElementById('nameCanvas2');
    if (canvas2) {
        const ctx2 = canvas2.getContext('2d');
        const rawText2 = 'iviÇ ermE uğoD';
        const cleanText = rawText2.split('').filter(char => char === ' ' || isNaN(parseInt(char, 10))).join('');
        const reversed = cleanText.split('').reverse().join('');
        
        function draw2() {
            const style = getComputedStyle(document.body);
            const textColor = style.getPropertyValue('--text-primary').trim() || '#000000';
            const scale = window.devicePixelRatio || 3;
            
            canvas2.style.width = '200px';
            canvas2.style.height = '20px';
            canvas2.width = 200 * scale;
            canvas2.height = 20 * scale;
            
            ctx2.setTransform(1, 0, 0, 1, 0, 0);
            ctx2.scale(scale, scale);
            ctx2.font = 'bold 0.9rem "Inter", Arial, sans-serif';
            ctx2.fillStyle = textColor;
            ctx2.textBaseline = 'middle';
            ctx2.clearRect(0, 0, 200, 20);
            ctx2.fillText(reversed, 0, 10);
        }
        
        if (document.fonts?.ready) document.fonts.ready.then(draw2);
        else setTimeout(draw2, 100);
        new MutationObserver(draw2).observe(document.documentElement, { attributes: true });
    }

    const canvas3 = document.getElementById('nameCanvas3');
    if (canvas3) {
        const ctx3 = canvas3.getContext('2d');
        const rawText3 = 'ayaK lameK afatsuM';
        const cleanText = rawText3.split('').filter(char => char === ' ' || isNaN(parseInt(char, 10))).join('');
        const reversed = cleanText.split('').reverse().join('');
        
        function draw3() {
            const style = getComputedStyle(document.body);
            const textColor = style.getPropertyValue('--text-primary').trim() || '#000000';
            const scale = window.devicePixelRatio || 3;
            
            canvas3.style.width = '200px';
            canvas3.style.height = '20px';
            canvas3.width = 200 * scale;
            canvas3.height = 20 * scale;
            
            ctx3.setTransform(1, 0, 0, 1, 0, 0);
            ctx3.scale(scale, scale);
            ctx3.font = 'bold 0.9rem "Inter", Arial, sans-serif';
            ctx3.fillStyle = textColor;
            ctx3.textBaseline = 'middle';
            ctx3.clearRect(0, 0, 200, 20);
            ctx3.fillText(reversed, 0, 10);
        }
        
        if (document.fonts?.ready) document.fonts.ready.then(draw3);
        else setTimeout(draw3, 100);
        new MutationObserver(draw3).observe(document.documentElement, { attributes: true });
    }
})();