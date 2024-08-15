import { useState, useEffect } from 'react';
import {
  TextInput,
  Textarea,
  Text,
  Button,
  Card,
  Group,
  Divider,
  Container,
  Title,
} from '@mantine/core';
import { useGetOneNews } from '@/hooks/useNews';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from '@/hooks/useForm';
import newsApi from '@/api/news-api';

export default function EditNews() {
  const navigate = useNavigate();
  const { newsId } = useParams();

  if (!newsId) {
    return;
  }

  interface UpdateNewsFormValues {
    _id: string;
    title: string;
    imageUrl: string;
    text: string;
    highlighted: boolean;
    publishedOn: string;
    writtenBy: string;
    _ownerId: string;
    comments: any[];
  }

  const [news, setNews] = useGetOneNews(newsId);

  const initialValues: UpdateNewsFormValues = {
    _id: news?._id || '',
    title: news?.title || '',
    imageUrl: news?.imageUrl || '',
    text: news?.text || '',
    highlighted: news?.highlighted || false,
    publishedOn: news?.publishedOn || '',
    writtenBy: news?.writtenBy || '',
    _ownerId: news?._ownerId || '',
    comments: news?.comments || [],
  };

  const { changeHandler, submitHandler, values, setValues } = useForm<UpdateNewsFormValues>({
    initialValues,
    submitCallback: async (values) => {
      await newsApi.update(newsId, values);

      navigate(`/news/${newsId}/details`);
    },
  });

  useEffect(() => {
    if (news) {
      setValues({
        _id: news._id,
        title: news.title,
        imageUrl: news.imageUrl,
        text: news.text,
        highlighted: news.highlighted,
        publishedOn: news.publishedOn,
        writtenBy: news.writtenBy,
        _ownerId: news._ownerId,
        comments: news.comments,
      });
    }
  }, [news, setValues]);

  return (
    <>
      <Title order={2} style={{ textAlign: 'center' }}>
        Edit New
      </Title>
      <Container size={600} my={40}>
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <form onSubmit={submitHandler}>
            <TextInput
              label="Title"
              name="title"
              value={values.title}
              onChange={changeHandler}
              placeholder="News title"
              required
            />
            <TextInput
              label="Image URL"
              name="imageUrl"
              value={values.imageUrl}
              onChange={changeHandler}
              placeholder="Image URL"
              required
            />
            <Textarea
              label="Text"
              name="text"
              value={values.text}
              onChange={changeHandler}
              placeholder="News content"
              required
            />

            <Divider my="md" />
            <Group mt="md">
              <Button type="submit">Edit News</Button>
            </Group>
          </form>
        </Card>
      </Container>
    </>
  );
}
