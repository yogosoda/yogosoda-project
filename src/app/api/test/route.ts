export const GET = async () => {
    return new Response('Hello, GET!', {
        headers: {
            'Content-Type': 'text/plain',
        },
    });
};

export const POST = async () => {
    return new Response('Hello, POST!', {
        headers: {
            'Content-Type': 'text/plain',
        },
    });
};

export const PUT = async () => {
    return new Response('Hello, PUT!', {
        headers: {
            'Content-Type': 'text/plain',
        },
    });
};

export const DELETE = async () => {
    return new Response('Hello, DELETE!', {
        headers: {
            'Content-Type': 'text/plain',
        },
    });
};
