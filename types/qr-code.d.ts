// Type definitions for qr-code
// Project: @nimiq/qr-encoder
// Definitions by: Nimiq <www.nimiq.com>

declare class QrCode {
    public static render(config: QrCode.Config, $element: HTMLElement): void;
}

// exported types
declare namespace QrCode {
    export interface Config {
        text: string,
        minVersion?: number,
        maxVersion?: number,
        ecLevel?: QrCode.ErrorCorrectionLevel,
        left?: number,
        top?: number,
        size?: number,
        fill?: string | QrCode.LinearGradient | QrCode.RadialGradient,
        background?: string | null,
        radius?: number,
        quiet?: number,
    }

    export type ErrorCorrectionLevel = 'L' | 'M' | 'H' | 'Q';

    export interface LinearGradient {
        type: 'linear-gradient',
        position: [number, number, number, number],
        colorStops: Array<QrCode.ColorStop>,
    }

    export interface RadialGradient {
        type: 'radial-gradient',
        position: [number, number, number, number, number, number],
        colorStops: Array<QrCode.ColorStop>,
    }

    export type ColorStop = [ number, string ];
}

export default QrCode;
