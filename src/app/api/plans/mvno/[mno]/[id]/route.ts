import {
    collection,
    getDocs,
    orderBy,
    query,
    where,
} from '@firebase/firestore';
import { firestore } from '@dev/firebase';
import { PlanMeta } from '@dev/entities/plans.types';
import { NextRequest } from 'next/server';

export const GET = async (
    _request: NextRequest,
    {
        params,
    }: {
        params: { mno: string; id: string };
    }
) => {
    try {
        const q = query(
            collection(firestore, 'plans'),
            where('mno', '==', params.mno),
            where('mvno', '==', params.id),
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
