'use client';
import Button from '@devShared/components/Button';
import api from '@devShared/utils/api';
import { useState } from 'react';

const Page = () => {
    const [tempGet, setTempGet] = useState<string>('');
    const [tempPost, setTempPost] = useState<string>('');
    const [tempPut, setTempPut] = useState<string>('');
    const [tempDelete, setTempDelete] = useState<string>('');

    const handleGet = async () => {
        const res = await api.get<string>('/api/test');
        const data = res.data;
        if (data) {
            setTempGet(data);
        }
    };
    const handlePost = async () => {
        const res = await api.post<string>('/api/test');
        const data = res.data;
        if (data) {
            setTempPost(data);
        }
    };
    const handlePut = async () => {
        const res = await api.put<string>('/api/test');
        const data = res.data;
        if (data) {
            setTempPut(data);
        }
    };
    const handleDelete = async () => {
        const res = await api.remove<string>('/api/test');
        const data = res.data;
        if (data) {
            setTempDelete(data);
        }
    };

    return (
        <div className={'flex-with-col gap-2 overflow-auto'}>
            <Button onClick={handleGet} className={'text-black border'}>
                GET 클릭
            </Button>
            <Button onClick={handlePost} className={'text-black border'}>
                POST 클릭
            </Button>
            <Button onClick={handlePut} className={'text-black border'}>
                PUT 클릭
            </Button>
            <Button onClick={handleDelete} className={'text-black border'}>
                DELETE 클릭
            </Button>
            <pre>=========================</pre>
            <pre>
                GET {`=>`} {tempGet}
            </pre>
            <pre>
                POST {`=>`} {tempPost}
            </pre>
            <pre>
                PUT {`=>`} {tempPut}
            </pre>
            <pre>
                DELETE {`=>`} {tempDelete}
            </pre>
        </div>
    );
};

export default Page;
