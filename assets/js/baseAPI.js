$.ajaxPrefilter((option) => {
    // 在发起真正的 Ajax 请求之前，统一拼接请求的根路径
    option.url = `http://www.liulongbin.top:3007` + option.url;
    // 统一为有权限的接口，设置 headers 请求头
    if (option.url.includes("/my/")) {
    options.headers = {
        Authorization: localStorage.getItem("token"),
    };
}
  });
