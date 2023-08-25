import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export const Task = (prorps) => {
  return(
    <div>
      <div className= {prorps.completed ? 'task-completed' : 'task'}
      >
        <h6>{prorps.taskName}</h6>
        <div className="icons">
          <FontAwesomeIcon className="trash" icon={faTrash} onClick={() => prorps.deletItem(prorps.id)} />
          <FontAwesomeIcon className="check" icon={faCheck} onClick={() => prorps.completedItem(prorps.id)} />
        </div>
      </div>
    </div>
  );
}