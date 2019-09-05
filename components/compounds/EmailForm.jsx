import Router from 'next/router';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';

import '../../styles/components/_emailForm.scss';

import Error from '../atoms/Error';

const redirectTo = path => Router.push(path);

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Must provide a name!'),
  email: Yup.string()
    .email('Must be a valid email address!')
    .max('50', 'Your Email is Too long')
    .required('Field cannot be Empty!'),
  message: Yup.string()
    .max('300', '300 character Limit')
    .required('Field cannot be Empty!')
});

const EmailForm = () => {
  return (
    <div className={'footer__contactMe'}>
      <h2>Contact Me</h2>
      <Formik
        initialValues={{ email: '', name: '', message: '' }}
        validationSchema={validationSchema}
        // onSubmit={(values, actions) => {

        // }}
      >
        {({
          values,
          errors,
          touched,
          handleSubmit,
          handleChange,
          handleBlur,
          handleReset
        }) => (
          <form
            method={'post'}
            action={`mailto:paul.kim0591@gmail.com?subject=Greeting from ${values.name}&body=${values.message}`}
            onSubmit={() => {
              handleSubmit();
              setTimeout(() => {
                handleReset();
              }, 1000);
            }}
            className={'contactMe__form'}
            enctype="text/plain"
          >
            <div>
              <label htmlFor="name">Name:</label>
              <Field
                className={
                  touched.name && errors.name ? 'has-error' : 'contactMe__name'
                }
                type="text"
                name="name"
                id="name"
                placeholder="Enter Name"
                value={values.name}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              <Error touched={touched.name} message={errors.name} />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <Field
                className={
                  touched.email && errors.email
                    ? 'has-error'
                    : 'contactMe__email'
                }
                name="email"
                type="email"
                id="email"
                autoComplete="off"
                placeholder="Enter Email"
                value={values.email}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              <Error touched={touched.email} message={errors.email} />
            </div>

            <div>
              <label htmlFor="message">Message</label>
              <textarea
                className={
                  touched.message && errors.message
                    ? 'has-error-msg'
                    : 'contactMe__message'
                }
                type="text"
                name="message"
                id="message"
                row={5}
                column={40}
                placeholder="Enter message"
                value={values.message}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              <Error touched={touched.message} message={errors.message} />
            </div>

            <button
              disabled={
                !Object.entries(errors).length &&
                Object.values(values).every(el => Boolean(el))
                  ? false
                  : true
              }
              type="submit"
            >
              Send
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default EmailForm;
