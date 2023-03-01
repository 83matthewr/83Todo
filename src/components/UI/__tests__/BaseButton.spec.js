import { renderApp } from '../../../utils/test.util';
import { describe, it, expect } from 'vitest';
import BaseButton from "../BaseButton.vue";

describe('BaseButton', () => {

  const buttonText = 'Button';
  const buttonLink = '/';
  const defaultClasses = 'block bg-primary border-2 border-primary hover:bg-primary-hover '
  + 'text-white rounded text-center';
  const reversedClasses = 'block bg-white border-2 border-primary hover:bg-primary hover:text-white '
  + 'text-primary rounded text-center';
  const otherClasses = 'block bg-white '
  + 'text-primary rounded text-center';

  it('Renders regular button correctly', async () => {
    const { findByText } = await renderApp(BaseButton, {
      slots: { default: buttonText }
    });

    const button = await findByText(buttonText);
    expect(button.innerHTML).toBe(buttonText);
    expect(button._attributes.class.value).toBe(defaultClasses);
  });

  it ('Renders link button', async () => {
    const { findByText } = await renderApp(BaseButton, {
      props: {
        link: true,
        to: buttonLink
      },
      slots: { default: buttonText }
    });

    const button = await findByText(buttonText);
    expect(button.innerHTML).toBe(buttonText);
    expect(button._attributes.href.value).toBe(buttonLink);
  })

  it('Renders reversed style correctly', async () => {
    const { findByText } = await renderApp(BaseButton, {
      props: { buttonStyle: 'reversed' },
      slots: { default: buttonText }
    });

    const button = await findByText(buttonText);
    expect(button.innerHTML).toBe(buttonText);
    expect(button._attributes.class.value).toBe(reversedClasses);
  });

  it('Renders other style correctly', async () => {
    const { findByText } = await renderApp(BaseButton, {
      props: { buttonStyle: 'other' },
      slots: { default: buttonText }
    });

    const button = await findByText(buttonText);
    expect(button.innerHTML).toBe(buttonText);
    expect(button._attributes.class.value).toBe(otherClasses);
  });
});
