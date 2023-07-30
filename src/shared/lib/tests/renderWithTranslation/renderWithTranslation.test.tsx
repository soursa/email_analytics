import { renderWithTranslation } from './renderWithTranslation';

describe('renderWithTranslation', () => {
  test('renderWithTranslation render', () => {
    const component = <div>Test Component</div>;
    const { getByText } = renderWithTranslation(component);
    expect(getByText(/Test Component/)).toBeInTheDocument();
  });
});
