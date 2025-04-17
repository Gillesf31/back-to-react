import { useRef, useState } from 'react';

const Form = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const [person, setPerson] = useState<
    { name: string; age: number } | undefined
  >(undefined);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // nameRef.current && console.log(nameRef.current.value);
    // ageRef.current && console.log(ageRef.current.value);
    nameRef.current &&
      ageRef.current &&
      setPerson({
        name: nameRef.current.value,
        age: parseInt(ageRef.current.value),
      });

    console.log(person);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='mb-3'>
        <label htmlFor='name' className='form-label'>
          Name
        </label>
        <input ref={nameRef} type='text' className='form-control' id='name' />
      </div>
      <div className='mb-3'>
        <label htmlFor='age' className='form-label'>
          Age
        </label>
        <input ref={ageRef} type='number' className='form-control' id='age' />
      </div>
      <button type='submit' className='btn btn-primary'>
        Submit
      </button>
    </form>
  );
};

export default Form;
