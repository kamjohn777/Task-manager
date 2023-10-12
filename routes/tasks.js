const { Task, db } = require('./models'); 
const router = express.Router();


// Update/PUT
router.put('/', function(req, res, next) {

});



router.delete("/", async (req, res, next) => {
    try {
      await Task.destroy({ where: {} });
      res.send("All tasks have been deleted");
    } catch (error) {
      next(error);
    }
  });
  
  router.delete("/:id", async (req, res, next) => {
    try {
      const id = req.params.id;
      const task = await Task.findByPk(id);
      if (!task) {
        res.status(400).send("Task not found");
      } else {
        await task.destroy();
        res.send("Task has been deleted");
      }
    } catch (error) {
      next(error);
    }
  });