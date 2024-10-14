import { doc, getDoc } from '@firebase/firestore';
import { firestore } from '@dev/firebase';

export const GET = async () => {
    try {
        const docRef = doc(
            firestore,
            'plan_key_description',
            'tMqTOCswa2dD7Xqa7uCD'
        );

        // 문서 가져오기
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            // 문서의 데이터가 존재할 경우 데이터를 반환
            return new Response(JSON.stringify(docSnap.data()), {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
        } else {
            // 문서가 없을 경우 에러 처리
            return new Response(
                JSON.stringify({ error: 'No such document!' }),
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    status: 404,
                }
            );
        }
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
