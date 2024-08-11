import { useState, ChangeEvent, FormEvent } from 'react';
import {
  TextInput,
  Textarea,
  Checkbox,
  Button,
  Card,
  Group,
  Divider,
  Container,
} from '@mantine/core';

interface FormValues {
  title: string;
  imageUrl: string;
  text: string;
  highlighted: boolean;
  publishedOn: string;
  writtenBy: string;
}

interface FormErrors {
  title?: string;
  imageUrl?: string;
  text?: string;
  publishedOn?: string;
  writtenBy?: string;
}

const initialValues: FormValues = {
  title: '',
  imageUrl: '',
  text: '',
  highlighted: false,
  publishedOn: '',
  writtenBy: '',
};

export default function CreateNews() {
  const [formValues, setFormValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const createNews = {};

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: checked }));
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formValues.title) newErrors.title = 'Title is required';
    if (!formValues.imageUrl) newErrors.imageUrl = 'Image URL is required';
    if (!formValues.text) newErrors.text = 'Text is required';
    if (!formValues.publishedOn) newErrors.publishedOn = 'Publish date is required';
    if (!formValues.writtenBy) newErrors.writtenBy = 'Author name is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      //await createNews(formValues);
      // Handle successful news creation, e.g., navigate to the list of news or clear the form
    } catch (err) {
      // Handle errors
      console.error(err);
    }
  };

  return (
    <Container size={600} my={40}>
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <form onSubmit={handleSubmit}>
          <TextInput
            label="Title"
            name="title"
            value={formValues.title}
            onChange={handleChange}
            placeholder="News title"
            required
            error={errors.title}
          />
          <TextInput
            label="Image URL"
            name="imageUrl"
            value={formValues.imageUrl}
            onChange={handleChange}
            placeholder="Image URL"
            required
            error={errors.imageUrl}
          />
          <Textarea
            label="Text"
            name="text"
            value={formValues.text}
            onChange={handleChange}
            placeholder="News content"
            required
            error={errors.text}
          />
          <TextInput
            label="Published On"
            name="publishedOn"
            value={formValues.publishedOn}
            onChange={handleChange}
            placeholder="Publish date"
            required
            error={errors.publishedOn}
          />
          <TextInput
            label="Written By"
            name="writtenBy"
            value={formValues.writtenBy}
            onChange={handleChange}
            placeholder="Author"
            required
            error={errors.writtenBy}
          />
          <Checkbox
            label="Highlighted"
            name="highlighted"
            checked={formValues.highlighted}
            onChange={handleCheckboxChange}
          />
          <Divider my="md" />
          <Group mt="md">
            <Button type="submit">Create News</Button>
          </Group>
        </form>
      </Card>
    </Container>
  );
}
