function CategoryOption(props) {
    const name = props.data;
  
    return (
      <>
        <option className="text-black" value={name}>
          {name}
        </option>
      </>
    );
  }
  export default CategoryOption;
  