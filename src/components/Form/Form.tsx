const Form = () => {
  return (
    <form>
      <div className='mb-3'>
        <label htmlFor='name' className='form-label'>
          Name
        </label>
        <input type='text' className='form-control' id='name' />
      </div>
      <div className='mb-3'>
        <label htmlFor='age' className='form-label'>
          Age
        </label>
        <input type='number' className='form-control' id='age' />
      </div>
      <button type='submit' className='btn btn-primary'>
        Submit
      </button>
    </form>
  );
};

export default Form;
