import { collection, getDocs, orderBy, query } from '@firebase/firestore';
import { firestore } from '@dev/firebase';
import { Yogo } from '@dev/entities/yogos.types';

export const GET = async (): Promise<Response> => {
    try {
        const q = query(
            collection(firestore, 'yogos'),
            orderBy('monthly_fee', 'asc')
        );

        const querySnapshot = await getDocs(q);
        const data: Yogo[] = querySnapshot.docs.map(
            (doc) => doc.data() as Yogo
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
