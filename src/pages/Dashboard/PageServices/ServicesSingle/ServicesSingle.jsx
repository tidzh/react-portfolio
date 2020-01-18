import React from "react";
import Paper from "@material-ui/core/Paper";
import {Box} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import {Field} from "redux-form";
import {Form, renderInput} from "../../../../components/common/Form/Form";
import {required} from "../../../../utils/validators";
import Button from "@material-ui/core/Button";
import WYSIWYG from "../../../../components/common/WYSIWYG/WYSIWYG";
import UploaderMedia from "../../../../components/common/UploaderMedia/UploaderMedia";

const ServicesSingle = ({onSubmit, handleSubmit, breadcrumbs, initialValues: {name, img}}) => {
  return (
	<Box>
      <Box mb={2}>{breadcrumbs}</Box>
      <Typography variant="h4" component="h1" gutterBottom={true}>
        Редактировать страницу {name}
      </Typography>
	  <Box component={Paper} p={4} mt={2} elevation={1}>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Box>
              <Field name='name'
                     component={renderInput}
                     placeholder='Название услуги'
                     validate={[required]}/>
          </Box>
          <Box mt={4}>
              <Field name='url'
                     component={renderInput}
                     placeholder='URL'
                     disabled={true}
                     validate={[required]}/>
          </Box>
          <Box mt={4}>
            <Field name='text'
                   component={renderInput}
                   placeholder='Короткое описание'
                   validate={[required]}
                   multiline
                   rows="4"/>
          </Box>
          <Box mt={4}>
            <UploaderMedia img={img}/>
          </Box>
          <Box mt={4}>
            <Field name='textFull'
                   component={WYSIWYG}
                   placeholder='Полное описание'
                   validate={[required]}
                   multiline
                   rows="4"/>
          </Box>
          <Box mt={4}>
            <Button type="submit" variant="contained" color="primary" size="large">Обновить</Button>
          </Box>
        </Form>
	  </Box>
	</Box>
  )
};
export default ServicesSingle;