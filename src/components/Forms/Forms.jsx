import React from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  personal_name: Yup.string().ensure().label('Name'),
  personal_address: Yup.string().ensure().label('Address'),
  executor_main_name: Yup.string().ensure().label('Name'),
  executor_main_address: Yup.string().ensure().label('Address'),
  executor_backup_name: Yup.string().ensure().label('Name'),
  executor_backup_address: Yup.string().ensure().label('Address'),
  guardian_main_name: Yup.string().ensure().label('Name'),
  guardian_main_address: Yup.string().ensure().label('Address'),
  guardian_backup_name: Yup.string().ensure().label('Name'),
  guardian_backup_address: Yup.string().ensure().label('Address'),
  witness_1_name: Yup.string().ensure().label('Name'),
  witness_1_address: Yup.string().ensure().label('Address'),
  witness_2_name: Yup.string().ensure().label('Name'),
  witness_2_address: Yup.string().ensure().label('Address'),
  witness_3_name: Yup.string().ensure().label('Name'),
  witness_3_address: Yup.string().ensure().label('Address'),
  backup_purpose: Yup.string().ensure().label('Purpose'),
  backup_name: Yup.string().ensure().label('Name'),
  backup_address: Yup.string().ensure().label('Address'),
});

export default function Forms({
  initialValues,
  onReset,
  onSubmit,
  style,
  children,
  ...props
}) {
  return (
    <Formik
      initialValues={{
        personal_province: '',
        personal_name: '',
        personal_address: '',
        executor_main_name: '',
        executor_main_address: '',
        executor_backup_name: '',
        executor_backup_address: '',
        guardian_main_name: '',
        guardian_main_address: '',
        guardian_backup_name: '',
        guardian_backup_address: '',
        charities: [],
        witness_1_name: '',
        witness_1_address: '',
        witness_2_name: '',
        witness_2_address: '',
        witness_3_name: '',
        witness_3_address: '',
        backup_type: '',
        backup_purpose: '',
        backup_name: '',
        backup_address: '',
      }}
      // validationSchema={validationSchema}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
      // validationSchema={validationSchema}
      style={style}>
      <Form {...props}>{children}</Form>
    </Formik>
  );
}
