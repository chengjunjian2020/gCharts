export interface AnimationOpts{
  /**
   * 是否启用动画
   */
  animation?: boolean;

  /**
   * 动画的步骤数
   */
  animationSteps?: number;

  /**
   * 动画的缓动效果
   */
  animationEasing?: string;

  /**
   * 动画完成后的回调函数
   */
  onAnimationComplete?: (() => void) ;
  // 每一步动画完成后的回调函数
  onAnimationProgress?: () => void;
}