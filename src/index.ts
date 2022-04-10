import './index.scss'
import * as zrender from 'zrender'
window.onload = function() {
    let operatorStatus = ''
    // 注册菜单的点击事件
    let _menuBtnList = document.querySelectorAll('.comp-menu-list > span')
    for (let i of _menuBtnList) {
        i.addEventListener('click', (item: any) => {
            let _type = item.target.dataset.type
            operatorStatus = _type
        }, false)
    }

    let container = document.querySelector('#app') as HTMLElement;
    let zr: any = zrender.init(container);

    let w = zr.getWidth();
    let h = zr.getHeight();

    const canvas : any = document.querySelector('#app')
    console.log('---canvas', canvas)

    canvas.addEventListener('mouseover', (data : any) => {
        console.log('mouseover', data)
    }, false)
    canvas.addEventListener('mousemove', (data : any) => {
        // console.log('mousemove', data)
    }, false)
    canvas.addEventListener('mouseup', (data : any) => {
        console.log('mouseup', data)
    }, false)
    canvas.addEventListener('mousedown', (data : any) => {
        console.log('mousedown', data)
        setPoint(data)
    }, false)


    function setPoint(data : any) {
        let r = 3;
        let circle = new zrender.Circle({
            shape: {
                cx: data.x,
                cy: data.y,
                r: r
            },
            style: {
                fill: '#000000',
                stroke: '#000000'
            },
            silent: true
        });

        zr.add(circle);
    }

    function setLine(data: Object) {
        console.log(data)
        let pointList : Array<number> = []
    }
    
    // circle.animate('shape', true)
    //     .when(5000, {
    //         cx: w - r
    //     })
    //     .when(10000, {
    //         cx: r
    //     })
    //     .start();

    

    // var container = document.querySelector('#app') as HTMLElement;
    // var zr: any = zrender.init(container);

    // 水滴
    // var droplet = new zrender.Droplet({
    //     shape: {
    //         cx: 250,
    //         cy: 50,
    //         width: 30,
    //         height: 30
    //     }
    // });
    // zr.add(droplet)

    // 线
    // let line = new zrender.Line({
    //     shape: {
    //         x1: 10,
    //         y1: 20,
    //         x2: 200,
    //         y2: 300,
    //         percent: 100
    //     }
    // })
    // zr.add(line)

    // 添加玫瑰
    // let rose = new zrender.Rose({
    //     shape: {
    //         cx: 300,
    //         cy: 600,
    //         r: [40, 50, 60],
    //         k: 80,
    //         n: 10
    //     }
    // })
    // zr.add(rose)
};


