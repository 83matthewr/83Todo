import { renderApp } from '../../../utils/test.util';
import { describe, it, expect } from 'vitest';
import { ref } from 'vue';
import BaseInput from "../BaseInput.vue";

describe('BaseInput', () => {
  const inputName = "Input";
  const inputId = "InputId";
  const inputType = "text";
  const inputError = ref('There was an error');
  const inputValue = ref('');

  it('Renders', async () => {
    const { findByLabelText } = await renderApp(BaseInput, {
      props: {
        name: inputName,
        id: inputId,
        type: inputType,
        modelValue: inputValue
      }
    });

    const Input = await findByLabelText(inputName);
    expect(Input).toBeDefined();
  });

  it('Renders error', async () => {
    const { findByLabelText } = await renderApp(BaseInput, {
      props: {
        name: inputName,
        id: inputId,
        type: inputType,
        error: inputError.value,
        modelValue: inputValue.value
      }
    });

    const Input = await findByLabelText(inputName);
    expect(Input).toBeDefined();
  });
});
