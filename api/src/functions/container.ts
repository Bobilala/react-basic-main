import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";

export async function container(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    context.log(`Http function processed request for url "${request.url}"`);

    const name = request.query.get('name') || await request.text() || 'world';

    return { body: `HelloBobihelloBobi, ${name}!` };
};

export async function containers(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    context.log(`Http function processed request for url "${request.url}"`);

    const name = request.query.get('name') || await request.text() || 'world';

    return { body: `HelloBobihelloBobi, ${name}!` };
};

export async function validate(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    context.log(`Http function processed request for url "${request.url}"`);

    const name = request.query.get('name') || await request.text() || 'world';

    return { body: `HelloBobihelloBobi, ${name}!` };
};


app.http('validate', {
    methods: ['GET'],
    authLevel: 'anonymous',
    handler: validate
});

app.http('containers', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: containers
});


app.http('container', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: container
});

