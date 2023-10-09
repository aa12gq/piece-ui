/**
 * 网站配置文件
 */

const config = {
  appName: "海贼王",
  appLogo:
    "https://bitpig-column.oss-cn-hangzhou.aliyuncs.com/AA12/190691488370262017.jpg",
  showViteLogo: true,
};

export const viteLogo = (env) => {
  if (config.showViteLogo) {
    console.log("\n");
  }
};

export default config;
