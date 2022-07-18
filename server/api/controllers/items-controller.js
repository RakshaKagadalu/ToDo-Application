//controllers - is to extract info from req , call the service function and get the results from the service and set it to the response
import * as itemServices from "../services/items-services.js";

//To handle error from the server
const setErrorResponse = (obj, response) => {
  response.status(500);
  response.json(error);
  console.log(error);
};

const setSuccessResponse = (obj, response) => {
  response.status(200);
  response.json(obj);
};

export const post = async (request, response) => {
  try {
    const payload = request.body;
    const item = await itemServices.save(payload);
    setSuccessResponse(item, response);
  } catch (error) {
    setErrorResponse(error, response);
  }
};

//To process GET request
export const index = async (request, response) => {
  try {
    const id = request.query.id;
    const query = {};
    if (id) {
      query.id = id;
    }

    const title = request.query.title;
    if (title) {
      query.title = title;
    }

    const description = request.query.description;
    if (description) {
      query.description = description;
    }

    const items = await itemServices.search(query);

    setSuccessResponse(items, response);
  } catch (error) {
    setErrorResponse(error, response);
  }
};

//To process GET by ID request
export const get = async (request, response) => {
  try {
    const id = request.params.id;
    const item = await itemServices.get(id);
    setSuccessResponse(item, response);
  } catch (error) {
    setErrorResponse(error, response);
  }
};

//To process Update request
export const update = async (request, response) => {
  try {
    const id = request.params.id;
    const updated = { ...request.body };
    updated.id = id;
    const item = await itemServices.update(updated);
    setSuccessResponse(item, response);
  } catch (error) {
    setErrorResponse(error, response);
  }
};

//To process Delete request
export const remove = async (request, response) => {
  try {
    const id = request.params.id;
    const item = await itemServices.remove(id);
    setSuccessResponse(
      { message: `successfully removed task item Number${id}` },
      response
    );
  } catch (error) {
    setErrorResponse(error, response);
  }
};
