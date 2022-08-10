import { CssSize } from "../types/sizes";

export enum StyleVariant {
    DEFAULT = 'default',
    HEADING = 'heading',
}

interface IStyleSettings {
    fontSize: CssSize;
}

export const DEFAULT_STYLE: IStyleSettings = {
    fontSize: '20px',
}

const HEADING_STYLE: IStyleSettings = {
    fontSize: '80px',
}

const UI_SETTINGS: Record<StyleVariant, IStyleSettings> = {
    [StyleVariant.DEFAULT]: DEFAULT_STYLE,
    [StyleVariant.HEADING]: HEADING_STYLE,
}

export function getStyleSettings(variant: StyleVariant) {
    return UI_SETTINGS[variant];
}
