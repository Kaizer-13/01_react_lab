import React, { useState } from 'react';
import { ListGroup, InputGroup, FormControl, Button, Modal } from 'react-bootstrap';

const TaskList = ({ tasks, onToggle, onDelete, onEdit }) => {
  const [editedTask, setEditedTask] = useState('');
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedTaskId, setSelectedTaskId] = useState(null);

  const handleEditInputChange = (e) => {
    setEditedTask(e.target.value);
  };

  const handleEditSave = () => {
    if (editedTask.trim() !== '') {
      onEdit(selectedTaskId, editedTask);
      setShowEditModal(false);
      setEditedTask('');
    }
  };

  const handleEditOpen = (taskId) => {
    const task = tasks.find((t) => t.id === taskId);
    if (task) {
      setSelectedTaskId(taskId);
      setEditedTask(task.text);
      setShowEditModal(true);
    }
  };

  const handleEditClose = () => {
    setShowEditModal(false);
    setSelectedTaskId(null);
    setEditedTask('');
  };

  return (
    <div>
      <ListGroup>
        {tasks.map((task) => (
          <ListGroup.Item key={task.id}>
            <div className="d-flex justify-content-between align-items-center">
              <span>{task.text}</span>
              <div className="btn-group" role="group">
                <Button
                  variant="success"
                  onClick={() => onToggle(task.id)}
                >
                  {task.completed ? 'Undo' : 'Complete'}
                </Button>
                <Button
                  variant="danger"
                  className="ml-2"
                  onClick={() => onDelete(task.id)}
                >
                  Delete
                </Button>
                <Button
                  variant="info"
                  className="ml-2"
                  onClick={() => handleEditOpen(task.id)}
                >
                  Edit
                </Button>
              </div>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>

      {/* Edit Task Modal */}
      <Modal show={showEditModal} onHide={handleEditClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormControl
            placeholder="Edit the task"
            value={editedTask}
            onChange={handleEditInputChange}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleEditClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEditSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default TaskList;
