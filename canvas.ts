window.onload = () => {
    let operatorStatus = ''
    // 注册菜单的点击事件
    let _menuBtnList = document.querySelectorAll('.comp-menu-list > span')
    for (let i of _menuBtnList) {
        i.addEventListener('click', (item : any) => {
            let _type = item.target.dataset.type
            operatorStatus = _type
        }, false)
    }

    const canvas : any = document.querySelector('#app')
    console.log('---canvas', canvas)

    canvas.addEventListener('mouseover', (data) => {
        console.log('mouseover', data)
    }, false)
    canvas.addEventListener('mousemove', (data) => {
        // console.log('mousemove', data)
    }, false)
    canvas.addEventListener('mouseup', (data) => {
        console.log('mouseup', data)
    }, false)
    canvas.addEventListener('mousedown', (data) => {
        console.log('mousedown', data)
    }, false)

    if (canvas.getContext){
        let ctx = canvas.getContext('2d')

        // var devicePixelRatio = window.devicePixelRatio || 1;
        // var backingStoreRatio = ctx.webkitBackingStorePixelRatio ||
        //                     ctx.mozBackingStorePixelRatio ||
        //                     ctx.msBackingStorePixelRatio ||
        //                     ctx.oBackingStorePixelRatio ||
        //                     ctx.backingStorePixelRatio || 1;
        // var ratio = devicePixelRatio / backingStoreRatio;
        // canvas.width = canvas.width * ratio;
        // canvas.width = canvas.height* ratio;

        ctx.translate(0.5, 0.5);
        ctx.beginPath();
        ctx.arc(75, 75, 1, 0, Math.PI * 2, true)
        ctx.fillStyle='#000000'
        ctx.fill()
        ctx.stroke()

    } else {
        console.log('浏览器不支持')
    }
}