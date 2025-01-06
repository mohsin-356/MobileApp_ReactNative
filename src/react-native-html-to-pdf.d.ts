declare module 'react-native-html-to-pdf' {
    export interface PDFOptions {
        html: string;
        fileName: string;
        directory?: string;
    }

    export interface PDFResult {
        filePath: string | null;
        base64?: string;
    }

    class HTMLtoPDF {
        static convert(options: PDFOptions): Promise<PDFResult>;
    }

    export default HTMLtoPDF;
}
