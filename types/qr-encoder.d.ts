// Type definitions for qr-encoder
// Project: @nimiq/qr-encoder
// Definitions by: Nimiq <www.nimiq.com>

declare class QrEncoder {
    public static render(config: QrEncoder.Config, $element: HTMLElement);
}

// exported types
declare namespace QrEncoder {
    export interface Config {
        text: string,
        minVersion?: number,
        maxVersion?: number,
        ecLevel?: QrEncoder.ErrorCorrectionLevel,
        left?: number,
        top?: number,
        size?: number,
        fill?: string,
        background?: string | null,
        radius?: number,
        quiet?: number,
    }

    export type ErrorCorrectionLevel = 'L' | 'M' | 'H' | 'Q';
}

export default QrEncoder;
