// 'use client';
// import api from '../utils/api';
// import Divider from './Divider';
// import { useEffect, useState } from 'react';
// import { twMerge } from 'tailwind-merge';
// import { ReactComponent as KtLogo } from '@devShared/svg/KT.svg';
// import { ReactComponent as Gift } from '@devShared/svg/gift.svg';
// import { ReactComponent as StarBucks } from '@devShared/svg/starbucks.svg';
// import { ReactComponent as Naver } from '@devShared/svg/naver.svg';
// import { ReactComponent as Question } from '@devShared/svg/Vector.svg';

// export default function Payment() {
//     const [payData, setPayData] = useState<[]>([]);
//     const paymentFetchData = async () => {
//         try {
//             const res = await api.post<[]>(
//                 'http://3.35.51.214/api/search_kt_plan',
//                 {
//                     searchKeyword: '',
//                 }
//             );
//             if (res.data) {
//                 setPayData(res.data);
//             }
//             console.log(res.data);
//         } catch (error) {
//             console.log(error);
//         }
//     };

//     useEffect(() => {
//         paymentFetchData();
//     }, []);

//     console.log(payData);

//     return (
//         <>
//             <div className="pt-14 pb-14 flex flex-col justify-center items-center">
//                 <div
//                     className={twMerge(
//                         'w-[400px] shadow-box bg-white rounded-2xl flex flex-col justify-center pl-4 pt-6 gap-4'
//                     )}
//                 >
//                     <KtLogo width={25} height={25} />
//                     <p className="text-[#ADB5BD] text-xs">요고 44</p>
//                     <div className="flex gap-2 items-center">
//                         <p className="font-bold text-[1.3rem]">
//                             월 40GB + 1Mbps
//                         </p>
//                         <Question />
//                     </div>
//                     <ul className="flex gap-2 text-[#979797] text-xs font-semibold">
//                         <li>통화 무제한</li>
//                         <span>|</span>
//                         <li>문자 무제한</li>
//                         <span>|</span>
//                         <li>KT 망</li>
//                         <span>|</span>
//                         <li>5G</li>
//                     </ul>
//                     <div className="flex gap-2 items-center">
//                         <p className="font-semibold text-[#425AD5]">
//                             월 44,000 원
//                         </p>
//                         <Question />
//                     </div>

//                     <div className="flex justify-center pr-6">
//                         <Divider className="w-[360px]" />
//                     </div>

//                     <div className="flex items-center gap-4 pt-4">
//                         <ul className="flex gap-1">
//                             <li>
//                                 <Gift width={25} height={25} />
//                             </li>
//                             <li>
//                                 <Gift width={25} height={25} />
//                             </li>
//                             <li>
//                                 <Gift width={25} height={25} />
//                             </li>
//                             <li>
//                                 <Gift width={25} height={25} />
//                             </li>
//                             <li>
//                                 <StarBucks width={25} height={25} />
//                             </li>
//                             <li>
//                                 <Naver width={25} height={25} />
//                             </li>
//                         </ul>

//                         <p className="text-[#ADB5BD] text-[0.6rem]">
//                             사은품 최대 n개
//                         </p>
//                     </div>

//                     <ul className="flex flex-col gap-2 text-[#666] text-[0.7rem] pt-4 pb-8">
//                         <li>네이버페이 총 6만원 증정 (3개월간 분할 지급)</li>
//                         <li>스타벅스 커피 쿠폰 (1잔 x 24개월)</li>
//                         <li>쿠폰 2천원 X 24개월 증정 (GS25, 배민 등)</li>
//                         <li>Y덤 혜택 (기본 데이터 2배 제공 / 40GB+40GB)</li>
//                         <li>메가커피 쿠폰 2만원</li>
//                         <li>티빙 무료 (12개월간)</li>
//                     </ul>
//                 </div>
//             </div>
//         </>
//     );
// }
