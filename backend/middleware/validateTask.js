const validateTask = (req, res, next) => {
    const { title, category, status, dueDate } = req.body;
  
    // Check required fields
    if (!title || !category || !status || !dueDate) {
      return res.status(400).json({
        success: false,
        message: "Title, category, status and due date are required.",
      });
    }
  
    // Check title is not empty
    if (title.trim() === "") {
      return res.status(400).json({
        success: false,
        message: "Title cannot be empty.",
      });
    }
  
    // Validate category
    const categories = ["Work", "Personal", "Urgent"];
  
    if (!categories.includes(category)) {
      return res.status(400).json({
        success: false,
        message: "Invalid category.",
      });
    }
  
    // Validate status
    const statuses = ["todo", "in-progress", "done"];
  
    if (!statuses.includes(status)) {
      return res.status(400).json({
        success: false,
        message: "Invalid status.",
      });
    }
  
    // Validate due date
    const today = new Date();
    today.setHours(0, 0, 0, 0);
  
    const selectedDate = new Date(dueDate);
  
    if (selectedDate < today) {
      return res.status(400).json({
        success: false,
        message: "Due date cannot be in the past.",
      });
    }
  
    next();
  };
  
  module.exports = validateTask;