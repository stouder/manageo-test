import React from 'react';
import { Component } from 'react';
import { Formik, Field } from 'formik';

class FormPersonn extends React.Component {
    render() {
        return ( < Formik >

            <
            Field type = "email"
            name = "email"
            placeholder = "Email" / >
            <
            /
            Formik > )
    }
}

export default FormPersonn;