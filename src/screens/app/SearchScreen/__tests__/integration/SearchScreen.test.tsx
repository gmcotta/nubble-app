import { act, fireEvent, renderScreen, screen } from 'test-utils';

import { AppStack } from '@routes';
import { authCredentialsStorage } from '@services';
import { mockUtils, server, userMockedData } from '@test';

jest.unmock('@react-navigation/native');

beforeAll(() => {
  server.listen();
  jest.useFakeTimers();
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
  jest.useRealTimers();
});

describe('integration: SearchScreen', () => {
  it('should search an user, persist the searched user in the recent searches list, and remove the searched user from the recent searches list', async () => {
    renderScreen(<AppStack initialRouteName="SearchScreen" />);

    const inputText = screen.getByPlaceholderText(/digite sua busca/i);
    expect(inputText).toBeTruthy();
    fireEvent.changeText(inputText, 'mar');
    act(() => jest.runAllTimers());

    const user1 = await screen.findByText(userMockedData.user1.username);
    const user2 = await screen.findByText(userMockedData.user2.username);

    expect(user1).toBeTruthy();
    expect(user2).toBeTruthy();

    fireEvent.press(user1);

    const user1FullName = await screen.findByText(
      userMockedData.user1.full_name
    );
    expect(user1FullName).toBeTruthy();

    const backButton = screen.getByTestId('screen-back-button');
    fireEvent.press(backButton);

    const inputTextAfterGoBack =
      screen.getByPlaceholderText(/digite sua busca/i);
    fireEvent.changeText(inputTextAfterGoBack, '');
    act(() => jest.runAllTimers());

    const searchHistoryTitle = screen.getByText(/buscas recentes/i);
    expect(searchHistoryTitle).toBeTruthy();

    const user1AfterGoBack = screen.queryByText(userMockedData.user1.username);
    const user2AfterGoBack = screen.queryByText(userMockedData.user2.username);
    expect(user1AfterGoBack).toBeTruthy();
    expect(user2AfterGoBack).toBeFalsy();

    const trashIcon = screen.getByTestId('trash');
    fireEvent.press(trashIcon);

    const user1AfterRemoval = screen.queryByText(userMockedData.user1.username);
    expect(user1AfterRemoval).toBeFalsy();
  });
});
