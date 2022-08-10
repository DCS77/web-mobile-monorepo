import { Colour } from "../types/colours";

export enum ThemeVariant {
    LIGHT = 'light',
    AMOLED = 'amoled',
}

interface IThemeColours {
    primary: Colour;
    background: Colour;
    icon: Colour;
}

const LIGHT_THEME: IThemeColours = {
    primary: '#000',
    background: '#ddd',
    icon: '#000',
}

const AMOLED_THEME: IThemeColours = {
    primary: '#eee',
    background: '#000',
    icon: '#eee',
}

const THEME_SETTINGS: Record<ThemeVariant, IThemeColours> = {
    [ThemeVariant.LIGHT]: LIGHT_THEME,
    [ThemeVariant.AMOLED]: AMOLED_THEME,
}

export function getThemeSettings(variant: ThemeVariant) {
    return THEME_SETTINGS[variant];
}