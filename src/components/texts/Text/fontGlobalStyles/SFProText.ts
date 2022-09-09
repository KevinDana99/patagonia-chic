import { createGlobalStyle } from 'styled-components';

import SFProTextUltralight from '../../../../assets/fonts/SF_Pro_Text/SF-Pro-Text-Ultralight.otf';
import SFProTextUltralightItalic from '../../../../assets/fonts/SF_Pro_Text/SF-Pro-Text-UltralightItalic.otf';
import SFProTextRegular from '../../../../assets/fonts/SF_Pro_Text/SF-Pro-Text-Regular.otf';
import SFProTextRegularItalic from '../../../../assets/fonts/SF_Pro_Text/SF-Pro-Text-RegularItalic.otf';
import SFProTextMedium from '../../../../assets/fonts/SF_Pro_Text/SF-Pro-Text-Medium.otf';
import SFProTextMediumItalic from '../../../../assets/fonts/SF_Pro_Text/SF-Pro-Text-MediumItalic.otf';
import SFProTextSemibold from '../../../../assets/fonts/SF_Pro_Text/SF-Pro-Text-Semibold.otf';
import SFProTextSemiboldItalic from '../../../../assets/fonts/SF_Pro_Text/SF-Pro-Text-SemiboldItalic.otf';
import SFProTextBold from '../../../../assets/fonts/SF_Pro_Text/SF-Pro-Text-Bold.otf';
import SFProTextBoldItalic from '../../../../assets/fonts/SF_Pro_Text/SF-Pro-Text-BoldItalic.otf';
import SFProTextHeavy from '../../../../assets/fonts/SF_Pro_Text/SF-Pro-Text-Heavy.otf';
import SFProTextHeavyItalic from '../../../../assets/fonts/SF_Pro_Text/SF-Pro-Text-HeavyItalic.otf';

/* 
    Defined type as `any` because it's a problem between `@types/styled-components` and `@types/react`
    https://github.com/styled-components/styled-components/issues/3738
*/

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SFProTextGlobalStyle: any = createGlobalStyle`
    /*---------------------
        Ultra Light
    ---------------------*/
    @font-face {
        font-family: 'SF Pro Text';
        src: url(${SFProTextUltralight}) format('otf');
        font-weight: 100;
        font-style: normal;
    }
    @font-face {
        font-family: 'SF Pro Text';
        src: url(${SFProTextUltralightItalic}) format('otf');
        font-weight: 100;
        font-style: italic;
    }

    /*---------------------
        Regular
    ---------------------*/
    @font-face {
        font-family: 'SF Pro Text';
        src: url(${SFProTextRegular}) format('otf');
        font-weight: 400;
        font-style: normal;
    }
    @font-face {
        font-family: 'SF Pro Text';
        src: url(${SFProTextRegularItalic}) format('otf');
        font-weight: 400;
        font-style: italic;
    }

    /*---------------------
        Medium
    ---------------------*/
    @font-face {
        font-family: 'SF Pro Text';
        src: url(${SFProTextMedium}) format('otf');
        font-weight: 500;
        font-style: normal;
    }
    @font-face {
        font-family: 'SF Pro Text';
        src: url(${SFProTextMediumItalic}) format('otf');
        font-weight: 500;
        font-style: italic;
    }

    /*---------------------
        Semi Bold
    ---------------------*/
    @font-face {
        font-family: 'SF Pro Text';
        src: url(${SFProTextSemibold}) format('otf');
        font-weight: 600;
        font-style: normal;
    }
    @font-face {
        font-family: 'SF Pro Text';
        src: url(${SFProTextSemiboldItalic}) format('otf');
        font-weight: 600;
        font-style: italic;
    }

    /*---------------------
        Bold
    ---------------------*/
    @font-face {
        font-family: 'SF Pro Text';
        src: url(${SFProTextBold}) format('otf');
        font-weight: 700;
        font-style: normal;
    }
    @font-face {
        font-family: 'SF Pro Text';
        src: url(${SFProTextBoldItalic}) format('otf');
        font-weight: 700;
        font-style: italic;
    }
    
    /*---------------------
        Heavy
    ---------------------*/
    @font-face {
        font-family: 'SF Pro Text';
        src: url(${SFProTextHeavy}) format('otf');
        font-weight: 800;
        font-style: normal;
    }
    @font-face {
        font-family: 'SF Pro Text';
        src: url(${SFProTextHeavyItalic}) format('otf');
        font-weight: 800;
        font-style: italic;
    }
`;

export default SFProTextGlobalStyle;
