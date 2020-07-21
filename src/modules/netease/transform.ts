import BaseTransform from "../base/transform";
import { SZ, HK, US, SH } from "../../utils/constant";

/**
 * 网易股票代码转换
 */
class NeteaseTransform extends BaseTransform {
  /**
   * 构造函数
   */
  constructor() {
    super();
  }

  /**
   * 深交所股票代码转换
   * @param code 股票代码
   */
  public SZExchangeTransform(code: string): string {
    if (!code.includes(SZ)) {
      throw new Error("请检查股票代码是否正确");
    }

    return "1" + code.replace(SZ, "");
  }

  /**
   * 上交所股票代码转换
   * @param code 股票代码
   */
  public SHExchangeTransform(code: string): string {
    if (!code.includes(SH)) {
      throw new Error("请检查股票代码是否正确");
    }

    return "0" + code.replace(SH, "");
  }

  /**
   * 港交所股票代码转换
   * @param code 股票代码
   */
  public HKExchangeTransform(code: string): string {
    if (!code.includes(HK)) {
      throw new Error("请检查股票代码是否正确");
    }

    return "hk" + code.replace(HK, "");
  }

  /**
   * 美交所股票代码转换
   * @param code 股票代码
   */
  public USExchangeTransform(code: string): string {
    if (!code.includes(US)) {
      throw new Error("请检查股票代码是否正确");
    }

    return "US_" + code.replace(US, "");
  }
}

export default NeteaseTransform;
