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
        const q = query(
            collection(firestore, 'plans'),
            where('mno', '!=', null),
            orderBy('fee', 'asc')
        );

        const querySnapshot = await getDocs(q);
        const res: string[] = querySnapshot.docs.map(
            (doc) => (doc.data() as PlanMeta).mno
        );

        const data: string[] = Array.from(new Set(res));
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
