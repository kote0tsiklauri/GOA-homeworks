function FormField({ id, label, type }) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} />
    </div>
  );
}

export default FormField;