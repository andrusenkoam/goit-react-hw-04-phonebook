import { Formik } from 'formik';
import { object, string, number } from 'yup';
import { nanoid } from 'nanoid';
import { BiSolidBookAdd } from 'react-icons/bi';
import PropTypes from 'prop-types';
import { FormError } from './FormError/FormError';
import { AddContactsForm, FormWraper, Input } from './ContactForm.styled';

const nameInputId = nanoid();
const numberInputId = nanoid();

const initialValues = {
  name: '',
  number: '',
};

const contactShema = object({
  name: string().min(2).required(),
  number: number().positive().integer().required(),
});

export function ContactForm({ onSubmit }) {
  const handleSubmit = (values, { resetForm }) => {
    onSubmit(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={contactShema}
      onSubmit={handleSubmit}
    >
      <AddContactsForm>
        <FormWraper>
          <div role="group">
            <label htmlFor={nameInputId}>Name</label>
            <Input
              id={nameInputId}
              type="text"
              name="name"
              placeholder="Enter name"
              required
            />
            <FormError name="name" />
          </div>
          <div role="group">
            <label htmlFor={numberInputId}>Number</label>
            <Input
              id={numberInputId}
              type="tel"
              name="number"
              placeholder="Enter number"
              required
            />
            <FormError name="number" />
          </div>
        </FormWraper>
        <button type="submit">
          <BiSolidBookAdd size={20} />
        </button>
      </AddContactsForm>
    </Formik>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
