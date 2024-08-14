import { useState, useContext, ChangeEvent, FormEvent } from 'react';
import {
  TextInput,
  Textarea,
  Text,
  Checkbox,
  Button,
  Card,
  Group,
  Divider,
  Container,
} from '@mantine/core';
import { useCreateNews } from '@/hooks/useNews';
import { AuthContext } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const initialValues: CreateNewsFormValues = {
  title: '',
  imageUrl: '',
  text: '',
  highlighted: false,
  publishedOn: '',
  writtenBy: '',
};

export default function CreateNews() {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState<CreateNewsFormValues>(initialValues);
  const [errors, setErrors] = useState<CreateNewsFormErrors>({});
  const { firstName, lastName, username } = useContext(AuthContext);

  const createNews = useCreateNews();

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: checked }));
  };

  const validate = (): boolean => {
    const newErrors: CreateNewsFormErrors = {};
    if (!formValues.title) newErrors.title = 'Title is required';
    if (!formValues.imageUrl) newErrors.imageUrl = 'Image URL is required';
    if (!formValues.text) newErrors.text = 'Text is required';
    if (!username) newErrors.username = 'Username is required! Please log into your account.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const currentDate = new Date().toISOString();
    const authorName = `${firstName} ${lastName}`;

    if (!username) {
    }

    try {
      const { _id: newsId } = await createNews({
        title: formValues.title,
        imageUrl: formValues.imageUrl,
        text: formValues.text,
        highlighted: formValues.highlighted,
        publishedOn: currentDate,
        writtenBy: authorName,
        username: username ?? '',
        comments: [],
      });
      navigate(`/news/${newsId}/details`);
    } catch (err) {
      console.error('Failed to create news:', err);
    }
  };

  return (
    <Container size={600} my={40}>
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <form onSubmit={handleSubmit}>
          {errors.username && (
            <Text color="red" mb="md">
              {errors.username}
            </Text>
          )}

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
          <Checkbox
            mt="md"
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
