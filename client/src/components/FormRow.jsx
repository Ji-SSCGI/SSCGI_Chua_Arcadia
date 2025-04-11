const FormRow = ({ type = "text", name, labelText, defaultValue = "", required = false, className = "" }) => {
  return (
    <div className={`form-row ${className}`}>
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>

      {type === "textarea" ? (
        <textarea
          id={name}
          name={name}
          className="form-textarea"
          defaultValue={defaultValue}
          required={required}
          rows={5}
        />
      ) : (
        <input
          type={type}
          id={name}
          name={name}
          className="form-input"
          defaultValue={defaultValue}
          required={required}
        />
      )}
    </div>
  );
};

export default FormRow;
