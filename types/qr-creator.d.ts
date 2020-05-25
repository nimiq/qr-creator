// Type definitions for qr-creator
// Project: qr-creator
// Definitions by: Nimiq <www.nimiq.com>

declare class QrCreator {
    public static render(config: QrCreator.Config, $element: HTMLElement): void;
}

// exported types
declare namespace QrCreator {
    export interface Config {
        text: string,
        minVersion?: number,
        maxVersion?: number,
        ecLevel?: QrCreator.ErrorCorrectionLevel,
        left?: number,
        top?: number,
        size?: number,
        fill?: string | QrCreator.LinearGradient | QrCreator.RadialGradient,
        background?: string | null,
        radius?: number,
        quiet?: number,
    }

    export type ErrorCorrectionLevel = 'L' | 'M' | 'H' | 'Q';

    export interface LinearGradient {
        type: 'linear-gradient',
        position: [number, number, number, number],
        colorStops: Array<QrCreator.ColorStop>,
    }

    export interface RadialGradient {
        type: 'radial-gradient',
        position: [number, number, number, number, number, number],
        colorStops: Array<QrCreator.ColorStop>,
    }

    export type ColorStop = [ number, string ];
}

export default QrCreator;
