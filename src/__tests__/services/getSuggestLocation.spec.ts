import { getSuggestLocation } from '@services/getSuggestLocation';
import api from '@services/api';
import MockAdapter from 'axios-mock-adapter';
import address from '@__mocks__/addressResponse';

const apiMock = new MockAdapter(api, { onNoMatch: 'passthrough' });

describe('getSuggestLocation Service', () => {
  it('should be able to make a call', async () => {
    apiMock
      .onGet(
        '/address?key=kWalsFwaKYM21R6hqRcyG1fxu3RAw5DE&maxResults=5&location=Rua%20Ame%CC%81rico%20Brasiliense,%20Sa%CC%83',
      )
      .reply(200, address);
    const response = await getSuggestLocation(
      'Rua Américo Brasiliense, São Paulo ',
    );
    expect(response).toBeTruthy();
  });
});
