import { renderApp } from "../../utils/test.util";
import { fireEvent } from "@testing-library/vue";
import { describe, it, expect, vi, afterEach } from "vitest";
import CreateNewTask from "../CreateNewTask.vue";

vi.mock('vuefire', () => {
  const useCurrentUser = vi.fn();
  useCurrentUser.mockReturnValue({
    value: {
      email: "83matthewr@gmail.com",
      uid: "i1rBRTxhj4bZjHmByo3kQCwkivE2"
    }
  });
  return {
    useCurrentUser
  };
});

vi.mock('../utils/firebase/db.utils', () => {
  const createNewTaskDoc = vi.fn();
  createNewTaskDoc.mockReturnValue('newTaskId');
  return {
    createNewTaskDoc
  };
});

let testDataId = "create-new-task";

describe('CreateNewTask', () => {
  afterEach(() => {
    vi.clearAllMocks();
  })

  // it('Renders', async () => {
  //   const { findByTestId } = await renderApp(CreateNewTask);

  //   const createNewTask = await findByTestId(testDataId);
  //   expect(createNewTask).toBeDefined();
  // });

  it('addTaskClick calls createNewTaskDoc or creates an error div', async () => {
    const { findByTestId, findByLabelText, getByTestId } = await renderApp(CreateNewTask);

    const submitButton = getByTestId('add-task-button');
    await fireEvent.click(submitButton);

    // debug();

    // const errorDiv = await findByTestId('input-error');
    // expect(errorDiv).toBeDefined();

    // const taskInput = await findByLabelText('Create a New Task');
    // await fireEvent.update(taskInput, 'New Task Title');
  });
});