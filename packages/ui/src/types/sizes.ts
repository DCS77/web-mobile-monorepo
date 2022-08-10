export enum CssUnit {
	// Absolute units
	CM = 'cm',
	IN = 'in',
	MM = 'mm',
	PC = 'pc',
	PT = 'pt',
	PX = 'px',

	// Relative units
	CH = 'ch',
	EM = 'em',
	EX = 'ex',
	PCT = '%',
	REM = 'rem',
	VH = 'vh',
	VW = 'vw',
	VMIN = 'vmin',
	VMAX = 'vmax',
}

export type CssSize = `${string}${CssUnit}`;

export function toCssSize(value: number, unit: CssUnit): CssSize {
	return `${value}${unit}`;
}
