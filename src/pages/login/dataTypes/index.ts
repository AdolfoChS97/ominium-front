import {
    FormProps
} from 'antd/lib';

export type Field = {
    user_name: string;
    password: string;
    remember: boolean;
};

export type Props = {
    onFinish: (values: FormProps['onFinish']) => void;
    onFinishFailed: (errorInfo: any) => void | undefined;
}


export type LoginFormData = Field & {}