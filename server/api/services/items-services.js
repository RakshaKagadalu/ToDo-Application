//Service layer - most of our business logic which supports the model - is present - ex- endpoint search-logic and checks to search is in service layer
import Item from "./../models/item.js";

//create new todo item.
export const save = (newItem) => {
  const item = new Item(newItem);
  return item.save();
};

//returns all the todo items
export const search = (query) => {
  const params = { ...query };
  return Item.find(params).exec();
};

//search for todo item by id
export const get = (id) => {
  const item = Item.findById(id).exec();
  return item;
};

// Update an existing todo item by id
export const update = (updatedItem) => {
  updatedItem.lastModifiedDate = new Date();
  const item = Item.findByIdAndUpdate(updatedItem.id, updatedItem, {
    new: true,
  }).exec();
  return item;
};

//Delete an todo item by id
export const remove = (id) => {
  const item = Item.findByIdAndDelete(id).exec();
  return item;
};
