import request from "@/utils/request";
// 登陆方法
export function login(data) {
  return request({
    url: "/srs_rtc/user/userLogin",
    qsFlag: true,
    method: "post",
    data: data,
  });
}

// 注册方法
export function register(data) {
  return request({
    url: "/srs_rtc/user/insertUser",
    qsFlag: true,
    method: "post",
    data: data,
  });
}
