import localFont from 'next/font/local';
import { Noto_Sans_KR } from 'next/font/google';

const neoLight = localFont({
    src: './NanumSquareNeo-aLt.ttf',
    variable: '--font-neo-lt',
});

const neoRegular = localFont({
    src: './NanumSquareNeo-bRg.ttf',
    variable: '--font-neo-rg',
});

const neoBold = localFont({
    src: './NanumSquareNeo-cBd.ttf',
    variable: '--font-neo-bd',
});

const neoExtraBold = localFont({
    src: './NanumSquareNeo-dEb.ttf',
    variable: '--font-neo-eb',
});

const neoHeavy = localFont({
    src: './NanumSquareNeo-eHv.ttf',
    variable: '--font-neo-hv',
});
export const notosansKr = Noto_Sans_KR({ subsets: ['latin'] });

export { neoLight, neoRegular, neoBold, neoExtraBold, neoHeavy };
