import React, { useState } from "react";
import {
	Form,
	Input,
	Button,
	DatePicker,
	Radio,
	Modal,
	Typography,
	message,
} from "antd";
import { Controller, useForm } from "react-hook-form";
import dayjs from "dayjs";
import { MaskedInput } from "antd-mask-input";

const { Text } = Typography;

const RegistrationForm = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [formData, setFormData] = useState(null);

	const {
		control,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm({
		defaultValues: {
			username: "",
			email: "",
			password: "",
			confirmPassword: "",
			gender: "",
			phone: "",
		},
		mode: "onBlur",
	});

	const passwordValue = watch("password");

	const onSubmit = (data) => {
		const formattedData = {
			...data,
			birthDate: data.birthDate?.format("YYYY-MM-DD"),
		};

		setFormData(formattedData);
		setIsModalOpen(true);

		message.success("Успешно зарегистрировано");
	};

	return (
		<>
			<Form
				layout="vertical"
				onFinish={handleSubmit(onSubmit)}
				style={{ maxWidth: 500, flex: 1, width: "100%" }}
			>
				<Form.Item label="Имя пользователя">
					<Controller
						name="username"
						control={control}
						rules={{
							required: "Имя пользователя обязательно",
						}}
						render={({ field }) => <Input {...field} />}
					/>
					{errors.username && (
						<Text type="danger">{errors.username.message}</Text>
					)}
				</Form.Item>

				<Form.Item label="Электронная почта">
					<Controller
						name="email"
						control={control}
						rules={{
							required: "Email обязателен",
							pattern: {
								value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
								message: "Некорректный email",
							},
						}}
						render={({ field }) => <Input {...field} />}
					/>
					{errors.email && <Text type="danger">{errors.email.message}</Text>}
				</Form.Item>

				<Form.Item label="Пароль">
					<Controller
						name="password"
						control={control}
						rules={{
							required: "Пароль обязателен",
							minLength: {
								value: 6,
								message: "Минимум 6 символов",
							},
							pattern: {
								value: /^(?=.*[A-Z]).+$/,
								message: "Должна быть хотя бы одна заглавная буква",
							},
						}}
						render={({ field }) => <Input.Password {...field} />}
					/>
					{errors.password && (
						<Text type="danger">{errors.password.message}</Text>
					)}
				</Form.Item>

				<Form.Item label="Подтверждение пароля">
					<Controller
						name="confirmPassword"
						control={control}
						rules={{
							required: "Подтверждение пароля обязательно",
							validate: (value) =>
								value === passwordValue || "Пароли не совпадают",
						}}
						render={({ field }) => <Input.Password {...field} />}
					/>
					{errors.confirmPassword && (
						<Text type="danger">{errors.confirmPassword.message}</Text>
					)}
				</Form.Item>

				<Form.Item label="Дата рождения">
					<Controller
						name="birthDate"
						control={control}
						rules={{
							required: "Дата рождения обязательна",
						}}
						render={({ field }) => (
							<DatePicker
								{...field}
								style={{ width: "100%" }}
								value={field.value ? dayjs(field.value) : null}
								onChange={field.onChange}
							/>
						)}
					/>
					{errors.birthDate && (
						<Text type="danger">{errors.birthDate.message}</Text>
					)}
				</Form.Item>

				<Form.Item label="Пол">
					<Controller
						name="gender"
						control={control}
						rules={{
							required: "Выберите пол",
						}}
						render={({ field }) => (
							<Radio.Group {...field}>
								<Radio value="male">Мужской</Radio>
								<Radio value="female">Женский</Radio>
							</Radio.Group>
						)}
					/>
					{errors.gender && <Text type="danger">{errors.gender.message}</Text>}
				</Form.Item>

				<Form.Item label="Номер телефона">
					<Controller
						name="phone"
						control={control}
						rules={{
							required: "Номер телефона обязателен",
							pattern: {
								value: /^\+375\s\((25|29|33|44)\)\s\d{3}-\d{2}-\d{2}$/,
								message: "Некорректный номер телефона",
							},
						}}
						render={({ field }) => (
							<MaskedInput
								mask="+375 (00) 000-00-00"
								placeholder="+375 (00) 000-00-00"
								onChange={field.onChange}
								maskOptions={{
									lazy: true,
									overwrite: false,
								}}
							/>
						)}
					/>
					{errors.phone && <Text type="danger">{errors.phone.message}</Text>}
				</Form.Item>

				<Button type="primary" htmlType="submit" block>
					Зарегистрироваться
				</Button>
			</Form>

			<Modal
				title="Данные регистрации"
				open={isModalOpen}
				onCancel={() => setIsModalOpen(false)}
				footer={null}
			>
				<pre>{JSON.stringify(formData, null, 2)}</pre>
			</Modal>
		</>
	);
};

export default RegistrationForm;
