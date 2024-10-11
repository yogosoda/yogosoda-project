import localFont from 'next/font/local';
import { Noto_Sans_KR } from 'next/font/google';

const _neoLight = localFont({
    src: './NanumSquareNeo-aLt.ttf',
    variable: '--font-neo-lt',
});

const _neoRegular = localFont({
    src: './NanumSquareNeo-bRg.ttf',
    variable: '--font-neo-rg',
});

const _neoBold = localFont({
    src: './NanumSquareNeo-cBd.ttf',
    variable: '--font-neo-bd',
});

const _neoExtraBold = localFont({
    src: './NanumSquareNeo-dEb.ttf',
    variable: '--font-neo-eb',
});

const _neoHeavy = localFont({
    src: './NanumSquareNeo-eHv.ttf',
    variable: '--font-neo-hv',
});

export { _neoLight, _neoRegular, _neoBold, _neoExtraBold, _neoHeavy };
export const notosansKr = Noto_Sans_KR({ subsets: ['latin'] });
