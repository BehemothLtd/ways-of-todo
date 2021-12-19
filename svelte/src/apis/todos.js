import axios from "./axios";

export const getList = async () => {
  try {
    const result = await axios.get("/todos");
    return result.data;
  } catch {
    console.log(error);
  }
};

export const create = async (content) => {
  try {
    const result = await axios.post("todos", {
      content: content,
      done: false,
    });

    console.log(result);
  } catch {
    console.log(error);
  }
};

export const destroy = async (id) => {
  try {
    await axios.delete(`todos/${id}`);
  } catch {
    console.log(error);
  }
};
