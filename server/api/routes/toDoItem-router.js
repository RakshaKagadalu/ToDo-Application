import express from "express";
import * as itemsController from "./../controllers/items-controller.js";
const router = express.Router();

/** To route below API endpoint requests :
 * Search all the tasks - GET /items
 * Create task - POST /items
 */
router.route("/items").post(itemsController.post).get(itemsController.index);

/**  To route below API endpoint requests :
 * Retrieve task by id - GET /items/${id}
 * Update task by id - PUT /items/${id}
 * Delete task by id - DELETE /items/${id}
 */
router
  .route("/items/:id")
  .get(itemsController.get)
  .put(itemsController.update)
  .delete(itemsController.remove);
export default router;
