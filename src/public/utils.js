import config from "./../../static/config";
export default {
  /**
 * @description 自动生成uuId
 * @author luckelectricity
 * @export getUuId
 * @param
 * @returns string
 */
  getUuId() {
    let len = 32; // 32长度
    let radix = 16; // 16进制
    let chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
    let uuid = [],
      i;
    radix = radix || chars.length;
    if (len) {
      for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random() * radix];
    } else {
      let r;
      uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
      uuid[14] = '4';
      for (i = 0; i < 36; i++) {
        if (!uuid[i]) {
          r = 0 | Math.random() * 16;
          uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
        }
      }
    }
    return uuid.join('');
  },
  /**
   * @param key 设置localStorage的key
   * @param val 设置对应key下的val
   */
  setData(key, val) {
    if (typeof arguments[1] == "object") {
      var data = JSON.stringify(arguments[1]);
      localStorage.setItem(arguments[0], data);
    } else if (typeof arguments[1] == "string") {
      localStorage.setItem(arguments[0], arguments[1]);
    }
  },
  /**
   * @param  key 通过key获取localStorage的值
   */
  getData(key) {
    var val = localStorage.getItem(arguments[0]) == null ? "" : localStorage.getItem(arguments[0]);
    if (val.indexOf("{") != -1) {
      return JSON.parse(val);
    }
    return val;
  },
  /**
	 * 时间戳转换
	 * @param {Object} time：时间戳串
	 * @param {Object} num：需要的时间格式  eg:'x-x-x'、'x/x/x'、'x年x月x日'等
	 */
  formatTime(time, num) {
    var yy, mm, dd, hh, min, ss;
    var formatTime = '';
    if (time != '') {
      time = new Date(parseInt(time));
      yy = time.getFullYear();
      mm = (time.getMonth() + 1);
      if (mm < 10) {
        mm = "0" + mm;
      }
      dd = time.getDate();
      if (dd < 10) {
        dd = "0" + dd;
      }
      hh = time.getHours();
      if (hh < 10) {
        hh = "0" + hh;
      }
      min = time.getMinutes();
      if (min < 10) {
        min = "0" + min;
      }
      ss = time.getSeconds();
      if (ss < 10) {
        ss = "0" + ss;
      }
      switch (num) {
        case 0:
          formatTime = yy + mm + dd + hh + min + ss;
          break;
        case 1:
          formatTime = yy + "-" + mm + "-" + dd + " " + hh + ":" + min + ":" + ss;
          break;
        case 2:
          formatTime = yy + "/" + mm + "/" + dd + " " + hh + ":" + min + ":" + ss;
          break;
        case 3:
          formatTime = yy + "年" + mm + "月" + dd + "日" + hh + "时" + min + "分" + ss + "秒";
          break;
        case 4:
          formatTime = yy + "-" + mm + "-" + dd;
          break;
        case 5:
          formatTime = yy + "_" + mm + "_" + dd + " " + hh + "_" + min + "_" + ss;
          break;
        case 6:
          formatTime = mm + "/" + dd;
          break;
        case 7:
          formatTime = hh + ":" + min + ":" + ss;
          break;
        case 8:
          formatTime = yy + "." + mm + "." + dd;
          break;
        case 9:
          formatTime = yy + "-" + mm + "-" + dd;
          break;
      }
    }
    return formatTime;
  },
  httpServer: config.httpServer,
  httpImgUrl: config.httpImgUrl
}