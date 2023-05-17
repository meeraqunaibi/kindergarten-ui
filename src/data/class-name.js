const CLASS = [{ label: 'صف العصافير', value: 1 }, { label: 'صف المغامرون', value: 2 }];
const TYPE = [{ label: 'لعبة', value: 1 }, { label: 'اعلان', value: 2 }];
const LIVE =
  [
    { lable: 'الأم والأب', value: 0 },
    { lable: 'الأم', value: 1 },
    { lable: ' الأب', value: 2 },
    { lable: 'الجد والجدة', value: 3 },
    { lable: 'الأخ والأخت', value: 4 }];

const GENDER = [{label:"ذكر",value:0},{label:"أنثى",value:1}];
const BLOOD = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
const WATCH = [{lable:"نعم",value:0}, {lable:"لا",value:1}];
const SLEEP = [{ lable: "نعم", value: 0 }, { lable: "لا", value: 1 }];
const ACC = [{ lable: "نعم", value: 0 }, { lable: "لا", value: 1 }];

const TRAN = [{ value: 0, label: "مواصلات كاملة (ذهاباوايابا)" }, { value: 1, label: "ذهابا فقط" }, { value: 2, label: "ايابا فقط" }, { value: 3, label: "بدون مواصلات" }];

export {
  CLASS,
  TYPE,
  LIVE,
  GENDER,
  BLOOD,
  WATCH,
  TRAN,
  SLEEP,
  ACC
};