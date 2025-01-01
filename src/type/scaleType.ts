export interface ScaleOptions{
   /**
   * 是否显示刻度线和刻度标签
   */
  showScale?: boolean;

  /**
   * 是否覆盖自动生成的刻度配置，使用自定义刻度设置
   */
  scaleOverride: boolean;

  /**
   * 自定义刻度的步数。如果 `scaleOverride` 为 `true`，则必须设置此值
   * 
   * @type {number | null}
   */
  scaleSteps: number | null;

  /**
   * 自定义每个刻度的步长（增量）。如果 `scaleOverride` 为 `true`，则必须设置此值
   * 
   * @type {number | null}
   */
  scaleStepWidth: number | null;

  /**
   * 自定义刻度的起始值。如果 `scaleOverride` 为 `true`，则必须设置此值
   * 
   * @type {number | null}
   */
  scaleStartValue: number | null;

  /**
   * 刻度线的颜色，可以使用任何 CSS 颜色格式
   * 
   * @example "rgba(0,0,0,0.1)"
   */
  scaleLineColor: string;

  /**
   * 刻度线的宽度，以像素为单位
   * 
   * @example 1
   */
  scaleLineWidth: number;

  /**
   * 是否显示刻度标签（刻度旁的数值标签）
   */
  scaleShowLabels: boolean;

  /**
   * 刻度标签的模板字符串，用于格式化刻度显示的文本
   * 
   * 支持模板语法，如 `<%=value%>` 表示刻度的值
   * 
   * @example "<%=value%> units"
   */
  scaleLabel: string;

  /**
   * 刻度标签的字体系列
   * 
   * @example "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"
   */
  scaleFontFamily: string;

  /**
   * 刻度标签的字体大小，以像素为单位
   * 
   * @example 12
   */
  scaleFontSize: number;

  /**
   * 刻度标签的字体样式，如 "normal", "italic", "oblique"
   * 
   * @example "normal"
   */
  scaleFontStyle: string;

  /**
   * 刻度标签的字体颜色，可以使用任何 CSS 颜色格式
   * 
   * @example "#666"
   */
  scaleFontColor: string;
}