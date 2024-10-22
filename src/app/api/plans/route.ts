import { collection, getDocs, orderBy, query } from '@firebase/firestore';
import { firestore } from '@dev/firebase';
import { PlanMeta } from '@dev/entities/plans.types';

export const GET = async () => {
    try {
        const q = query(collection(firestore, 'plans'), orderBy('fee', 'asc'));

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
