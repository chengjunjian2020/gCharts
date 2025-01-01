import{_ as s,c as a,a0 as p,o as l}from"./chunks/framework.RXLG0UXa.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"config.md","filePath":"config.md"}'),e={name:"config.md"};function i(c,n,t,o,r,u){return l(),a("div",null,n[0]||(n[0]=[p(`<h2 id="通用动画配置" tabindex="-1">通用动画配置 <a class="header-anchor" href="#通用动画配置" aria-label="Permalink to &quot;通用动画配置&quot;">​</a></h2><div class="language-typscript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typscript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>  /**</span></span>
<span class="line"><span>   * 是否启用动画</span></span>
<span class="line"><span>   */</span></span>
<span class="line"><span>  animation?: boolean;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  /**</span></span>
<span class="line"><span>   * 动画的步骤数</span></span>
<span class="line"><span>   */</span></span>
<span class="line"><span>  animationSteps?: number;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  /**</span></span>
<span class="line"><span>   * 动画的缓动效果</span></span>
<span class="line"><span>   */</span></span>
<span class="line"><span>  animationEasing?: string;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  /**</span></span>
<span class="line"><span>   * 动画完成后的回调函数</span></span>
<span class="line"><span>   */</span></span>
<span class="line"><span>  onAnimationComplete?: (() =&gt; void) ;</span></span>
<span class="line"><span>  // 每一步动画完成后的回调函数</span></span>
<span class="line"><span>  onAnimationProgress?: () =&gt; void;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>坐标轴配置</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>   /**</span></span>
<span class="line"><span>   * 是否显示刻度线和刻度标签</span></span>
<span class="line"><span>   */</span></span>
<span class="line"><span>  showScale?: boolean;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  /**</span></span>
<span class="line"><span>   * 是否覆盖自动生成的刻度配置，使用自定义刻度设置</span></span>
<span class="line"><span>   */</span></span>
<span class="line"><span>  scaleOverride: boolean;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  /**</span></span>
<span class="line"><span>   * 自定义刻度的步数。如果 \`scaleOverride\` 为 \`true\`，则必须设置此值</span></span>
<span class="line"><span>   * </span></span>
<span class="line"><span>   * @type {number | null}</span></span>
<span class="line"><span>   */</span></span>
<span class="line"><span>  scaleSteps: number | null;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  /**</span></span>
<span class="line"><span>   * 自定义每个刻度的步长（增量）。如果 \`scaleOverride\` 为 \`true\`，则必须设置此值</span></span>
<span class="line"><span>   * </span></span>
<span class="line"><span>   * @type {number | null}</span></span>
<span class="line"><span>   */</span></span>
<span class="line"><span>  scaleStepWidth: number | null;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  /**</span></span>
<span class="line"><span>   * 自定义刻度的起始值。如果 \`scaleOverride\` 为 \`true\`，则必须设置此值</span></span>
<span class="line"><span>   * </span></span>
<span class="line"><span>   * @type {number | null}</span></span>
<span class="line"><span>   */</span></span>
<span class="line"><span>  scaleStartValue: number | null;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  /**</span></span>
<span class="line"><span>   * 刻度线的颜色，可以使用任何 CSS 颜色格式</span></span>
<span class="line"><span>   * </span></span>
<span class="line"><span>   * @example &quot;rgba(0,0,0,0.1)&quot;</span></span>
<span class="line"><span>   */</span></span>
<span class="line"><span>  scaleLineColor: string;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  /**</span></span>
<span class="line"><span>   * 刻度线的宽度，以像素为单位</span></span>
<span class="line"><span>   * </span></span>
<span class="line"><span>   * @example 1</span></span>
<span class="line"><span>   */</span></span>
<span class="line"><span>  scaleLineWidth: number;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  /**</span></span>
<span class="line"><span>   * 是否显示刻度标签（刻度旁的数值标签）</span></span>
<span class="line"><span>   */</span></span>
<span class="line"><span>  scaleShowLabels: boolean;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  /**</span></span>
<span class="line"><span>   * 刻度标签的模板字符串，用于格式化刻度显示的文本</span></span>
<span class="line"><span>   * </span></span>
<span class="line"><span>   * 支持模板语法，如 \`&lt;%=value%&gt;\` 表示刻度的值</span></span>
<span class="line"><span>   * </span></span>
<span class="line"><span>   * @example &quot;&lt;%=value%&gt; units&quot;</span></span>
<span class="line"><span>   */</span></span>
<span class="line"><span>  scaleLabel: string;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  /**</span></span>
<span class="line"><span>   * 刻度标签的字体系列</span></span>
<span class="line"><span>   * </span></span>
<span class="line"><span>   * @example &quot;&#39;Helvetica Neue&#39;, &#39;Helvetica&#39;, &#39;Arial&#39;, sans-serif&quot;</span></span>
<span class="line"><span>   */</span></span>
<span class="line"><span>  scaleFontFamily: string;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  /**</span></span>
<span class="line"><span>   * 刻度标签的字体大小，以像素为单位</span></span>
<span class="line"><span>   * </span></span>
<span class="line"><span>   * @example 12</span></span>
<span class="line"><span>   */</span></span>
<span class="line"><span>  scaleFontSize: number;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  /**</span></span>
<span class="line"><span>   * 刻度标签的字体样式，如 &quot;normal&quot;, &quot;italic&quot;, &quot;oblique&quot;</span></span>
<span class="line"><span>   * </span></span>
<span class="line"><span>   * @example &quot;normal&quot;</span></span>
<span class="line"><span>   */</span></span>
<span class="line"><span>  scaleFontStyle: string;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  /**</span></span>
<span class="line"><span>   * 刻度标签的字体颜色，可以使用任何 CSS 颜色格式</span></span>
<span class="line"><span>   * </span></span>
<span class="line"><span>   * @example &quot;#666&quot;</span></span>
<span class="line"><span>   */</span></span>
<span class="line"><span>  scaleFontColor: string;</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,4)]))}const g=s(e,[["render",i]]);export{m as __pageData,g as default};
