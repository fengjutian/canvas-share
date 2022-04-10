import * as zrender from 'zrender'

export function Circle(config) {
    return new zrender.Circle({
        shape: {
            cx: 150,
            cy: 50,
            r: 47
        },
        style: {
            fill: 'none',
            stroke: '#F00'
        }
    });
}