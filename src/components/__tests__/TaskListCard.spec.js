import { renderApp } from "../../utils/test.util";
import { describe, it, expect } from "vitest";
import { Timestamp } from "firebase/firestore";
import TaskListCard from "../TaskListCard.vue";

let tasks = [
  {
    completed: false,
    date_created: new Timestamp(1677085857, 301000000),
    notes: "",
    title: "Start work on testing suite",
    user_id: "i1rBRTxhj4bZjHmByo3kQCwkivE2",
    id: "YWiNguPBDCVJtqGvTRx7",
  },
  {
    completed: true,
    date_created: new Timestamp(1677085857, 301000000),
    notes: "",
    title: "Learn how to mock functions in unit tests",
    user_id: "i1rBRTxhj4bZjHmByo3kQCwkivE2",
    id: "YWiNguPBDCVJtqGvT890",
  }
];
let testDataId = "task-list";

describe('TaskListCard', () => {
  it('Renders', async () => {
    const { findByTestId } = await renderApp(TaskListCard, {
      props: {
        tasks
      }
    });

    const taskList = await findByTestId(testDataId);
    expect(taskList).toBeDefined();
  });
})