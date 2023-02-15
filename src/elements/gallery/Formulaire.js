import React from 'react'
import DatePicker from 'react-widgets/DatePicker'
import { useFormik } from 'formik'


const Formulaire = () => {
    const { values, errors, touched, setFieldValue, handleSubmit } = useFormik({
        initialValues: {

        },
    })


    return (
        <>
            <form>
                <div>
                    <label>Prise en Charge et Destination</label>
                    <DatePicker placeholder="m/dd/yy" />
                    <DatePicker placeholder="m/dd/yy" />
                </div>
                <div>
                    tarifs
                </div>
                <div>
                    
                </div>


            </form>
        </>
    )
}
export default Formulaire