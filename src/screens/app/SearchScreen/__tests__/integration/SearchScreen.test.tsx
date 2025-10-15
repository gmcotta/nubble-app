import { fireEvent, renderScreen, screen } from 'test-utils';

import { AppStack } from '@routes';
import { authCredentialsStorage } from '@services';
import { mockUtils, server, userMockedData } from '@test';

beforeAll(() => {
  server.listen();
  jest
    .spyOn(authCredentialsStorage, 'get')
    .mockResolvedValue(mockUtils.mateusAuthCredentials);
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
  jest.resetAllMocks();
});

describe('integration: SearchScreen', () => {
  it('should ...', async () => {
    renderScreen(<AppStack initialRouteName="SearchScreen" />);

    const inputText = screen.getByPlaceholderText(/digite sua busca/i);
    expect(inputText).toBeTruthy();
    fireEvent.changeText(inputText, 'mar');

    const user1 = await screen.findByText(userMockedData.user1.username);
    const user2 = await screen.findByText(userMockedData.user2.username);

    expect(user1).toBeTruthy();
    expect(user2).toBeTruthy();
  });
});
