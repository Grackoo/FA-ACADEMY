/// <reference types="vite/client" />
/// <reference types="react" />

declare namespace JSX {
    interface IntrinsicElements {
        'tv-ticker-tape': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
            symbols?: string;
            'show-hover'?: string | boolean;
            'color-theme'?: string;
        };
    }
}
