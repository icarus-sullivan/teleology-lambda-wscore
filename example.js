import lambdaWrapper from '@teleology/lambda-wscore';

const handler = async (enhancedEvent) => {
  const { connectionId } = enhancedEvent.requestContext;
  switch (enhancedEvent.action) {
    case 'connect': {
      const token = enhancedEvent.headers.Authorization.replace('Bearer ', '');
      // handle authorization
      break;
    }
    case 'disconnect': {
      console.log('Closing connection to', connectionId);
      break;
    }
    case 'message': {
      const { publish } = enhancedEvent;
      await publish({ message: 'hello from @teleology/lambda-ws' });
      break;
    }
    default: {
      // no-op
      break;
    }
  }
};

export default lambdaWrapper(handler);
