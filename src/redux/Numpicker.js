import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown, faSortUp } from "@fortawesome/free-solid-svg-icons";

function Numpicker() {
  const man = useSelector(state => state.man);
  const child = useSelector(state=>state.child)
  const dispatch = useDispatch();
  const man_up = () => {
    dispatch({
      type: "MAN_UP"
    });
  };

  const man_down = () => {
    if (man >= 2) {
      dispatch({
        type: "MAN_DOWN"
      });
    }
  };

  const child_up = () => {
    dispatch({
      type: "CHILD_UP"
    });
  };

  const child_down = () => {
    if (child>= 1) {
      dispatch({
        type: "CHILD_DOWN"
      });
    }
  };

  return (
    <>
      <div className="NumPicker">
        {man}
        <div className="sort">
        <button>
            <FontAwesomeIcon onClick={man_up} icon={faSortUp} />
          </button>
          <button>
          <FontAwesomeIcon onClick={man_down} icon={faSortDown} />
          </button>
        </div>
      </div>
      <div className="NumPicker">
        {child}
        <div className="sort">
          <button>
            <FontAwesomeIcon onClick={child_up} icon={faSortUp} />
          </button>
          <button>
          <FontAwesomeIcon onClick={child_down} icon={faSortDown} />
          </button>
        </div>
      </div>
    </>
  );
}

export default Numpicker;
