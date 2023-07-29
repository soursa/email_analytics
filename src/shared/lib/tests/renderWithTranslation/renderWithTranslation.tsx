import { render } from '@testing-library/react';
import React, { type ReactNode } from 'react';
import i18nForTest from 'shared/config/i18n/i18nForTest';
import { I18nextProvider } from 'react-i18next';

export const renderWithTranslation = (component: ReactNode) =>
  render(<I18nextProvider i18n={i18nForTest}>{component}</I18nextProvider>);
