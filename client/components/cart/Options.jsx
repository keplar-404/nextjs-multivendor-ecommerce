function Options({ data }) {
  return (
    <>
      <option value={data} className="text-left">
        {data}
      </option>
    </>
  );
}

export default Options;
