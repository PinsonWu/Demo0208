(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.tw = {}));
}(this, function (exports) { 'use strict';

  var fp = typeof window !== "undefined" && window.flatpickr !== undefined
      ? window.flatpickr
      : {
          l10ns: {}
      };
  var Chinese = {
      weekdays: {
          shorthand: ["日", "一", "二", "三", "四", "五", "六"],
          longhand: [
              "週日",
              "週一",
              "週二",
              "週三",
              "週四",
              "週五",
              "週六",
          ]
      },
      months: {
          shorthand: [
              "一月",
              "二月",
              "三月",
              "四月",
              "五月",
              "六月",
              "七月",
              "八月",
              "九月",
              "十月",
              "十一月",
              "十二月",
          ],
          longhand: [
              "一月",
              "二月",
              "三月",
              "四月",
              "五月",
              "六月",
              "七月",
              "八月",
              "九月",
              "十月",
              "十一月",
              "十二月",
          ]
      },
      firstDayOfWeek: 1,
      ordinal: function () {
          return "";
      },
      rangeSeparator: " — ",
      weekAbbreviation: "週",
      scrollTitle: "滾動以增加",
      toggleTitle: "點擊切換",
      amPM: ["上午", "下午"],
      yearAriaLabel: "年"
  };
  fp.l10ns.tw = Chinese;
  var tw = fp.l10ns;

  exports.Chinese = Chinese;
  exports.default = tw;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
