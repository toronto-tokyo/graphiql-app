import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../../redux/store';
import MainPage from '../MainPage';
import userEvent from '@testing-library/user-event';
import { BASE_API_LINK } from '../../../shared/constants';
import RegionProvider from '../../../hoc/context/RegionContext/RegionProvider';
import * as apiHooks from '../../../redux/slices/GraphQLSlice';

describe('MainPage component tests', () => {
  it('MainPage renders without errors', () => {
    render(
      <Provider store={store}>
        <RegionProvider>
          <MainPage />
        </RegionProvider>
      </Provider>
    );
  });
  it(`documentation section renders after successful schema request`, async () => {
    const user = userEvent.setup();
    const wrongApiUrl = 'no-sense-message';
    render(
      <Provider store={store}>
        <RegionProvider>
          <MainPage />
        </RegionProvider>
      </Provider>
    );
    const changeUrlBtn = await screen.findByRole('button', { name: 'Docs' });
    expect(changeUrlBtn).toBeInTheDocument();
    await user.type(screen.getByDisplayValue(BASE_API_LINK), wrongApiUrl);
    await user.click(screen.getByRole('button', { name: 'Change URL' }));
    expect(screen.queryByRole('button', { name: 'Docs' })).toBeNull();
  });
  it('click on send button call fetchJSON function', async () => {
    const user = userEvent.setup();
    const spy = vi.spyOn(apiHooks, 'fetchJSON');
    render(
      <Provider store={store}>
        <RegionProvider>
          <MainPage />
        </RegionProvider>
      </Provider>
    );
    await user.click(screen.getByRole('button', { name: 'Send' }));
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
