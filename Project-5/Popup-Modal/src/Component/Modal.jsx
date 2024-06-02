import "./Modal.css";
export default function Modal() {
  return (
    <div className="Main">
      <div className="Header">
        <h2>Delete The Stream</h2>
      </div>
      <div className="Body">
        <span>Are You Sure Want To Delete The Stream?</span>
      </div>
      <div className="Footer">
        <button>Delete</button>
        <button>Cancel</button>
      </div>
    </div>
  );
}
