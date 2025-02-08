const { app } = require('@azure/functions');

app.http('MyHttpTrigger', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log(`Http function processed request for url "${request.url}"`);

        const location = request.query.get('location') 
          || await request.text()
          || 'Berlin';

        const response = await 
            fetch(`https://wttr.in/${location}?format=3`)

        const data = await response.text()

        return { body: data };
    }
});
