import { renderApp } from "../../../utils/test.util";
import { describe, it, expect } from 'vitest';
import BaseCard from "../BaseCard.vue";

describe('BaseCard', () => {
  const cardText = "Card";

  it('Renders', async () => {
    const { findByText } = await renderApp(BaseCard, {
      slots: { default: cardText }
    });

    const Card = await findByText(cardText);
    expect(Card.innerHTML).toBe(cardText);
  });
});
