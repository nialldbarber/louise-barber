import { createReadStream } from 'fs';
import Prismic from 'prismic-javascript';

const apiEndPoint = 'https://louise-barber.cdn.prismic.io/api/v2';
const accessToken =
  'MC5YejdKTnhJQUFDTUFXbV9X.77-977-977-9Re-_vVwcSUc-De-_vT9oZgxnV--_ve-_vQkxe--_vSjvv73vv71Z77-977-977-9Vw';

// Client method to query documents from the Prismic repo
const Client = (req = null) =>
  Prismic.client(apiEndPoint, createClientOptions(req, accessToken));

const createClientOptions = (req = null, prismicAccessToken = null) => {
  const reqOption = req ? { req } : {};
  const accessTokenOption = prismicAccessToken
    ? { accessToken: prismicAccessToken }
    : {};

  return {
    ...reqOption,
    ...accessTokenOption,
  };
};

export { apiEndPoint, accessToken, Client };
