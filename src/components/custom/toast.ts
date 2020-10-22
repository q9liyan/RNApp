


import Toast from 'react-native-root-toast';

export interface ToastOptions {
    message: string,
    duration?: number,
    position?: number,
    shadow?: boolean,
    animation?: boolean,
    hideOnPress?: boolean,
    delay?: number,
    onShow?: Function,
    onShown?: Function,
    onHide?: Function,
    onHidden?: Function
}

/**
 *
 * @param {*} obj
 *      message,  string        消息内容
 *      duration, number(ms)    显示时间 默认为 2s
 *      position, number         出现的位置
 *      shadow,   boolean        是否有投影
 *      animation, boolean       是否有动画
 *      hideOnPress, boolean     出现时是否从隐藏状态开始
 *      delay,      Number       延迟时间
 *      onShow,     在显示时回调事件
 *      onShown,    在显示完后回调事件
 *      onHide,     在开始隐藏时回调事件
 *      onHidden    在隐藏后回调事件
 */
const show = (obj:ToastOptions) => {
    const { message, duration, position, shadow, animation, hideOnPress, delay, onShow, onShown, onHide, onHidden } = obj
    let showTime = duration || 2000;
    const tempToast = Toast.show(message, {
        duration: showTime,
        position: position || -100,
        shadow: shadow || true,
        animation: animation || true,
        hideOnPress: hideOnPress || true,
        delay: delay || 0,
        onShow: () => {
            if (onShow) {
                onShow()
            }
        },
        onShown: () => {
            if (onShow) {
                onShown()
            }
        },
        onHide: () => {
            if (onShow) {
                onHide()
            }
        },
        onHidden: () => {
            if (onShow) {
                onHidden()
            }
        }
    });
    return tempToast;
}

export default { show };
