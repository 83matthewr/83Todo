import { renderApp } from "../../utils/test.util";
import { describe, it, expect } from "vitest";
import { Timestamp } from "firebase/firestore";
import TaskDetailCard from "../TaskDetailCard.vue";

const baseTask = {
  completed: false,
  date_created: new Timestamp(1677085857, 301000000),
  notes: "",
  title: "Start work on testing suite",
  user_id: "i1rBRTxhj4bZjHmByo3kQCwkivE2",
  id: "YWiNguPBDCVJtqGvTRx7",
};
const completedTask = {
  completed: true,
  date_created: new Timestamp(1677085857, 301000000),
  notes: "Notes",
  title: "Start work on testing suite",
  user_id: "i1rBRTxhj4bZjHmByo3kQCwkivE2",
  id: "YWiNguPBDCVJtqGvTRx7",
}
let testDataId = "task-detail-card";

describe('TaskDetailCard', () => {
  it('Renders uncompleted task without notes', async () => {
    const { findByTestId } = await renderApp(TaskDetailCard, {
      props: {
        task: baseTask
      }
    });

    const taskDetail = await findByTestId(testDataId);
    expect(taskDetail).toBeDefined();
  });

  it('Renders completed task with notes', async () => {
    const { findByTestId } = await renderApp(TaskDetailCard, {
      props: {
        task: completedTask
      }
    });

    const taskDetail = await findByTestId(testDataId);
    expect(taskDetail).toBeDefined();
  });
})