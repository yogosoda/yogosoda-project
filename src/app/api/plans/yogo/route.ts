import {
    collection,
    getDocs,
    orderBy,
    query,
    where,
} from '@firebase/firestore';
import { firestore } from '@dev/firebase';
import { PlanMeta } from '@dev/entities/plans.types';

export const GET = async () => {
    try {
        const searchKeyword = '요고';

        const q = query(
            collection(firestore, 'plans'),
            where('name', '>=', searchKeyword),
            where('name', '<=', searchKeyword + '\uf8ff'), // 요고로 시작하는 단어 포함
            where('mvno', '==', 'KT'), // 검색 조건 추가
            orderBy('fee', 'asc')
        );

        const querySnapshot = await getDocs(q);
        const data: PlanMeta[] = querySnapshot.docs.map(
            (doc) => doc.data() as PlanMeta
        );

        return new Response(JSON.stringify(data), {
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        return new Response(
            JSON.stringify({ error: (error as Error).message }),
            {
                headers: {
                    'Content-Type': 'application/json',
                },
                status: 500,
            }
        );
    }
};
