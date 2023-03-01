import { renderApp } from "../../utils/test.util";
import { fireEvent } from "@testing-library/vue";
import { describe, it, expect, vi, afterEach } from "vitest";
import { Timestamp } from "firebase/firestore";
import { updateTaskStatus, deleteTask } from "../../utils/firebase/db.utils";
import TaskItem from "../TaskItem.vue";

vi.mock("../../utils/firebase/db.utils", () => {
  return {
    updateTaskStatus: vi.fn(),
    deleteTask: vi.fn()
  };
});

let task = {
  completed: false,
  date_created: new Timestamp(1677085857, 301000000),
  notes: "",
  title: "Start work on testing suite",
  user_id: "i1rBRTxhj4bZjHmByo3kQCwkivE2",
  id: "YWiNguPBDCVJtqGvTRx7",
};
let testDataId = "task-item";

describe('TaskItem', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('Renders', async () => {
    const { findByTestId } = await renderApp(TaskItem, {
      props: {
        task
      }
    });

    const taskItem = await findByTestId(testDataId);
    expect(taskItem).toBeDefined();
  });

  it('Calls updateTaskStatus and deleteTask', async () => {
    const { getByTestId } = await renderApp(TaskItem, {
      props: {
        task
      }
    });

    await fireEvent.click(getByTestId("task-input"));
    expect(updateTaskStatus).toHaveBeenCalledOnce();

    await fireEvent.click(getByTestId("task-delete"));
    expect(deleteTask).toHaveBeenCalledOnce();
  });
})