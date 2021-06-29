/**
 * 触发 window.resize
 */
export function triggerWindowResizeEvent () {
    const event = document.createEvent('HTMLEvents')
    event.initEvent('resize', true, true)
    event.eventType = 'message'
    window.dispatchEvent(event)
}

/** 
 * 生成随机字符串
 * @returns {string}
 */
export function randomStr(len = 32) {
	const $chars =
		"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
	const maxPos = $chars.length;
	let str = "";
	for (let i = 0; i < len; i++) {
		str += $chars.charAt(Math.floor(Math.random() * maxPos));
	}
	return str;
}

// 千分位逗号分割
export function toThousandFilter(num) {
    return (+num || 0).toString().replace(/^-?\d+/g, m => m.replace(/(?=(?!\b)(\d{3})+$)/g, ','))
}

// 获取图片的宽高
export function getImageInfo(url, callback) {
    var img = new Image();
    img.src = url;
    if (img.complete) {
        // 如果图片被缓存，则直接返回缓存数据
        callback(img.width, img.height);
    } else {
        img.onload = function () {
            callback(img.width, img.height);
        }
    }
}

// 将数组转换成树
export function navTree(data) {
    let result = []
    if(!Array.isArray(data)) {
        return result
    }
    data.forEach(item => {
        delete item.children;
    });
    let map = {};
    data.forEach(item => {
        map[item.id] = item;
    });
    data.forEach(item => {
        let parent = map[item.parentId];
        if(parent) {
            (parent.children || (parent.children = [])).push(item);
        } else {
            result.push(item);
        }
    });
    return result;
}

// 数组内按某个字段排序
export function compare(arg) {
    return function(a, b) {
        return a[arg] - b[arg];
    }
}