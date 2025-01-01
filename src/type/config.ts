import { AnimationOpts } from './animationType';
import { ScaleOptions } from './scaleType';

export type BaseChartOpts = AnimationOpts &ScaleOptions
export interface ChartGlobalOptions extends BaseChartOpts{
  responsive?: boolean;
  maintainAspectRatio: boolean;
  showTooltips: boolean;
  customTooltips: boolean;
  tooltipEvents: string[];
  tooltipFillColor: string;
  tooltipFontFamily: string;
  tooltipFontSize: number;
  tooltipFontStyle: string;
  tooltipFontColor: string;
  tooltipTitleFontFamily: string;
  tooltipTitleFontSize: number;
  tooltipTitleFontStyle: string;
  tooltipTitleFontColor: string;
  tooltipYPadding: number;
  tooltipXPadding: number;
  tooltipCaretSize: number;
  tooltipCornerRadius: number;
  tooltipXOffset: number;
  tooltipTemplate: string;
  multiTooltipTemplate: string;
  multiTooltipKeyBackground: string;
}