import { Modal, Form, Input} from "antd"
import React, { useState, useEffect } from "react"
import { createVideoAsync } from "../reducer/videosReducer"
import { useAppDispatch } from '../hooks';

export type CreateVideoModalProps = {
    isOpen: boolean
    dismissModal: () => void
}

type FieldTypes = {
    name: string
    url: string
}

function CreateVideoModal (props: CreateVideoModalProps) {
    const dispatch = useAppDispatch()
    const [submittable, setSubmittable] = useState<boolean>(false);
    const [form] = Form.useForm();
    const formValues = Form.useWatch([], form)
    useEffect(() => {
        form
          .validateFields({ validateOnly: true })
          .then(() => setSubmittable(true))
          .catch(() => setSubmittable(false));
      }, [form, formValues]);
    
    const submitForm = async () => {
        dispatch(createVideoAsync(formValues))
        await props.dismissModal()
    }

    return (
        <Modal title="Create Video" 
        open={props.isOpen} 
        onCancel={props.dismissModal} 
        onClose={props.dismissModal} 
        onOk={submitForm}
        okText={"Submit"} 
        okButtonProps={{disabled: !submittable}}>
            <Form form={form}>
                <Form.Item<FieldTypes>
                label="Name"
                name="name"
                rules={[{ required: true, message: 'Give the video a name!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item<FieldTypes>
                label="Url"
                name="url"
                rules={[{ required: true, message: 'You need a link!' }]}
                >
                    <Input />
                </Form.Item>
            </Form>
        </Modal>
    )
}

export default CreateVideoModal