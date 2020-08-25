import {createClient} from 'contentful';

const client = createClient({
  space: process.env.SPACE_ID || '',
  accessToken: process.env.CONTENT_DELIVERY_API || '',
});

export default client;
